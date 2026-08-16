// Eva's own teaching notes, keyed by card id, written in markdown and rendered by
// components/Markdown.tsx. These are HERS — distinct from Manus's short memory cue and from
// the Konsylium doctors' explanations — so the card labels them as such.
//
// To add another: paste the markdown as a new entry. Tables, headings, lists, bold and
// blockquotes all render; nothing else is needed.

export const teachingNotes: Record<number, string> = {
  // Card 5 — primary immunodeficiency warning signs. From Eva's ESID paste (2026-08-16),
  // lifted out of the answer paragraph so it renders as a proper list rather than prose.
  5: `### ESID / Jeffrey Modell warning signs of primary immunodeficiency

The current list uses **≥ 4 new ear infections in 1 year** as the paediatric red flag — so statement 1 of this question (six acute otitis media in a year) **does** count as a warning sign.

> ⚠️ Older literature sometimes used **≥ 8 ear infections per year**. Know both numbers — the current ESID/JMF figure is **4**.

### The ten warning signs

1. **≥ 4 new ear infections** within 1 year
2. **≥ 2 serious sinus infections** within 1 year
3. **≥ 2 months on antibiotics** with little effect
4. **≥ 2 pneumonias** within 1 year
5. Failure of an infant to **gain weight or grow normally**
6. Recurrent **deep skin or organ abscesses**
7. Persistent **oral thrush** or fungal infection
8. Need for **IV antibiotics** to clear infections
9. **≥ 2 deep-seated infections**, including septicaemia
10. **Family history of PID**

### What this does and does not tell you

Four ear infections **do not diagnose** immunodeficiency. It is a *warning sign* that should prompt consideration — especially alongside pneumonia, poor growth, persistent thrush, unusual organisms, or a need for IV antibiotics.

### For this question specifically

Because any valid combination must include statement 1, **option D (2,3,4,5) can be ruled out**. Statement 6 is truncated in the source PDF, so the full key still cannot be reconstructed — that part is not your misreading, the source is incomplete.

Sources: ESID Clinical Working Party resources; Immunodeficiency UK; PMC3245434.`,

  // Card 9 — monogenic diabetes (Wolfram / DEND / MODY). Added 2026-08-16 from Eva's write-up.
  9: `Focus on **age of onset + extra-pancreatic features + gene + treatment**.

### 1. Wolfram syndrome = DIDMOAD

**W**olfram → **WFS1** gene → **DIDMOAD**

- **D** = Diabetes **I**nsipidus
- **D** = Diabetes **M**ellitus
- **O** = **Optic atrophy**
- **A** = **Deafness**

Usually **autosomal recessive**, most commonly due to **WFS1** mutations.

**Typical presentation:** a child/teenager develops **diabetes mellitus → optic atrophy → ± DI → ± deafness**. The diabetes is usually **non-autoimmune insulin-deficient diabetes**, so it can initially be mistaken for type 1.

Other possible features: sensorineural deafness; central diabetes insipidus → polyuria/polydipsia; urinary tract abnormalities; neurologic/neuropsychiatric problems.

> **Exam clue:** child with juvenile diabetes + progressive visual loss/optic atrophy = **Wolfram syndrome**.

Mnemonic: **WOLFRAM = "WOW, I can't see/hear and I'm thirsty" → DIDMOAD**

### 2. DEND syndrome

**D**evelopmental delay · **E**pilepsy · **N**eonatal **D**iabetes

Usually due to an activating mutation in **KCNJ11**, encoding the **Kir6.2** subunit of the pancreatic β-cell ATP-sensitive potassium (**KATP**) channel.

**Why the mutation causes diabetes.** Normally: ↑ATP → KATP channel closes → β-cell depolarisation → Ca²⁺ influx → insulin release. With an **activating KCNJ11 mutation**: KATP channel stays open → β-cell stays hyperpolarised → ↓insulin secretion → neonatal diabetes. The same channel matters in the brain, which explains the **developmental delay + epilepsy**.

> **Exam clue:** neonatal diabetes + seizures + developmental delay = **DEND → think KCNJ11**.

**Treatment pearl.** Many patients with KCNJ11-related neonatal diabetes respond dramatically to **sulfonylureas**, which close the KATP channel by a mechanism that bypasses the defective ATP sensing. So: *"baby with permanent neonatal diabetes, developmental delay and epilepsy; KCNJ11 mutation — best treatment?"* → **sulfonylurea**, not automatically lifelong insulin.

### 3. MODY — Maturity-Onset Diabetes of the Young

Monogenic diabetes, usually **autosomal dominant**.

> Young patient + diabetes + strong family history through multiple generations + no obesity/insulin resistance + **negative pancreatic autoantibodies** → think **MODY**.

| Type | Gene | Classic clue | Treatment |
| --- | --- | --- | --- |
| **MODY 1** | **HNF4A** | Diabetes + **macrosomia / neonatal hypoglycaemia** | Sulfonylurea |
| **MODY 2** | **GCK** | **Mild, stable fasting hyperglycaemia** | Usually **none** |
| **MODY 3** | **HNF1A** | Progressive diabetes + **glycosuria** | **Sulfonylurea** |
| **MODY 5** | **HNF1B** | Diabetes + **renal cysts / renal abnormalities** | Often insulin |

**MODY 2 — GCK.** Glucokinase is the **glucose sensor of the β-cell**. Mutation → the β-cell has a **higher glucose threshold** for insulin secretion → **mild fasting hyperglycaemia that stays relatively stable**. Usually no treatment outside special circumstances such as pregnancy.

> **Exam clue:** 12-year-old, fasting glucose ~110–140 mg/dL on repeated tests, completely well, no obesity, no progression, parent also has mild hyperglycaemia → **GCK-MODY (MODY 2)**.

### The big comparison

**Wolfram** — diabetes + eyes/ears/DI → **WFS1** → DIDMOAD

**DEND** — neonatal diabetes + brain → **KCNJ11** → developmental delay + epilepsy + neonatal diabetes → often **sulfonylurea-responsive**

**MODY** — young diabetes + dominant family history. Then: **GCK** = mild/stable → no treatment · **HNF1A** = glycosuria → sulfonylurea · **HNF4A** = big baby + neonatal hypoglycaemia → sulfonylurea · **HNF1B** = kidney disease → renal cysts

> **One-line LEK memory trick:** "Wolfram sees/hears, DEND seizes, MODY runs in the family."

Sources: PMC6312113 (monogenic diabetes in children); PubMed 28666500 and 16019717 (DEND / Kir6.2); PMC12690183 (ADA Standards of Care 2026, diagnosis & classification); PMC11854986 (ISPAD 2024).`,

  // Card 8 — vesico-ureteral reflux. Added 2026-08-16 from Eva's own write-up.
  // NOTE: the pasted source was truncated mid-sentence at the very end ("= surgeThose
  // absolute statements are what make **3 and 4 false*"). The closing two lines are
  // reconstructed to what they were plainly heading toward; everything else is verbatim.
  8: `### What is VUR?

**Vesico-ureteral reflux** means urine flows **backward from the bladder up into the ureter, and sometimes toward the kidney**, instead of flowing only downward.

Normally: **Kidney → ureter → bladder → urethra → outside**

With VUR: **Kidney ← ureter ← bladder**

The concern is that repeated reflux, particularly when associated with infection, can contribute to **kidney damage/scarring**.

### There are 5 grades of VUR

The grading is based mainly on what is seen on **voiding cystourethrography (VCUG)**.

| Grade | What happens |
| --- | --- |
| **I** | Reflux enters the ureter but does **not reach the renal pelvis** |
| **II** | Reflux reaches the **renal pelvis**, but there is **no dilation** |
| **III** | Mild/moderate dilation of ureter/renal pelvis |
| **IV** | More significant dilation and tortuosity |
| **V** | Severe dilation/tortuosity; loss of normal anatomy |

A useful way to remember it:

**I–II = reflux without significant dilation**
**III = moderate dilation**
**IV–V = increasingly severe dilation**

### Statement by statement

**1) "Diagnosis is based on voiding cystourethrography" — TRUE**

VCUG/MCUG is the classic test used to **demonstrate and grade VUR**. The bladder is filled with contrast and X-rays are taken while the patient voids. If contrast moves backward into the ureters, VUR is demonstrated.

**2) "We identify five grades of VUR" — TRUE**

There are **5 grades (I–V)**. As the grade increases, reflux becomes progressively more severe, with increasing dilation and tortuosity of the ureter and collecting system.

**3) "Only grade I primary VUR is treated conservatively" — FALSE**

This is the important one. **Conservative treatment is not limited to grade I.** Low-grade VUR, particularly **grades I–III**, is commonly managed initially with observation/conservative measures, depending on the patient's age, recurrent UTIs, renal findings, etc. Saying **"only grade I"** is too restrictive.

**4) "Refluxes with ureteral distension are treated surgically" — FALSE / too absolute**

**Ureteral distension does not automatically mean surgery.** Grade III VUR, for example, can involve dilation but may still be managed conservatively, particularly in children, because VUR can resolve spontaneously. Higher grades (**IV–V**) are much more likely to require intervention, especially if there are recurrent infections, renal damage, or persistent significant reflux.

**5) "Grade I, II, III VUR are treated conservatively" — generally TRUE in the context of this question**

Low-grade VUR (I–III) is generally approached initially with **conservative management**, particularly in children. This can involve observation/follow-up, management and prevention of UTIs, sometimes antibiotic prophylaxis depending on the individual situation, and monitoring for renal damage. Many cases improve or resolve as the child grows.

### Therefore the FALSE statements are 3 and 4

| Statement | Answer | Why |
| --- | --- | --- |
| 1. Diagnosis based on VCUG | True | VCUG demonstrates and grades VUR |
| 2. Five grades | True | Grades I–V |
| 3. Only grade I treated conservatively | **False** | Grades I–III can generally be managed conservatively |
| 4. Any ureteral distension → surgery | **False** | Distension does not automatically require surgery |
| 5. Grades I–III treated conservatively | True | Generally the initial approach |

### Exam shortcut

**VUR I–II → low grade → usually conservative**
**VUR III → intermediate → often initially conservative**
**VUR IV–V → high grade → more likely intervention**

And remember the wording traps:

> **"ONLY grade I"** → wrong

> **"All reflux with distension = surgery"** → wrong

Those absolute statements are what make **3 and 4 false**.`,
};
