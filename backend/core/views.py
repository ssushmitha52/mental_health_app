from django.db.models import Q
from django.shortcuts import render
from core.models import Person, Specialization, Therapists

def is_valid_queryparam(param):
    return param != '' and param is not None


def BootstrapFilterView(request):
    qs = Therapists.objects.all()
    """title_contains_query = request.GET.get('title_contains')
    id_exact_query = request.GET.get('id_exact')
    title_or_author_query = request.GET.get('title_or_author')
    view_count_min = request.GET.get('view_count_min')
    view_count_max = request.GET.get('view_count_max')
    date_min = request.GET.get('date_min')
    date_max = request.GET.get('date_max')"""
    age_query = request.GET.get('age_contains')
    gen = request.GET.get('get_exact')
    special = request.GET.get('spec_q')
    age_count_min = 0
    age_count_max = 200

    if(age_query=="25-30"):
    
        age_count_min = 20
        age_count_max = 30
    
    elif(age_query=="30-40"):
    
        age_count_min = 30
        age_count_max = 40
    
    elif(age_query=="40+"):
    
        age_count_min = 40
        age_count_max = 200
    

    if is_valid_queryparam(gen):
        qs = qs.filter(gender__iexact=gen)

    if is_valid_queryparam(age_count_min):
        qs = qs.filter(age__gte=age_count_min)

    if is_valid_queryparam(age_count_max):
        qs = qs.filter(age__lte=age_count_max)

    if is_valid_queryparam(special):
        qs = qs.filter(specializations__name=special)

    context = {
        'queryset': qs
    }
    
    return render(request, "bootstrap_form.html", context)
