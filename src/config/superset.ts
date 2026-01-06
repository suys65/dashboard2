// Superset 설정 파일
// 베이스 URL이 변경되면 여기서 한 번만 수정하세요

// 환경 변수가 있으면 사용하고, 없으면 기본값 사용
export const SUPERSET_BASE_URL = 
  import.meta.env.VITE_SUPERSET_BASE_URL || 
  'https://superset.squidjiny.com';

// 대시보드 경로 상수
export const DASHBOARD_PATHS = {
  // 메인 화면
  MAIN: '/superset/dashboard/12/?standalone=true&hide_title=1',
  
  // 입학 > 신입생 충원
  ADMISSION_RECRUIT_MAJOR: '/superset/dashboard/16/?native_filters_key=uwah6xYekg4&standalone=true&hide_title=1', // 학과별 신입생 수
  ADMISSION_RECRUIT_EXAM: '/superset/dashboard/9/?native_filters_key=x9ML0NYzibc&standalone=true&hide_title=1', // 전형별 신입생 수
  
  // 입학 > 신입생 성적
  ADMISSION_GRADE_MAJOR: '/superset/dashboard/17/?native_filters_key=9MqGGYxyfUU&standalone=true&hide_title=1', // 학과별 신입생 성적
  ADMISSION_GRADE_EXAM: '', // 전형별 신입생 성적
  
  // 학적 > 휴복학
  ACADEMIC_LEAVE_MAJOR: '/superset/dashboard/5/?native_filters_key=1f3xgiYEo50&standalone=true&hide_title=1', // 학과별 휴복학생 수
  ACADEMIC_LEAVE_GRADE: '/superset/dashboard/15/?standalone=true&hide_title=1', // 학년별 휴복학생 수
  
  // 학적 > 자퇴
  ACADEMIC_DROPOUT_MAJOR: '/superset/dashboard/14/?standalone=true&hide_title=1', // 학과별 자퇴생 수
  ACADEMIC_DROPOUT_GRADE: '/superset/dashboard/13/?native_filters_key=uxu0q0RdHlQ&standalone=true&hide_title=1', // 학년별 자퇴생 수
  
  // 학적 > 전과
  ACADEMIC_TRANSFER_IN_MAJOR: '', // 학과별 전입 학생 수
  ACADEMIC_TRANSFER_OUT_MAJOR: '/superset/dashboard/2/?native_filters_key=-YnJ4-MOMts&standalone=true&hide_title=1', // 학과별 전출 학생 수
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
  GRADE_TOTAL_MAJOR: '/superset/dashboard/8/?native_filters_key=37adA_q5qyo&standalone=true&hide_title=1', // 학과별 평균 전체학점
  GRADE_TOTAL_YEAR: '', // 학년별 평균 전체학점
  
  // 성적 > 전공학점
  GRADE_MAJOR_MAJOR: '/superset/dashboard/10/?native_filters_key=b4mK3y4Ubrw&standalone=true&hide_title=1', // 학과별 평균 전공학점
  GRADE_MAJOR_YEAR: '/superset/dashboard/11/?standalone=true&hide_title=1', // 학년별 평균 전공학점
  
  // 성적 > 교양학점
  GRADE_GENERAL_MAJOR: '', // 학과별 평균 교양학점
  GRADE_GENERAL_YEAR: '', // 학년별 평균 교양학점
  
  // 졸업 > 졸업생
  GRADUATE_UNDERGRAD_MAJOR: '/superset/dashboard/19/?native_filters_key=LRD-VNeU6uI&standalone=true&hide_title=1', // 학과별 졸업자 수
  
  // 졸업 > 대학원
  GRADUATE_SCHOOL_MAJOR: '/superset/dashboard/18/?native_filters_key=fTd8cotDBns&standalone=true&hide_title=1', // 학과별 대학원 진학 학생 추이
  
  // 기타 > 교육만족도
  ETC_SATISFACTION_MAJOR: '', // 학과별 평균 교육 만족도
  
  // 기타 > 교직원 현황
  ETC_STAFF_PROFESSOR: '/superset/dashboard/p/7Va03RXK5W4/?standalone=true&hide_title=1', // 학과별 교수 수
  ETC_STAFF_ASSISTANT: '/superset/dashboard/p/q3aevw2KXdJ/?standalone=true&hide_title=1', // 학과별 조교 수
};

// 전체 URL 생성 헬퍼 함수
export const getDashboardUrl = (path: string): string => {
  if (!path) return '';
  return `${SUPERSET_BASE_URL}${path}`;
};
