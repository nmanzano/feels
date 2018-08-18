from django import forms

class Description_Of_Feelings(forms.Form):
    feeling_textarea = forms.CharField(label='Your name', max_length=100, widget=forms.Textarea)
