import smtplib

email_user = "feelsnotification@gmail.com"
email_send = "feelsnotification+app@gmail.com"
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(email_user, "ztDPt6zkiP#")

msg = "YOUR MESSAGE!"
server.sendmail(email_user, email_send, msg)
server.quit()
