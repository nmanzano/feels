from django.shortcuts import render


def base(request):
    return render(request, 'main_app/base.html', {})
