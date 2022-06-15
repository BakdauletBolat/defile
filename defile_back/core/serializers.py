from rest_framework.serializers import ModelSerializer
from core.models import Slide

class SlideSerializer(ModelSerializer):

    class Meta:
        model = Slide
        fields = ('__all__')