from flask import Flask,render_template,request,url_for,redirect
import pandas as pd
import pickle

clustering_model = pickle.load(open("C:/Users/HP PC/Desktop/work/LG_Test/Personality_class.sav", 'rb'))
def getData(data):
            data = data_df
            return data

app = Flask(__name__)

ENV = "dev"
if ENV == "dev":
    app.debug = True
else:
    app.debug = False

    
@app.route("/")
@app.route("/login",methods=["GET","POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        print(email,password)
        return redirect(url_for("profile"))
    return render_template("index.html")

@app.route("/signup",methods=["POST","GET"])
def signup():
    if request.method == "POST":
        username = request.form.get("Username")
        email = request.form.get("email")
        password = request.form.get("password")
        confirm_password = request.form.get("confirm_password")
        print(password,username,email)
        return redirect(url_for("profile"))
    return render_template("signup.html")

@app.route("/profile")
def profile():    
    return render_template("profile.html")

@app.route("/edit_profile",methods=["POST","GET"])
def edit_profile():
    if request.method == "POST":
        email = request.form.get("email")
        DoB = request.form.get("DoB")
        Hmaddress = request.form.get("Hmaddress")
        Department = request.form.get("Department")
        Faculty = request.form.get("Faculty")
        level = request.form.get("level")
        print(email,DoB,Hmaddress,Department,Faculty,level)
        return redirect(url_for("profile"))
    return render_template("profile-settings.html")

@app.route("/personality_test",methods=["POST","GET"])
def personality_test():
    if request.method == "POST":
        response1 = request.form.get("question_one")
        response2 = request.form.get("question_two")
        response3 = request.form.get("question_three")
        response4 = request.form.get("question_four")
        response5 = request.form.get("question_five")
        response6 = request.form.get("question_six")
        response7 = request.form.get("question_seven")
        response8 = request.form.get("question_eight")
        response9 = request.form.get("question_nine")
        response10 = request.form.get("question_ten")
        response11 = request.form.get("question_eleven")
        response12 = request.form.get("question_twelve")
        response13 = request.form.get("question_thirteen")
        response14 = request.form.get("question_fourteen")
        data_dict ={
            "SMP": [response1],
            "SRAB": [response2],
            "UCSDA": [response3],
            "SCTCP": [response4],
            "BCC": [response5],
            "LMA": [response6],
            "WTS": [response7],
            "LTP": [response8],
            "FBAT": [response9],
            "LTUR": [response10],
            "LGS": [response11],
            "LT": [response12],
            "LSM": [response13],
            "WN": [response14]
        }
        data_df = pd.DataFrame.from_dict(data_dict)
        Personality_group = clustering_model.predict(data_df)
        return render_template("success.html",Personality_group= Personality_group)
        #return redirect(url_for("profile"))
    return render_template("personalityquiz.html")

@app.route("/dummy_profile")
def dummy_profile():    
    return render_template("dummy_profile.html")



@app.route("/matchmake")
def matchmake():    
    return render_template("index2.html")

if __name__ == "__main__":
    app.debug = True
    app.run()