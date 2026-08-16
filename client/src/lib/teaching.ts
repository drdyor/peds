// Eva's own teaching notes, keyed by card id, written in markdown and rendered by
// components/Markdown.tsx. These are HERS — distinct from Manus's short memory cue and from
// the Konsylium doctors' explanations — so the card labels them as such.
//
// To add another: paste the markdown as a new entry. Tables, headings, lists, bold and
// blockquotes all render; nothing else is needed.

export const teachingNotes: Record<number, string> = {
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
