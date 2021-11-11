from django.shortcuts import render
from django.http import HttpResponse
from personal.models import Person, Specialization, Therapists
# Create your views here.

def is_valid_queryparam(param):
    return param != '' and param is not None

def filter(request):
    qs = Therapists.objects.all()
    #categories = Category.objects.all()

    age_count_min = 20
    age_count_max = 30
    gen = ''
    q = ''
    special='Anger Management'
    edu = ''

    if is_valid_queryparam(gen):
        qs = qs.filter(gender__iexact=gen)

    if is_valid_queryparam(q):
        qs = qs.filter(qual__iexact=q)

    if is_valid_queryparam(age_count_min):
        qs = qs.filter(age__gte=age_count_min)

    if is_valid_queryparam(age_count_max):
        qs = qs.filter(age__lte=age_count_max)

    if is_valid_queryparam(special):
        qs = qs.filter(specializations__name=special)

    if is_valid_queryparam(edu):
        qs = qs.filter(qual__iexact=edu)

    #print('\n')

    return HttpResponse(qs)