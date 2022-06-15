from django.db import models

# Create your models here.

class Slide(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.ImageField('slide-images/')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return  f" {self.id}: {self.title}"

    