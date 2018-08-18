from django.shortcuts import render
from django.core.mail import EmailMessage
from .forms import Description_Of_Feelings

def base(request):
    form = Description_Of_Feelings()
    args = {'form': form,}
    if request.method == 'POST':
        email = EmailMessage('THIS IS THE SUBJECT', 'THIS IS THE BODY IF THE MESSAGE', to=['feelsnotification+app@gmail.com'])
        email.send()

    return render(request, 'main_app/base.html', args)


def summary(request):
    return render(request, 'main_app/summary.html')
