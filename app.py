from flask import Flask, render_template, redirect, flash, request
from flask_mail import Mail, Message
from config import email, senha

app = Flask(__name__)
app.secret_key = "TaisTeixeiradev"

mail_settings = {
    "MAIL_SERVER0": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": senha
}
app.config.update(mail_settings)

mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nome'],
            request.form['email'],
            request.form['mensagem']
        )
        msg = Message(
            subject = f'{formContato.nome} te enviou uma mensagem no portifolio',
            sender = app.config.get("MAIL_USERNAME"),
            recipients = ['devpython.22@hotmail.com', app.config.get("MAIL_USERNAME")],
            body = f'''
            {formContato.nome} com o email {formContato.email}, te enviou a seguinte mensagem:

            {formContato.mensagem}          
            '''
        )
        mail.send(msg)
        flash('MENSAGEM ENVIADA COM SUCESSO !!!')

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)