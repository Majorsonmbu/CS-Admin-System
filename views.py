from posixpath import join
from django.http import response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions
from .serializers import StudentSerializer, TeachingAssistantFeedbackSerializer, TeachingAssistantSerializer
from .serializers import CourseConvenerSerializer
from .serializers import TestConcessionSerializer
from .serializers import JoinVulaCourseSerializer
from .serializers import AssignmentExtentionSerializer
from .serializers import AssignmentWaiverSerializer
from .serializers import MissingMarkSerializer
from .serializers import MarkDisputeSerializer
from .serializers import AssignmentsSerializer
from .serializers import ConvenerFeedbackSerializer
from . import models

#return list of students
class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['student_number']
   # permission_classes = [permissions.IsAuthenticated]

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
   # permission_classes = [permissions.IsAuthenticated]

#Course convener generic views
class CourseConvenerList(generics.ListCreateAPIView):
    queryset = models.CourseConvener.objects.all()
    serializer_class = CourseConvenerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['staff_number']
    #permission_classes = [permissions.IsAuthenticated]

class CourseConvenerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CourseConvener.objects.all()
    serializer_class = CourseConvenerSerializer
    #permission_classes = [permissions.IsAuthenticated]   

#test concession generic views
class TestConcessionList(generics.ListCreateAPIView):
    queryset = models.TestConcession.objects.all()
    serializer_class = TestConcessionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['TestNumber', 'student_number']
    #permission_classes = [permissions.IsAuthenticated]

class TestConcessionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TestConcession.objects.all()
    serializer_class = TestConcessionSerializer
    #permission_classes = [permissions.IsAuthenticated]

#join vula course generic views
class JoinVulaCourseList(generics.ListCreateAPIView):
    queryset = models.JoinVulaCourse.objects.all()
    serializer_class = JoinVulaCourseSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['student_number']
    #permission_classes = [permissions.IsAuthenticated]

class JoinVulaCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.JoinVulaCourse.objects.all()
    serializer_class = JoinVulaCourseSerializer
    #permission_classes = [permissions.IsAuthenticated]

#assignment extention generic views
class AssignmentExtentionList(generics.ListCreateAPIView):
    queryset = models.AssignmentExtention.objects.all()
    serializer_class = AssignmentExtentionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['assignmentNumber', 'student_number']
    #permission_classes = [permissions.IsAuthenticated]

class AssignmentExtentionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.AssignmentExtention.objects.all()
    serializer_class = AssignmentExtentionSerializer
   # permission_classes = [permissions.IsAuthenticated]

#assignment waiver generic views
class AssignmentWaiverList(generics.ListCreateAPIView):
    queryset = models.AssignmentWaiver.objects.all()
    serializer_class = AssignmentWaiverSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['waiveredAssignmentNumber', 'student_number']
    #permission_classes = [permissions.IsAuthenticated]

class AssignmentWaiverDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.AssignmentWaiver.objects.all()
    serializer_class = AssignmentWaiverSerializer
    #permission_classes = [permissions.IsAuthenticated]  

#Missing marks generic views
class MissingMarksList(generics.ListCreateAPIView):
    queryset = models.MissingMark.objects.all()
    serializer_class = MissingMarkSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['missingAssessmentNumber', 'student_number']
    #permission_classes = [permissions.IsAuthenticated]

class MissingMarksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.MissingMark.objects.all()
    serializer_class = MissingMarkSerializer
    #permission_classes = [permissions.IsAuthenticated]


#Mark dispute generic views
class MarkDisputeList(generics.ListCreateAPIView):
    queryset = models.MarkDispute.objects.all()
    serializer_class = MarkDisputeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['assessment_number', 'student_number']
    #permission_classes = [permissions.IsAuthenticated]

class MarkDisputeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.MarkDispute.objects.all()
    serializer_class = MarkDisputeSerializer
    #permission_classes = [permissions.IsAuthenticated]

#Assignments Serializer
class AssignmentsList(generics.ListCreateAPIView):
    queryset = models.Assignments.objects.all()
    serializer_class = AssignmentsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['student_number']
   # permission_classes = [permissions.IsAuthenticated]

class AssignmentsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Assignments.objects.all()
    serializer_class = AssignmentsSerializer
   # permission_classes = [permissions.IsAuthenticated]

#Serializer Class for Course Convener Feedback
class ConvenerFeedbackList(generics.ListCreateAPIView):
    queryset = models.ConvenerFeedback.objects.all()
    serializer_class = ConvenerFeedbackSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['student_number']
   # permission_classes = [permissions.IsAuthenticated]

class ConvenerFeedbackDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ConvenerFeedback.objects.all()
    serializer_class = ConvenerFeedbackSerializer
   # permission_classes = [permissions.IsAuthenticated]

#Serializer Class for Teaching Assistant Feedback
class TeachingAssistantFeedbackList(generics.ListCreateAPIView):
    queryset = models.TeachingAssistantFeedback.objects.all()
    serializer_class = TeachingAssistantFeedbackSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['student_number']
   # permission_classes = [permissions.IsAuthenticated]

class TeachingAssistantFeedbackDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TeachingAssistantFeedback.objects.all()
    serializer_class = TeachingAssistantFeedbackSerializer
   # permission_classes = [permissions.IsAuthenticated]


#Teaching Assistant Generic Views
class TeachingAssistantList(generics.ListCreateAPIView):
    queryset = models.TeachingAssistant.objects.all()
    serializer_class = TeachingAssistantSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['staff_number']
   # permission_classes = [permissions.IsAuthenticated]

class TeachingAssistantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TeachingAssistant.objects.all()
    serializer_class = TeachingAssistantSerializer
   # permission_classes = [permissions.IsAuthenticated]