const search = document.querySelector<HTMLInputElement>('#course-search');
const groups = document.querySelectorAll<HTMLDetailsElement>('[data-course-group]');
const clear = document.querySelector<HTMLButtonElement>('[data-clear-courses]');
const initialOpen = new Map([...groups].map((group) => [group, group.open]));
const normalize = (text: string) => text.toLocaleLowerCase('ru-RU').replaceAll('ё', 'е').trim();

function filterCourses() {
  const query = normalize(search?.value ?? '');
  let total = 0;
  groups.forEach((group) => {
    let count = 0;
    group.querySelectorAll<HTMLElement>('[data-course]').forEach((course) => {
      const visible = !query || normalize(course.textContent ?? '').includes(query);
      course.hidden = !visible;
      if (visible) count++;
    });
    total += count;
    group.hidden = count === 0;
    group.open = query ? count > 0 : initialOpen.get(group) ?? false;
  });
  if (clear) clear.hidden = !query;
  const status = document.querySelector('[data-course-status]');
  if (status) status.textContent = query ? `Найдено дисциплин: ${total}` : `Всего дисциплин: ${total}`;
  const empty = document.querySelector<HTMLElement>('[data-course-empty]');
  if (empty) empty.hidden = total > 0;
}
search?.addEventListener('input', filterCourses);
clear?.addEventListener('click', () => { if (search) search.value = ''; filterCourses(); search?.focus(); });
// Keep direct links to a collapsed course group usable.
function openLinkedGroup() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const group = document.getElementById(id);
  if (group instanceof HTMLDetailsElement && group.hasAttribute('data-course-group')) group.open = true;
}
openLinkedGroup();
window.addEventListener('hashchange', openLinkedGroup);
