// Superset 설정 파일
// 베이스 URL이 변경되면 여기서 한 번만 수정하세요

// 환경 변수가 있으면 사용하고, 없으면 기본값 사용
export const SUPERSET_BASE_URL = 
  import.meta.env.VITE_SUPERSET_BASE_URL || 
  'https://configure-nebraska-handed-rent.trycloudflare.com';

// 대시보드 경로 상수
export const DASHBOARD_PATHS = {
  // 메인 화면
  MAIN: '/superset/dashboard/p/dbDZ2Qe29yQ/?standalone=true&hide_title=1',
  
  // 입학 > 신입생 충원
  ADMISSION_RECRUIT_MAJOR: '/superset/dashboard/p/MQq06KP21Or/?standalone=2&hide_title=1', // 학과별 신입생 수
  ADMISSION_RECRUIT_EXAM: '/superset/dashboard/p/Qq06KXP21Or/?standalone=true&hide_title=1', // 전형별 신입생 수
  
  // 입학 > 신입생 성적
  ADMISSION_GRADE_MAJOR: '', // 학과별 신입생 성적
  ADMISSION_GRADE_EXAM: '', // 전형별 신입생 성적
  
  // 학적 > 휴복학
  ACADEMIC_LEAVE_MAJOR: '', // 학과별 휴복학생 수
  ACADEMIC_LEAVE_GRADE: '', // 학년별 휴복학생 수
  
  // 학적 > 자퇴
  ACADEMIC_DROPOUT_MAJOR: '', // 학과별 자퇴생 수
  ACADEMIC_DROPOUT_GRADE: '', // 학년별 자퇴생 수
  
  // 학적 > 전과
  ACADEMIC_TRANSFER_IN_MAJOR: '', // 학과별 전입 학생 수
  ACADEMIC_TRANSFER_OUT_MAJOR: '', // 학과별 전출 학생 수
  ACADEMIC_TRANSFER_IN_GRADE: '', // 학년별 전입 학생 수
  ACADEMIC_TRANSFER_OUT_GRADE: '', // 학년별 전출 학생 수
  
  // 학적 > 부복수전공
  ACADEMIC_DOUBLE_APPLY_MAJOR: '', // 신청학과별 학생 수
  ACADEMIC_DOUBLE_BELONG_MAJOR: '', // 소속학과별 학생 수
  ACADEMIC_DOUBLE_APPLY_GRADE: '', // 신청학과-학년별 학생 수
  ACADEMIC_DOUBLE_BELONG_GRADE: '', // 소속학과-학년별 학생 수
  
  // 학적 > 연계융합전공
  ACADEMIC_INTER_MAJOR: '', // 연계/융합전공별 학생 수
  ACADEMIC_INTER_BELONG_MAJOR: '', // 소속전공별 학생 수
  ACADEMIC_INTER_MAJOR_GRADE: '', // 연계/융합전공-학년별 학생 수
  ACADEMIC_INTER_BELONG_GRADE: '', // 소속학과-학년별 학생 수
  
  // 성적 > 전체학점
  GRADE_TOTAL_MAJOR: '', // 학과별 평균 전체학점
  GRADE_TOTAL_YEAR: '', // 학년별 평균 전체학점
  
  // 성적 > 전공학점
  GRADE_MAJOR_MAJOR: '', // 학과별 평균 전공학점
  GRADE_MAJOR_YEAR: '', // 학년별 평균 전공학점
  
  // 성적 > 교양학점
  GRADE_GENERAL_MAJOR: '', // 학과별 평균 교양학점
  GRADE_GENERAL_YEAR: '', // 학년별 평균 교양학점
  
  // 졸업 > 졸업생
  GRADUATE_UNDERGRAD_MAJOR: '', // 학과별 졸업자 수
  
  // 졸업 > 대학원
  GRADUATE_SCHOOL_MAJOR: '/superset/dashboard/p/D0q6vnR6ERV/?standalone=2&hide_title=1', // 학과별 지대 대학원 진학 학생 수
  
  // 기타 > 교육만족도
  ETC_SATISFACTION_MAJOR: '', // 학과별 평균 교육 만족도
  
  // 기타 > 교수현황
  ETC_STAFF_MAJOR: '', // 학과별 교수 수
};

// 전체 URL 생성 헬퍼 함수
export const getDashboardUrl = (path: string): string => {
  if (!path) return '';
  return `${SUPERSET_BASE_URL}${path}`;
};

