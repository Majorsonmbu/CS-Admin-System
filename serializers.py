from rest_framework import serializers
from . import models

#transforms data to json
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['first_name','last_surname','student_number','password','email']

class CourseConvenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseConvener
        fields = ['first_name','last_surname','staff_number','password','email']

class TestConcessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TestConcession
        fields = ['TestNumber','support_doc','student_number', 'categoryType']

class JoinVulaCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.JoinVulaCourse
        fields = ['support_doc','student_number','categoryType']

class AssignmentExtentionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AssignmentExtention
        fields = ['support_doc','student_number','assignmentNumber','categoryType']

class AssignmentWaiverSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AssignmentWaiver
        fields = ['support_doc','student_number','waiveredAssignmentNumber','categoryType']

class MissingMarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MissingMark
        fields = ['student_number','missingAssessmentNumber', 'categoryType']

class MarkDisputeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MarkDispute
        fields = ['student_number','assessment_number','categoryType']

class AssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Assignments
        fields = ['student_number','assignment_one', 'assignment_two', 'assignment_three', 'assignment_four', 'assignment_five', 'assignment_six']


class ConvenerFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ConvenerFeedback
        fields = ['student_number','feedback_additional_info','outcome','categoryType']

class TeachingAssistantFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TeachingAssistantFeedback
        fields = ['student_number','teaching_assistant_feedback','categoryType']

class TeachingAssistantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TeachingAssistant
        fields = ['first_name','last_surname','staff_number','password','email']