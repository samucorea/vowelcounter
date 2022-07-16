# Estrategia de ramas
Para este proyecto estaremos utilizando **GitHub Flow**. GitHub Flow es una alternativa más simple a GitFlow, ideal para equipos más pequeños, ya que no necesitan administrar múltiples versiones.

A diferencia de GitFlow, este modelo no tiene ramas de lanzamiento. Comienza con la rama principal, luego los desarrolladores crean ramas, presentan ramas que se derivan directamente del maestro, para aislar su trabajo, que luego se fusionan nuevamente en la principal. A continuación, se elimina la rama de características.

La idea principal detrás de este modelo es mantener el código maestro en un estado de implementación constante y, por lo tanto, puede admitir procesos de integración continua y entrega continua.

# Estrategia de versionamiento semántico
Usaremos una estrategia llamada **control de version semántico**. El control de versiones semántico es una convención formal para determinar el número de versión de las nuevas versiones de software. El estándar ayuda a los usuarios de software a comprender la seriedad de los cambios en cada nueva distribución. 

Un proyecto que utiliza versiones semánticas anunciará en **Importante**, **Menor** o **Piezas** número para cada versión. La cadena de versión 1.2.3 indica un *Importante* versión de 1, una *menor* versión de 2 y un número de parche de 3.

# Descripción de las etapas del pipeline
1ra etapa: **CI**

La integración continua (CI) permite que los desarrolladores incorporen los cambios del código a un repositorio compartido con mayor frecuencia, o incluso a diario. Una vez que se incorporan las modificaciones del desarrollador, se validan con la compilación automática de la aplicación y la ejecución de distintas pruebas automatizadas (generalmente, de unidad e integración), para garantizar que los cambios no hayan introducido una falla. 

2da etapa: **Deploy**
El push de branch master que se realiza en el repositorio Git, el cual opera un pequeño hook y actualiza el servidor de web hosting. Aunque necesita algunos comandos, el proceso ocurre de manera automática. Su ventaja es el control de la versión y el estado de cada deploy.
