<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the landing content in the imported raw HTML and export Shopify as a complete HTML fragment; this preserves the submitted layout and standalone storefront behavior.
- Keep tracking scripts in the root head for the preview and in the standalone export only once; this avoids duplicate page events.
