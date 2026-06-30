# Tickets de Práctica - Dashboard Next.js

## 🟢 Ticket #1: Filtro de Estado en Facturas (Junior)
**Descripción:** El equipo de ventas dice que es difícil encontrar facturas pendientes cuando hay muchas. Actualmente, la búsqueda solo funciona por nombre o email.
**Requerimiento:**
*   Añade un componente de "Filtro" (puede ser un `Select` o botones de radio) junto a la barra de búsqueda en `/dashboard/invoices`.
*   El filtro debe permitir seleccionar entre: **Todas, Pagadas, Pendientes**.
*   **Técnico:** Debe funcionar a través de la URL (Query Params), igual que la búsqueda actual, para que el estado del filtro sea compartible.

---

## 🟡 Ticket #2: Página de Detalle de Cliente (Mid-Level)
**Descripción:** Los usuarios quieren ver el historial de un cliente específico sin tener que buscar factura por factura.
**Requerimiento:**
*   Haz que el nombre del cliente en la tabla de `/dashboard/customers` sea un enlace.
*   Crea una ruta dinámica: `/dashboard/customers/[id]`.
*   La página debe mostrar:
    1.  Información básica del cliente (Imagen, Nombre, Email).
    2.  Una tabla con **solo** las facturas de ese cliente.
    3.  Un resumen rápido del total que ha pagado vs. lo que debe.
*   **Técnico:** Necesitarás crear una nueva función en `app/lib/data.ts` que haga un `fetch` filtrado por `customer_id`.

---

## 🟠 Ticket #3: Exportar Facturas a CSV (Mid/Senior)
**Descripción:** El departamento de contabilidad necesita los datos en Excel para el cierre de mes.
**Requerimiento:**
*   Añade un botón "Exportar CSV" en la página `/dashboard/invoices`.
*   Al hacer clic, debe descargar un archivo `.csv` con las facturas que están actualmente visibles (si hay una búsqueda activa, solo exporta los resultados de esa búsqueda).
*   **Técnico:** Puedes usar un **Route Handler** (`route.ts`) para generar el stream del CSV o hacerlo en el cliente si prefieres, pero el equipo prefiere lógica en el servidor para mayor seguridad.

---

## 🔴 Ticket #4: Indicador de Crecimiento en el Dashboard (Advanced)
**Descripción:** El CEO quiere ver si el negocio está creciendo mes a mes, no solo el total actual.
**Requerimiento:**
*   En las tarjetas superiores del Dashboard (`/dashboard/(overview)`), añade una pequeña etiqueta (badge) debajo del "Total Revenue".
*   La etiqueta debe mostrar el **% de crecimiento o decrecimiento** respecto al mes anterior (ej: `+12% vs last month`).
*   **Técnico:** Deberás modificar la función `fetchCardData` en `app/lib/data.ts` para realizar una consulta SQL que compare el revenue del mes actual con el anterior.
