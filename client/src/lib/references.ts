// Standalone reference notes, opened from the rail. Unlike teachingNotes these are not tied
// to one card - they are the "sit and read this" material for topics the deck only touches.
//
// PROVENANCE, shown on every page in the UI too: these are written for this deck, NOT
// extracted from Eva's LEK sources. That is deliberate - the 371-page LEK Last Minute
// Pediatria textbook contains ZERO occurrences of "karyotype", "Klinefelter", "45,X" or
// "Asherman" (checked 2026-08-16), and the doctors' explanations cover none of it either.
// So there was nothing to quote. Verify against a genetics text before relying on detail.

import { developmentNote } from "./reference-development";

export type Reference = { id: string; title: string; subtitle: string; body: string; provenance?: string };

export const references: Reference[] = [
  {
    id: "development",
    title: "Motor, speech & social development",
    subtitle: "Milestones, red flags, primitive reflexes, Tanner staging in both sexes, cerebral palsy",
    body: developmentNote,
    provenance:
      "Mixed provenance, and the note says which is which: the cerebral-palsy section at the end is quoted " +
      "from your LEK Last Minute Pediatria text. The milestone, red-flag, reflex and Tanner tables are written " +
      "for this deck, because the textbook has no normal-development chart at all - zero mentions of social " +
      "smile, babbling, pincer grip, sitting unsupported or Tanner. Check the ages against a paediatrics text.",
  },
  {
    id: "karyotypes",
    title: "Karyotypes & chromosome patterns",
    subtitle: "Reading the notation, sex-chromosome aneuploidies, and the normal-karyotype mimics",
    body: `### How to read the notation

Order is always: **total chromosome count, then the sex chromosomes, then what is unusual.**

| Notation | Reads as |
| --- | --- |
| **46,XX** / **46,XY** | normal female / normal male |
| **47,XY,+21** | 47 chromosomes, male, an extra 21 -> Down syndrome |
| **45,X** | 45 chromosomes, a single X -> Turner syndrome |
| **47,XXY** | 47 chromosomes, an extra X in a male -> Klinefelter |
| **5p minus** | loss of the short arm of chromosome 5 -> cri-du-chat |
| **45,XX,der(14;21)** | Robertsonian translocation -> translocation Down syndrome |
| **45,X/46,XX** | mosaic - two cell lines in one person |

**p** = short arm (petit), **q** = long arm. **+** = an extra whole chromosome, **minus** = missing material.

### Sex-chromosome aneuploidies

| Karyotype | Syndrome | The picture | Exam hook |
| --- | --- | --- | --- |
| **45,X** | **Turner** | Short stature, webbed neck, widely spaced nipples, streak gonads, **primary amenorrhoea**, normal intelligence | **Coarctation of the aorta** and bicuspid aortic valve. About half are mosaic (45,X/46,XX) or carry a structural X abnormality, so a normal-looking blood karyotype does not exclude it |
| **47,XXY** | **Klinefelter** | **Tall** with long limbs, **small firm testes**, gynaecomastia, sparse body hair, azoospermia, language and learning difficulties | Commonest cause of **primary hypogonadism** in males. Hormones: **low testosterone with HIGH LH and FSH**. Often not picked up until puberty or an infertility work-up |
| **47,XYY** | - | Tall, normal fertility, sometimes mild learning or behavioural issues | Fertile - contrast with Klinefelter |
| **47,XXX** | Triple X | Tall, often mild or unnoticed | Usually fertile |
| **48,XXXY / 49,XXXXY** | Klinefelter variants | More severe, intellectual disability | More X material = more severe |
| **46,XX male** | SRY translocated onto an X | Klinefelter-like but **short** and infertile | Height is the discriminator |
| **45,X/46,XY** | Mixed gonadal dysgenesis | Ambiguous or variable genitalia | **Gonadoblastoma risk** - gonadectomy is considered |

> **Klinefelter vs Turner in one line:** an extra X in a male makes him **tall and infertile**; a missing X in a female makes her **short with streak gonads**.

### Autosomal trisomies

| Karyotype | Syndrome | Recognisable by |
| --- | --- | --- |
| **47,+21** | **Down** | Hypotonia, upslanting palpebral fissures, single palmar crease, **AVSD**, duodenal atresia, raised risk of **ALL and AML** |
| **47,+18** | **Edwards** | **Clenched hands with overlapping fingers**, rocker-bottom feet, micrognathia, VSD. Very poor prognosis |
| **47,+13** | **Patau** | **Holoprosencephaly**, cleft lip and palate, **polydactyly**, cutis aplasia. Very poor prognosis |

**Down syndrome mechanism matters for counselling:** about 95% non-disjunction (rises with maternal age), about 4% **Robertsonian translocation** (often 14;21 - if a parent carries it balanced, recurrence risk is high and *not* age-related), about 1% mosaic.

### Deletions, microdeletions and imprinting

| Locus | Syndrome | Hook |
| --- | --- | --- |
| **22q11.2** | **DiGeorge / velocardiofacial** | **CATCH-22**: Cardiac (conotruncal - tetralogy, truncus), Abnormal facies, Thymic aplasia (T-cell deficiency), Cleft palate, **Hypocalcaemia** |
| **5p minus** | **Cri-du-chat** | High-pitched **cat-like cry**, microcephaly |
| **7q11.23** | **Williams** | **Supravalvular aortic stenosis**, **hypercalcaemia**, over-friendly "cocktail party" manner |
| **4p minus** | Wolf-Hirschhorn | "Greek warrior helmet" facial profile |
| **15q11-13, paternal loss** | **Prader-Willi** | Neonatal hypotonia and poor feeding, later hyperphagia and obesity |
| **15q11-13, maternal loss** | **Angelman** | Severe developmental delay, ataxic puppet-like gait, seizures, **inappropriate laughter**, near-absent speech |

> **The imprinting trap:** Prader-Willi and Angelman can involve the *same* region. Which one you get depends on **which parent it came from** - paternal loss gives Prader-Willi, maternal loss gives Angelman. Both can also arise from **uniparental disomy** (both copies inherited from one parent) with nothing visible on a karyotype.

### Things a karyotype cannot show

A karyotype sees whole chromosomes and large structural changes. It does **not** see single-gene mutations or small repeat expansions.

| Condition | Karyotype | Actually caused by |
| --- | --- | --- |
| **Noonan** | **normal** (46,XX or 46,XY) | **PTPN11** and related genes, **autosomal dominant** |
| **Fragile X** | usually normal | **CGG repeat expansion in FMR1** - needs molecular testing |
| **Achondroplasia** | normal | FGFR3 |
| **Marfan** | normal | FBN1 |
| **Congenital adrenal hyperplasia** | normal (46,XX, virilised) | 21-hydroxylase deficiency |
| **Klippel-Feil** | normal | Failed cervical segmentation - see the syndromes note |
| **Asherman** | **normal** | **Acquired** intrauterine adhesions - not genetic at all |

> **The Noonan trap, which the LEK likes:** Noonan looks Turner-*like* - short stature, webbed neck, similar facies - but the karyotype is **normal**, it affects **both sexes**, and the cardiac lesion is **pulmonary stenosis or hypertrophic cardiomyopathy**, not coarctation. Turner = 45,X, girls, **coarctation**. A "Turner-like boy" is Noonan.

### The 46,XY female and the 46,XX female with no uterus

| | **Morris syndrome (complete androgen insensitivity)** | **MRKH (Mullerian agenesis)** |
| --- | --- | --- |
| Karyotype | **46,XY** | **46,XX** |
| Uterus | absent | absent |
| Gonads | intra-abdominal **testes** | normal **ovaries** |
| Pubic and axillary hair | **scant or absent** | normal |
| Testosterone | male range | female range |

Both give **primary amenorrhoea with an absent uterus**. Separate them on **pubic hair and testosterone**. That is exactly how it gets tested, and it is why card 74's answer is **46,XY**.`,
  },
  {
    id: "asherman",
    title: "Asherman syndrome & the amenorrhoea differential",
    subtitle: "Acquired, normal karyotype - and how to place it against Turner, MRKH and Morris",
    body: `### What Asherman actually is

**Intrauterine adhesions (synechiae)** - the walls of the uterine cavity scar together, leaving too little functional endometrium to respond to normal hormones.

It is **acquired, and the karyotype is normal.** It is not a chromosomal or genetic disorder, which is why it sits apart from Turner and Klinefelter even when it turns up in the same amenorrhoea question.

**Causes**

- **Instrumentation** - the big one: dilatation and curettage, especially postpartum or post-abortion
- Uterine surgery (myomectomy, caesarean)
- **Endometritis**, classically **genital tuberculosis** where that is endemic
- Severe postpartum haemorrhage managed with curettage

**Presentation**

- **Secondary amenorrhoea** or markedly light periods **after a procedure** - the history is the clue
- Infertility, recurrent pregnancy loss
- Sometimes cyclical pelvic pain, from functioning endometrium behind an obstruction

**Hormones are normal.** FSH, LH, oestradiol and prolactin are unremarkable, because the axis is intact. The problem is the **end organ**.

> **The discriminating test:** a **progesterone withdrawal challenge produces no bleed**, and neither does oestrogen followed by progesterone. The outflow tract cannot respond. Diagnosis and treatment are both **hysteroscopic** - direct visualisation with adhesiolysis.

### Where it sits in the amenorrhoea differential

**Exclude pregnancy first.** Then split primary from secondary.

| Presentation | Think | Karyotype | Separating feature |
| --- | --- | --- | --- |
| **Primary**, short stature, webbed neck | **Turner** | **45,X** | Coarctation, streak gonads, high FSH |
| **Primary**, absent uterus, **scant pubic hair** | **Morris / CAIS** | **46,XY** | Testosterone in male range, intra-abdominal testes |
| **Primary**, absent uterus, **normal pubic hair** | **MRKH** | **46,XX** | Normal ovaries, normal testosterone |
| **Primary**, cyclical pain, bulging membrane | Imperforate hymen | normal | Obstruction, not endocrine |
| **Secondary**, **after uterine instrumentation** | **Asherman** | **normal** | No bleed on hormone challenge; hysteroscopy diagnostic |
| **Secondary**, galactorrhoea | Hyperprolactinaemia | normal | Raised prolactin - check drugs, prolactinoma |
| **Secondary**, hirsutism, irregular cycles | PCOS | normal | Raised androgens, ultrasound findings |
| **Secondary**, low weight, athlete, stress | Functional hypothalamic | normal | **Low** FSH, LH and oestradiol |
| **Secondary**, hot flushes, young | Premature ovarian insufficiency | often normal (check Turner mosaic, fragile X premutation) | **High** FSH |

> **One line:** high FSH points to the **ovary**, low FSH points to the **hypothalamus or pituitary**, and **normal FSH with no withdrawal bleed** points to the **outflow tract - Asherman**.`,
  },
  {
    id: "syndromes",
    title: "PKU, Klippel-Feil & other named syndromes",
    subtitle: "Screened metabolic disease, cervical fusion, imprinting disorders and the classic look-alikes",
    body: `### PKU - phenylketonuria

**Phenylalanine hydroxylase deficiency**, **autosomal recessive**. Phenylalanine cannot be converted to tyrosine, so it accumulates.

| | |
| --- | --- |
| **Detected by** | **Newborn screening** (heel-prick, Guthrie card) - the classic screened metabolic disease |
| **Untreated** | Progressive **intellectual disability**, seizures, microcephaly, behavioural problems |
| **Classic signs** | **Musty or mousy body odour**, **fair skin, blond hair, blue eyes** (less tyrosine means less melanin), eczema |
| **Treatment** | **Phenylalanine-restricted diet**; tyrosine becomes an essential amino acid; lifelong monitoring |
| **Trap** | **Aspartame** is a phenylalanine source - hence the warning on diet drinks |

> **Maternal PKU:** a mother with poorly controlled PKU exposes a **genetically normal** fetus to high phenylalanine, causing microcephaly, intellectual disability and **congenital heart disease**. Control must be tight **before conception**, not once pregnancy is confirmed.

**Why screening exists:** the damage is preventable but not reversible. A child treated from the newborn period develops normally; one diagnosed after symptoms appear does not get back what was lost.

### Klippel-Feil syndrome

**Congenital fusion of two or more cervical vertebrae**, from failed segmentation early in development. **Karyotype is normal**; most cases are sporadic.

**The classic triad** - all three together are actually the minority, so do not wait for the full set

1. **Short neck**
2. **Low posterior hairline**
3. **Restricted neck movement**, especially rotation and lateral flexion

**The associations are where the marks are**

- **Sprengel deformity** - a congenitally elevated scapula
- **Renal anomalies** - agenesis or malformation, so image the kidneys
- **Sensorineural hearing loss**
- Scoliosis, congenital heart disease

> **Why it matters clinically:** fused segments transfer stress to the mobile segments beside them, so these patients carry a **raised risk of cervical cord injury** from relatively minor neck trauma. That is what drives contact-sport advice.

### Other syndromes worth having straight

| Syndrome | Genetics | The give-away |
| --- | --- | --- |
| **Angelman** | 15q11-13, **maternal** loss or paternal UPD; UBE3A | Ataxic puppet-like gait, seizures, near-absent speech, **inappropriate laughter**, happy demeanour |
| **Prader-Willi** | 15q11-13, **paternal** loss or maternal UPD | Neonatal **hypotonia and poor feeding**, then hyperphagia, obesity, small hands and feet, hypogonadism |
| **Rett** | **MECP2**, X-linked dominant | Girls; normal early development then **regression**, loss of purposeful hand use, **hand-wringing**, acquired microcephaly |
| **Beckwith-Wiedemann** | 11p15 imprinting | Macrosomia, **macroglossia**, omphalocele, neonatal hypoglycaemia, **Wilms tumour and hepatoblastoma risk** |
| **Duchenne muscular dystrophy** | **Dystrophin**, X-linked recessive | Boys, **Gowers sign**, calf pseudohypertrophy, very high CK |
| **Cystic fibrosis** | **CFTR**, autosomal recessive | Meconium ileus, failure to thrive, recurrent chest infection, **raised sweat chloride** |
| **Galactosaemia** | GALT, autosomal recessive | Jaundice, hepatomegaly and **E. coli sepsis** in a neonate after milk feeds; **cataracts** |
| **Homocystinuria** | Cystathionine beta-synthase, autosomal recessive | Marfan-like habitus but the **lens dislocates DOWNWARD**, thrombosis, intellectual disability |
| **Marfan** | FBN1, autosomal dominant | Lens dislocates **UPWARD**, aortic root dilatation, normal intellect |

> **The lens trap:** Marfan **up**, homocystinuria **down**. Both are tall and long-limbed; the direction of dislocation, plus thrombosis and intellect, separate them.`,
  },
];
