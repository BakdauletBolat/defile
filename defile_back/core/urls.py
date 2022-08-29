from django.urls import path
from product.views import PageRetrieveAPIView

from .views import SlideListAPIView
urlpatterns = [
    path('page/<str:slug>/',PageRetrieveAPIView.as_view()),
    path('slides/',SlideListAPIView.as_view())
]