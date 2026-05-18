# COMANDOS GIT

Visualizar status de cambios
```
git status
```

Incluir al stage
```
git add .
git add archivo_especifico.py
```
Comprometer o seleccionar cambios para subir al repositorio remoto
```
git commit -m 'comentario'
```

Establecer Configuracones basicas
```
git config --global user.name "nombre de usuario de git"
git config --global user.email "email de git"
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global init.defaultBranch main
```
Consultar Configuraciones
```
git config --list I
git config user.name
git config user.email
```