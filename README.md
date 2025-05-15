# Training API con MySQL en Docker

## Requisitos previos
- Docker y Docker Compose instalados
- Node.js y pnpm

## Configuración

1. Clona este repositorio
2. Crea un archivo `.env` con el siguiente contenido:
```
DB_HOST=localhost
DB_USERNAME=kawak2_admin
DB_PASSWORD=Test!123
DB_NAME=kawak2
DB_PORT=3307
PORT=3000
```

## Ejecución de la base de datos MySQL en Docker

```bash
# Iniciar el contenedor MySQL
docker-compose up -d

# Detener el contenedor
docker-compose down
```

## Migraciones con Sequelize

Para ejecutar las migraciones localmente:

```bash
# Instalar dependencias
pnpm install

# Ejecutar migraciones
npx sequelize-cli db:migrate
# o
pnpm run migrate

# Revertir la última migración
npx sequelize-cli db:migrate:undo
# o
pnpm run migrate:undo

# Revertir todas las migraciones
npx sequelize-cli db:migrate:undo:all
# o
pnpm run migrate:undo:all
```

## Seeders con Sequelize

Para cargar datos iniciales en la base de datos:

```bash
# Ejecutar todos los seeders
npx sequelize-cli db:seed:all
# o
pnpm run seed

# Revertir el último seeder
npx sequelize-cli db:seed:undo
# o
pnpm run seed:undo

# Revertir todos los seeders
npx sequelize-cli db:seed:undo:all
# o
pnpm run seed:undo:all

# Ejecutar un seeder específico
npx sequelize-cli db:seed --seed nombre-del-archivo-seed
```

## Desarrollo local

```bash
# Iniciar en modo desarrollo
pnpm run dev
```

## Notas
- La base de datos MySQL está configurada para ejecutarse en el puerto 3307 en el host
- Las credenciales de la base de datos son:
  - Usuario: kawak2_admin
  - Contraseña: Test!123
  - Base de datos: kawak2 