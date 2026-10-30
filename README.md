# Інженерія якості та супровід програмних систем

Презентації з дисципліни «Інженерія якості та супровід програмних систем» (Чернівецький національний університет імені Юрія Федьковича, кафедра програмного забезпечення комп'ютерних систем).



## Лекції

| № | Тема | Файл |
|---|------|------|
| 1 | Роль, типи та архітектура програмної документації: аудиторії та антипатерни, продукт vs процес, ЄСПД, архітектурні документи SSD / SDD / ISD, ADR, простежуваність (RTM), handover | [lecture-01.html](lecture-01.html) |
| 2 | Сучасні підходи, інструменти та автоматизація документування ПЗ: Documentation as Code, Markdown/YAML, Git-рев'ю, архітектура документації, SSOT, ADR, MkDocs/Docusaurus, OpenAPI/Swagger, Storybook, Pages, версіонування, Definition of Done | [lecture-02.html](lecture-02.html) |
| 3 | Документування супроводу та експлуатації програмних систем: експлуатаційний пакет та runbook-и, DR-плани RTO/RPO, Change Management, Impact Analysis, CCB, інциденти, blameless Post-Mortem, RCA/CAPA, SLA/SLO/SLI, матриці ескалації, Reverse Engineering, технічний борг, план супроводу | [lecture-03.html](lecture-03.html) |

## Запуск

Вимоги: **Node.js ≥ 22** (наприклад, `nvm use 22`).

```bash
npm install
npm run serve
```

Відкрийте `http://localhost:8080` у браузері. Керування слайдами — стрілки ←/→, `F` — повний екран.

## Скрипти

| Команда | Призначення |
|---------|-------------|
| `npm run serve` | Локальний сервер для перегляду |
| `npm run bundle` | Збірка єдиного HTML-файлу |
| `npm run archive` | Архів ZIP презентації |
| `npm run pages` | Експорт слайдів у PDF |

## Структура

```
├── index.html               Зміст — список лекцій
├── lecture-01.html          Лекція 1
├── lecture-02.html          Лекція 2
├── lecture-03.html          Лекція 3
├── lecture-template.html    Шаблон нової лекції
├── pictures/                Ілюстрації
├── styles/
│   ├── variables.css        Бренд-кольори
│   ├── slide.css            Стилі слайдів
│   └── custom.css           Агрегатор стилів
└── package.json             Залежності Shower
```

Презентації побудовано на фреймворку [Shower](https://github.com/shower/shower) (тема Ribbon).

## Додавання нової лекції

1. Скопіюйте `lecture-template.html` у `lecture-NN.html`, заповніть слайди.
2. Додайте посилання у `index.html` (блок `<section class="slide">`).
3. Додайте ім'я файлу до масиву `files` у `package.json`.