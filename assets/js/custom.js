// Open external links in a new tab
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="http"]');

  links.forEach(function (link) {
    const url = new URL(link.href, window.location.href);

    // Only external links
    if (url.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
