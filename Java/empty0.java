package run.test;

import java.util.Collections;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import org.junit.jupiter.api.Test;

import lombok.extern.slf4j.Slf4j;
import model.domain.Dept;
import model.domain.Employee;
import util.PublicCommon;
@Slf4j
public class RunEmployeeCRUD {
	//create new dept
	public static void createDept(EntityManager em, int deptno, String dname, String loc) {
		Dept newDept = Dept.builder().deptno(deptno).dname(dname).loc(loc).build();
		em.persist(newDept);
		log.info("new Dept Created");
	}

	//delete dept
	public static void deleteDept(EntityManager em, int deptno) {
		int result = em.createNativeQuery("delete Dept where deptno=?").setParameter(1, deptno).executeUpdate();
		if(result != 0) {
			log.info("dept deleted");
		} else {
			log.info("dept already not exist");
		}
	}

	//update deptno, sal
	public static void updateDeptnoSal(EntityManager em, int empno, int newDept, int newSal) {
		int result = em.createNativeQuery("update Employee set deptno=?, sal=sal+? where empno=?")
				.setParameter(1, newDept).setParameter(2, newSal).setParameter(3, empno).executeUpdate();
		if(result != 0) {
			log.info("employee updated");
		} else {
			log.info("employee not exist");
		}
	}

	//get random Employee
	public Employee Random(EntityManager em, int deptno){
		List<Employee> empList = em.find(Dept.class, deptno).getEmployees();
		int result = (int) (Math.random()*empList.size());
		return empList.get(result);
	}

	//shuffle Employees
	public List<Employee> shuffle(EntityManager em, int deptno) {
		List<Employee> empList = em.find(Dept.class, deptno).getEmployees();
		Collections.shuffle(empList);
		return empList;
	}

	//select all
	public static void findAllElement(EntityManager em) {
		List<Employee> empList = em.createNamedQuery("Employee.findAll").getResultList();
		empList.forEach(v->System.out.println(v));
	}
	@Test
	public void Test() {
		EntityManager em = PublicCommon.getEntityManager();
		EntityTransaction tx = em.getTransaction();
	    tx.begin();
	    try {
	    	//New Department
			createDept(em, 50, "IT", "SEOUL");
	    	updateDeptnoSal(em, Random(em, 10).getEid(), 50, 1000);
	    	updateDeptnoSal(em, Random(em, 20).getEid(), 50, 1000);
	    	updateDeptnoSal(em, Random(em, 30).getEid(), 50, 1000);
	    	em.flush();
	    	em.clear();
	    	findAllElement(em);
	    	System.out.println("----------------------------");
	    	//Department broke
	    	List<Employee> newList = shuffle(em, 50);
			updateDeptnoSal(em, newList.get(0).getEid(), 10, -1000);
			updateDeptnoSal(em, newList.get(1).getEid(), 20, -1000);
			updateDeptnoSal(em, newList.get(2).getEid(), 30, -1000);
	    	em.flush();
	    	em.clear();
	    	findAllElement(em);
	    	deleteDept(em, 50);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			em.close();
		}
	}
}
