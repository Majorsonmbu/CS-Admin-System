from tabnanny import verbose
from django.db import models
from django.core.files.storage import FileSystemStorage

fs = FileSystemStorage(location='/home/loanlaptop/Documents/admin_files')

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_surname = models.CharField(max_length=100)
    student_number = models.CharField(max_length=9)
    password = models.CharField(max_length=20)
    email = models.EmailField(max_length=21)

    class Meta:
        verbose_name_plural = " Students"

class CourseConvener(models.Model):
    first_name = models.CharField(max_length=100)
    last_surname = models.CharField(max_length=100)
    staff_number = models.CharField(max_length=10)
    password = models.CharField(max_length=20)
    email = models.EmailField(max_length=21)

    class Meta:
        verbose_name_plural = " Course Convener"

class TestConcession(models.Model):
    TestNumber = models.IntegerField(max_length = 3)
    support_doc = models.FileField(upload_to="loanlaptop/Documents/admin_files")
    student_number = models.CharField(max_length=9)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "4. Test Concession Queries"

class JoinVulaCourse(models.Model):
    support_doc = models.FileField(upload_to="loanlaptop/Documents/admin_files")
    student_number = models.CharField(max_length=9)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "1. Join Vula Course Queries"

class AssignmentExtention(models.Model):
    support_doc = models.FileField(upload_to="loanlaptop/Documents/admin_files")
    student_number = models.CharField(max_length=9)
    assignmentNumber = models.IntegerField( max_length = 12)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "2. Assignment Extention Queries"

class AssignmentWaiver(models.Model):
    support_doc = models.FileField(upload_to="loanlaptop/Documents/admin_files")
    student_number = models.CharField(max_length=9)
    waiveredAssignmentNumber = models.IntegerField(max_length = 12)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "3. Assignment Extention Queries"

class MissingMark(models.Model):
    student_number = models.CharField(max_length=9)
    missingAssessmentNumber = models.CharField(max_length = 20)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "6. Missing Mark Queries"

class MarkDispute(models.Model):
    student_number = models.CharField(max_length=9)
    assessment_number = models.CharField(max_length=20)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "5. Mark Dispute Queries"

class Assignments(models.Model):
    student_number = models.CharField(max_length=9)
    assignment_one = models.IntegerField(max_length = 100)
    assignment_two = models.IntegerField(max_length = 100)
    assignment_three = models.IntegerField(max_length = 100)
    assignment_four = models.IntegerField(max_length = 100)
    assignment_five = models.IntegerField(max_length = 100)
    assignment_six = models.IntegerField(max_length = 100)

    class Meta:
        verbose_name_plural = "6. Assignments"


class   ConvenerFeedback(models.Model):
    Outcome_options = [
        ('APPROVED', 'Approved'),
        ('DECLINED', 'Declined'),
    ]
    student_number = models.CharField(max_length=9)
    feedback_additional_info = models.TextField(max_length=200)
    outcome = models.CharField(
        max_length=9,
        choices=Outcome_options,
        default='APPROVED',
    )
    categoryType = models.CharField(max_length=50)
    class Meta:
        verbose_name_plural = "6. Course Convener Feedback"


class   TeachingAssistantFeedback(models.Model):
    student_number = models.CharField(max_length=9)
    teaching_assistant_feedback = models.TextField(max_length=200)
    categoryType = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "6. Teaching Assistant Feedback"


class TeachingAssistant(models.Model):
    first_name = models.CharField(max_length=100)
    last_surname = models.CharField(max_length=100)
    staff_number = models.CharField(max_length=10)
    password = models.CharField(max_length=20)
    email = models.EmailField(max_length=21)