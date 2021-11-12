import datetime
import random
from django.core.management.base import BaseCommand
from core.models import Person, Specialization, Therapists

igenders = [
    'Male',
    'Female',
    'Non-Binary'
]

specials = [
    'Cognitive behavioral therapy',
    'Dialectical behavioral therapy',
    'Rational emotive behavior therapy',
    'Exposure and response prevention',
    'Psychodynamic therapy',
    'Humanistic therapy',
    'Anger Management',
    'Anxiety',
    'Relationship counselling',
    'Bipolar disorder',
    'Eating disorders',
    'Depression',
    'Grief'
]

quals = [
    'Ph.D. in clinical or counseling psychology',
    'Ph.D. in counseling psychology',
    'Psy.D in geriatrics',
    'Psy.D in learning disabilities',
    'Psy.D in substance abuse',
    'Psy.D in adult mental health'
]

def generate_therapist_gender():
    index = random.randint(0, 2)
    return igenders[index]

def generate_therapist_spec():
    index = random.randint(0, 12)
    return specials[index]

def generate_therapist_qual():
    index = random.randint(0, 5)
    return quals[index]

def generate_therapist_age():
    return random.randint(20, 100)

def generate_therapist_ph():
    return random.randint(600000000, 999999999)

def generate_therapist_sd():
    year = random.randint(2000,2030)
    month = random.randint(1,12)
    day = random.randint(1,28)
    return datetime.date(year, month, day)

def generate_therapist_e():
    return 'example@gmail.com'

def generate_therapist_w():
    return 'example'

def generate_therapist_de():
    return 'exampleInfo'

class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('file_name', type=str, help='txt file with names of therapists')

    def handle(self, *args, **kwargs):
        file_name = kwargs['file_name']
        with open(f'{file_name}.txt') as file:
            for row in file:
                person_n=row
                age = generate_therapist_age()
                gender = generate_therapist_gender()
                specs = generate_therapist_spec()
                email = generate_therapist_e()
                start_date = generate_therapist_sd()
                phone = generate_therapist_ph()
                website= generate_therapist_w()
                qual = generate_therapist_qual()
                desc = generate_therapist_de()

                ther = Person.objects.get_or_create(
                    name=person_n
                )

                therapists = Therapists(
                    person=Person.objects.get(name=person_n),
                    age = age,
                    gender = gender,
                    email = email,
                    start_date = start_date,
                    phone = phone,
                    website= website,
                    qual = qual,
                    desc = desc
                )

                therapists.save()

                specialization = Specialization.objects.get_or_create(name=specs)

                therapists.specializations.add(
                    Specialization.objects.get(name=specs))

        self.stdout.write(self.style.SUCCESS('Data imported successfully'))     

