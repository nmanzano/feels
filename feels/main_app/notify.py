from django.core.mail import send_mail

send_mail(
    'This is a subject',
    'Here is the message.',
    'feelsnotification@gmail.com',
    ['feelsnotification+app@gmail.com'],
    fail_silently=False,
)

{% comment %}
# import smtplib
# email_user = "feelsnotification@gmail.com"
# email_send = "feelsnotification+app@gmail.com"
# server = smtplib.SMTP('smtp.gmail.com', 587)
# server.starttls()
# server.login(email_user, "ztDPt6zkiP#")
#
# msg = "YOUR MESSAGE!"
# server.sendmail(email_user, email_send, msg)
# server.quit()
{% endcomment %}
