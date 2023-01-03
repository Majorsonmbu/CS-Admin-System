from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.StudentList.as_view()),
    path('students/<int:pk>/', views.StudentDetail.as_view()), #/?student_number=
    path('courseconveners/', views.CourseConvenerList.as_view()),
    path('courseconveners/<int:pk>/', views.CourseConvenerDetail.as_view()),
    path('testconcessions/', views.TestConcessionList.as_view()),
    path('testconcessions/<int:pk>/', views.TestConcessionDetail.as_view()), #/?TestNumber=,student_number=
    path('joinvulacourses/', views.JoinVulaCourseList.as_view()),
    path('joinvulacourses/<int:pk>/', views.JoinVulaCourseDetail.as_view()), #/? student_number=
    path('assignmentextentions/', views.AssignmentExtentionList.as_view()),
    path('assignmentextentions/<int:pk>/', views.AssignmentExtentionDetail.as_view()), #/?assignmentNumber=, student_number=
    path('assignmentwaivers/', views.AssignmentWaiverList.as_view()),
    path('assignmentwaivers/<int:pk>/', views.AssignmentWaiverDetail.as_view()), #/?waiveredAssignmentNumber=, student_number=
    path('missingmarks/', views.MissingMarksList.as_view()),
    path('missingmarks/<int:pk>/', views.MissingMarksDetail.as_view()), #/?missingAssessmentNumber=, student_number=
    path('markdisputes/', views.MarkDisputeList.as_view()),
    path('markdisputes/<int:pk>/', views.MarkDisputeDetail.as_view()), #/?assessment_number=, student_number=
    path('assignments/', views.AssignmentsList.as_view()),
    path('assignments/<int:pk>/', views.AssignmentsDetail.as_view()), #/?assessment_number=, student_number=
    path('convenerfeedback/', views.ConvenerFeedbackList.as_view()),
    path('convenerfeedback/<int:pk>/', views.ConvenerFeedbackDetail.as_view()), #/?student_number=
    path('teachingassistantfeedback/', views.TeachingAssistantFeedbackList.as_view()),
    path('teachingassistantfeedback/<int:pk>/', views.TeachingAssistantFeedbackDetail.as_view()), #/?student_number=
    path('teachingassistants/', views.TeachingAssistantList.as_view()),
    path('teachingassistants/<int:pk>/', views.TeachingAssistantDetail.as_view()), #/?staff_number=
]
