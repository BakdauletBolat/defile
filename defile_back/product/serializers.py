from unicodedata import category
from .models import Page, PagePhoto, Product,Brand,Category, ProductFavorites, ProductImage, Size, SubCategory,Type
from rest_framework import serializers



class SubCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = SubCategory
        fields = ('__all__')






class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = ('__all__')

class SizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Size
        fields = ('__all__')


class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = ('__all__')


class ProductFavoritesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductFavorites
        fields = ('__all__')



class CategoryProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('__all__')

class ProductSerializer(serializers.ModelSerializer):

    images = ProductImageSerializer(many=True,read_only=True)
    category = CategoryProductSerializer(read_only=True)
    subcategory = SubCategorySerializer(read_only=True)
    sizes = SizeSerializer(many=True,read_only=True)
    brand = BrandSerializer(read_only=True)
    likes = serializers.SerializerMethodField()

    def get_likes(self,queryset):
        objectQ = queryset.likes.filter(is_liked=True)

        return ProductFavoritesSerializer(objectQ,many=True).data

    class Meta:
        model = Product
        fields = ('__all__')



class CategorySerializer(serializers.ModelSerializer):

    subcategorires = SubCategorySerializer(read_only=True,many=True)
    count = serializers.SerializerMethodField('get_count')
    products = serializers.SerializerMethodField('get_products')

    def get_products(self,obj):
        print(self.context)
        return ProductSerializer(obj.products.all()[:5], many=True,context={'request':self.context['request']}).data

    def get_count(self,obj):
        count = 0
        count += len(obj.products.all())
        for subcat in obj.subcategorires.all():
            count += len(subcat.products.all())
        return count

    class Meta:
        model = Category
        fields = ('__all__')





class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = ('__all__')


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('__all__')

class PagePhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PagePhoto
        fields = ('photo','id')

class PageSerializer(serializers.ModelSerializer):

    photos = PagePhotoSerializer(many=True)

    class Meta:
        model = Page
        fields = ('__all__')