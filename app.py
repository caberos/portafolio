import streamlit as st
import streamlit_shadcn_ui as ui
import emoji

profile_pic = "assets/picture.png"
resume_file = "assets/Daniel Francisco Cabero Barrios -cv.pdf"
css_file = "styles/main.css"
resume_file_name = "Daniel Cabero -cv.pdf"

layout = "centered"
page_title = "Portafolio | Daniel Cabero"
page_icon = "=w="
name = "Daniel Cabero"
description = """
Ingeniero de Sistemas enfocado en construir aplicaciones y automatizaciones para ser mas eficiente. 
"""
email = "cabernaldo010788@gmail.com"

social_media = {"GitHub": "https://github.com/caberos",
                "Linkedin": "https://www.linkedin.com/in/danielfcaberobarrios/"}

repositories = {
    " 💡 Sistema ERP HHRR version 1": "https://github.com/caberos/ERPHHRR",
    " 💡 Sistema de automatizacion template v1": "https://github.com/caberos/templateAutomation",
    " 💡 Sistema framework base de UI": "https://github.com/caberos/testMod4",
    " 💡 Sistema basico de user y roles frontend con VUE js": "https://github.com/caberos/vue-project",
    " 💡 Sistema basico backend CRUD en JS": "https://github.com/caberos/crudjs",
    " 💡 Framework de automatizacion con robot framework ": "https://github.com/caberos/robotFramework",
    " 💡 Colaboracion al CLI de IBM clasic infrastructure": "https://github.com/caberos/softlayer-python",
}

st.set_page_config(page_title=page_title, page_icon=page_icon, layout=layout)

with open(css_file) as css_style:
    st.markdown('<style>{}</style>'.format(css_style.read()), unsafe_allow_html=True)

with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()

cols = st.columns(len(social_media))

# ----- Social media ----
for index, (platform, link) in enumerate(social_media.items()):
    with cols[index]:
        ui.link_button(text=platform, url=link, key=f"link_btn_{platform}")

# -------- Cabecera ------

col1, col2 = st.columns(2)
with col1:
    st.image(profile_pic, width=230)
with col2:
    st.title(name)
    st.write(description)
    st.download_button(label=" Download CV",
                       data=PDFbyte,
                       file_name=resume_file_name,
                       )
    st.write(" ", email)

# ---------------- repositorios --------------
st.write("#")
st.subheader("Repositorios")
st.write("-----")

for repository, link in repositories.items():
    st.write(emoji.emojize(f"💻 [{repository}]({link})", language='es'))
    # st.write(f"[{repository}]({link})")
    # print(emoji.emojize(f":pulgar_hacia_arriba: [{repository}]({link})", language='es'))

# ----------- Habilidades --------------
st.write('##')
st.subheader("Habilidades Tecnicas")
st.write("---")
st.write("""

    💻  Programacion: 🐍 Python, ☕ Java, CSharp,  Go, Ruby, JavaScript

    🔧 Tools: Spring boot, Express,  Django,  Flash, 🥒 Cucumber,  Apium, 🦾 Rest API,  React, 🤖 Robot Framework

    📜 Base de datos: PostgreSQL, MySql, MongoDB.

    👨‍💻 Visualizacion de UI: React, VUEjs Streamlit, pygame.
         
""")

st.write('##')
st.subheader("Experiencia")
st.write('---')

# --------------- trabajo --------
st.write(" 💼 ", " Ingeniero de Control de Calidad ")
st.write(" Jalasoft")
st.write("08/2017  - 06/2019")
st.write(
    """
 - ➡ Automatizacion de procesos de control de calidad API y UI
 - ➡ Desarrollo de frameworks de automatizacion usando Java, Python y Cucumber.
 - ➡ QA manual
 - ➡ Desarrollo de framework para la automatizacion de creacion de informes de inventario.

"""
)

st.write(" 💼 ", " Soporte Tecnico API ")
st.write(" IBM Corporation")
st.write("06/2019  - 06/2023")
st.write(
    """
 - ➡ Soporte Tecnico en API de IBM Classic Infrastructure
 - ➡ Desarrollo y mantenimiento de los CLI de SoftLayer.
 - ➡ Encargado de otorgar soporte tecnico de la Pagina de Classic Infracture IBM de StackOverFlow
 - ➡ Desarrollo y mantenimiento de las paginas de documentacion de SoftLayer API.
 - ➡ Desarrollo de Scripts en diferentes lenguajes de programacion de SoftLayer API.
 
"""
)
