package semiconductor.controller;

import java.sql.SQLException;
import java.util.ArrayList;

import semiconductor.exception.NotExistException;
import semiconductor.model.dto.Process1DTO;
import semiconductor.service.ProcessService;
import semiconductor.view.RunningEndView;

public class ProcessController {
	private static ProcessController instance = new ProcessController();
	private static ProcessService service = ProcessService.getInstance();
	private ProcessController() {}
	public static ProcessController getInstance() {
		service.instance;
	}

	//Process1
	//모든 process1 정보 반환
	public static void getAllProcess1(){
		try {
			RunningEndView.projectListView(service.getAllProcess1());
		} catch (SQLException e) {
			e.printStackTrace();
			RunningEndView.showError("모든 process1 검색 실패");
		}
	}

	//waferId로 검색
	public static void getProcess1(int waferId) {
		try {
			RunningEndView.process1View(service.getProcess1(waferId));
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("process1 검색 실패");
		}
	}

	//process1 저장
	public static void addProcess1(Process1DTO process1) {
		try {
			service.addProcess1(process1);
			RunningEndView.allView("저장 성공");
		} catch (SQLException e) {
			e.printStackTrace();
			RunningEndView.showError("저장 실패");
		}
	}

	//process1 삭제
	public static void deleteProcess1(int waferId){
	    try {
			service.deleteProcess1(waferId);
			RunningEndView.allView("삭제 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("삭제 실패");
		}
	}

	//process1의 clean1 수정
	public static void updateClean1(int waferId, int minute) {
		try {
			service.updateClean1(waferId, minute);
			RunningEndView.allView("수정 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("수정 실패");
		}
	}

	//process1의 clean2 수정
	public static void updateClean2(int waferId, int minute) {
		try {
			service.updateClean2(waferId, minute);
			RunningEndView.allView("수정 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("수정 실패");
		}
	}

	//process1의 rinse1 수정
	public static void updateRinse1(int waferId, int minute) {
		try {
			service.updateRinse1(waferId, minute);
			RunningEndView.allView("수정 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("수정 실패");
		}
	}

  //Process2
	//모든 Process2 정보 반환
	public static void getAllProcess2(){
		try {
			RunningEndView.projectListView(service.getAllProcess2());
		} catch (SQLException e) {
			e.printStackTrace();
			RunningEndView.showError("모든 Process2 검색 실패");
		}
	}

	//waferId로 검색
	public static void getProcess2(int waferId) {
		try {
			RunningEndView.Process2View(service.getProcess2(waferId));
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("Process2 검색 실패");
		}
	}

	//Process2 저장
	public static void addProcess2(Process2DTO Process2) {
		try {
			service.addProcess2(Process2);
			RunningEndView.allView("저장 성공");
		} catch (SQLException e) {
			e.printStackTrace();
			RunningEndView.showError("저장 실패");
		}
	}

	//Process2 삭제
	public static void deleteProcess2(int waferId){
	    try {
			service.deleteProcess2(waferId);
			RunningEndView.allView("삭제 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("삭제 실패");
		}
	}

	//Process2의 clean3 수정
	public static void updateClean3(int waferId, int minute) {
		try {
			service.updateClean3(waferId, minute);
			RunningEndView.allView("수정 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("수정 실패");
		}
	}

	//Process2의 rinse2 수정
	public static void updateRinse2(int waferId, int minute) {
		try {
			service.updateRinse2(waferId, minute);
			RunningEndView.allView("수정 성공");
		} catch (Exception e) {
			e.printStackTrace();
			RunningEndView.showError("수정 실패");
		}
	}

	//Ui
	//Ui 저장
	public static void addui(int waferId){
		service.UiDAO.addui(waferId);
	}

	//ui 수정
	public static void updateUi(int waferId){
		service.UiDAO.updateUi(waferId);
	}

	//Totalprocess
	//totalprocess 저장
	public static void addTotalprocess(int waferId){
		service.TotalprocessDAO.addTotalprocess(waferId);
	}
}
