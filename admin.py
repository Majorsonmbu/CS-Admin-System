from django.contrib import admin
from . import models

admin.site.register(models.AssignmentExtention)
admin.site.register(models.AssignmentWaiver)
admin.site.register(models.CourseConvener)
admin.site.register(models.JoinVulaCourse)
admin.site.register(models.MarkDispute)
admin.site.register(models.MissingMark)
admin.site.register(models.Student)
admin.site.register(models.TestConcession)
admin.site.register(models.Assignments)
admin.site.register(models.ConvenerFeedback)
admin.site.register(models.TeachingAssistantFeedback)
admin.site.register(models.TeachingAssistant)

#superuser credentials: username: admin, password: 12345

