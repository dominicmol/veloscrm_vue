## Velos CRM

**Velos CRM** is een intuïtief en schaalbaar klantensysteem, ontwikkeld voor het creatieve marketingbureau **Velos**. Dit CRM-systeem maakt gebruik van een moderne techstack met **Django REST Framework** en **Vue.js 2**.  
Het is ontworpen voor intern gebruik, maar eenvoudig uitbreidbaar voor bredere commerciële toepassingen.

---

## Projectstructuur

veloscrm/
├── backend/ # Django REST backend (Python 3)
├── frontend/ # Vue.js 2 frontend met Bulma CSS
├── db.sqlite3 # Huidige lokale database (SQLite)
└── README.md


---

## Technische Stack

| Onderdeel      | Technologie           |
|----------------|------------------------|
| Frontend       | Vue.js 2, Vuex, Bulma  |
| Backend        | Django REST Framework  |
| Authenticatie  | JWT (Djoser)           |
| Database       | SQLite (Postgresql bij deployment) |
| Hosting        | PythonAnywhere (in voorbereiding) |

## Installatiehandleiding

### 1. Backend installeren (Django)


cd veloscrm_django
python -m venv env
source env/bin/activate  # Op Windows: env\Scripts\activate
pip install -r requirements.txt

Database migreren en superuser aanmaken:
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

Start de server:
python manage.py runserver

### 2. Frontend installeren (Vue.js)

cd veloscrm_vue
npm install
npm run serve
De frontend draait op: http://localhost:8080

