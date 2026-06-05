# Wizarding Registry Dashboard

A responsive dashboard built with React and TypeScript based on the provided Figma design

### Links
- Live Demo: https://wizard-task.netlify.app/
- Figma Design: https://www.figma.com/design/tLZbkUhvgYljMzOBJZ3nrl/Frontend-wizards-task


The application includes:

* Dashboard overview cards
* Activity and specialty charts
* Wizard registry table
* Search functionality
* Client-side pagination
* Wizard details modal

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Recharts
* Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
├── components/
├── hooks/
├── pages/
├── data/
├── types/
├── constants/
├── utils/
```

## Features

### Dashboard Overview

Displays key registry statistics along with activity and specialty charts.

### Wizard Registry

Browse registered wizards through a searchable table.

### Search

Searches across wizard names, registry IDs, specialties, and associated elixirs.

### Pagination

Table data is paginated client-side for easier navigation.

### Wizard Details Modal

Clicking the view action opens a modal showing additional information about the selected wizard.

## Assumptions

* All data is mocked locally.
* Search and pagination are handled on the client side.
* Sidebar navigation is visual only.
* No backend API was provided as part of the task.

## Notes

The focus of this implementation was creating reusable components, maintaining type safety with TypeScript, and matching the provided design while keeping the codebase easy to maintain.
