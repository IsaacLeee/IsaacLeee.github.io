# Isaac Lee — Mechanical Engineering Portfolio

A static engineering portfolio for Isaac Lee, a UC Irvine Mechanical Engineering student graduating in June 2028. The homepage prioritizes engineering projects, followed by manufacturing experience, technical skills, education, a resume, and contact information. Three major projects and a smaller CAD study have dedicated case-study pages.

The site uses plain HTML, CSS, and JavaScript. There are no dependencies, build tools, accounts required to preview locally, backend services, or paid hosting requirements. It works on GitHub Pages as either a user site or a repository project site. All content remains readable without JavaScript.

## Latest update

The accent color is `#023821`, sampled from your supplied dark-green swatch. The Killjoy Turret case study now includes March–June 2025 dates, full articulation based on in-game references, advanced SolidWorks features, 17 unique components, assembly mates, and strength/weight-based material selection for manufacturability and assembly. Physical fabrication and test specifics remain placeholders until provided.

## Simplified layout

The homepage now has a short introduction, three comparable project cards, a concise experience section, combined qualifications, and contact links. There is no GitHub profile button because you do not have an account. Resume and LinkedIn links work as before.

All 15 images are retained. The older CAD study and hydrogen-car photos are under “More work.” Project pages show a brief overview, role, and supplied evidence first; the full engineering write-up remains under “Engineering details.” Missing evidence placeholders remain editable inside disclosures rather than filling the visible page.

To preview without an account, extract the ZIP and double-click `index.html`. A GitHub account is only needed if you choose to publish through GitHub Pages later.

## Current content update

All 15 supplied images are included, alongside your actual PDF resume and LinkedIn URL: `https://www.linkedin.com/in/isaacbl/`. The optional GitHub setting remains empty and no GitHub profile link is shown.

The headshot appears in About. FSAE includes the full-vehicle CAD context, velocity visualization, and carbon-fiber photograph. Hopper includes its assembly, CAD, wiring diagram, and two internal-hardware views. Rover includes the team workbench photograph. The CAD study includes the assembly rendering and exploded view. Three hydrogen-car/team photographs appear in a smaller supporting archive rather than a primary project.

The two circular-platform internal-hardware photos were visually matched to the hopper, although their original folder was named `Hydrogen Car Images`. The FSAE CFD image is captioned as velocity evidence, not pressure coefficient evidence. Missing engineering details and unsupplied media remain labeled placeholders; optional gallery slots are tucked into “Additional evidence to add.”

Your supplied resume is copied unchanged to `assets/Isaac_Lee_Resume.pdf`, and `resumeReady` is already `true`. The LinkedIn and PDF links are also set directly in HTML, so they work with JavaScript disabled.

## 1. Folder structure and all source files

```text
isaac-lee-portfolio/
├── .gitignore
├── .nojekyll
├── index.html
├── README.md
├── projects/
│   ├── fsae-undertray.html
│   ├── hopper-robot.html
│   ├── autonomous-rover.html
│   ├── cad-turret.html
│   └── project-template.html
├── assets/
│   ├── favicon.svg
│   ├── Isaac_Lee_Resume.pdf
│   ├── RESUME-INSTRUCTIONS.md
│   └── images/
│       ├── README.md
│       ├── ASSET-MAP.md
│       └── 15 supplied image files (listed in ASSET-MAP.md)
├── css/
│   └── style.css
└── js/
    ├── config.js
    └── script.js
```

The supplied ZIP contains the complete editable code and all supplied media. A separate `SOURCE_CODE.md` alongside the ZIP reproduces each text source file in a code block and lists the included binary media for convenient review. Neither that source listing nor preview screenshots need to go into your GitHub repository.

`assets/Isaac_Lee_Resume.pdf` is the reserved resume location. Your supplied PDF and project images are included unchanged; no media were fabricated. The image folder also includes instructions for adding further engineering evidence. `.nojekyll` is an intentionally empty file that disables Jekyll processing.

## 2. Edit your information

Open `index.html` in a text editor such as Visual Studio Code. Search for the section IDs `home`, `about`, `experience`, `projects`, `skills`, `resume`, and `contact` to find the relevant text. Education follows the skills section. Update the page title and description in the `<head>` if you change the portfolio focus.

Each project page is ordinary HTML. Search for `id="overview"`, `id="objective"`, `id="myrole"`, `id="requirements"`, `id="approach"`, `id="cad"`, `id="analysis"`, `id="manufacturing"`, `id="testing"`, `id="challenges"`, `id="results"`, `id="learned"`, and `id="gallery"`.

The supplied accomplishments and numbers are preserved. Missing details appear as `[ADD ...]` text in muted boxes. Replace these boxes with your actual documentation. Remove the `content-placeholder` class when a paragraph is complete. Remove unnecessary placeholders before sending the portfolio to recruiters.

In particular, document the operating conditions behind the undertray's approximately 40 N result, and specify whether evidence is from CFD or physical testing. Do not present a simulation result as a measured test result. For the hopper, retain the distinction between your mechanical role and the team's PD-controlled system.

The visual system is in `css/style.css`. Edit the variables near the top for colors or maximum page width. Fonts are local system fonts; no external font request is needed.

## 3. Add project photos, CAD screenshots, drawings, and plots

Save your actual files in `assets/images/`, using lowercase hyphenated names, for example `undertray-final.jpg` or `undertray-pressure-coefficient.png`. Keep useful detail and readable legends; do not over-compress engineering plots. JPG/WebP work well for photographs; PNG works well for CAD views, plots, and drawings.

Find the desired `<figure class="evidence ...">`. Replace the entire `<div class="evidence-placeholder">...</div>` inside it with an image. Keep the surrounding `<figure>` and `<figcaption>`:

```html
<!-- On index.html (site root) -->
<figure class="evidence" data-evidence="hero-undertray">
  <img src="assets/images/undertray-final.jpg"
       alt="Describe the actual undertray and the visible mounting arrangement"
       width="1600" height="1000">
  <figcaption>Final manufactured component</figcaption>
</figure>
```

```html
<!-- On a page inside projects/, go up one directory -->
<figure class="evidence">
  <img src="../assets/images/undertray-pressure-coefficient.png"
       alt="Describe the actual pressure coefficient plot and the key flow behavior"
       width="1600" height="1000" loading="lazy">
  <figcaption>Pressure coefficient distribution from STAR-CCM+ —
    [ADD SPEED, RIDE HEIGHT, AND MODEL CONDITIONS]</figcaption>
</figure>
```

Replace the example alt text with an accurate description. Set `width` and `height` to the file's real pixel dimensions to reserve the right space. Omit `loading="lazy"` for the first large image on a page; use it for later gallery images. The CSS preserves full images rather than cropping engineering evidence. Update homepage cover images as well as project-page images.

For video, replace a placeholder with:

```html
<video controls preload="metadata" poster="../assets/images/rover-video-poster.jpg">
  <source src="../assets/images/rover-test.mp4" type="video/mp4">
  Your browser does not support this video.
  <a href="../assets/images/rover-test.mp4">Download the rover demonstration</a>.
</video>
```

Supply the real video and poster before using that example. For spoken audio, include a caption track and transcript. A descriptive external video link is also suitable once you have a real destination. Do not use autoplay. For large videos, an external host can avoid putting oversized files in Git. For PDF drawings, add a descriptive link to the actual PDF and a readable image preview.

See `assets/images/README.md` for the exact evidence to collect for each project.

## 4. Add or replace your resume

Your supplied resume is already installed and enabled. Follow these steps when replacing it:

1. Export your actual resume as a PDF.
2. Save it as `assets/Isaac_Lee_Resume.pdf` with that exact capitalization.
3. In `js/config.js`, change `resumeReady: false` to `resumeReady: true`.
4. Preview the site and check both **Open resume PDF** and **Download PDF**.

The placeholder path is `assets/Isaac_Lee_Resume.pdf`. It deliberately has no leading slash so it works at `USERNAME.github.io/portfolio/` as well as `USERNAME.github.io/`. If you choose another location, update `resumePath` in the configuration. Set it relative to the site root.

Before the file is added, the hero Resume button leads to the resume section, and the PDF buttons remain visibly unavailable. Enabling the setting does not check for the file automatically; you must add and verify the PDF yourself.

## 5. Update LinkedIn and GitHub links

LinkedIn is already configured. GitHub still needs your actual profile URL. The example below shows how to edit these settings:

Open `js/config.js` and replace the empty strings with your actual profile URLs:

```javascript
window.PORTFOLIO_CONFIG = {
  linkedin: "[ADD YOUR ACTUAL HTTPS LINK]",
  github: "[ADD YOUR ACTUAL HTTPS LINK]",
  resumePath: "assets/Isaac_Lee_Resume.pdf",
  resumeReady: false
};
```

Use complete URLs beginning with `https://`. Only valid HTTP(S) destinations activate the profile links. Empty or invalid entries keep `[ADD LINK]` labels and prevent clicks. Do not paste the example placeholder as if it were a URL. One edit updates both the configured links.

If you want the links to function for visitors with JavaScript disabled, also put the actual URLs directly in the corresponding HTML anchors, remove `aria-disabled="true"`, and remove the `[ADD LINK]` `<small>` elements. Likewise, actual resume links can be set directly in the HTML after adding the PDF.

The supplied email is `iscl1706@gmail.com`. Update the `mailto:` destination and displayed email in `index.html` if it changes.

## 6. Preview locally

For a quick view, double-click `index.html`. This site supports opening directly from disk. A local server is useful for checking behavior closer to hosting:

```powershell
# Open PowerShell in the extracted isaac-lee-portfolio folder.
py -m http.server 8000 --bind 127.0.0.1
```

If your system uses `python` instead of `py`, use `python -m http.server 8000 --bind 127.0.0.1`. Open `http://127.0.0.1:8000` in your browser. Press Ctrl+C in the terminal to stop the server. You need Python only for this optional preview; GitHub Pages does not run Python or need it.

Test the menu on a narrow screen, every case-study link, all images, email, external profiles, and both PDF buttons after adding the files. Increase browser zoom to 200% and confirm text stays readable.

## 7. Create a free GitHub repository

Choose either:

- **User site:** name the repository `YOUR-USERNAME.github.io` for the address `https://YOUR-USERNAME.github.io/`.
- **Project site:** name it `portfolio` for the address `https://YOUR-USERNAME.github.io/portfolio/`.

These addresses are templates, not claimed personal profile URLs. Replace `YOUR-USERNAME` with your real GitHub username. All internal links use relative paths and support either choice.

1. Sign in to GitHub, or create an account.
2. Select **+ → New repository**.
3. Enter the chosen repository name.
4. Select **Public** to use GitHub Pages with GitHub Free.
5. For the command-line upload below, leave **Add README**, `.gitignore`, and license initialization off; the local folder already has a README and `.gitignore`.
6. Select **Create repository**.

You do not need to give this site a software license to deploy it. Choose one separately if you want others to reuse the code.

## 8. Upload or push the website

### Option A — Upload in the GitHub browser interface

1. Extract `isaac-lee-portfolio.zip`.
2. Open the folder **inside** the ZIP. `index.html` must sit at the repository root, not inside another `isaac-lee-portfolio/` folder.
3. On the empty repository page, choose **uploading an existing file**. On an existing repository, use **Add file → Upload files**.
4. Drag the website files and folders from inside the extracted folder into the upload area. Include `projects`, `assets`, `css`, `js`, `index.html`, and `README.md`, preserving the hierarchy.
5. Enter `Add mechanical engineering portfolio` as the commit message and commit to `main`.
6. Check that `.nojekyll` and `.gitignore` were uploaded. If hidden files were omitted, use **Add file → Create new file**, name the first file `.nojekyll`, leave it empty, and commit. `.gitignore` is optional for hosting but should also be included for repository hygiene.

Upload the source files rather than the ZIP. Do not upload the separate `SOURCE_CODE.md` or QA screenshots. If the browser upload does not preserve folders, use Git below.

### Option B — Push with Git (recommended)

Install Git if it is not already available. Open PowerShell in the extracted website folder. Replace `YOUR-USERNAME` and the repository name with the actual values shown by GitHub. Use the HTTPS remote supplied by the new repository page.

```powershell
git init
git branch -M main
git add .
git commit -m "Add mechanical engineering portfolio"
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

For a user site, change the remote to `https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git`. Authenticate through the Git credential manager or browser prompt; a normal GitHub account password is not used as a Git HTTPS password.

If Git requests an author identity, configure it and retry the commit:

```powershell
git config user.name "Isaac Lee"
git config user.email "YOUR-VERIFIED-EMAIL-OR-GITHUB-NOREPLY-EMAIL"
```

If you initialized the GitHub repository with a README already, clone that repository into a fresh folder, copy the website files into the clone, then `git add .`, `git commit`, and `git push`. This avoids unrelated-history conflicts and does not require force pushing.

## 9. Enable GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**, then select **Save**.
5. Wait for the Pages deployment to finish. Check **Actions** for a failed build if necessary.
6. Return to **Settings → Pages**, then choose **Visit site**.

The root `index.html` is the entry point. There is no npm install, build command, server application, or custom GitHub Actions workflow to configure. Keep `.nojekyll` at the root. Check the published homepage, then open each project page directly and test the images and resume.

Current GitHub setup reference: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 10. Update the portfolio later

Edit the HTML, media, CSS, or `js/config.js` locally, preview the changed pages, then:

```powershell
git add .
git commit -m "Update project documentation"
git push
```

GitHub Pages republishes changes from `main`. Browser uploads or edits committed to `main` also trigger publishing. Refresh after deployment; use a hard refresh if the previous stylesheet is cached.

To add a future project:

1. Copy `projects/project-template.html` to `projects/your-project.html`.
2. Replace its title, description, headings, role, team, requirements, evidence, and all `[ADD ...]` content.
3. Keep section IDs and navigation consistent; each ID must be unique within the page.
4. Add a card in the homepage project section using an existing card as a pattern.
5. Update the adjacent case-study **Next** link if appropriate. Remove the template's inherited next link if you do not need it.
6. Use `../assets/...` for media inside project pages and `assets/...` on the homepage.

The template is not linked from public navigation. You can remove it from the published repository after saving a local copy.

## 11. Connect a custom domain later

A domain purchase is optional. GitHub Pages hosting remains available without one. Use the current [GitHub custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), especially if DNS values change after this guide was written.

For a `www` domain:

1. Purchase your chosen domain from a registrar.
2. Verify ownership in your GitHub account's Pages settings using GitHub's supplied DNS TXT record.
3. In the repository's **Settings → Pages → Custom domain**, enter your actual domain, such as `www.YOUR-DOMAIN.com`, and save. Do this before pointing DNS at Pages.
4. In the registrar's DNS settings, add a **CNAME** for host `www` pointing to `YOUR-USERNAME.github.io` (no `https://`, repository name, or path).
5. For an apex/root domain as well, use your DNS provider's supported ALIAS/ANAME configuration or the current GitHub Pages A records from the official guide. Avoid conflicting records for the same host.
6. Wait for DNS validation and certificate provisioning, then enable **Enforce HTTPS** in Pages settings.
7. For branch publishing, GitHub creates a root `CNAME` file. Pull that commit locally with `git pull` and keep the file in future pushes. Do not add a CNAME file before choosing a real domain.
8. Test the homepage, nested project pages, images, and resume on the domain.

Relative links mean no base-URL edit is needed for this site. If you later add a canonical URL or sharing metadata, use your actual final public address.

## 12. Evidence to gather before sharing

Collect the assets listed in `assets/images/README.md`. Start with the undertray's final component, a labeled CAD view, a CFD plot with a readable legend and test conditions, and a real composite manufacturing photograph. Add the robot assemblies and test setups next. Replace the resume and profile placeholders. Use captions to explain the engineering decision or result in each image, and mark your own contribution clearly.

Only publish drawings or photographs you are permitted to share, especially from Sierra Aluminum or team work. The portfolio contains no employer drawings or process data.

## 13. Quick troubleshooting

- **Homepage 404:** verify `index.html` is at the repository root and Pages publishes `main` / `/(root)`.
- **Broken images or PDF:** check exact filename capitalization and relative paths. GitHub hosting is case-sensitive.
- **CSS missing on a project site:** preserve the provided relative asset paths; avoid `/css/style.css` or `/assets/...` paths that skip the repository prefix.
- **Profile still says [ADD LINK]:** add a complete HTTP(S) URL to `js/config.js`, save, push, and refresh.
- **Resume buttons unavailable:** add the actual PDF and set `resumeReady` to `true`.
- **JavaScript disabled:** content and page navigation still work; the configuration-driven external/PDF links require JavaScript unless you also set their final destinations directly in HTML.
- **Publishing failed:** check the repository's Actions deployment log and the official GitHub Pages troubleshooting documentation.
