package semiconductor.model;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties;
import semiconductor.model.dto.Process1DTO;
import semiconductor.model.util.DBUtil;
public class Process1DAO {
	static Properties sql = DBUtil.getSql();
	//기부자 등록(insert)
	public static boolean addProcess1(Process1DTO process1) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		try{
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement(sql.getProperty("pro1.insert"));
			pstmt.setInt(1, process1.getWaferId());
			int result = pstmt.executeUpdate();

			if(result == 1){
				return true;
			}
		}finally{
			DBUtil.close(con, pstmt);
		}
		return false;
	}
	//수정
	//기부자 id로 주요 기부 내용 수정하기
	public static boolean updateClean1(int waferId, int minute) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		try{
			con = DBUtil.getConnection();

			pstmt = con.prepareStatement(sql.getProperty("pro1.updateClean1"));
			pstmt.setInt(1, minute);
			pstmt.setInt(2, waferId);

			int result = pstmt.executeUpdate();
			if(result == 1){
				return true;
			}
		}finally{
			DBUtil.close(con, pstmt);
		}
		return false;
	}

	public static boolean updateClean2(int waferId, int minute) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		try{
			con = DBUtil.getConnection();

			pstmt = con.prepareStatement(sql.getProperty("pro1.updateClean2"));
			pstmt.setInt(1, minute);
			pstmt.setInt(2, waferId);

			int result = pstmt.executeUpdate();
			if(result == 1){
				return true;
			}
		}finally{
			DBUtil.close(con, pstmt);
		}
		return false;
	}

	public static boolean updateRinse1(int waferId, int minute) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		try{
			con = DBUtil.getConnection();

			pstmt = con.prepareStatement(sql.getProperty("pro1.updateRinse1"));
			pstmt.setInt(1, minute);
			pstmt.setInt(2, waferId);

			int result = pstmt.executeUpdate();
			if(result == 1){
				return true;
			}
		}finally{
			DBUtil.close(con, pstmt);
		}
		return false;
	}
	//??? 삭제
	//sql - delete from activist where activist_id=?
	public static boolean deleteProcess1(int waferId) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		try{
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement(sql.getProperty("pro1.delete"));
			pstmt.setInt(1, waferId);
			int result = pstmt.executeUpdate();
			if(result == 1){
				return true;
			}
		}catch(SQLException s){
			s.printStackTrace();
			throw s;
		}finally{
			DBUtil.close(con, pstmt);
		}
		return false;
	}
	//id로 해당 기부자의 모든 정보 반환
	public static Process1DTO getProcess1(int waferId) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		Process1DTO process1 = null;

		try{
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement(sql.getProperty("pro1.getProcess1"));
			pstmt.setInt(1, waferId);
			rset = pstmt.executeQuery();
			if(rset.next()){
				process1 = new Process1DTO(rset.getInt(1), rset.getInt(2), rset.getInt(3), rset.getInt(4));
			}
		}finally{
			DBUtil.close(con, pstmt, rset);
		}
		return process1;
	}

	//sql - select * from activist
	public static ArrayList<Process1DTO> getAllProcess1() throws SQLException{
		Connection con = null;
		Statement stmt = null;
		ResultSet rset = null;

		ArrayList<Process1DTO> datas = null;

		try {
			con = DBUtil.getConnection();
			stmt = con.createStatement();

//			rset = stmt.executeQuery("select * from dept");
			rset = stmt.executeQuery(sql.getProperty("pro1All"));//멤버 변수로 선언 후 멤버 변수 활용


			//정상으로 select문 실행이 완료된 직후에 ArrayList 생성
			//완료되기도 전에 객체 생성과의 차이점 : 비정상 문제 발생 시 ArrayList객체는 어차피 쓰레기 객체
			datas = new ArrayList<>();
			while(rset.next()) {
				datas.add(new Process1DTO(rset.getInt(1), rset.getInt(2), rset.getInt(3), rset.getInt(4)));
			}
		}  finally {
			DBUtil.close(con, stmt, rset);
		}
		return datas;
	}
}
