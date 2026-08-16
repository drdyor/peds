// The Polish schedules, taken from the legal text of the Program Szczepien Ochronnych 2026
// (Komunikat GIS, Dziennik Urzedowy Ministra Zdrowia 2025 poz. 85) - the PDF was downloaded
// and parsed directly rather than trusting a summary page. Two things secondary sources got
// WRONG and which this note therefore states carefully:
//   * PCV starts at 2 months (a summary claimed 5-6 months)
//   * varicella is mandatory only for defined RISK GROUPS, not universally
// HPV sits in the recommended list, not the mandatory one.

export const schedulesNote = `### Why this note exists

Schedules are heavily tested because they are checkable: an examiner can ask "which vaccine at which visit" and there is exactly one right answer. This is taken from the **legal text** of the Program Szczepien Ochronnych 2026 rather than a summary, because two widely-copied summaries get details wrong.

### Mandatory childhood vaccinations - PSO 2026 (base schedule)

| Age | Vaccines |
| --- | --- |
| **Within 24 hours of birth** | **BCG** (gruzlica) + **hepatitis B** dose 1 |
| **2nd month** (from completed 6 weeks) | **Rotavirus** 1 · **HBV** 2 · **DTP** 1 · **Hib** 1 · **PCV** 1 |
| **4th month** | **Rotavirus** 2 · **DTP** 2 · **Hib** 2 · **PCV** 2 |
| **5th-6th month** | **Rotavirus** 3 (only if on the 3-dose schedule) |
| **6th month** | **DTP** 3 · **Hib** 3 · **IPV** (polio) 1 |
| **7th month** | **HBV** 3 |
| **13th-15th month** | **MMR** 1 · **PCV** 3 (booster) |
| **16th-18th month** | **DTP** 4 · **Hib** 4 · **IPV** 2 |
| **6th year** | **DTaP** booster · **IPV** 3 · **MMR** 2 |
| **14th year** | **dTpa** - diphtheria/tetanus/pertussis with **reduced antigen content** |
| **19th year** | **Td** - diphtheria and tetanus only |

> **BCG is the one that catches people out:** it is given **within 24 hours of birth**, from the 1st day of life and no later than the day of discharge. Poland still gives universal BCG, unlike many western European countries - do not answer from a UK or German schedule.

### The traps in this schedule

| Trap | The actual rule |
| --- | --- |
| **"Varicella is mandatory at 13-15 months"** | **False.** Varicella is mandatory **only for defined risk groups** - children up to 19 who have not had chickenpox and are immunocompromised, are about to start immunosuppression or chemotherapy, are household contacts of such children, or live in institutional care. Everyone else: **recommended**, not mandatory |
| **"HPV is part of the mandatory calendar"** | **False.** HPV is in the **recommended** list: two doses from completed age 9 to 14, three doses from 15. There is a separate free national programme, but that does not make it a mandatory vaccination |
| **"Pertussis vaccine is the same at every dose"** | At **14 years** it is **dTpa with reduced antigen content**, and at **19 years** it is **Td only** - pertussis drops out |
| **"MMR is a single dose"** | Two doses: **13-15 months** and **6 years** |
| **"PCV starts later in infancy"** | **PCV starts at 2 months**, with the second at 4 months and the booster at 13-15 months |
| **Whole-cell vs acellular pertussis** | The base schedule uses **whole-cell DTP**. Use **acellular** where pertussis vaccination is contraindicated, and in infants **born before 37 weeks or under 2500 g** |
| **HBV timing exception** | The birth dose may be deferred to the first vaccination visit (about weeks 7-8) **only** if the mother was shown to have **anti-HBs above 100 U/l in the current pregnancy** |

### Recommended (zalecane), not mandatory

Meningococcal (MenB, MenACWY), influenza, COVID-19, tick-borne encephalitis, hepatitis A, HPV, rotavirus beyond the mandatory doses, varicella outside the risk groups, and BCG for the unvaccinated up to age 15.

> Mandatory vaccines are state-funded; recommended ones are generally paid for by the family unless a specific programme covers them. If a stem hinges on "who pays" or "is this obligatory", that is the distinction being tested.

### The other two schedules, and how they fit together

Poland tests three separate timetables. Do not merge them.

| Schedule | What it is | Where the detail is |
| --- | --- | --- |
| **Szczepienia (PSO)** | Vaccination calendar, above | this note |
| **Bilanse zdrowia** | Preventive check-ups: 1-4 weeks, 2-6 months, 9 months, 12 months, 2, 4, 5 years, 9-10, 13-14, 16-17, to 19 | the development note |
| **Badania przesiewowe noworodkow** | Newborn dried-blood-spot screening: PKU and congenital hypothyroidism since 1994, CF 2009, 21 metabolic by tandem MS 2014, CAH 2015, biotinidase 2018, SMA 2021 (nationwide 28 March 2022), SCID pilot from September 2025 | the development note |

> **Patronage visits are a fourth thing again** - the midwife's home visits after discharge are neither a bilans nor a vaccination visit. Card 36 dies on exactly this distinction.

**Source:** Program Szczepien Ochronnych na 2026 rok, Komunikat Glownego Inspektora Sanitarnego, Dziennik Urzedowy Ministra Zdrowia 2025 poz. 85 (published 31 October 2025), parsed from the official PDF.`;
