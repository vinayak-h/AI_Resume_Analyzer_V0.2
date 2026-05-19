from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import pdfplumber
import shutil
import os
import re

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# =========================================================
# ALL DETECTABLE TECH SKILLS
# =========================================================

SKILLS_DB = [

    # Frontend
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Vue",
    "Angular",
    "Tailwind",
    "Bootstrap",
    "SASS",
    "Webpack",
    "Vite",

    # Backend
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "FastAPI",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "C#",
    ".NET",
    "PHP",
    "Laravel",
    "Go",
    "Rust",

    # Mobile
    "React Native",
    "Flutter",
    "Android",
    "Kotlin",
    "Swift",
    "iOS",

    # Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Firebase",
    "Supabase",
    "Oracle",
    "SQL",

    # DevOps
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
    "Ansible",
    "NGINX",

    # Cloud
    "AWS",
    "Azure",
    "GCP",
    "CloudFormation",
    "Lambda",

    # AI / ML
    "TensorFlow",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "OpenCV",
    "NLP",
    "LLM",
    "Generative AI",
    "LangChain",

    # Data Engineering
    "Apache Spark",
    "Kafka",
    "Airflow",
    "Hadoop",
    "Snowflake",

    # Cybersecurity
    "OAuth",
    "JWT",
    "Penetration Testing",
    "OWASP",
    "Encryption",

    # Testing
    "Jest",
    "Cypress",
    "PyTest",
    "JUnit",
    "Selenium",

    # Architecture
    "Microservices",
    "System Design",
    "REST API",
    "GraphQL",
    "Scalability",

    # Tools
    "Git",
    "Linux",
    "Bash",
    "Figma",
    "Postman",

    # Concepts
    "CI/CD",
    "Agile",
    "Scrum",
    "Data Structures",
    "Algorithms",
]

# =========================================================
# RECOMMENDED SKILLS
# =========================================================

RECOMMENDED_SKILLS = [
    "TypeScript",
    "Docker",
    "AWS",
    "CI/CD",
    "Testing",
    "System Design",
    "Kubernetes",
    "GraphQL",
    "Terraform",
    "Microservices",
]

# =========================================================
# LEARNING RESOURCES
# =========================================================

LEARNING_RESOURCES = {

    "Docker": {
        "overview":
            "Containerization platform for scalable deployments.",

        "importance":
            "Essential for DevOps and scalable production infrastructure.",

        "youtube": [
            "https://www.youtube.com/results?search_query=docker+tutorial",
            "https://www.youtube.com/results?search_query=docker+full+course",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=docker",
        ],

        "udemy": [
            "https://www.udemy.com/topic/docker/",
        ],

        "documentation": [
            "https://docs.docker.com/",
        ],

        "roadmaps": [
            "https://roadmap.sh/devops",
        ],

        "github_projects": [
            "https://github.com/docker/awesome-compose",
        ],

        "practice_projects": [
            "Deploy FastAPI with Docker",
            "Containerized MERN Stack",
            "Docker Compose Architecture",
        ],

        "certifications": [
            "Docker Certified Associate",
        ],

        "interview_topics": [
            "Docker volumes",
            "Docker networking",
            "Docker compose",
            "Container orchestration",
        ],
    },

    "AWS": {
        "overview":
            "Cloud computing platform for scalable systems.",

        "importance":
            "Critical for cloud-native deployments and scalable backend engineering.",

        "youtube": [
            "https://www.youtube.com/results?search_query=aws+tutorial",
            "https://www.youtube.com/results?search_query=aws+full+course",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=aws",
        ],

        "udemy": [
            "https://www.udemy.com/topic/amazon-aws/",
        ],

        "documentation": [
            "https://docs.aws.amazon.com/",
        ],

        "roadmaps": [
            "https://roadmap.sh/aws",
        ],

        "github_projects": [
            "https://github.com/acantril/learn-cantrill-io-labs",
        ],

        "practice_projects": [
            "Deploy scalable backend on EC2",
            "Build serverless Lambda API",
            "S3 deployment architecture",
        ],

        "certifications": [
            "AWS Cloud Practitioner",
            "AWS Solutions Architect Associate",
        ],

        "interview_topics": [
            "EC2",
            "S3",
            "IAM",
            "Lambda",
            "VPC",
            "CloudWatch",
        ],
    },

    "TypeScript": {
        "overview":
            "Strongly typed JavaScript superset.",

        "importance":
            "Improves maintainability and scalability.",

        "youtube": [
            "https://www.youtube.com/results?search_query=typescript+tutorial",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=typescript",
        ],

        "udemy": [
            "https://www.udemy.com/topic/typescript/",
        ],

        "documentation": [
            "https://www.typescriptlang.org/docs/",
        ],

        "roadmaps": [
            "https://roadmap.sh/typescript",
        ],

        "github_projects": [
            "https://github.com/type-challenges/type-challenges",
        ],

        "practice_projects": [
            "Convert React app to TS",
            "Typed REST APIs",
            "Reusable utility library",
        ],

        "certifications": [],

        "interview_topics": [
            "Generics",
            "Interfaces",
            "Mapped types",
            "Type inference",
        ],
    },

    "CI/CD": {
        "overview":
            "Continuous Integration and Deployment workflows.",

        "importance":
            "CI/CD improves deployment reliability and engineering velocity.",

        "youtube": [
            "https://www.youtube.com/results?search_query=ci+cd+tutorial",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=ci%2Fcd",
        ],

        "udemy": [
            "https://www.udemy.com/topic/ci-cd/",
        ],

        "documentation": [
            "https://docs.github.com/en/actions",
        ],

        "roadmaps": [
            "https://roadmap.sh/devops",
        ],

        "github_projects": [
            "https://github.com/actions/starter-workflows",
        ],

        "practice_projects": [
            "GitHub Actions deployment pipeline",
            "Automated Docker deployment",
        ],

        "certifications": [],

        "interview_topics": [
            "GitHub Actions",
            "Jenkins",
            "Deployment pipelines",
        ],
    },

    "Testing": {
        "overview":
            "Software testing improves production reliability.",

        "importance":
            "Testing is essential for scalable production systems.",

        "youtube": [
            "https://www.youtube.com/results?search_query=software+testing+tutorial",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=software+testing",
        ],

        "udemy": [
            "https://www.udemy.com/topic/software-testing/",
        ],

        "documentation": [
            "https://jestjs.io/docs/getting-started",
        ],

        "roadmaps": [
            "https://roadmap.sh/qa",
        ],

        "github_projects": [
            "https://github.com/jestjs/jest",
        ],

        "practice_projects": [
            "Write Jest unit tests",
            "Build Cypress E2E suite",
        ],

        "certifications": [],

        "interview_topics": [
            "Unit testing",
            "Integration testing",
            "E2E testing",
        ],
    },

    "Kubernetes": {
        "overview":
            "Container orchestration platform for distributed systems.",

        "importance":
            "Kubernetes is heavily used in cloud-native engineering.",

        "youtube": [
            "https://www.youtube.com/results?search_query=kubernetes+tutorial",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=kubernetes",
        ],

        "udemy": [
            "https://www.udemy.com/topic/kubernetes/",
        ],

        "documentation": [
            "https://kubernetes.io/docs/",
        ],

        "roadmaps": [
            "https://roadmap.sh/kubernetes",
        ],

        "github_projects": [
            "https://github.com/kubernetes/kubernetes",
        ],

        "practice_projects": [
            "Deploy scalable microservices cluster",
            "Kubernetes deployment setup",
        ],

        "certifications": [
            "CKA",
            "CKAD",
        ],

        "interview_topics": [
            "Pods",
            "Services",
            "Ingress",
            "Deployments",
        ],
    },

    "GraphQL": {
        "overview":
            "Modern API query language for flexible APIs.",

        "importance":
            "GraphQL improves frontend-backend communication efficiency.",

        "youtube": [
            "https://www.youtube.com/results?search_query=graphql+tutorial",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=graphql",
        ],

        "udemy": [
            "https://www.udemy.com/topic/graphql/",
        ],

        "documentation": [
            "https://graphql.org/learn/",
        ],

        "roadmaps": [
            "https://roadmap.sh/graphql",
        ],

        "github_projects": [
            "https://github.com/graphql/graphql-js",
        ],

        "practice_projects": [
            "Build GraphQL API",
            "Apollo dashboard app",
        ],

        "certifications": [],

        "interview_topics": [
            "Resolvers",
            "Apollo",
            "Mutations",
            "Schema",
        ],
    },

    "Terraform": {
        "overview":
            "Infrastructure as Code automation platform.",

        "importance":
            "Terraform is heavily used in cloud automation workflows.",

        "youtube": [
            "https://www.youtube.com/results?search_query=terraform+tutorial",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=terraform",
        ],

        "udemy": [
            "https://www.udemy.com/topic/terraform/",
        ],

        "documentation": [
            "https://developer.hashicorp.com/terraform/docs",
        ],

        "roadmaps": [
            "https://roadmap.sh/devops",
        ],

        "github_projects": [
            "https://github.com/hashicorp/terraform",
        ],

        "practice_projects": [
            "Provision AWS infrastructure",
            "Automated VPC deployment",
        ],

        "certifications": [
            "Terraform Associate",
        ],

        "interview_topics": [
            "State management",
            "Modules",
            "Providers",
        ],
    },

    "Microservices": {
        "overview":
            "Distributed architecture design pattern.",

        "importance":
            "Microservices improve scalability and service isolation.",

        "youtube": [
            "https://www.youtube.com/results?search_query=microservices+architecture",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=microservices",
        ],

        "udemy": [
            "https://www.udemy.com/topic/microservices/",
        ],

        "documentation": [
            "https://microservices.io/",
        ],

        "roadmaps": [
            "https://roadmap.sh/backend",
        ],

        "github_projects": [
            "https://github.com/microservices-demo/microservices-demo",
        ],

        "practice_projects": [
            "Distributed e-commerce backend",
            "Microservices chat architecture",
        ],

        "certifications": [],

        "interview_topics": [
            "Service discovery",
            "API gateway",
            "Distributed systems",
        ],
    },

    "System Design": {
        "overview":
            "Scalable distributed systems architecture engineering.",

        "importance":
            "Critical for senior engineering and scalable systems.",

        "youtube": [
            "https://www.youtube.com/results?search_query=system+design+interview",
        ],

        "coursera": [
            "https://www.coursera.org/search?query=system+design",
        ],

        "udemy": [
            "https://www.udemy.com/topic/system-design/",
        ],

        "documentation": [
            "https://github.com/donnemartin/system-design-primer",
        ],

        "roadmaps": [
            "https://roadmap.sh/software-design-architecture",
        ],

        "github_projects": [
            "https://github.com/donnemartin/system-design-primer",
        ],

        "practice_projects": [
            "Design scalable chat app",
            "Distributed URL shortener",
            "Netflix-like architecture",
        ],

        "certifications": [],

        "interview_topics": [
            "Caching",
            "Load balancing",
            "CAP theorem",
            "Scalability",
        ],
    },
}

# =========================================================
# ROOT
# =========================================================

@app.get("/")
def root():
    return {
        "message": "Advanced Resume Analyzer API Running"
    }

# =========================================================
# PDF TEXT EXTRACTION
# =========================================================

def extract_text_from_pdf(pdf_path):

    text = ""

    with pdfplumber.open(pdf_path) as pdf:

        for page in pdf.pages:

            extracted = page.extract_text()

            if extracted:
                text += extracted + "\n"

    return text

# =========================================================
# SKILL EXTRACTION
# =========================================================

def extract_skills(text):

    found_skills = []

    lower_text = text.lower()

    for skill in SKILLS_DB:

        pattern = r"\b" + re.escape(skill.lower()) + r"\b"

        if re.search(pattern, lower_text):
            found_skills.append(skill)

    return sorted(list(set(found_skills)))

# =========================================================
# ATS SCORE
# =========================================================

def calculate_ats_score(skills, text):

    score = 40

    score += min(len(skills) * 3, 30)

    if "Projects" in text:
        score += 5

    if "%" in text:
        score += 5

    if "Experience" in text:
        score += 5

    if "Leadership" in text:
        score += 5

    return min(score, 98)

# =========================================================
# ROLE DETECTION
# =========================================================

def detect_role(skills):

    if "TensorFlow" in skills or "PyTorch" in skills:
        return "AI / ML Engineer"

    if "Docker" in skills and "AWS" in skills:
        return "DevOps Engineer"

    if "React" in skills and "Next.js" in skills:
        return "Frontend Engineer"

    if "Node.js" in skills or "FastAPI" in skills:
        return "Backend Engineer"

    return "Software Engineer"

# =========================================================
# SENIORITY
# =========================================================

def estimate_seniority(skills, text):

    score = 0

    if len(skills) >= 10:
        score += 1

    if "Leadership" in text:
        score += 1

    if "Architecture" in text:
        score += 1

    if "%" in text:
        score += 1

    if score >= 3:
        return "Senior Level"

    if score >= 2:
        return "Mid Level"

    return "Junior Level"

# =========================================================
# STRENGTHS
# =========================================================

def generate_strengths(skills, text):

    strengths = []

    if len(skills) >= 8:
        strengths.append(
            "Broad exposure to modern engineering technologies detected."
        )

    if "React" in skills and "Next.js" in skills:
        strengths.append(
            "Strong frontend engineering ecosystem detected."
        )

    if "Python" in skills:
        strengths.append(
            "Python expertise improves backend and automation versatility."
        )

    if "Docker" in skills:
        strengths.append(
            "Infrastructure tooling familiarity detected."
        )

    if "%" in text:
        strengths.append(
            "Quantified achievements improve recruiter confidence."
        )

    return strengths

# =========================================================
# WEAKNESSES
# =========================================================

def generate_weaknesses(skills, text):

    weaknesses = []

    testing_skills = [
        "Jest",
        "Cypress",
        "PyTest",
        "JUnit",
        "Selenium"
    ]

    if "TypeScript" not in skills:
        weaknesses.append(
            "TypeScript expertise is not clearly visible."
        )

    if "AWS" not in skills:
        weaknesses.append(
            "Cloud engineering exposure appears limited."
        )

    if "CI/CD" not in text:
        weaknesses.append(
            "Deployment automation workflows are not highlighted."
        )

    if not any(skill in skills for skill in testing_skills):
        weaknesses.append(
            "Automated testing practices are not strongly represented."
        )

    if "%" not in text:
        weaknesses.append(
            "Resume lacks measurable engineering impact metrics."
        )

    return weaknesses

# =========================================================
# RECOMMENDATIONS
# =========================================================

def generate_recommendations(skills, text):

    recommendations = []

    if "Docker" not in skills:
        recommendations.append(
            "Add containerized deployment projects using Docker."
        )

    if "AWS" not in skills:
        recommendations.append(
            "Include AWS deployment or cloud-native engineering projects."
        )

    if "CI/CD" not in text:
        recommendations.append(
            "Mention GitHub Actions or deployment automation pipelines."
        )

    if "%" not in text:
        recommendations.append(
            "Add measurable technical achievements and impact metrics."
        )

    recommendations.append(
        "Improve ATS keyword alignment according to target job descriptions."
    )

    recommendations.append(
        "Enhance project descriptions with scalability and architecture decisions."
    )

    return recommendations

# =========================================================
# MISSING SKILLS
# =========================================================

def generate_missing_skills(skills):

    missing_skills = []

    for skill in RECOMMENDED_SKILLS:

        if skill not in skills:

            learning_data = LEARNING_RESOURCES.get(
                skill,
                {}
            )

            missing_skills.append({

                "skill": skill,

                "priority":
                    "High"
                    if skill in [
                        "AWS",
                        "Docker",
                        "System Design",
                        "Kubernetes"
                    ]
                    else "Medium",

                "overview":
                    learning_data.get("overview"),

                "importance":
                    learning_data.get("importance"),

                "resources":
                    learning_data,
            })

    return missing_skills

# =========================================================
# MAIN RESUME PARSER
# =========================================================

@app.post("/parse-resume")
async def parse_resume(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text_from_pdf(file_path)

    skills = extract_skills(text)

    ats_score = calculate_ats_score(
        skills,
        text
    )

    predicted_role = detect_role(skills)

    seniority = estimate_seniority(
        skills,
        text
    )

    email_match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text
    )

    result = {
        "ats_score": ats_score,
        "skills": skills,
        "missing_skills": generate_missing_skills(skills),
        "email": email_match.group(0) if email_match else None,
        "predicted_role": predicted_role,
        "seniority": seniority,
        "strengths": generate_strengths(skills, text),
        "weaknesses": generate_weaknesses(skills, text),
        "recommendations": generate_recommendations(skills, text),
        "text_preview": text[:1200],
    }

    return {
        "success": True,
        "data": result
    }