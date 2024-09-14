from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main_page():
    return render_template('mainpage.html')



@app.route('/algebra-and-functions')
def algebra_and_functions():
    return render_template('algebra_and_functions.html')

@app.route('/polynomials-and-rational-functions')
def polynomials_and_rational_functions():
    return render_template('polynomials_and_rational_functions.html')

@app.route('/inequlities')
def inequalities():
    return render_template("inequalities.html")





@app.route('/calculus')
def calculus():
    return render_template('calculus.html')

@app.route('/geometry-and-trigonometry')
def geometry_and_trigonometry():
    return render_template('geometry_and_trigonometry.html')

@app.route('/probability-and-statistics')
def probability_and_statistics():
    return render_template('probability_and_statistics.html')

@app.route('/number-theory')
def number_theory():
    return render_template('number_theory.html')

@app.route('/logic-and-proof')
def logic_and_proof():
    return render_template('logic_and_proof.html')

@app.route('/vectors-and-matrices')
def vectors_and_matrices():
    return render_template('vectors_and_matrices.html')


@app.route('/tmua-past-papers')
def tmua_past_papers():
    return render_template('tmua_past_papers.html')

@app.route('/tmua/<int:year>/paper<int:paper_number>')
def tmua_paper(year, paper_number):
    return render_template(f'paper{paper_number}_{year}.html')

@app.route('/synopsis')
def synopsis():
    return render_template('synopsis.html')

if __name__ == '__main__':
    app.run(debug=True)