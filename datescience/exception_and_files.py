students = []
did_not_pass = []

try:
    with open("all_students.txt", mode="r") as all_students:
        for student in all_students:
            students.append(student)

    for student in students:
        values = student.split()
        if int(values[1]) < 6:
            did_not_pass.append(values[0])

    with open("failed_students.txt", mode="w") as failed:
        for student in did_not_pass:
            print(student, file=failed)
except FileNotFoundError as error:
    print("Arquivo não encontrado.", error)
