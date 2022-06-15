from django.urls import path
from .views import SlideListAPIView
urlpatterns = [
    path('slides/',SlideListAPIView.as_view())
]