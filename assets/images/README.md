# Engineering evidence checklist

Add real files here and replace the matching `[ADD IMAGE]` containers in the HTML. No project imagery has been invented. Use the README's image markup examples. File names below are suggestions, not existing assets.

## FSAE carbon-fiber undertray — highest priority

| Suggested file | What to gather | Caption / annotation |
| --- | --- | --- |
| `undertray-final.jpg` | Final manufactured undertray, ideally mounted on the car; otherwise a clean bench photograph | Final manufactured component; label its actual mounting and orientation |
| `undertray-cad.png` | SolidWorks full geometry with throat, diffuser, and strakes visible | Initial undertray geometry; identify the features you designed |
| `undertray-pressure-coefficient.png` | STAR-CCM+ pressure coefficient plot with readable legend | Pressure coefficient distribution from STAR-CCM+; supply speed, ride height, and relevant model conditions |
| `undertray-streamlines.png` | Velocity/streamline plot revealing crossflow and separation near the throat and diffuser | Underbody flow and separation; annotate the observed flow issue |
| `undertray-iteration.png` | Matched before/after diffuser and strake geometry, preferably at the same camera angle; add matched CFD views if available | Initial design → CFD finding → updated geometry; state what changed and why |
| `undertray-layup.jpg` | Real wet layup or vacuum-bagging work | Composite layup; label laminate orientation, peel ply, breather, and bagging materials that are actually present |
| `undertray-tooling.jpg` | Mold finishing, tooling, foam core, or honeycomb core work | Composite tooling and core structures; explain the relevant fabrication decision |
| `undertray-drawing.png` | A shareable dimensioned drawing of mounting interfaces or key geometry | Engineering drawing; make units and interfaces readable |
| `undertray-force-report.png` | Actual CFD force report or a chart of downforce across documented iterations | Approximately 40 N target; specify conditions, sign convention, prediction versus measurement, and what is actually shown |
| `undertray-testing.jpg` | Actual physical test setup if testing was performed | Testing configuration; identify sensors, mounting, and procedure; do not use a CFD screenshot as physical validation |

The force-report/chart can be added as another `<figure>` in the analysis or results section. Do not reconstruct a chart from an invented data series. Distinguish the target from the result, and state the conditions for the achieved target.

## Hopper robot

| Suggested file | What to gather | Caption / annotation |
| --- | --- | --- |
| `hopper-assembly.jpg` | Full robot photograph with the mechanical structure clearly visible | Hopper robot assembly; identify your mechanical contribution |
| `hopper-cad.png` | Mechanical CAD assembly and a useful exploded view | Structure, mounts, and assembly interfaces; state the actual CAD software |
| `hopper-prototype.jpg` | Initial prototype next to a revised structure | Describe a documented rigidity or tipping problem and the actual revision |
| `hopper-mounts.jpg` | 3D-printed mounts and fitment close-up | Mount geometry, critical dimensions, and tolerance considerations |
| `hopper-fabrication.jpg` | Laser-cut parts and woodworking during fabrication | CAD → fabrication → assembly |
| `hopper-testing.jpg` | Test setup or sequential stills showing mechanical behavior | Testing configuration; explain actual observations and mechanical changes |
| `hopper-demo.mp4` | Short demonstration of the actual robot | State that the system uses closed-loop PD control; claim your mechanical work rather than controls authorship |

If you performed center-of-gravity, structural, or stability calculations, gather the actual calculation and inputs. Otherwise do not imply quantitative analysis. Document test outcomes with dates or prototype versions when available.

## Autonomous rover

| Suggested file | What to gather | Caption / annotation |
| --- | --- | --- |
| `rover-assembly.jpg` | Complete rover on the real line-following course | Completed autonomous rover; mark the mechanical structure you fabricated |
| `rover-chassis.jpg` | Top and underside of the polycarbonate chassis | Mounting points, drive layout, and sensor position |
| `rover-printed-parts.jpg` | 3D-printed parts before and after assembly | Printed component purpose and interface |
| `rover-fabrication.jpg` | Actual jigsaw, bandsaw, or drill-press operation | Mechanical fabrication process and your contribution |
| `rover-electronics.jpg` | Clear electronics layout | Label motors, servos, IR sensors, buck converter, and Arduino; distinguish your work from team work |
| `rover-testing.jpg` | Course layout and IR sensor arrangement | Testing configuration, lighting/sensor conditions, and observations |
| `rover-test-notes.png` | Actual notes, data, or matched before/after observations | Overcorrection or sensitivity issue → adjustment → observed result |
| `rover-demo.mp4` | Short actual course-run video | Describe the demonstrated behavior; include measured performance only if recorded |

Add torque or gear-ratio calculations only if you actually performed them and can show the inputs and method.

## Mechanical CAD / Killjoy Turret — supplemental

| Suggested file | What to gather | Caption / annotation |
| --- | --- | --- |
| `turret-assembly.png` | Full SolidWorks assembly | Assembly containing 17 unique CAD parts |
| `turret-exploded.png` | Exploded view with numbered part callouts | Show part relationships and assembly organization |
| `turret-features.png` | Close-ups plus feature tree showing revolves, lofts, wraps, and 3D sketches | Explain why each feature was chosen |
| `turret-mates.png` | Concentric and coincident mate examples | Identify constrained relationships and intended degrees of freedom |
| `turret-drawing.png` | A drawing of one complex part, if available | Demonstrate dimensions and drawing communication |

Keep this project smaller than the primary engineering case studies. State whether it is CAD-only; do not imply fabrication or structural validation that has not been documented.

## Image preparation

- Use your actual photographs and exports, with permission to publish them.
- Aim for roughly 1400–2000 pixels on the long side for major images; prioritize readable engineering detail over a fixed file-size target.
- Export plots with readable scales, units, axes, legends, and operating conditions.
- Use consistent views and scales for comparisons.
- Add meaningful alt text and a caption describing the decision or evidence, rather than only naming the software.
- Add dates, prototype versions, test conditions, and attribution where they clarify the evidence.
- Use a real image for the homepage undertray feature and project cover; update both locations.
- For charts and drawings, include a text explanation so the result is understandable without relying on color alone.
