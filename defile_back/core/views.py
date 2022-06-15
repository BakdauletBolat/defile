from rest_framework.generics import ListAPIView

from core.models import Slide
from .serializers import SlideSerializer

class SlideListAPIView(ListAPIView):

    serializer_class = SlideSerializer
    queryset = Slide.objects.all()

    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)
