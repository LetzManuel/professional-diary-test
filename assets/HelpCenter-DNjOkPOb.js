var ae=Object.defineProperty;var oe=(n,r,i)=>r in n?ae(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i;var N=(n,r,i)=>oe(n,typeof r!="symbol"?r+"":r,i);import{$,j as s,u as le,a0 as de,r as S,a1 as ee}from"./index-Cv-qTbNC.js";const ue=`---
title: Freigaben
group: work
order: 2
contexts: approvals
summary: Eingereichte Wochen prüfen, freigeben oder zur Korrektur zurückgeben.
keywords: freigeben, Genehmigung, einreichen, zurückgeben, Woche, Führungskraft, Manager, Projektleitung
audience: Manager, Projektleitung, Admins
---

Das Menü **Freigaben** erscheint, sobald im Unternehmen Freigaben verwendet werden – entweder für alle (Einstellungen › Team: *Stunden müssen freigegeben werden*) oder für einzelne Aufgaben eines Projekts (*Stunden müssen freigegeben werden* bei der Rolle, mit *Freigabe durch*).

![Freigaben](a-freigaben.webp)

## Wie es abläuft {#ablauf}

1. Mitarbeitende erfassen ihre Stunden und **reichen die Woche ein** (Zeiten oder Freigaben).
2. Die freigebende Person sieht die Woche hier, gruppiert nach Person und Kalenderwoche, mit Projekt, Aufgabe und Tätigkeit.
3. **Freigeben** – einzelne Einträge oder alle gewählten. Freigegebene Stunden kommen in die [Abrechnung](help:run).
4. **Zurückgeben** – mit einer Notiz, was korrigiert werden soll. Die Person sieht den Hinweis unter „Heute“, korrigiert und reicht neu ein.

## Noch nicht eingereicht {#nicht-eingereicht}

Unter *Noch nicht eingereicht* stehen Stunden, die eine Freigabe brauchen, aber noch nicht eingereicht sind. Sie werden erst nach Einreichen und Freigabe abgerechnet; die Abrechnung weist darauf hin („… h warten noch auf Freigabe“).

## Gut zu wissen {#tipps}

- Stunden, die die freigebende Person selbst bucht, gelten als freigegeben.
- Stunden von Aufgaben **ohne** Freigabepflicht sind automatisch freigegeben.
- Eingereichte Einträge ändert nur ein Manager, freigegebene nur ein Admin.
- Wer eine Zahl beim Menü und eine E-Mail bei neuen Einreichungen bekommt, stellt jede Person unter [Mein Profil › Benachrichtigungen](help:profile#benachrichtigungen) ein.
- Mit dem Modul [Abläufe](help:processes) lassen sich mehrstufige Freigabeketten mit Erinnerung und Eskalation bauen.
`,he=`---
title: Eigene Berichte
group: reports
order: 2
contexts: reports.custom
summary: Eigene Auswertungen aus allen Tabellen – mit Filtern, Gruppierung, Vergleich, Diagramm, Excel und PDF; speichern und auf die Übersicht heften.
keywords: Bericht, Report, eigene Auswertung, Gruppieren, Filter, Diagramm, Chart, Tabellen vergleichen, anheften, Dashboard, speichern
audience: Manager, Finanzen, Admins
---

Auswertungen › **Eigene Berichte**: alle Tabellen der App (Stunden, Projekte, Kunden, Rechnungen, Angebote, Reisekosten …) zu eigenen Berichten kombinieren.

![Eigene Berichte](e-berichte-start.webp)

## Einen Bericht bauen {#bauen}

1. **Neuer Bericht** – oder eine Vorlage wählen.
2. **Tabelle** wählen, z. B. Stunden.
3. **Spalte hinzufügen:** Felder der Tabelle und ihrer verknüpften Tabellen (z. B. bei Stunden auch Projekt, Kunde, Person).
4. **Filter hinzufügen:** Feld, Vergleich, Wert. Bei Datumsfeldern gehen auch \`today\`, \`today-30\`.
5. **Gruppieren nach** (z. B. Kunde, Monat) – Kennzahlen werden summiert.
6. Als Tabelle oder **Diagramm** ansehen; **Excel** und **PDF** exportieren.

Werden nur die ersten Zeilen angezeigt, Filter oder Gruppierung verwenden.

## Tabellen vergleichen {#vergleichen}

*Tabellen vergleichen* stellt Kennzahlen aus mehreren Tabellen nebeneinander, zusammengeführt nach Kunde, Projekt, Person oder Zeitraum – z. B. geleistete Stunden neben verrechnetem Umsatz je Kunde.

## Speichern und anheften {#speichern}

- **Bericht speichern** bzw. **Speichern als …** – gespeicherte Berichte sieht das Team unter *Gespeicherte Berichte*.
- **Auf Übersicht anheften** zeigt den Bericht als Kachel in der [Übersicht](help:reports#uebersicht); *Von Übersicht lösen* nimmt ihn wieder weg.

## Berichte in Abläufen {#ablaeufe}

Die Filter eigener Berichte sind auch die Bedingungen in [Abläufen](help:processes); ein gespeicherter Bericht kann per Ablauf regelmäßig als PDF oder Excel verschickt werden.
`,ce=`---
title: Kunden
group: sales
order: 1
contexts: customers, customers.detail#kunde-bearbeiten
summary: Stammdaten, Kontakte, Aktivitäten und alles, was zu einem Kunden gehört.
keywords: Kunde, Stammdaten, Kontakt, Ansprechpartner, Aktivität, Wiedervorlage, Kürzel, Rechnungs-E-Mail, UID, Zahlungsziel, Rechnungsrhythmus, Unterkunde, Kundengruppe, Konzern, CRM
---

![Kundenliste](a-kunden.webp)

## Einen Kunden anlegen {#anlegen}

1. **+ Neuer Kunde**.
2. **Unternehmensname** und Anschrift eintragen. Das **Kürzel** (A, B … Z, AA …) vergibt die App beim Speichern – eindeutig im ganzen Unternehmen.
3. Unter **Rechnungen**: Rechnungs-E-Mail, UID-Nummer, Zahlungsziel (Tage), USt-Satz und ggf. USt-Hinweis (z. B. Reverse Charge), Rechnungssprache, Währung, Rechnungsrhythmus (wöchentlich/monatlich), *Stundennachweis mitschicken*, *Reisekosten als eigene Rechnung* und ein eigenes Dokumentdesign.
4. **Speichern**.

Schneller geht es direkt im Angebot: in der Kundenauswahl *+ Neuer Kunde …* – Name genügt, der Rest später.

> **UID-Nummer:** Rechnungen über 10.000 € brutto und Reverse-Charge-Rechnungen ins Ausland brauchen die UID des Kunden. Fehlt sie, warnt die Abrechnung.

## Einen Kunden bearbeiten {#kunde-bearbeiten}

Ein Klick auf den Kunden öffnet ihn mit seinen Reitern:

| Reiter | Inhalt |
|---|---|
| Stammdaten | Name, Anschrift, Rechnungsangaben, Bild/Logo (*Online suchen* findet es auf der Website) |
| Kontakte | Ansprechpartner mit Funktion, E-Mail, Telefon; *Rechnungsempfänger* und *Rechnung CC* (bekommen Rechnungen, Mahnungen und Angebote in Kopie); *Projekte* ordnet den Kontakt einzelnen Projekten zu |
| Aktivitäten | Anrufe, Meetings, E-Mails, Notizen mit Wiedervorlage-Datum; gesendete Mails aus der App stehen hier automatisch |
| Projekte | alle Projekte des Kunden; *+ Projekt* legt eines an |
| Unterkunden, Rahmenverträge, Dokumente | wenn unter Einstellungen › Allgemein eingeschaltet – siehe [Größere Unternehmen](help:large) |
| Reisekosten | Ausgaben zu diesem Kunden, mit Status und Belegen |
| E-Mail-Vorlagen | eigene Texte für diesen Kunden – siehe [E-Mails & Mahnwesen](help:settings-mail#kundenvorlagen) |

![Ein Kunde mit seinen Reitern](a-kunde-detail.webp)

## Aktivitäten und Wiedervorlagen {#aktivitaeten}

*Aktivität erfassen* hält einen Kontakt fest: Datum, Art (Anruf, Meeting, E-Mail, Angebot, Aufgabe, Notiz), Betreff, Notiz. Mit **Wiedervorlage** erscheint sie an diesem Tag unter [Heute](help:today#heute), bis sie *erledigt* ist.

## Kontaktieren {#kontaktieren}

Das Briefsymbol in der Liste (oder *Kontaktieren* bei mehreren gewählten) öffnet eine E-Mail an die Kontakte. Mit eingerichtetem Mailserver sendet die App direkt, Sie bekommen eine Kopie, und die Mail wird als Aktivität vermerkt; sonst öffnet sich Ihr Mailprogramm.

## Inaktiv setzen und löschen {#loeschen}

Ein Kunde ohne Projekte, Angebote, Rechnungen oder Reisekosten wird gelöscht. Hat er schon welche, wird er **deaktiviert** – er verschwindet aus den Auswahllisten, bleibt aber in Auswertungen. *Inaktive anzeigen* bringt ihn zurück, *Wieder aktivieren* macht ihn wieder wählbar.

## Kundenprojekt {#kundenprojekt}

Jeder Kunde hat ein **Kundenprojekt** (Kürzel A0, B0 …) für Stunden, die keinem eigenen Projekt zugeordnet sind, z. B. Akquise beim Kunden. Es gehört zum Kunden und wird mit ihm deaktiviert.
`,ge=`---
title: Reisekosten
group: work
order: 3
contexts: expenses, expenses.reports#abrechnungen
summary: Belege, Kilometergeld und Tagesgeld erfassen, monatlich oder per Spesenbericht abrechnen und an Kunden weiterverrechnen.
keywords: Spesen, Ausgabe, Beleg, Kilometergeld, Tagesgeld, Diäten, Nächtigung, Spesenbericht, Abrechnung, erstatten, weiterverrechnen, Fremdwährung
---

Unter **Reisekosten** erfassen alle ihre Ausgaben. Der Status ergibt sich von selbst: *offen* → *an Mitarbeiter bezahlt* (erstattet) → *verrechnet* (auf einer Kundenrechnung) → *vom Kunden bezahlt*.

## Eine Ausgabe erfassen {#erfassen}

1. **Ausgabe erfassen**.
2. **Kategorie** wählen – sie bestimmt, was gefragt wird:
   - *Betrag laut Beleg* (Hotel, Bahn …): Betrag, Währung, USt-Satz.
   - *Kilometer × Satz*: Kilometer, von, nach.
   - *Tage × Tagesgeld*: Land, Tage (auch \`0,5\`) und gestellte Mahlzeiten, die das Tagesgeld kürzen.
   - *Nächtigung*: Nächte.
3. **Bezahlt mit:** privat (wird erstattet) oder Unternehmenskarte.
4. **Kunde / Projekt** und ob die Ausgabe **an den Kunden weiterverrechnet** wird – dann erscheint sie in der nächsten Abrechnung des Kunden als „Reisekosten“ zum Nettobetrag.
5. **Beleg hinzufügen** – Foto oder PDF, höchstens 8 MB.

Bei Fremdwährung schlägt die App den EZB-Kurs des Tages vor; er ist änderbar.

![Eine Ausgabe erfassen](u-ausgabe.webp)

## Abrechnungen {#abrechnungen}

Reiter **Abrechnungen**:

- **Monatsabrechnungen** entstehen von selbst – je Person und Monat.
- **Spesenbericht anlegen** fasst Ausgaben einer Reise oder eines Projekts zusammen (z. B. „Workshop Linz“). Mit Kunde und Projekt oder mit *Mehrere Projekte* (dann je Position wählen). *Vorhandene zuordnen …* holt schon erfasste Ausgaben in den Bericht.
- **Einreichen** → die Buchhaltung markiert **Als erstattet**. Erstattete Abrechnungen sind gesperrt; *Wieder öffnen* hebt das auf.
- **PDF** erstellt die Abrechnung mit allen Positionen; fehlende Belege werden angezeigt.

![Abrechnungen](u-reisekosten-abrechnungen.webp)

## An Kunden weiterverrechnen {#weiterverrechnen}

Weiterverrechenbare Ausgaben kommen mit der nächsten [Abrechnung](help:run) auf die Rechnung des Kunden – oder auf eine eigene Rechnung, wenn beim Kunden *Reisekosten als eigene Rechnung* eingestellt ist. Spesenberichte lassen sich auch direkt **verrechnen**, mehrere gemeinsam, wenn sie an denselben Rechnungsempfänger gehen. Beim Senden der Rechnung können die **Originalbelege** als PDF mitgeschickt werden.

## Einstellungen {#einstellungen}

Kategorien, Kilometer- und Tagesgeldsätze je Land und die Kürzung je Mahlzeit pflegen Admins unter [Einstellungen › Reisekosten](help:settings-expenses).
`,me=`---
title: Rechnungen
group: billing
order: 2
contexts: invoices, invoices.detail#rechnung-oeffnen
summary: Rechnungen ansehen, senden, korrigieren, stornieren, Zahlungen erfassen – und manuelle Rechnungen schreiben.
keywords: Rechnung, Faktura, senden, versendet, bezahlt, überfällig, Gutschrift, stornieren, korrigieren, Version, manuelle Rechnung, Zahlung, PDF, Mahnung, Stundennachweis, Belege, Kopieren
---

Die Liste zeigt alle Rechnungen mit Status (*Entwurf*, *offen*, *versendet*, *teilbezahlt*, *bezahlt*, *überfällig*, *storniert*, *Gutschrift*), Filter nach Status und Geschäftsjahr und oben die offene Summe. Der Reiter **Zahlungseingänge** ist unter [Zahlungen und Kontoauszug](help:payments) beschrieben.

## Eine Rechnung öffnen {#rechnung-oeffnen}

Ein Klick öffnet die Rechnung: Positionen, Summen je USt-Satz, verknüpfte Stunden und Reisekosten, Zahlungen, Versand, interne Notiz und archivierte Versionen.

![Eine Rechnung](a-rechnung.webp)

## Senden {#senden}

1. **Senden**.
2. **An** ist vorbelegt (Projekt-, Kunden- oder Kontakt-E-Mail), **CC** wählen Sie aus Kontakten, Kolleg:innen oder *Andere …* (bis 10). Betreff und Text kommen aus der [E-Mail-Vorlage](help:settings-mail).
3. Anhänge: das Rechnungs-PDF, auf Wunsch der **Stundennachweis** (*Stunden wählen …* für Rechnungen ohne verknüpfte Stunden), die **Originalbelege** der Reisekosten und weitere Dateien.
4. **Jetzt senden** – über den Mailserver Ihres Unternehmens; Sie bekommen eine Kopie. Ohne Mailserver: *Mailprogramm öffnen*, danach **Als versendet markieren**.

![Senden](a-rechnung-senden.webp)

Mehrere Rechnungen desselben Kunden: in der Liste auswählen › *In einer Mail senden*.

## Korrigieren und stornieren {#korrigieren}

- **Bearbeiten** geht, solange die Rechnung **nicht versendet** und nicht bezahlt ist. Nummer und Kunde bleiben; jede gespeicherte Fassung bleibt als Version (v1, v2 …) im Archiv.
- Nach dem Versand ist die Rechnung schreibgeschützt. Korrektur per **Stornieren**: Es entsteht eine **Gutschrift** mit eigener Nummer, die verrechneten Stunden werden wieder offen und können neu abgerechnet werden.
- *Versand zurücknehmen* hebt ein irrtümliches „versendet“ wieder auf.

## Zahlungen {#zahlungen}

- **Zahlung erfassen:** Datum, Betrag, Notiz. Teilzahlungen sind möglich; bei Fremdwährung optional der gutgeschriebene Betrag in Euro.
- **Als bezahlt markieren** (auch für mehrere gewählte): erfasst je einen Zahlungseingang über den offenen Betrag.
- ✕ bei einer Zahlung nimmt sie von der Rechnung. Zahlungen aus dem Kontoauszug bleiben unter Zahlungseingänge und können neu zugeordnet werden.

![Bezahlt](a-rechnung-bezahlt.webp)

## Mahnungen {#mahnungen}

Überfällige Rechnungen bekommen Zahlungserinnerung und Mahnstufen nach den Regeln unter [E-Mails & Mahnwesen](help:settings-mail#mahnungen). In der Rechnung lassen sich Mahnungen für diese Rechnung **pausieren** (z. B. bei Reklamation).

## Manuelle Rechnung {#manuell}

**Manuelle Rechnung** für Leistungen ohne gebuchte Stunden: Kunde, optional Projekt und Projekttext, externe Bestellnummer, Leistungszeitraum, Positionen (mit eigenem USt-Satz, aus [Artikeln](help:items)), *Offene Reisekosten übernehmen*. **Rechnung erstellen** vergibt die nächste Nummer.

Rechnungen aus einem Angebot entstehen im [Angebot](help:offers#rechnungen).

## Kopieren {#kopieren}

**Kopieren** legt eine neue Rechnung mit denselben Positionen an (neue Nummer beim Erstellen) – nur ohne gebuchte Stunden und wenn das Unternehmen es erlaubt.

## PDF {#pdf}

**PDF öffnen** zeigt das archivierte Original. *PDF neu erzeugen* erstellt es mit dem aktuellen Design – ausgestellte Inhalte ändern sich dabei nicht. Wo PDFs gespeichert werden, stellen Sie unter [Dokumentdesign](help:settings-design#ablage) ein.
`,pe=`---
title: Artikel
group: sales
order: 3
contexts: items
summary: Artikelkatalog für Material und Arbeit – mit Nummer, Einheit, Preis und Spanne.
keywords: Artikel, Katalog, Material, Arbeit, Artikelnummer, Warengruppe, Verkaufspreis, Einkaufspreis, Spanne, Handwerk
---

Das Menü **Artikel** erscheint, wenn unter [Einstellungen › Allgemein](help:settings-general) der *Artikelkatalog (Handwerk)* eingeschaltet ist.

## Einen Artikel anlegen {#anlegen}

1. **+ Artikel**.
2. **Artikelnr.**, **Bezeichnung**, **Warengruppe** und **Art** (*Material* oder *Arbeit*).
3. **Einheit** (aus [Einheiten](help:settings-units-vat)), **Verkaufspreis** und optional **USt. %** (leer = Satz des Kunden).
4. **Einkaufspreis** – nur für Berechtigte sichtbar, wird nie gedruckt. Die App zeigt die **Spanne**.
5. **Langtext** – der Text der Position auf Angebot und Rechnung (leer = Bezeichnung).

Preisänderungen bleiben im **Preisverlauf** sichtbar. Artikel, die schon auf Belegen stehen, werden beim Löschen archiviert.

## Artikel verwenden {#verwenden}

In Angeboten und manuellen Rechnungen holt **+ Artikel** eine Position aus dem Katalog. Die Summen zeigen Zwischensummen für Material und Arbeit.

## Excel {#excel}

Viele Artikel auf einmal: *Import › Vorlage herunterladen*, ausfüllen, einlesen – siehe [Listen](help:lists#excel).
`,fe=`---
title: Funktionen für größere Unternehmen
group: projects
order: 3
summary: Unterkunden, Kundengruppen, Programme, Rahmenverträge, Meilensteine, Dokumente und Cluster – einzeln einschaltbar.
keywords: Unterkunde, Endkunde, Rechnung an, Kundengruppe, Konzern, Programm, Teilprojekt, Rahmenvertrag, Abruf, Meilenstein, Zahlungsplan, Dokumente, Vertrag, NDA, Bestellung, Verknüpfung, Folgeprojekt, Gesamtbudget
---

Unter [Einstellungen › Allgemein](help:settings-general) schalten Admins diese Bausteine einzeln ein. Ausgeschaltet ist nichts davon sichtbar.

## Unterkunden {#unterkunden}

Für Arbeit, die über einen anderen Kunden verrechnet wird (z. B. über einen Partner): Am Projekt oder Angebot den eigentlichen Kunden wählen und unter **Rechnung an** den Kunden, der die Rechnung bekommt. Auswertungen zählen das Projekt trotzdem zum eigentlichen Kunden. Beim Rechnungsempfänger zeigt der Reiter *Unterkunden* alle, die über ihn laufen. *Kunde aus Projekt anlegen* macht aus einem Projektnamen einen eigenen Kunden.

## Kundengruppen (Konzern) {#kundengruppen}

Beim Kunden *Gehört zur Kundengruppe* wählen (der Kunde an der Spitze des Konzerns). Auswertungen lassen sich nach Kundengruppe gruppieren.

## Programme mit Teilprojekten {#programme}

Ein Projekt als **Programm (Überprojekt)** markieren; andere Projekte – auch bei anderen Kunden – sind *Teil von Programm*. Stunden, Budget und Rechnungen werden im Reiter *Teilprojekte* summiert.

## Verknüpfungen {#verknuepfungen}

Projekte, die zusammengehören: *ist Folgeprojekt von*, *ist Teil des Programms*, *ist verwandt mit*. **Folgeprojekt anlegen** kopiert Einstellungen, Rollen mit heutigen Sätzen und Team – auch für einen anderen Kunden – und verknüpft beide.

## Rahmenverträge mit Abrufen {#rahmenvertraege}

Ein Angebot als **Rahmenvertrag** anlegen (beim Kunden Reiter *Rahmenverträge › Rahmenvertrag*). Projekte wählen *Abruf aus Rahmenvertrag*; was auf ihnen verrechnet wird, zählt gegen den Nettobetrag des Vertrags. *Sätze aus Rahmenvertrag* übernimmt Rollen und Sätze ins Abruf-Projekt. Ein [Stundenkontingent](help:quota) kann über alle Abrufe laufen.

## Meilensteine {#meilensteine}

Angebote, Rahmenverträge und Projekte nach **Meilensteinen** statt nach Stunden abrechnen:

1. Im Angebot unter Verrechnung *Nach Meilensteinen abrechnen* – die Meilensteine stehen als **Zahlungsplan** im PDF.
2. Beim Annehmen gehen sie ins Projekt (Reiter *Meilensteine*). Betrag fest oder als % vom **Gesamtbudget (netto)**.
3. Status: ausstehend → in Bearbeitung → **erledigt** (dann bietet die App eine *Abnahme-Mail* an) → verrechnet → bezahlt.
4. Erledigte Meilensteine einzeln oder gemeinsam verrechnen – im Projekt oder in der [Abrechnung](help:run).

Stunden werden bei Meilenstein-Projekten erfasst, aber nicht im Abrechnungslauf verrechnet – außer bei Aufgaben mit *Zur Verrechnung (Stunden)*.

## Dokumente und Verträge {#dokumente}

Reiter *Dokumente* bei Kunden, Projekten und Angeboten: Dateien hineinziehen (bis 25 MB), Art (Vertrag, Bestellung, NDA, Sonstiges), Gültigkeit und Unterzeichner. Verträge sehen nur Finanzen, Admins und die Projektleitung. Läuft ein Vertrag in 60 Tagen aus, meldet es die [Datenprüfung](help:settings-data#datenpruefung).

## Cluster {#cluster}

Farbige Lesezeichen über Kunden hinweg – siehe [Cluster](help:settings-tags).
`,be=`---
title: Listen, Filter und Ansichten
group: start
order: 4
summary: Sortieren, filtern, mehrere Einträge auswählen, Ansichten speichern und teilen, Excel-Import und -Export.
keywords: Liste, Tabelle, sortieren, Filter, Ansicht, Spalten, Auswahl, Mehrfachauswahl, Export, Import, Excel, Cluster
---

Kunden, Projekte, Angebote, Rechnungen, Reisekosten und Zeiten funktionieren als Listen überall gleich.

## Suchen und filtern {#filtern}

- **Suchfeld** oben: findet beim Tippen, z. B. Kürzel, Name oder Ort.
- **Filtern nach …:** bis zu vier Filterfelder. Zuerst die Spalte wählen, dann den Wert – die Vorschläge passen sich den anderen Filtern an. Bei Beträgen und Daten gibt es *von* und *bis*.
- **Cluster** und **Team** filtern, wenn diese Funktionen eingeschaltet sind.
- **Inaktive / Archivierte anzeigen** blendet Erledigtes wieder ein.

## Sortieren {#sortieren}

Ein Klick auf einen Spaltentitel sortiert, ein zweiter dreht die Reihenfolge um.

## Spalten und gespeicherte Ansichten {#ansichten}

- **Spalten:** Häkchen = Spalte wird angezeigt, die Pfeile ändern die Reihenfolge.
- **Als Ansicht speichern** (Menü „…“): speichert Spalten, Filter und Sortierung unter einem Namen. Die *Standardansicht* zeigt die üblichen Spalten.
- **Teilen:** eine Ansicht kann privat bleiben oder für die eigenen Teams, alle mit einer Ihrer Rollen oder alle im Unternehmen sichtbar sein. Ändern kann eine geteilte Ansicht nur, wer sie angelegt hat; andere speichern sie als eigene Ansicht. Wer was teilen darf, regeln die [Rollen](help:settings-roles).

## Mehrere auswählen {#auswahl}

Über die Kästchen links wählen Sie mehrere Zeilen; dann erscheinen Aktionen für die Auswahl, z. B. *Kontaktieren*, *Kopieren*, *In einer Mail senden* (Rechnungen, Angebote desselben Kunden), *Als versendet / bezahlt markieren*, *Zu Cluster* oder *Löschen*.

## Cluster {#cluster}

Cluster sind farbige Lesezeichen über Kunden hinweg (z. B. „Energie“, „Ausschreibung 2027“). Mit **#** auf einer Seite oder *Zu Cluster* hinzufügen, Cluster auf eine Zeile ziehen. Einrichten unter [Einstellungen › Cluster](help:settings-tags).

## Excel-Export und -Import {#excel}

- **Export:** genau die gefilterten Zeilen als Excel.
- **Import:** *Vorlage herunterladen*, ausfüllen, *Importieren …* – zuerst kommt eine Vorschau, geändert wird erst beim Bestätigen. Ein erneuter Import derselben Liste aktualisiert, statt doppelt anzulegen. Verweise laufen über Kürzel (Kunde A, Projekt A1).
`,we=`---
title: Angebote
group: sales
order: 2
contexts: offers, offers.edit#bearbeiten
summary: Angebote schreiben, als PDF senden, annehmen oder ablehnen – und daraus Projekt und Rechnungen machen.
keywords: Angebot, Offerte, Kostenvoranschlag, Positionen, Annahme, angenommen, abgelehnt, Version, Bestellnummer, Teilrechnung, Schlussrechnung, Trefferquote, PDF, senden, Rahmenvertrag, Meilensteine
---

![Angebotsliste mit Trefferquote](a-angebote.webp)

Die Liste zeigt alle Angebote mit Status (*Entwurf*, *Versendet*, *Angenommen*, *Abgelehnt*), oben die Summen (offen, angenommen) und die **Trefferquote**.

## Ein Angebot schreiben {#bearbeiten}

1. **Neues Angebot** – oder im Projekt *Angebot erstellen*, dann sind Kunde und Projekt schon gesetzt. Ein neues Projekt kommt mit dem Angebot in die *Angebotsphase*.
2. **Kunde** wählen (*+ Neuer Kunde …* legt ihn direkt an), **Titel**, **Datum** und **Gültig bis**.
3. **Beschreibung (Leistungsumfang):** Absätze mit Leerzeile trennen; die Knöpfe darüber machen Zeilen zu Überschrift, fett, Aufzählung oder Nummerierung – genau so erscheint es im PDF.
4. **Positionen:** Bezeichnung, Menge, Einheit, Einzelpreis und USt-Satz je Zeile. *Vorschläge* bietet vereinbarte Sätze (Projektrollen, Rahmenverträge, frühere Angebote, Standardsätze) und – mit Artikelkatalog – [Artikel](help:items) an.
5. **Verrechnung:** *Nach geleisteten Stunden (Aufwand)* oder nach **Meilensteinen** (Zahlungsplan); dazu ein Text, der im PDF als Abschnitt „Verrechnung“ steht.
6. **Konditionen:** eine Zeile = ein Punkt; \`{terms}\` setzt das Zahlungsziel ein, \`{valid_until}\` die Gültigkeit.
7. **Sprache** des Dokuments und **Speichern**. Die Nummer (O1, O2 …) vergibt die App beim ersten Speichern.

![Ein neues Angebot](a-angebot-neu.webp)

![Positionen](a-angebot-positionen.webp)

## PDF und Senden {#senden}

- **PDF ansehen** zeigt das Angebot im Design des Unternehmens ([Dokumentdesign](help:settings-design)).
- **Per E-Mail senden:** Empfänger kommen vom Kunden (Kontakte, Rechnungs-E-Mail), Text aus der E-Mail-Vorlage, das PDF hängt an; weitere Dateien und CC sind möglich. Ohne Mailserver öffnet sich Ihr Mailprogramm – danach **Als versendet markieren**.
- Mehrere Angebote desselben Kunden lassen sich in der Liste auswählen und **in einer Mail senden**.

## Versionen {#versionen}

Wird ein versendetes Angebot geändert, entsteht eine neue **Version**. Soll die Version im PDF bei der Nummer stehen, das Häkchen *Version im PDF bei der Angebotsnummer angeben* setzen (standardmäßig aus).

## Angenommen {#angenommen}

**Angenommen** fragt:

1. *Wurde das Angebot mit Änderungen angenommen?* – bei *Ja* zuerst das Angebot anpassen, dann *Mit Änderungen angenommen* (neue Version).
2. **Bestellnummer des Kunden** – kommt auf jede Rechnung zu diesem Angebot.
3. **Mehr als den Angebotsbetrag verrechnen erlauben** – sonst stoppt die App, wenn die Rechnungen zusammen das Angebot übersteigen.
4. **Projekt aus dem Angebot anlegen** – mit Titel, Bestellnummer und je einer Aufgabe pro Stunden- oder Tagesposition (mit Satz). Dann wird nach Stunden über das Projekt verrechnet. Mit *Angebotene Mengen als Budget übernehmen* bekommen die Rollen ihr Budget. Ohne Projekt wird direkt aus dem Angebot verrechnet.

Das Projekt wird *Aktiv* und braucht eine Projektleitung.

![Angebot annehmen](a-angebot-annehmen.webp)

## Rechnungen aus dem Angebot {#rechnungen}

Ein angenommenes Angebot ohne Projekt lässt sich beliebig oft verrechnen, z. B. monatlich bei laufenden Leistungen: **Rechnung erstellen** (ganz), *Anteil in Prozent*, *Teilrechnung* oder *Schlussrechnung* (abzüglich bisheriger Rechnungen). Bei jeder Rechnung fragt die App, ob es die **Schlussrechnung** ist – dann ist das Angebot für weitere Rechnungen geschlossen. *Für Rechnungen wieder öffnen* hebt das auf. Oben im Angebot steht, wie viel schon verrechnet ist.

## Abgelehnt, wieder öffnen, kopieren, löschen {#weiteres}

- **Abgelehnt** – optional wird das Projekt gleich abgeschlossen.
- **Wieder öffnen** macht ein angenommenes oder abgelehntes Angebot wieder bearbeitbar.
- **Kopieren** legt einen neuen Entwurf mit denselben Positionen an (neue Nummer beim Speichern) – wenn das Unternehmen es erlaubt.
- **Löschen** geht nur bei Entwürfen.
- **Verknüpfte Dokumente** zeigt Projekt und Rechnungen, die zu diesem Angebot gehören.

## Rahmenverträge und Meilensteine {#rahmenvertrag}

Ein Angebot kann als **Rahmenvertrag** gelten, aus dem Projekte abrufen, und nach **Meilensteinen** abgerechnet werden – siehe [Funktionen für größere Unternehmen](help:large).
`,ke=`---
title: Zahlungen und Kontoauszug
group: billing
order: 3
contexts: invoices.receipts
summary: Zahlungseingänge erfassen, den Kontoauszug einlesen und Zahlungen Rechnungen zuordnen.
keywords: Zahlungseingang, Zahlung, Kontoauszug, Bank, George, Erste, MT940, CAMT, CSV, zuordnen, Zuordnung aufheben, Differenz, Überweisung
audience: Finanzen, Admins
---

Rechnungen › Reiter **Zahlungseingänge** zeigt alle eingegangenen Zahlungen mit Herkunft (manuell oder Kontoauszug) und wie viel davon Rechnungen zugeordnet ist.

## Kontoauszug einlesen {#kontoauszug}

1. **Kontoauszug importieren …** und die Datei wählen: George-CSV, andere CSV- oder Excel-Exporte, MT940, CAMT (XML) oder das PDF der Erste Bank. Alte .xls-Dateien bitte als .xlsx oder CSV speichern.
2. Die App liest die Gutschriften und schlägt Zuordnungen vor – Rechnungsnummern im Verwendungszweck werden zuerst zugeordnet.
3. Vorschläge prüfen, Häkchen setzen oder entfernen, **Markierte buchen**.

## Zuordnen {#zuordnen}

- Eine Zahlung kann auf mehrere Rechnungen aufgeteilt werden, eine Rechnung mehrere Zahlungen haben.
- *Passt genau* heißt: Betrag und offener Betrag stimmen überein.
- **Zuordnung aufheben** nimmt die Zahlung von einer Rechnung, ohne sie zu löschen; sie ist dann wieder offen zum Zuordnen.
- Differenzen (zu viel, zu wenig) blockieren nie. Sie erscheinen als Hinweis in der [Datenprüfung](help:settings-data#datenpruefung).

## Zahlungen ohne Kontoauszug {#manuell}

Hier mit **Zahlung buchen** (Datum, Betrag, Auftraggeber, Verwendungszweck) oder direkt in der Rechnung *Zahlung erfassen* oder *Als bezahlt markieren* – siehe [Rechnungen](help:invoices#zahlungen). Auch diese Zahlungen stehen hier.
`,ve=`---
title: Handy-App
group: work
order: 4
summary: Timer, Zeiten und Freigaben am Handy – auch offline.
keywords: Android, Handy, Smartphone, App, Timer, Widget, Wochenbudget, mobil, APK, iPhone
---

Die Handy-App (Android) und die Web-Version auf dem Handy zeigen eine eigene, einfache Oberfläche: **Timer**, **Zeiten**, **Freigaben** (für Freigebende) und **Konto**. Alles andere bleibt am PC.

![Timer am Handy](p-timer-laeuft.webp)

## Einrichten {#einrichten}

1. App von diary.parto.at laden und installieren (Android: APK).
2. Unter *Konto* mit derselben E-Mail und demselben Passwort anmelden wie am PC.
3. Die Daten kommen aus der Cloud; danach funktioniert die App auch offline.

## Timer {#timer}

Auf ein Projekt tippen – der Timer läuft sofort. *Stopp & buchen* bucht; ist die Tätigkeit Pflicht, fragt die App danach. Zweimal *Verwerfen* tippen löscht den Timer. Die Startseite zeigt Ihre Stunden heute und diese Woche, Ihre Serie und die **Wochenbudgets** Ihrer Aufgaben.

## Zeiten {#zeiten}

Einträge je Tag ansehen, neu anlegen (Projekt, Rolle, Von/Bis oder Stunden), bearbeiten und löschen – wie am PC.

## Budget-Hinweise {#budget}

Am Handy meldet die App schon bei 50, 75 und 90 % eines Budgets, wenn Sie das unter [Mein Profil › Benachrichtigungen](help:profile#benachrichtigungen) eingeschaltet haben.

## Was eine Rolle am Handy darf {#rechte}

Admins können unter [Rollen & Rechte](help:settings-roles) für die Handy-App weniger erlauben als am Desktop (nie mehr).
`,ye=`---
title: Abläufe
group: settings
order: 50
contexts: settings.processes
summary: Wiederkehrende Arbeit automatisieren – Rechnungsläufe, Freigabeketten, Erinnerungen, Aufgaben und E-Mails. Lizenzmodul.
keywords: Ablauf, Workflow, Prozess, Automatisierung, Auslöser, Zeitplan, Ereignis, Schwelle, Bedingung, Schritt, Aktion, Freigabekette, Eskalation, Rechnungslauf automatisch, E-Mail-Vorlage, Protokoll, Testlauf, Betrieb, Test, Aktiv
audience: Admins (Modul Abläufe)
---

Mit **Abläufen** automatisieren Sie wiederkehrende Arbeit. Ein Ablauf ist ein Satz aus vier Teilen:

| Teil | Frage | Beispiel |
|---|---|---|
| **Wenn** (Auslöser) | Wann startet er? | am 1. Arbeitstag jedes Monats um 06:00 |
| **für** (Objekt) | Worauf bezieht er sich? | Projekte |
| **nur wenn** (Bedingungen) | Für welche davon? | Rhythmus monatlich, verrechenbar, aktiv |
| **dann** (Schritte) | Was passiert? | Rechnungslauf (Entwürfe) → Benachrichtigen |

Abläufe sind ein **Lizenzmodul**; Parto schaltet es je Unternehmen frei. Einrichten dürfen Personen mit dem Recht *Abläufe und E-Mail-Vorlagen einrichten* (standardmäßig Admins). Ohne Modul bleibt alles wie bisher.

> **Stand:** Abläufe lassen sich vollständig anlegen, prüfen und testen. Die automatische Ausführung in der Cloud folgt in der nächsten Ausbaustufe; bis dahin bleibt das Protokoll leer.

## Betrieb: Aus · Test · Aktiv {#betrieb}

| Stellung | Bedeutung |
|---|---|
| Aus | ruht; nur so lässt sich ein unvollständiger Ablauf speichern |
| Test | läuft zur Probe, im Protokoll mit „Test“ markiert, ohne Wirkung auf Kunden – **jeder neue Ablauf startet so** |
| Aktiv | läuft wirklich |

Empfehlung: einige Tage oder einen Monatswechsel im Test laufen lassen, das Protokoll prüfen, dann *Aktiv*.

## Neuer Ablauf {#neu}

**Neuer Ablauf** öffnet eine Galerie mit Vorlagen – alle erzeugen nur Entwürfe bzw. interne Hinweise:

- **Monatlicher Rechnungslauf** – am 1. Arbeitstag die Stunden des Vormonats aller monatlichen Projekte als Entwürfe.
- **Freigabe ab 80 % Budget** – danach braucht jeder neue Zeiteintrag die Freigabe der Projektleitung; nach 2 Arbeitstagen Erinnerung und Eskalation.
- **Angebot läuft ab** – 7 Tage vorher eine Aufgabe zum Nachfassen.
- **Woche nicht eingereicht** – montags 9:00 Erinnerung an alle mit nicht eingereichten Stunden.
- **Überfällige Rechnung** – 14 Tage nach Fälligkeit eine Aufgabe für die Buchhaltung.
- **Leer beginnen**.

![Vorlagen-Galerie](e-ablauf-galerie.webp)

## Der Editor {#editor}

Oben steht der Ablauf als lesbarer Satz; ein Klick auf einen Satzteil ändert ihn. Darunter die **Schritte** als Zeitleiste, rechts der **Testlauf**: auf welche Objekte der Ablauf heute zutrifft und – bei Zeitplänen – die nächsten drei Termine. Ein Ablauf bezieht sich auf eine Objektart: Projekte, Zeiteinträge, Rechnungen, Angebote, Reisekostenpositionen oder Kunden.

![Editor](e-ablauf-editor.webp)

## Auslöser {#ausloeser}

- **Zeitplan:** täglich, wöchentlich, monatlich oder quartalsweise (Kalendertag oder n-ter Arbeitstag), Uhrzeit (Wiener Zeit).
- **Ereignis:** wenn sich ein Objekt ändert – z. B. Rechnung ausgestellt, Angebot versendet, Zeiteintrag eingereicht.
- **Schwelle erreicht:** einmal, sobald eine Bedingung zutrifft (z. B. Budgetverbrauch ≥ 80 %).
- **Per Klick:** über *Ablauf starten* am Objekt.

Arbeitstage sind Montag bis Freitag; Feiertage werden derzeit nicht berücksichtigt.

## Bedingungen {#bedingungen}

Dieselben Filter wie in den [eigenen Berichten](help:custom-reports): **Feld · Vergleich · Wert**, auch Felder verknüpfter Objekte (ein Zeiteintrag kennt Budgetverbrauch und Projektleitung seines Projekts). *Alle* oder *mindestens eine* müssen zutreffen; **Gruppen (oder …)** für gemischte Regeln. Bei Datumsfeldern gehen \`today\`, \`today+7\`, \`today-14\`.

## Schritte und Aktionen {#schritte}

| Aktion | Was sie tut |
|---|---|
| Rechnungslauf | verrechnet Vormonat, Vorwoche oder Vorquartal – als **Entwürfe (empfohlen)**, ausgestellt oder ausgestellt und gesendet |
| Freigabe anfordern | eine Person genügt oder alle müssen freigeben |
| E-Mail senden | mit einer E-Mail-Vorlage, CC und **BCC (immer möglich)**, Anhängen |
| Benachrichtigen | in der App, am Handy oder per E-Mail – nach den Einstellungen der Person |
| Bericht senden | gespeicherter Bericht als PDF oder Excel |
| Aufgabe anlegen | mit Fälligkeit auf der Startseite der Person |
| Feld setzen | z. B. Projektstatus, Budget sperren, Angebot abgelehnt |
| Warten | Tage oder Arbeitstage |

Empfänger: Person, Team, Rolle, Projektleitung, buchende Person, Freigebende der Aufgabe, Verantwortliche des Ablaufs – bei E-Mails auch der Kunde oder eine Adresse.

**Optionen je Schritt:** *gleichzeitig mit dem Schritt davor* (parallel), *nur unter einer Bedingung*, *eskalieren, wenn nichts passiert* (erinnern, weitergeben) und *bei Fehler* (anhalten und informieren, anhalten, überspringen). Mehrere Freigaben untereinander laufen nacheinander.

## E-Mail-Vorlagen der Abläufe {#vorlagen}

Reiter *E-Mail-Vorlagen*: eigene Vorlagen, die mehrere Abläufe nutzen – Betreff und Text deutsch und englisch, Platzhalter aus dem Objekt (\`{project_name}\`, \`{customer}\`, \`{budget_used}\` …), Signatur, **immer CC/BCC an diese Adressen** und Vorschau. Verwendete Vorlagen werden beim Löschen archiviert.

> **E-Mails an Kunden** gehen automatisch nur, wenn ein Admin das ausdrücklich so einrichtet. Die Vorlagen schlagen immer Entwürfe vor; eine BCC an eine Unternehmensadresse wird empfohlen.

## Protokoll und Versionen {#protokoll}

Das **Protokoll** zeigt jede Ausführung mit Zeit, Objekt, Schritt und Status (geplant, läuft, wartet, erledigt, fehlgeschlagen, übersprungen, abgebrochen). Ändern Sie Auslöser, Bedingungen oder Schritte, bekommt der Ablauf eine neue **Version**; laufende Ausführungen bleiben bei ihrer.

## Häufige Fragen {#fragen}

- *Ich sehe „Abläufe“ nicht.* – Das Modul ist nicht freigeschaltet oder Ihnen fehlt das Recht.
- *Kann ein Ablauf Rechnungen doppelt erstellen?* – Nein, der Rechnungslauf verrechnet nur noch nicht verrechnete Stunden.
- *Was ohne Modul?* – Freigaben, Rechnungsläufe von Hand, Mahnwesen und E-Mail-Vorlagen bleiben wie bisher.
`,Ae=`---
title: Mein Profil und Benutzermenü
group: start
order: 3
contexts: profile
summary: Name, Ansprechname, Bild, Sprache, Benachrichtigungen, Projekte und das eigene Konto.
keywords: Benutzermenü, Profil, Ansprechname, Benachrichtigungen, Sprache, Konto löschen, Zwei-Faktor, Passwort, Unternehmen wechseln
---

## Das Benutzermenü {#benutzermenue}

Oben rechts, mit Ihrem Namen. Dort finden Sie:

- **Unternehmen:** in welchem Unternehmen Sie arbeiten und mit welcher Rolle. Gehört Ihr Konto zu mehreren Unternehmen, wechseln Sie in der Web-Version hier.
- **Sprache:** Deutsch oder English – gilt für Sie auf allen Geräten.
- **Hilfe** (F1): öffnet die Hilfe beim Artikel zur aktuellen Seite, mit allen Themen und der Suche.
- **Mein Profil**, **Konto & Cloud** und **Abmelden**.

![Benutzermenü](u-benutzermenu.webp)

## Mein Profil {#profil}

- **Vorname, Nachname** und **Ansprechname** – so spricht die App Sie an („Willkommen, …“) und so stehen Sie in Einladungs-E-Mails. Leer = Vorname.
- **E-Mail, Telefon, Position** – erscheinen in der Unternehmenssignatur Ihrer E-Mails ([E-Mail-Signaturen](help:settings-signatures)). Die Anmelde-E-Mail Ihres Cloud-Kontos ändern Sie unter *Anmeldung*; Sie bekommen dafür einen Bestätigungslink an die neue Adresse.
- **Profilbild** – erscheint im Team und im Benutzermenü.
- **Bevorzugte Sprache** – gilt auf allen Geräten.
- **Rollen, Teams, Vorgesetzte(r)** – nur zur Ansicht; ändern kann das, wer das Team verwaltet ([Team](help:team)).
- **Meine Projekte und Kunden** – auf welche Projekte und Aufgaben Sie buchen dürfen.

## Benachrichtigungen {#benachrichtigungen}

Reiter *Benachrichtigungen*: je Art einzeln, ob Sie sie **in der App**, **am Handy** oder **per E-Mail** bekommen – z. B. eingereichte Stunden zur Freigabe, Entscheidung über Ihre Stunden, Nennung bei einem Eintrag, Budget überschritten, überfällige Rechnungen, fällige Mahnungen, Datenprüfung, Nachrichten von Kunden zum Stundenkontingent und eine **Kopie Ihrer gesendeten E-Mails** (Blindkopie jeder Mail, die Sie aus der App senden).

![Benachrichtigungen](u-benachrichtigungen.webp)

> Kunden bekommen nie automatisch etwas – außer durch einen [Ablauf](help:processes), den ein Admin ausdrücklich so eingerichtet hat.

## Sicherheit und Konto {#konto}

- **Passwort ändern, Zwei-Faktor-Anmeldung:** Benutzermenü › *Konto & Cloud* – siehe [Cloud](help:settings-cloud).
- **Konto löschen:** nur im eigenen Profil. In einem Unternehmen mit weiteren Personen verlassen Sie das Unternehmen, Ihre gebuchten Stunden bleiben dort. Wer der letzte Admin ist, macht zuerst eine andere Person zum Admin.
`,Se=`---
title: Projekte
group: projects
order: 1
contexts: projects, projects.detail#projekt-bearbeiten
summary: Projekte anlegen, Rollen und Sätze, Budget, Projektleitung, Status und alles, was die Abrechnung steuert.
keywords: Projekt, Auftrag, Rolle, Aufgabe, Satz, Stundensatz, Tagsatz, Budget, Projektleitung, Projektleiter, Status, Angebotsphase, abgeschlossen, Rechnungsgruppe, Projekttext, Kostenstelle, Bestellnummer, Projektlog, kopieren, Folgeprojekt
---

Ein Projekt sammelt die Stunden, Reisekosten, Angebote und Rechnungen zu einem Auftrag. Projekte eines Kunden heißen wie der Kunde plus laufende Nummer (A1, A2 …), interne Projekte INT1, INT2 …

> Je nach Einstellung heißt „Projekt“ in Ihrem Unternehmen „Auftrag“ (Einstellungen › Unternehmen › *Bezeichnung für Projekte*).

## Ein Projekt anlegen {#anlegen}

1. **Neues Projekt** – oder beim Kunden *+ Projekt*, oder beim Annehmen eines Angebots.
2. **Projektname**, **Kunde** und **Projektleitung**. Aktive Kundenprojekte brauchen eine Projektleitung; sie wird als Freigeber vorgeschlagen und bei Fragen genannt.
3. **Erste Rolle:** vorgeschlagen wird die Standard-Rolle des Unternehmens ([Standardsätze](help:settings-rates)); die anlegende Person ist darauf eingeteilt.
4. **Speichern** – der Code wird vergeben.

![Ein neues Projekt](a-projekt-neu.webp)

## Ein Projekt bearbeiten {#projekt-bearbeiten}

Ein Klick in der Liste öffnet das Projekt. Mit ‹ › blättern Sie zum vorigen oder nächsten Projekt der Liste. Die Reiter:

| Reiter | Inhalt |
|---|---|
| Stammdaten | Name, Kunde, Abrechnung, Status, Zeitraum, Farbe/Bild |
| Stunden & Budget | Stunden je Rolle und Status (offen, verrechnet, bezahlt), Budgetverbrauch |
| Kontingent | fixe Stunden pro Monat – siehe [Stundenkontingent](help:quota) |
| Projektlog | Notizen und To-dos mit Zuständigen und Fälligkeit |
| Rollen und Sätze | wer zu welchem Satz bucht, Budgets, Freigabe |
| Kontakte | Ansprechpartner des Kunden für dieses Projekt; *Kunden kontaktieren* |
| Meilensteine, Teilprojekte, Verknüpfungen, Dokumente | wenn eingeschaltet – siehe [Größere Unternehmen](help:large) |
| Reisekosten | Ausgaben zu diesem Projekt |

## Rollen und Sätze {#rollen}

Jede **Rolle** (oder Aufgabe, z. B. „Senior Consultant“, „Workshop“) hat:

- einen **Satz** je Stunde, Personentag oder Tag – Änderungen als neue Zeile mit *Gültig ab*, ältere Stunden behalten ihren Satz;
- ein **Budget** in Stunden oder als % vom Gesamtbudget, optional ein **Wochenbudget**;
- **Wer darf buchen** – gebucht werden kann nur auf Rollen, für die man eingeteilt ist (auch Projektleitung und Admins);
- **Stunden müssen freigegeben werden** mit *Freigabe durch*;
- optional einen eigenen **Positionstext** auf der Rechnung.

*Als Standardsatz speichern* macht eine Rolle zur Vorlage für neue Projekte. **Budgeterweiterungen** (Change Requests) erhöhen das Budget einer Rolle oder das Gesamtbudget, die Stunden laufen auf dieselbe Rolle weiter.

![Rollen und Sätze](a-projekt-rollen.webp)

## Abrechnung des Projekts {#abrechnung}

- **Verrechenbar** / **Internes Projekt (keine Rechnung)**.
- **Rechnungsrhythmus** wöchentlich oder monatlich, **Rechnungsgruppe** (Projekte mit derselben Gruppe kommen auf eine gemeinsame Rechnung).
- **Rechnungspositionen:** eine Position für den Zeitraum, je Kalenderwoche oder je Monat; **Positionstext** mit Platzhaltern \`{KW}\`, \`{Monat}\`; **Projekttext** auf der Rechnung.
- **Bestell- / Projektnummer des Kunden**, **Kostenstelle**, abweichende **Rechnungs-E-Mail**.
- **Bei Budgetüberschreitung:** *Nur warnen* oder *Sperren* (dann bucht und verrechnet niemand über das Budget).
- **Stunden werden dem Kunden gemeldet** – verrechnet werden nur als gemeldet markierte Stunden ([Zeiten](help:time#gemeldet)).
- **Tätigkeit bei Zeiteinträgen:** wie Unternehmen, Pflicht oder optional.

## Status {#status}

| Status | Bedeutung |
|---|---|
| Angebotsphase | Stunden zählen als Angebotsaufwand und werden nie verrechnet. |
| Aktiv | normaler Betrieb |
| Budget überschritten | wird automatisch gesetzt bei 100 % und wieder aufgehoben, wenn das Budget erhöht wird |
| Abgeschlossen | keine neuen Buchungen; *Aktiv* setzen öffnet wieder |

## Weitere Aktionen {#aktionen}

- **Mehr › Angebot erstellen**, **Stundennachweis …**, **Kopieren** (Einstellungen und Rollen mit heutigen Sätzen, ohne Stunden und Rechnungen), **Folgeprojekt anlegen**.
- **Zeiten zu diesem Projekt anzeigen** springt in [Zeiten](help:time) mit Filter.
- **Löschen:** Ein Projekt mit Zeiten, Angeboten, Rechnungen oder Reisekosten wird nicht gelöscht, sondern geschlossen.
- **Alle Mitarbeiter dürfen auf dieses Projekt buchen** – für interne Projekte wie Urlaub oder Krank.
`,je=`---
title: Stundenkontingent
group: projects
order: 2
contexts: projects.quota
summary: Fixe Stunden pro Monat mit laufendem Saldo – und eine Kundenseite, auf der der Kunde das Kontingent sieht.
keywords: Kontingent, Stundenkontingent, Stundenpool, Stundenkonto, Saldo, Mehrstunden, Minderstunden, Verfall, Obergrenze, Rahmenvertrag, Kundenseite, Link, teilen, bestätigen, Pauschale
---

Für Kunden, die fixe Stunden pro Monat bezahlen (Betreuung, Wartung, Rahmenverträge). Projekt › Reiter **Kontingent**. Es zählen nur **freigegebene, verrechenbare** Stunden, gerundet wie auf der Rechnung.

![Kontingent im Projekt](e-kont-tab.webp)

## Ein Kontingent anlegen {#anlegen}

1. **Kontingent anlegen**.
2. **Bezeichnung** (z. B. „Betreuung 2027“), **erster** und optional **letzter Monat**.
3. **Stunden pro Monat**.
4. **Mehr- und Minderstunden** – die Regel:

| Regel | Bedeutung |
|---|---|
| Saldo über die Laufzeit | gleicht sich bis zum Laufzeitende aus |
| Saldo mit Obergrenze | Saldo bleibt in ± Stunden; darüber wird sofort ausgeglichen |
| Verfall nach Monaten | nicht genutzte Stunden verfallen nach n Monaten; Mehrstunden sofort ausgleichen |
| Monatlich abrechnen | jeder Monat für sich; Mehrstunden verrechnen, Rest verfällt |

5. Optional **Monatspauschale** (nur zur Info), **welche Aufgaben zählen** und **abweichende Monate** (z. B. Hochlauf, Urlaub).

Budgeterweiterungen der gezählten Aufgaben erhöhen das Kontingent ab ihrem Monat.

## Die Übersicht {#uebersicht}

Kacheln zeigen den **Saldo bis Ende Vormonat**, den laufenden Monat (geleistet/geplant), das Gesamte und was **auszugleichen** ist. Darunter Monate oder Wochen mit Geplant, Geleistet, Differenz und Saldo, als Diagramm und nach Aufgabe. **PDF** erstellt das Stundenkonto.

## Mit dem Kunden teilen {#teilen}

*Mit dem Kunden teilen* (Berechtigung „Mit Kunden teilen“):

- **Geheimer Link** – der Kunde sieht die Seite ohne Anmeldung. Der Link wird nur einmal angezeigt; *Neuer Link* macht den alten ungültig.
- **Ansprechpartner einladen** – der Kontakt meldet sich mit seiner E-Mail und einem Code an. *Einladung senden* öffnet eine E-Mail, die Sie vor dem Senden sehen.

Je Zugang wählen Sie, was die Seite **zeigt** (Aufgaben, Pauschale, Personen als Rolle oder mit Namen, Einzelbuchungen) und was der Kunde **darf** (Monate bestätigen, Nachrichten schreiben), dazu *Gültig bis*. **Vorschau** zeigt die Seite genau so, wie der Kunde sie sieht. Zugänge lassen sich sperren und wieder freigeben.

![Teilen](e-kont-teilen.webp)

> Namen sind personenbezogene Daten Ihrer Mitarbeitenden – nur mit deren Einverständnis zeigen. Gesendet wird nichts automatisch; Sie geben Link oder Adresse selbst weiter.

## Nachrichten und Bestätigungen {#nachrichten}

Bestätigt der Kunde einen Monat, steht das mit seinem Namen in der Übersicht. Schreibt er eine Nachricht, meldet die App das unter „Heute“ und per E-Mail an die Projektleitung; Sie antworten unter *Nachrichten mit dem Kunden* (auf Wunsch zusätzlich per E-Mail).
`,ze=`---
title: Auswertungen
group: reports
order: 1
contexts: reports
summary: Management-Zusammenfassung, fertige Berichte und Export als Excel oder PDF.
keywords: Auswertung, Bericht, Report, Kennzahlen, Umsatz, Projektstatus, offene Posten, Stundenliste, offene Stunden, Rechnungsjournal, Angebote, Reisekosten, Vorjahr, Excel, PDF, Management
audience: Manager, Finanzen, Admins
---

![Auswertungen](a-auswertungen.webp)

## Übersicht {#uebersicht}

Die **Management-Zusammenfassung**: Umsatz, Stunden, offene Posten, noch nicht verrechnete Stunden und Projekte über Budget – für einen Zeitraum, mit Vergleich zur **Vorperiode** und zum **Vorjahr**. Darunter Ihre **angehefteten Berichte**. Mit *Anpassen* wählen Sie, welche Kacheln sichtbar sind, und ordnen sie mit ↑ ↓ (gilt für Sie auf diesem Gerät).

![Übersicht anpassen](e-dashboard-anpassen.webp)

## Fertige Berichte {#berichte}

| Bericht | Zeigt |
|---|---|
| Projektstatus | Budget, Vorperiode, geleistet, offen, verrechnet, bezahlt und Budgetverbrauch je Projekt und Rolle |
| Offene Posten | unbezahlte Rechnungen mit Tagen überfällig; *Nur überfällige* |
| Umsatz pro Monat | netto je Monat im Geschäftsjahr, mit Vorjahr und Differenz |
| Stundenliste | alle Stunden mit Datum, Person, Rolle, Tätigkeit und Status |
| Offene Stunden | noch nicht verrechnete Stunden mit Wert |
| Rechnungsjournal | alle Rechnungen und Gutschriften eines Zeitraums |
| Angebote | Angebote mit Status und Summen |
| Reisekosten | Ausgaben nach Kategorie, weiterverrechnet oder nicht |

Jeder Bericht hat Filter (Kunde, Projekt, Zeitraum, Status …). Ein Klick auf eine Zeile öffnet den Datensatz. **Excel** exportiert genau die gefilterten Zeilen, **PDF** druckt den Bericht.

Das **Geschäftsjahr** (Einstellungen › [Unternehmen](help:settings-company)) bestimmt Jahresvergleiche.

## Eigene Berichte {#eigene}

Unter *Eigene Berichte* kombinieren Sie alle Tabellen frei – siehe [Eigene Berichte](help:custom-reports).
`,Pe=`---
title: Abrechnung
group: billing
order: 1
contexts: run
summary: Aus offenen, verrechenbaren Stunden und Reisekosten Rechnungen machen – für einen Zeitraum, alle Kunden auf einmal.
keywords: Abrechnung, Rechnungslauf, Faktura, verrechnen, Stunden abrechnen, Rechnungsdatum, Stundennachweis, Rechnungsgruppe, Rhythmus, Meilensteine, Warnung
audience: Finanzen, Admins
---

Die **Abrechnung** schlägt für einen Zeitraum je Kunde und Rechnungsgruppe eine Rechnung vor – mit allen offenen, verrechenbaren Stunden und Reisekosten. Sie prüfen, passen an und erstellen alle mit einem Klick.

![Abrechnung](a-abrechnung.webp)

## So geht's {#ablauf}

1. **Zeitraum** wählen: letzte/diese Woche, letzter/dieser Monat oder frei (Von, Bis).
2. **Rhythmus** (wöchentlich, monatlich, alle) und optional einen **Kunden** wählen.
3. **Rechnungsdatum** prüfen.
4. Die Vorschläge durchsehen: Positionen mit Menge, Einheit, Text, Einzelpreis und USt. Texte und Beträge sind änderbar, einzelne Rechnungen lassen sich mit *Diese Rechnung erstellen* abwählen.
5. **n Rechnungen erstellen** – die Nummern werden fest vergeben, die Stunden als *verrechnet* markiert und die PDFs gespeichert.

Danach stehen die Rechnungen unter [Rechnungen](help:invoices), bereit zum Senden.

## Welche Stunden kommen hinein {#welche-stunden}

Nur Stunden, die

- auf einem **verrechenbaren**, nicht internen Projekt in der Phase *Aktiv* liegen,
- **freigegeben** sind (wenn die Aufgabe eine Freigabe braucht),
- **dem Kunden gemeldet** sind (wenn das Projekt das verlangt),
- noch auf keiner Rechnung stehen.

Was fehlt, sagt die App über der Liste: *… h warten noch auf Freigabe*, *… h sind noch nicht eingereicht*, *… h sind noch nicht dem Kunden gemeldet*, *… offene Einträge ohne Projekt*.

Die Dauer wird je Eintrag auf den **Abrechnungstakt** aufgerundet (Unternehmen › Kunde › Projekt; leer = übernehmen).

## Warnungen {#warnungen}

| Warnung | Was tun |
|---|---|
| Projekt hat keinen Satz | im Projekt unter Rollen und Sätze einen Satz eintragen |
| Kunde hat keine UID-Nummer | beim Kunden eintragen (Pflicht über 10.000 € brutto und bei Reverse Charge) |
| Gesamtbudget wird überschritten | prüfen; bei *Sperren* wird das Projekt nicht verrechnet |
| Kein Wechselkurs für die Währung | unter [Wechselkurse](help:settings-fx) nachsehen |
| Kunde wird normalerweise monatlich abgerechnet | Rhythmus prüfen |

## Nur gewählte Stunden {#auswahl}

In [Zeiten](help:time#rechnung) Einträge auswählen › *Rechnung erstellen …* – die Abrechnung zeigt dann nur diese Stunden (ohne Reisekosten).

## Meilensteine {#meilensteine}

Projekte, die nach Meilensteinen abgerechnet werden, stehen unter *Erledigte Meilensteine*; ihre Stunden kommen nicht in den Lauf. Siehe [Meilensteine](help:large#meilensteine).

## Stundennachweis {#stundennachweis}

Ist beim Kunden *Stundennachweis mitschicken* gesetzt, entsteht zu jeder Rechnung ein Stundennachweis als PDF. Einen Nachweis für beliebige Stunden erstellen Sie unter Projekt, Kunde oder Rechnung › *Mehr › Stundennachweis …*.

> **Doppelt verrechnen ist ausgeschlossen:** Sind Stunden inzwischen auf einem anderen Gerät verrechnet worden, erstellt die App nichts und gleicht zuerst ab.
`,xe=`---
title: App-Design
group: settings
order: 13
contexts: settings.appdesign
summary: Logo und Farbschema der App selbst – hell, dunkel oder wie das System.
keywords: App-Design, Farbe, Farbschema, Hauptfarbe, Logo, Dunkelmodus, hell, dunkel, Seitenleiste
audience: Admins
---

Das Aussehen der App für alle im Unternehmen – Seitenleiste, Schaltflächen, Hervorhebungen. Das [Dokumentdesign](help:settings-design) bleibt davon unberührt.

- **Unternehmenslogo** – erscheint in der Seitenleiste und auf dem Sperrbildschirm.
- **Hauptfarbe** – aus der Palette oder als Farbcode (#RRGGBB). Projektfarben folgen diesem Farbschema.
- **Hell / Dunkel:** wie das System, immer hell oder immer dunkel.
- *Logo und Farbe vom Dokumentdesign übernehmen* und *Standard wiederherstellen*.
`,Re=`---
title: Kalender
group: settings
order: 20
contexts: settings.calendar
summary: Outlook oder einen anderen Kalender verbinden und Termine als Zeiteinträge übernehmen – mit Zuordnungsregeln.
keywords: Kalender, Outlook, Microsoft 365, ICS, Termine, übernehmen, Zuordnungsregel, Regel, Betreff, abgleichen
---

Termine aus Ihrem Kalender werden zu Zeiteinträgen – Sie prüfen vorher, was übernommen wird. Gelesen werden nur Datum, Beginn, Ende, Betreff und Zusage-Status; im Kalender wird nichts geändert.

![Termine übernehmen](u-kalender.webp)

## Kalender verbinden {#verbinden}

- **Microsoft-Konto verbinden** (Microsoft 365, Outlook.com): Code kopieren, auf der Microsoft-Seite einfügen, anmelden, Berechtigung bestätigen. Schritt für Schritt: [Microsoft-Kalender verbinden](help:howto-calendar-microsoft).
- **ICS-Link hinzufügen:** funktioniert mit fast jedem Kalender, auch wenn ein Unternehmen keine fremden Apps erlaubt. Schritt für Schritt: [Kalender per ICS-Link](help:howto-calendar-ics).

Mehrere Kalender sind möglich (z. B. je Kunde ein Konto). *Beim Start automatisch abgleichen* holt die Termine der letzten 14 Tage.

## Termine übernehmen {#uebernehmen}

1. **Kalender abgleichen** (oder automatisch beim Start) – unter *Heute* erscheint „n Termine gefunden“ › **Prüfen**.
2. Die Liste zeigt *Neu*, *Schon im Tagebuch* und *Nicht übernommen* (abgelehnt, vorläufig, ganztägig, als frei markiert …).
3. Häkchen setzen, **übernehmen**. Termine ohne passendes Projekt stehen danach unter *Heute* › *Ohne Projekt*.

## Zuordnungsregeln {#regeln}

Wörter im Betreff ordnen Termine einem Projekt zu:

- \`+\` verbindet Wörter, die alle vorkommen müssen (\`Ariba+weekly\`),
- \`*\` am Wortende findet Wortanfänge (\`Work*\`),
- \`;\` trennt Alternativen (\`SAP;S4\`).

Die erste passende Regel (kleinste Priorität) gewinnt. *Regeln testen* prüft einen Betreff. Ordnen Sie Termine öfter gleich zu, schlägt die App selbst eine Regel vor.
`,Ee=`---
title: Cloud und Anmeldung
group: settings
order: 30
contexts: settings.cloud
summary: Anmelden, Passwort, Zwei-Faktor-Anmeldung, Unternehmen registrieren und dieses Gerät mit der Cloud verbinden.
keywords: Cloud, Anmelden, Login, Konto, Passwort vergessen, Code, Einladung, registrieren, Zwei-Faktor, Authenticator, 2FA, Microsoft, abmelden, verbinden, Gerät
---

Mit der Cloud sind Ihre Daten auf allen Geräten – PC, Browser und Handy. Jedes Gerät arbeitet auch offline weiter ([Abgleich](help:sync)).

## Anmelden {#anmelden}

- **E-Mail und Passwort** – dieselben auf allen Geräten.
- **Einladung / Code:** Sie wurden eingeladen oder haben ein Unternehmen registriert? E-Mail-Adresse und den 6-stelligen Code aus der E-Mail eingeben, dann das Passwort festlegen (mindestens 10 Zeichen, Groß- und Kleinbuchstaben und eine Ziffer).
- **Passwort vergessen?** – Sie bekommen einen Code per E-Mail und legen ein neues Passwort fest.
- **Neues Unternehmen registrieren** – für Unternehmen, die Parto Diary neu verwenden. Nach der Freigabe kommt eine E-Mail mit Code.

![Anmeldung im Browser](w-login.webp)

## Zwei-Faktor-Anmeldung {#zwei-faktor}

Zusätzlich zum Passwort ein Code aus einer Authenticator-App (z. B. Microsoft oder Google Authenticator). **Einrichten**, den QR-Code scannen, den angezeigten Code eingeben. Für Admins und Finanzen dringend empfohlen; Admins können sie für alle Admins und Manager **verpflichtend** machen.

## Dieses Gerät {#geraet}

- **Zuletzt abgeglichen**, **Noch hochzuladen** und **Jetzt abgleichen**.
- **Abmelden:** Dieses Gerät gleicht danach nicht mehr ab, bis Sie sich wieder anmelden. In der Web-Version wird die Kopie im Browser beim Abmelden gelöscht; nach 60 Minuten ohne Eingabe meldet sie Sie ab.

## Ein Unternehmen in die Cloud bringen {#hochladen}

Für das erste Gerät eines Unternehmens: *Diesen Arbeitsbereich in die Cloud hochladen*. Weitere Geräte holen die Daten mit *Auf dieses Gerät holen* (nur in einen leeren Arbeitsbereich). Danach laden Sie Ihr [Team](help:team) ein.

## Konto löschen {#loeschen}

Im eigenen [Profil](help:profile#konto). Ein Unternehmen mit Rechnungen wird nicht gelöscht, sondern geschlossen: Buchhaltungsunterlagen müssen aufbewahrt werden (Österreich 7 Jahre, Deutschland und Schweiz 10 Jahre). Vorher den vollständigen Export und das PDF-Archiv herunterladen.
`,Te=`---
title: Unternehmen
group: settings
order: 2
contexts: settings.company
summary: Unternehmensdaten für Rechnungen und Angebote, Bank, Währung, Geschäftsjahr, Abrechnungstakt und Schalter fürs ganze Unternehmen.
keywords: Unternehmensdaten, Name, Adresse, UID, Firmenbuch, IBAN, BIC, Bank, Unterzeichner, Währung, Geschäftsjahr, Abrechnungstakt, Kleinunternehmer, QR-Rechnung, QR-IBAN, Zahlteil, Schweiz, Zahlen mit Code, GiroCode, EPC, Bezeichnung für Projekte, Auftrag, Tätigkeit Pflicht, Kopieren erlauben
audience: Admins
---

![Unternehmen](a-set-unternehmen.webp)

## Unternehmensdaten {#daten}

**Unternehmensname**, Anschrift, Land, E-Mail, **UID-Nummer**, **Firmenbuchnummer** und -gericht, **Bank, IBAN, BIC**, **Unterzeichner** und **Ort** (für „Ort, Datum“). Sie erscheinen auf Rechnungen und Angeboten, standardmäßig in der Fußzeile. Die IBAN wird beim Eingeben geprüft.

## Währung {#waehrung}

- **Standardwährung** – für neue Kunden, Rechnungen, Angebote und Berichte. Ausgestellte Dokumente behalten ihre.
- **Erlaubte Währungen** – stehen bei Kunden zur Auswahl. Rechnungen gehen dann in der Währung des Kunden; die Umrechnung kommt aus den [Wechselkursen](help:settings-fx).

## Geschäftsjahr und Abrechnungstakt {#geschaeftsjahr}

- **Geschäftsjahr von/bis (Monat)** – Grundlage für Jahresvergleiche und Umsatz je Geschäftsjahr.
- **Abrechnungstakt** – auf wie viele Minuten die Dauer eines Eintrags beim Verrechnen aufgerundet wird. Kunde und Projekt können abweichen; leer = übernehmen.

## Schalter fürs ganze Unternehmen {#schalter}

- **Kleinunternehmer – keine Umsatzsteuer verrechnen:** neue Angebote und Rechnungen mit 0 % und dem gesetzlichen Hinweis (Österreich § 6 Abs. 1 Z 27 UStG, Deutschland § 19 UStG).
- **QR-Rechnung (Schweiz) auf Rechnungen:** hängt an Rechnungen in CHF oder EUR den Schweizer Zahlteil mit QR-Code als letzte Seite an. Geht nur mit einem Schweizer oder Liechtensteiner Konto (IBAN oder *QR-IBAN*); darunter steht, ob es mit den eingetragenen Daten klappt. Mit QR-IBAN trägt der Zahlteil eine QR-Referenz, sonst eine Gläubigerreferenz (RF) – beide enthalten die Rechnungsnummer, der Bankimport ordnet die Zahlung damit zu.
- **Zahlen mit Code (EPC-QR-Code):** kleiner QR-Code neben den Bankdaten auf Rechnungen in EUR; Banking-Apps übernehmen Empfänger, IBAN, Betrag und Rechnungsnummer. Beim Kunden lässt sich der Zahlungs-QR-Code abweichend wählen (auch *keiner*).
- **Bezeichnung für Projekte:** *Projekt* (Beratung, Dienstleistung) oder *Auftrag* (Handwerk) – ändert die Wörter in der App, auf Dokumenten und in Standard-E-Mails.
- **Tätigkeit bei Zeiteinträgen ist Pflicht:** gilt für alle Projekte, die nichts anderes festlegen.
- **Angebote / Projekte / Rechnungen dürfen kopiert werden:** blendet die Schaltfläche *Kopieren* ein oder aus.

**Speichern** nicht vergessen.
`,Me=`---
title: Sicherungen, Datensicherheit, Datenübernahme
group: settings
order: 33
contexts: settings.backups#sicherungen, settings.data#datenpruefung, settings.migration#uebernahme
summary: Tägliche Sicherungen, vollständiger Export und Import, Datenprüfung, unveränderbares Archiv und Datenübernahme.
keywords: Sicherung, Backup, wiederherstellen, Export, Import, Excel, Datenprüfung, Prüfung, Archiv, unveränderbar, Datenübernahme, Access, Migration, Änderungsprotokoll
audience: Admins
---

## Sicherungen {#sicherungen}

In der Desktop-App wird jeden Tag beim ersten Start automatisch gesichert; die letzten 30 bleiben. **Jetzt sichern** legt sofort eine an, **Wiederherstellen** holt einen früheren Stand zurück (der aktuelle wird vorher gesichert). *Ordner öffnen* zeigt die Dateien. Im Browser gibt es keine lokalen Sicherungen – dort liegen die Daten in der Cloud.

**Vollständiger Export & Import:** eine Excel-Datei mit einem Blatt pro Tabelle. *Importieren* liest sie wieder ein – nur in einen leeren Arbeitsbereich (z. B. neues Gerät). Einzelne Listen importieren Sie in der jeweiligen Liste ([Excel](help:lists#excel)).

## Datensicherheit {#datenpruefung}

![Datensicherheit](a-set-datensicherheit.webp)

- **Datenprüfung:** sucht Daten, die ungewöhnlich aussehen – z. B. Zahlungsdifferenzen, Stunden ohne Satz, auslaufende Verträge. Neue Funde zeigt die App beim Start; *Erneut prüfen* prüft sofort.
- **Unveränderbares Archiv:** jede ausgestellte Rechnung (und jede Version) wird als PDF in der Cloud abgelegt und kann nicht mehr geändert werden. *Herunterladen* holt das Archiv.
- **Sicherungen in der Cloud:** Admins legen online eine Sicherung in der Cloud ab.
- **Änderungsprotokoll:** wer wann was geändert hat – auch unter jedem Einstellungsbereich.

## Datenübernahme {#uebernahme}

Übernimmt Daten aus dem bisherigen System und vergleicht danach Zeilen, Stunden, Beträge und Nummern mit der Quelldatei (*Abgleich prüfen*). Nur für Admins und nur, bis ein Import behalten wurde. Vergangene Jahre (Stunden und Rechnungen) lassen sich auch über die Listen-Importe übernehmen – sie gelten dann als verrechnet und bezahlt.
`,_e=`---
title: Dokumentdesign
group: settings
order: 10
contexts: settings.design
summary: Aussehen von Rechnung, Angebot und Stundennachweis – Layout, Logo, Farbe, Texte, Fußzeile, eigenes Layout und PDF-Ablage.
keywords: Design, Layout, Logo, Schrift, Farbe, Akzentfarbe, Unterschrift, Texte, Fußzeile, Briefpapier, PDF, Vorschau, eigenes Layout, frei gestalten, Textblock, Dateiname, Ordner, Design übernehmen
audience: Admins
---

Rechts steht immer die **Vorschau** mit der letzten Rechnung bzw. dem letzten Angebot. Bereits ausgestellte Rechnungen und versendete Angebote ändern sich nie.

![Dokumentdesign](a-set-design.webp)

## Grundlagen {#grundlagen}

- **Logo** (PNG oder JPG hineinziehen, einfügen mit Strg+V) und **Position** (links, Mitte, rechts).
- **Akzentfarbe** – oder *Farbe aus dem Logo*.
- **Schrift:** serifenlos oder mit Serifen.
- **Unterschrift** als Bild.
- **Layout** je Dokument: *Klassisch*, *Modern*, *Minimal*, *Angebotsstil* – oder *Eigenes Layout (frei gestaltet)*.

## Texte {#texte}

Einleitung, Überleitung zur Tabelle, Dank, Zahlungsbedingung, Bankhinweis und Grußformel – je Sprache. Platzhalter wie \`{salutation}\`, \`{period}\`, \`{terms}\`, \`{due_date}\`, \`{number}\` (Angebot: \`{valid_until}\`) werden beim Drucken ersetzt. Ein ausgeschalteter Text wird nicht gedruckt.

**Eigene Textblöcke:** zusätzliche Hinweise oder Bedingungen, für Rechnungen, Angebote oder beide – vor der Tabelle, nach den Summen, am Ende oder frei platziert.

## Fußzeile {#fusszeile}

Drei Spalten aus den [Unternehmensdaten](help:settings-company). Ändern Sie hier direkt, druckt das Design ab dann Ihren Text; *Wieder aus den Unternehmensdaten übernehmen* stellt um.

## Eigenes Layout {#eigenes-layout}

Blöcke (Logo, Anschrift, Nummer und Datum, Titel, Positionen, Summen, Fußzeile …) frei auf der Seite anordnen: anklicken und ziehen, sie rasten an Rändern und anderen Blöcken ein; Pfeiltasten verschieben um 1 mm (mit Umschalt um 5 mm). Feste Blöcke lassen sich auf erster, letzter, jeder oder den Folgeseiten drucken. **Vorlagen** (klar mit Linien, schattiert, Kästchen, Logo links) sind ein guter Start. Das Layout lässt sich zwischen Rechnung und Angebot kopieren.

![Eigenes Layout](e-design-frei.webp)

## Mehrere Designs {#designs}

*+ Neues Design (Kopie)* legt ein weiteres Design mit eigenem Namen an; *Als Standard verwenden* macht es zum Design für neue Dokumente. Mit *Designs je Kunde wählbar* bekommt jeder Kunde sein Design – z. B. für Länder mit anderen Pflichtangaben.

## Design einer bestehenden Rechnung übernehmen {#uebernehmen}

Ein Rechnungs-PDF aus dem bisherigen Programm hineinziehen: Logo, Farben, Schrift und Anordnung werden erkannt und übernommen. Das PDF wird nur auf diesem Gerät gelesen. Erkannte Bereiche lassen sich nachbessern.

## PDF-Ablage {#ablage}

**Ordner** und **Dateiname** für Rechnungs-, Angebots- und Stundennachweis-PDFs (Platzhalter \`{number}\`, \`{customer}\`). Ohne eigenen Ordner landen Angebote im Ordner der Rechnungen. Im Browser fragt Chrome bzw. Edge einmal pro Sitzung, ob Parto Diary in den Ordner schreiben darf; andere Browser speichern in die Downloads.
`,De=`---
title: E-Rechnung
group: settings
order: 4
contexts: settings.einvoice
summary: Welche Angaben vor dem Versand als E-Rechnung geprüft werden – je Format, abschaltbar, mit eigenen Prüfungen.
keywords: E-Rechnung, XRechnung, ZUGFeRD, Factur-X, Peppol, ebInterface, e-Rechnung.gv.at, EN 16931, Leitweg-ID, Käuferreferenz, Lieferantennummer, Prüfung, Pflichtfeld
audience: Admins
---

## Prüfungen {#pruefungen}

Die Liste zeigt jede eingebaute Prüfung mit den Formaten, für die sie gilt (EN 16931 / ZUGFeRD, XRechnung, Peppol BIS, ebInterface), und ob der Standard oder das Format sie verlangt. Jede Prüfung lässt sich abschalten. Eine abgeschaltete Prüfung wird nur hier nicht mehr angezeigt – die Empfangsplattform lehnt fehlende Pflichtangaben trotzdem ab.

## Eigene Prüfungen {#eigene}

Eigene Prüfungen verlangen, dass ein Feld der Rechnung, des Kunden oder des Unternehmens ausgefüllt ist oder einem Muster entspricht – für alle Formate oder nur für gewählte.

## Je Kunde {#kunde}

Beim Kunden können Prüfungen abgeschaltet, wieder eingeschaltet oder ergänzt werden. Dort stehen auch Käuferreferenz / Leitweg-ID, Lieferantennummer, Peppol-ID und USt-Kategorie.

## In der Rechnung {#rechnung}

Der Abschnitt *E-Rechnung* in der Rechnung zeigt, was fehlt und wo es zu ergänzen ist. Das Format wird aus dem Kunden vorgeschlagen (Deutschland oder Leitweg-ID → XRechnung, Belgien oder Peppol-ID → Peppol, sonst EN 16931).
`,Ke=`---
title: Reisekosten-Einstellungen
group: settings
order: 21
contexts: settings.expenses
summary: Kategorien, Kilometer- und Tagesgeldsätze je Land und die Kürzung bei gestellten Mahlzeiten.
keywords: Kategorie, Kilometergeld, Tagesgeld, Taggeld, Diäten, Satz, Land, Mahlzeit, Kürzung, Nächtigung
audience: Admins
---

## Kategorien {#kategorien}

Jede Kategorie hat eine **Art**, die bestimmt, was bei einer Ausgabe gefragt wird: *Betrag laut Beleg*, *Kilometer × Satz*, *Tage × Tagesgeld* oder *Nächtigung*. Nicht mehr benötigte Kategorien **archivieren** – bestehende Ausgaben behalten sie.

## Kilometer- und Tagesgeld {#saetze}

Satz je Kilometer bzw. je Tag, mit **Land** und **Gültig ab**. Eine Änderung als neue Zeile mit neuem Datum anlegen; ältere Ausgaben behalten ihren Satz. (Österreich ab 2025: 0,50 € je km, 30,00 € je Tag – bitte prüfen.)

## Kürzung bei gestellten Mahlzeiten {#mahlzeiten}

Um wie viel Prozent jede gestellte Mahlzeit das Tagesgeld kürzt. Österreich: Mittag- oder Abendessen kürzt um die Hälfte, Frühstück nicht.

Wie Mitarbeitende Ausgaben erfassen: [Reisekosten](help:expenses).
`,Be=`---
title: Wechselkurse
group: settings
order: 5
contexts: settings.fx
summary: Tägliche EZB-Kurse für Rechnungen in Fremdwährung und ein Währungsrechner.
keywords: Wechselkurs, Kurs, EZB, Währung, Fremdwährung, CHF, USD, umrechnen, Kursdifferenz
---

Die App holt jeden Morgen die Referenzkurse der Europäischen Zentralbank (EZB) für die erlaubten Währungen ([Unternehmen › Währung](help:settings-company#waehrung)).

- **Rechnungen in Fremdwährung:** Hat ein Kunde eine andere Währung, gehen seine Angebote und Rechnungen in dieser Währung. Die Sätze werden zum Kurs des Rechnungstags umgerechnet; der Kurs steht auf dem Dokument („1 CHF = … EUR, EZB, Datum“) und bleibt eingefroren.
- **Kein Kurs:** Fehlt für eine Währung noch ein Kurs, verrechnet die Abrechnung diesen Kunden nicht und sagt das.
- **Zahlungen:** Beim Erfassen einer Zahlung in Fremdwährung können Sie den in Euro gutgeschriebenen Betrag eintragen – so wird die Kursdifferenz sichtbar.
- **Reisekosten:** Ausgaben in Fremdwährung schlagen den EZB-Kurs des Tages vor.
- **Rechner:** rechnet Beträge zwischen den Währungen um.
`,Ce=`---
title: Allgemein
group: settings
order: 7
contexts: settings.general
summary: Sprache, geplante Stunden pro Woche, Kundenkategorien und Funktionen ein- und ausschalten.
keywords: Sprache, geplante Stunden, Wochenstunden, Soll, PLZ, Kilometer, Funktionen, Cluster, Unterkunden, Dokumente, Kundengruppen, Programme, Rahmenverträge, Meilensteine, Artikelkatalog, Kategorien, Handy-App, Download
---

![Allgemein](a-set-allgemein.webp)

## Für Sie {#persoenlich}

- **Sprache** der App auf diesem Gerät.
- **Geplante Stunden pro Woche** – das Soll in der Wochenansicht unter [Zeiten](help:time#woche).
- **PLZ und km bei Zeiteinträgen anzeigen** – für Fahrten zum Kunden.
- **Apps herunterladen** – Desktop-App für Windows und macOS, Android-App.

## Funktionen ein- und ausschalten {#gross}

Für das ganze Unternehmen (Admins). Ausgeschaltet ist nichts davon sichtbar:

| Schalter | Was dazukommt |
|---|---|
| Cluster verwenden | farbige Lesezeichen auf Kunden, Projekten, Angeboten, Rechnungen … – [Cluster](help:settings-tags) |
| Unterkunden verwenden | „Rechnung an“ bei Projekten und Angeboten – [Unterkunden](help:large#unterkunden) |
| Dokumente verwenden | Reiter „Dokumente“ für Verträge, Bestellungen, NDAs – [Dokumente](help:large#dokumente) |
| Kundengruppen (Konzern) | Kunden einem Konzern zuordnen – [Kundengruppen](help:large#kundengruppen) |
| Programme mit Teilprojekten | [Programme](help:large#programme) |
| Rahmenverträge mit Abrufen | [Rahmenverträge](help:large#rahmenvertraege) |
| Meilensteine definieren | nach Meilensteinen abrechnen – [Meilensteine](help:large#meilensteine) |
| Artikelkatalog (Handwerk) | Menü [Artikel](help:items) |

## Kundenkategorien {#kategorien}

Eine Kategorie pro Zeile – die Auswahl im Feld *Kategorie* beim Kunden.
`,Fe=`---
title: E-Mails & Mahnwesen
group: settings
order: 11
contexts: settings.dunning
summary: E-Mail-Vorlagen für Rechnungen, Angebote und Kontakte, Standard-CC, Kundenvorlagen sowie Zahlungserinnerungen und Mahnungen.
keywords: E-Mail, Vorlage, Text, Betreff, Platzhalter, CC, Kopie, Mahnung, Zahlungserinnerung, Mahnwesen, Mahnspesen, Mailserver, Absender, überfällig, pausieren
audience: Admins
---

![E-Mails & Mahnwesen](a-set-mail.webp)

## Wie E-Mails gesendet werden {#versand}

Mit eingerichtetem Mailserver sendet die App direkt: Absender ist Ihr Unternehmen, Antworten gehen an die Person, die gesendet hat, und diese bekommt eine Kopie. Den Mailserver richtet Parto für Ihr Unternehmen ein. Ohne ihn öffnet die App Ihr Mailprogramm (z. B. Outlook) mit Empfänger, Betreff, Text und Anhängen.

> Nichts geht automatisch an Kunden. Jede E-Mail sehen Sie vor dem Senden – außer ein Admin hat einen [Ablauf](help:processes) ausdrücklich zum Senden eingerichtet.

## E-Mail-Vorlagen {#vorlagen}

Betreff und Text je Sprache für: **Rechnung**, **Gutschrift**, **Angebot**, **E-Mail an Kundenkontakt**, **E-Mail an Projektkontakt**, **Abnahme eines Meilensteins**, **Einladung zum Stundenkontingent** und **Antwort im Stundenkontingent**. Unter jeder Vorlage stehen ihre Platzhalter (z. B. \`{number}\`, \`{customer}\`, \`{due}\`). *Standard wiederherstellen* setzt den Originaltext zurück.

**Standard-CC (optional):** wird beim Senden vorgeschlagen und kann dort geändert werden. Der Absender kommt beim Senden selbst dazu, wenn er unter Mein Profil *Kopie gesendeter E-Mails* eingeschaltet hat.

## Kundenvorlagen {#kundenvorlagen}

Braucht ein Kunde andere Texte (z. B. Bestellnummer im Betreff, andere Anrede), passen Sie die Vorlage beim Kunden im Reiter **E-Mail-Vorlagen** an. *Text des Unternehmens übernehmen* fängt mit dem Unternehmenstext an; *Zurücksetzen* gilt wieder der Unternehmenstext.

## Zahlungserinnerungen und Mahnungen {#mahnungen}

Stufen mit Wartezeit, optionalen **Mahnspesen** und Text je Sprache. Standard:

| Stufe | Wann |
|---|---|
| Zahlungserinnerung | 7 Tage nach Fälligkeit |
| 1. Mahnung | 14 Tage nach der Zahlungserinnerung |
| 2. Mahnung | 14 Tage nach der 1. Mahnung |

**So läuft es:** Fällige Mahnungen zeigt die App mit einer Zahl beim Menü *Rechnungen* und unter *Heute*. Sie wählen sie aus und **senden** (mit der Rechnung im Anhang) oder öffnen sie im Mailprogramm und *vermerken sie als gesendet*. In einer Rechnung lassen sich Mahnungen **pausieren**, z. B. bei einer Reklamation. **CC für Zahlungserinnerungen und Mahnungen** z. B. an die Buchhaltung.

Mehr dazu im „i“ neben *Mahnwesen* bzw. in der Anleitung [Mahnwesen](help:howto-dunning).
`,Ie=`---
title: Nummernkreise
group: settings
order: 3
contexts: settings.numbers
summary: Format der Rechnungsnummern, letzte vergebene Nummer, Kunden-, Projekt- und Angebotsnummern.
keywords: Rechnungsnummer, Nummernkreis, Präfix, Stellen, Format, fortlaufend, lückenlos, Angebotsnummer, Kundenkürzel, Projektcode, Freitext
audience: Admins
---

![Nummernkreise](a-set-nummern.webp)

## Rechnungsnummern {#rechnungen}

- **Format:** *Jahr + Monat + laufende Nummer* (z. B. 2611672), *Jahr – laufende Nummer*, *Nur laufende Nummer* oder *Freitext* (bei jeder Rechnung eingeben; vorgeschlagen wird die letzte Nummer mit hochgezählten Endziffern).
- **Präfix (optional):** bis 6 Zeichen, z. B. „RE-“.
- **Stellen gesamt:** wie viele Ziffern die Nummer hat.
- **Zuletzt vergebene laufende Nummer:** zum Fortsetzen der Nummern aus dem bisherigen Programm. Sie darf nicht unter einer schon ausgestellten Rechnung liegen.

Rechnungsnummern werden **lückenlos** vergeben und nie wiederverwendet. Im Unternehmen vergibt sie die Cloud, damit kein Gerät dieselbe Nummer doppelt vergibt.

## Kunden-, Projekt- und Angebotsnummern {#codes}

Neue Kunden, Projekte und Angebote bekommen ihr Kürzel automatisch beim Speichern:

| Was | Nummer |
|---|---|
| Kunden | Buchstaben A … Z, AA … (optional mit Präfix) |
| Projekte eines Kunden | Buchstaben des Kunden + laufende Nummer: A1, A2 … |
| Kundenprojekt | A0, B0 … |
| Interne Projekte | INT1, INT2 … |
| Angebote | Präfix (Standard O) + laufende Nummer, 3 bis 6 Stellen |

Selbst eingegebene oder importierte Kürzel bleiben, wie sie sind.
`,Ne=`---
title: Standardsätze
group: settings
order: 6
contexts: settings.rates
summary: Stundensätze als Vorlagen für Projektrollen und die Standard-Rolle für neue Projekte.
keywords: Standardsatz, Stundensatz, Tagsatz, Vorlage, Rolle, Standard-Rolle, Preisliste
---

Stundensätze, die Sie immer wieder brauchen, z. B. „Senior Consultant 150 €/Std.“. Beim Anlegen einer Rolle im Projekt wählen Sie *Standardsatz übernehmen* – Name, Einheit, Satz und Zeilentext werden übernommen und sind danach anpassbar.

- **Standardsatz** anlegen: Bezeichnung, Einheit (je Stunde, Personentag oder Tag), Satz, Stunden je Tag, Positionstext.
- **Standard-Rolle für neue Projekte:** wird jedem neuen Projekt als erste Rolle vorgeschlagen, mit der anlegenden Person als eingeteilt.
- Aus einem Projekt: bei einer Rolle *Als Standardsatz speichern*.

Ändert sich ein Standardsatz, bleiben bestehende Projekte unverändert – ihre Sätze gehören zum Projekt ([Rollen und Sätze](help:projects#rollen)).
`,We=`---
title: Rollen & Rechte
group: settings
order: 31
contexts: settings.roles
summary: Was jede Rolle sehen und tun darf – am Desktop und in der Handy-App – und eigene Rollen anlegen.
keywords: Rolle, Rechte, Berechtigung, Admin, Manager, Projektmanager, Finanzen, Mitarbeiter, Menü sehen, Anlegen & ändern, Handy, eigene Rolle
audience: Admins
---

Häkchen = diese Rolle darf das. Die Zeilen folgen dem Menü der App: **Menü sehen** blendet den Menüpunkt ein, **Anlegen & ändern** erlaubt Neu, Bearbeiten, Löschen und Excel-Import. Dazu kommen besondere Rechte wie *Stunden & Reisekosten freigeben*, *Abrechnung durchführen*, *Einkaufspreise sehen*, *Als andere Person arbeiten* oder *Mit Kunden teilen*.

![Rollen & Rechte](a-set-rollen.webp)

## Die Standardrollen {#standard}

| Rolle | Gedacht für |
|---|---|
| Mitarbeiter (Standard) | eigene Zeiten und Reisekosten – keine Rechnungen, Zahlungen, Kontakte oder Stundensätze |
| Projektmanager | eigene Projekte, Freigaben, Angebote |
| Manager | Team, Freigaben, Projekte und Kunden |
| Finanzen | Abrechnung, Rechnungen, Zahlungen, Auswertungen |
| Admin | alles – immer, damit sich niemand aussperrt |

Die Rechte der Standardrollen sind änderbar; *Standard wiederherstellen* setzt sie zurück.

## Mehrere Rollen, eigene Rollen {#eigene}

Eine Person kann mehrere Rollen haben und bekommt alle ihre Rechte (zuweisen im [Team](help:team)). **Neue Rolle:** Namen vergeben, *Rechte übernehmen von* einer bestehenden Rolle, dann anpassen.

## Handy-App {#handy}

Umschalten auf **Handy-App**: was die Rolle am Handy darf. Am Handy kann eine Rolle weniger als am Desktop, nie mehr.

> Die Cloud prüft dieselben Rechte – was die App ausblendet, ist auch über die Cloud nicht erreichbar.
`,Ue=`---
title: App-Sperre
group: settings
order: 32
contexts: settings.security
summary: Die App mit einem Passwort sperren – nach einer Zeit ohne Eingabe oder sofort.
keywords: Sperre, App-Sperre, Passwort, sperren, Leerlauf, entsperren, Sicherheit
---

Die App-Sperre schützt die Daten auf diesem Gerät, wenn andere Zugang zum Computer haben.

1. **Passwort** (mindestens 8 Zeichen) zweimal eingeben.
2. **Sperren nach (Minuten ohne Eingabe)** wählen.
3. **App-Sperre einschalten**.

Unten links in der Seitenleiste erscheint dann **Jetzt sperren**. Zum Entsperren das Passwort eingeben.

> **Passwort vergessen?** Eine [Sicherung](help:settings-data#sicherungen) von vor dem Einschalten kann wiederhergestellt werden; mit der Cloud kommen die Daten außerdem aus der Cloud zurück.

Die App-Sperre gilt nur für dieses Gerät. Die Anmeldung an der Cloud sichern Sie mit der [Zwei-Faktor-Anmeldung](help:settings-cloud#zwei-faktor).
`,Ze=`---
title: E-Mail-Signaturen
group: settings
order: 12
contexts: settings.signatures
summary: Eigene Signaturen und die Unternehmenssignatur für E-Mails aus der App.
keywords: Signatur, E-Mail-Signatur, Outlook, Logo, Kontaktdaten, Unternehmenssignatur
---

Unter jede E-Mail aus der App (Rechnungen, Angebote, Mahnungen, Kontakt-Mails) kommt eine Signatur. Beim Senden wählen Sie sie im Feld *Signatur* – oder *Ohne Signatur*.

- **Unternehmenssignatur:** legt ein Admin einmal für alle an. Sie füllt sich mit den Angaben jeder Person aus ihrem [Profil](help:profile#profil) (Name, Position, Telefon, E-Mail).
- **Eigene Signaturen:** jede Person für sich, z. B. aus Outlook kopiert – mit Formatierung und bis zu 10 Bildern.

![Unternehmenssignatur](e-sig-unternehmen.webp)
`,Ve=`---
title: Cluster
group: settings
order: 22
contexts: settings.tags
summary: Farbige Lesezeichen für Kunden, Projekte, Angebote, Rechnungen und mehr – zum Gruppieren über Kunden hinweg.
keywords: Cluster, Tag, Schlagwort, Gruppe, Farbe, zusammenführen, archivieren
---

Cluster erscheinen, wenn unter [Allgemein](help:settings-general) *Cluster verwenden* eingeschaltet ist.

## Verwenden {#verwenden}

- Auf einer Seite **#** drücken oder *Cluster* klicken, Namen tippen – vorhandene werden vorgeschlagen, *Neuer Cluster „…“* legt einen an (wenn Sie das dürfen).
- In Listen mehrere Zeilen wählen › *Zu Cluster* (Taste **T**), oder einen Cluster auf eine Zeile ziehen.
- Jede Liste und jede Auswertung lässt sich nach Cluster filtern und gruppieren.

## Verwalten {#verwalten}

Hier: Name, Farbe und Beschreibung. Ein Klick auf einen Cluster zeigt alle Datensätze darin. **Archivieren** – bleibt an den Datensätzen, wird aber nicht mehr angeboten. **Zusammenführen in …** – alle Datensätze bekommen den anderen Cluster, dieser wird gelöscht.

Wer Cluster anlegen und wer nur zuordnen darf, regeln die [Rollen](help:settings-roles).
`,Le=`---
title: Einheiten und USt-Sätze
group: settings
order: 4
contexts: settings.units#einheiten, settings.vat#ust
summary: Die Einheiten für Positionen und die Umsatzsteuersätze für Angebote und Rechnungen.
keywords: Einheit, Stunde, Tag, Personentag, Pauschal, Stück, Umsatzsteuer, Mehrwertsteuer, USt, MwSt, 20 %, 10 %, Reverse Charge, Steuersatz
audience: Admins
---

## Einheiten {#einheiten}

Die Auswahl im Feld *Einheit* bei Angebots- und Rechnungspositionen und bei Artikeln, z. B. Std., PT (Personentag), Tag, Pauschal, Stück. Eigene Einheiten hinzufügen, umbenennen oder entfernen; Einheiten auf bestehenden Belegen bleiben.

## USt-Sätze {#ust}

Die Umsatzsteuersätze, die bei Positionen zur Auswahl stehen (z. B. 20 %, 10 %, 0 %). Jede Position kann ihren eigenen Satz haben; die Rechnung weist die USt je Satz aus.

Vorbelegt wird der **USt-Satz des Kunden** (Kunde › Rechnungen). Für Kunden im Ausland ohne Umsatzsteuer dort 0 % und den Hinweis *Reverse Charge – Steuerschuldnerschaft des Leistungsempfängers* eintragen – und die UID des Kunden.

Als **Kleinunternehmer** schalten Sie die Umsatzsteuer unter [Unternehmen](help:settings-company#schalter) ab.
`,Oe=`---
title: Parto-Admin
group: settings
order: 40
contexts: settings.vendor
summary: Nur für Parto – Unternehmensanfragen freigeben, neue Unternehmen anlegen und Lizenzmodule schalten.
keywords: Parto-Admin, Registrierung, Unternehmensanfrage, freigeben, Modul, Lizenz
audience: Parto
---

Diesen Bereich sieht nur das Parto-Konto.

- **Offene Unternehmensanfragen:** neue Registrierungen prüfen und **freigeben** (die Ansprechperson bekommt eine E-Mail mit Code) oder **ablehnen**.
- **Neues Unternehmen anlegen:** für ein selbst gewonnenes Unternehmen – Unternehmen, Ansprechperson, E-Mail, Sprache. Die Person bekommt dieselbe E-Mail mit Code.
- **Module je Unternehmen:** Lizenzmodule wie [Abläufe](help:processes) ein- oder ausschalten. Ohne Modul funktioniert alles wie bisher.
`,Ge=`---
title: Einstellungen – Überblick
group: settings
order: 1
contexts: settings
summary: Alle Einstellungen auf einer Seite, gruppiert und durchsuchbar.
keywords: Einstellungen, Konfiguration, Setup, schnell finden, Admin
---

**Einstellungen** zeigt alle Bereiche auf einer Seite, in Gruppen. Welche Sie sehen, hängt von Ihren Rechten ab; Bereiche ohne Recht (z. B. Kalender, App-Sperre, Cloud) betreffen nur Ihr eigenes Gerät und sind immer da.

![Einstellungen](a-settings.webp)

**Schnell finden:** ins Feld oben tippen, z. B. *IBAN*, *Mahnung* oder *Meilensteine* – es findet Bereiche auch über die Dinge, die darin stehen. Mit *← Alle Einstellungen* geht es zurück zur Übersicht. Unter jedem Bereich steht das **Änderungsprotokoll**: wer wann was geändert hat.

## Die Bereiche {#bereiche}

| Gruppe | Bereiche |
|---|---|
| Unternehmen & Stammdaten | [Unternehmen](help:settings-company), [Nummernkreise](help:settings-numbers), [Einheiten und USt-Sätze](help:settings-units-vat), [Wechselkurse](help:settings-fx), [Standardsätze](help:settings-rates), [Allgemein](help:settings-general) |
| Dokumente & E-Mails | [Dokumentdesign](help:settings-design), [E-Mails & Mahnwesen](help:settings-mail), [E-Mail-Signaturen](help:settings-signatures), [App-Design](help:settings-appdesign) |
| Zeit & Kosten | [Kalender](help:settings-calendar), [Reisekosten](help:settings-expenses), [Cluster](help:settings-tags) |
| Team & Zugang | [Cloud](help:settings-cloud), [Rollen & Rechte](help:settings-roles), [App-Sperre](help:settings-security) |
| Daten | [Sicherungen, Datensicherheit, Datenübernahme](help:settings-data) |
| Automatisierung | [Abläufe](help:processes) (Lizenzmodul) |

## Erste Einrichtung {#einrichtung}

Für ein neues Unternehmen in dieser Reihenfolge:

1. [Unternehmen](help:settings-company): Name, Anschrift, UID, Bank, Währung, Geschäftsjahr.
2. [Nummernkreise](help:settings-numbers): Format und letzte Rechnungsnummer.
3. [Dokumentdesign](help:settings-design): Logo, Farbe, Texte – Vorschau prüfen.
4. [Standardsätze](help:settings-rates): die üblichen Stundensätze.
5. [Team](help:team): Personen einladen und Rollen geben.
`,He=`---
title: Willkommen in Parto Diary
group: start
order: 1
summary: Was Parto Diary kann, wie die App aufgebaut ist und wo Sie Hilfe finden.
keywords: Überblick, Einstieg, Navigation, Menü, Hilfe, F1, Wiki, PARTO
---

Parto Diary begleitet einen Auftrag vom ersten Angebot bis zur bezahlten Rechnung: **P**roposal (Angebot) · **A**greement (Auftrag) · **R**ecording (Zeiterfassung) · **T**racking (Budget und Freigaben) · **O**utgoing invoice (Rechnung).

## Der typische Ablauf {#ablauf}

1. **Kunde anlegen** – unter [Kunden](help:customers). Das Kürzel (A, B, … AA) vergibt die App beim Speichern.
2. **Angebot schreiben** – unter [Angebote](help:offers), als PDF ansehen und per E-Mail senden.
3. **Angebot annehmen** – daraus entsteht auf Wunsch das [Projekt](help:projects) mit Rollen, Sätzen und Budget.
4. **Stunden erfassen** – alle im Team buchen unter [Heute](help:today) oder [Zeiten](help:time), am PC, im Browser oder am Handy.
5. **Freigeben** – wo nötig, geben Führungskräfte die eingereichten Wochen unter [Freigaben](help:approvals) frei.
6. **Abrechnen** – die [Abrechnung](help:run) macht aus offenen, verrechenbaren Stunden Rechnungen.
7. **Senden und Zahlung verbuchen** – unter [Rechnungen](help:invoices) senden, Zahlungen erfassen oder den [Kontoauszug einlesen](help:payments).

## Aufbau der App {#aufbau}

- **Seitenleiste links:** die Menüs. Welche Sie sehen, hängt von Ihren Rollen ab (Einstellungen › [Rollen & Rechte](help:settings-roles)).
- **Oben rechts:** das Benutzermenü mit Ihrem Namen – Unternehmen, Sprache, [Mein Profil](help:profile), Hilfe, Konto und Abmelden.
- **Unten links:** der Abgleich mit der Cloud („abgeglichen“, „offline“, Konflikte). Mehr unter [Cloud und Abgleich](help:sync).
- **Listen:** Klick auf eine Spaltenüberschrift sortiert, Filterfelder und gespeicherte Ansichten helfen beim Finden – siehe [Listen, Filter und Ansichten](help:lists).

## Hilfe finden {#hilfe}

- **Hilfe öffnen:** Benutzermenü oben rechts › *Hilfe* oder die Taste **F1**. Die Hilfe öffnet sich beim Artikel zur Seite, auf der Sie gerade sind – auch für einzelne Bereiche wie eine Einstellung oder ein geöffnetes Projekt. Links stehen alle Themen, der Punkt ● markiert den Artikel Ihrer aktuellen Seite; *Hilfe zu dieser Seite* oben bringt Sie dorthin zurück.
- **Suche:** einfach ins Suchfeld tippen. Die Suche findet Wörter auch mit Tippfehlern, ohne Umlaute (*Ablaeufe*), in Wortteilen (*Nummer* findet *Rechnungsnummer*) und kennt gängige andere Wörter (*Faktura*, *Offerte*, *Spesen*). Mit ↑ ↓ und Enter wählen Sie einen Treffer; **/** oder **Strg+K** springt ins Suchfeld, **Esc** schließt.
- **Das kleine „i“** neben manchen Einstellungen erklärt einen Vorgang Schritt für Schritt; *In der Hilfe öffnen* zeigt dieselbe Anleitung in der Hilfe.

> **Tipp:** Die Texte der Hilfe gehören zur jeweiligen Version der App. Was Sie hier lesen, passt zu der Version, die Sie gerade verwenden.
`,qe=`---
title: Cloud, Abgleich und Konflikte
group: start
order: 5
summary: Wie Ihre Daten zwischen PC, Browser und Handy abgeglichen werden – auch offline – und was bei gleichzeitigen Änderungen passiert.
keywords: Synchronisation, Sync, offline, abgeglichen, Konflikt, gleichzeitig geändert, Update, Version zu alt, Cloud
---

Jedes Gerät hat eine eigene Kopie der Daten und arbeitet auch **offline** weiter. Sobald eine Verbindung besteht, gleicht die App im Hintergrund mit der Cloud ab.

## Die Anzeige unten links {#status}

| Anzeige | Bedeutung |
|---|---|
| abgeglichen | Alles ist in der Cloud. |
| gleicht ab … | Der Abgleich läuft. |
| offline – wird nachgeholt | Keine Verbindung; Ihre Änderungen sind gespeichert und gehen automatisch hinaus. |
| n ausstehend | So viele Änderungen warten noch auf das Hochladen. |
| Neu anmelden | Die Anmeldung ist abgelaufen – unter Einstellungen › Cloud neu anmelden. Nichts geht verloren. |
| Update nötig | Diese App-Version ist zu alt. App neu starten und das Update installieren (oder neu von diary.parto.at). |

## Konflikte {#konflikte}

Wurde derselbe Eintrag auf zwei Geräten gleichzeitig geändert, überschreibt die App nichts stillschweigend. Unten links erscheint **„n Konflikte“**. Ein Klick zeigt beide Fassungen Feld für Feld; wählen Sie je Eintrag *Meine Version übernehmen* oder *Cloud-Version behalten*.

## Nummern brauchen eine Verbindung {#nummern}

Rechnungs-, Angebots-, Kunden- und Projektnummern vergibt die Cloud, damit keine Nummer doppelt vorkommt. Offline können Sie alles vorbereiten; zum Ausstellen einer Rechnung oder Speichern eines neuen Kunden braucht es kurz eine Verbindung.

## Updates {#updates}

Die Desktop-App prüft beim Start, ob es eine neue Version gibt, und bietet *Installieren und neu starten* an. Die Web-Version ist immer aktuell. Die Android-App wird von diary.parto.at neu installiert. Mehr zur Cloud-Anmeldung unter [Cloud](help:settings-cloud).
`,$e=`---
title: Team
group: admin
order: 1
contexts: team, team.user#person
summary: Personen einladen, Rollen und Teams zuweisen, Projekte zuordnen, deaktivieren – und als andere Person arbeiten.
keywords: Team, Mitarbeiter, einladen, Einladung, Rolle, Teams, Führungskraft, Vorgesetzter, deaktivieren, zuweisen, Projekte zuweisen, als andere Person arbeiten, act as, Freigabe
audience: Admins, Manager
---

Unter **Team** verwalten Sie, wer im Unternehmen arbeitet. Dafür muss das Unternehmen in der Cloud sein ([Cloud](help:settings-cloud)).

![Team](a-team.webp)

## Eine Person einladen {#einladen}

1. **+ Person einladen**.
2. Name, E-Mail und **Rollen** (mehrere möglich – die Person bekommt alle Rechte dieser Rollen).
3. **Einladen** – mit eingerichtetem Mailserver geht die Einladung direkt hinaus, sonst öffnet sich Ihr Mailprogramm mit dem fertigen Text.
4. Die Person öffnet den Link (oder diary.parto.at), wählt *Konto anlegen* mit genau dieser E-Mail-Adresse, bestätigt den Code und legt ihr Passwort fest.

Manager können Personen einladen und Rollen auf Mitarbeiterebene vergeben; Rollen mit mehr Rechten vergibt ein Admin. **Kopieren (neue Person wie diese)** übernimmt Rollen, Teams, Führungskraft und Projektaufgaben einer bestehenden Person.

## Eine Person öffnen {#person}

Ein Klick zeigt die Details:

- **Details:** Name, Ansprechname, Kontakt, Profilbild, bevorzugte Sprache, **Führungskraft** (darf interne Zeiten wie Urlaub für die Person erfassen), Status.
- **Rollen** und **Teams**.
- **Projekte & Sätze:** auf welche Aufgaben die Person buchen darf. *Zuweisen*: ein Kunde ohne Projekt weist alle offenen Projekte des Kunden zu, ein Projekt ohne Aufgabe alle Aufgaben. *+ Neue Aufgabe mit eigenem Satz …* legt eine Aufgabe nur für diese Person an.

![Eine Person](a-user-detail.webp)

![Projekte zuweisen](a-user-assign.webp)

## Teams {#teams}

Teams sind Gruppen im Unternehmen, z. B. Beratung oder Buchhaltung. Eine Person kann in mehreren Teams sein. Listen lassen sich nach Team filtern, und gespeicherte [Ansichten](help:lists#ansichten) können mit den eigenen Teams geteilt werden.

## Freigabe der Stunden {#freigabe}

*Stunden müssen freigegeben werden, bevor sie verrechnet werden* schaltet die [Freigaben](help:approvals) für alle ein. Stunden von Admins und Managern brauchen keine Freigabe. Einzelne Aufgaben können die Freigabe auch ohne diesen Schalter verlangen.

## Deaktivieren und löschen {#deaktivieren}

Wer sich schon angemeldet hat, wird **deaktiviert**: der Zugang endet, Stunden und Verlauf bleiben, später wieder aktivierbar. Wer sich nie angemeldet hat, kann gelöscht werden; die Einladung verfällt. Das eigene Konto löscht man im eigenen [Profil](help:profile#konto).

## Als diese Person arbeiten {#als-person}

Mit der Berechtigung *Als andere Person arbeiten* zeigt und bucht die App alles als die gewählte Person – z. B. um Stunden nachzutragen. Ein Banner zeigt das auf jeder Seite; *Zurück zu meinem Konto* beendet es. Die Cloud prüft weiter Ihre eigenen Rechte und protokolliert unter Ihrem Konto.
`,Je=`---
title: Zeiten erfassen
group: work
order: 1
contexts: time, time.week#woche
summary: Stunden buchen, korrigieren, kopieren, einreichen und auswerten – in der Liste oder in der Wochenansicht.
keywords: Zeiterfassung, Stunden, buchen, Eintrag, Timer, Woche, Tätigkeit, Rolle, kopieren, gemeldet, Kundenportal, Überschneidung, Kollegen, Urlaub, Krank
---

Unter **Zeiten** stehen alle Ihre Zeiteinträge. Wer mehr Rechte hat (z. B. Projektleitung, Finanzen), sieht auch die Einträge anderer.

![Zeiten – die Liste](u-zeiten.webp)

## Einen Eintrag erfassen {#erfassen}

1. Datum wählen (vorbelegt: heute).
2. **Von** und **Bis** eingeben – oder statt „Bis“ die Dauer in **Std.** (z. B. \`2,5\` oder \`2:30\`). Uhrzeiten gehen als \`0900\`, \`9:00\`, \`9\` oder \`9,5\`.
3. **Projekt** suchen: Kürzel, Name oder Kunde tippen, zuletzt verwendete stehen oben. Hat das Projekt mehrere Rollen, die **Rolle** wählen.
4. **Tätigkeit** beschreiben – bei manchen Projekten Pflicht.
5. **Enter** speichert.

![Projekt suchen](u-projektsuche.webp)

> Gebucht werden kann nur auf Projekte und Rollen, für die Sie eingeteilt sind. Fehlt ein Projekt, fragen Sie die Projektleitung – sie weist Sie im Projekt unter *Rollen und Sätze › Wer darf buchen* zu.

## Überschneidungen {#ueberschneidung}

Liegt ein neuer Eintrag in einer Zeit, die schon gebucht ist, fragt die App: *Alten Eintrag behalten*, *Neuen Eintrag behalten*, *Alten Eintrag kürzen* oder *Beide behalten* (z. B. parallel für zwei Projekte). Verrechnete Einträge werden nie geändert.

## Ändern, löschen, kopieren {#aendern}

- Einen Eintrag anklicken, ändern, speichern. *Rückgängig* holt einen gelöschten Eintrag sofort zurück.
- **Kopieren:** einen Eintrag auf einen anderen Tag, *Auf morgen kopieren* oder einen ganzen Tag (*Tag kopieren nach …*).
- **Tätigkeit kopieren:** legt den Text in die Zwischenablage, z. B. für ein Kundenportal; *Texte kopieren* nimmt alle gewählten Einträge, eine Zeile pro Eintrag.
- Gesperrt sind **verrechnete** Einträge (schon auf einer Rechnung) und **eingereichte**: eingereichte ändert nur ein Manager, freigegebene nur ein Admin.

## Kolleg:innen nennen {#kollegen}

Waren mehrere Personen beim selben Termin, nennen Sie Kolleg:innen beim Eintrag. Sie bekommen einen **Vorschlag** und übernehmen ihn mit einem Klick (oder lehnen ab) – unter [Heute](help:today#heute).

![Kolleg:innen nennen](u-kollegen.webp)

## Liste und Woche {#woche}

- **Liste:** alle Einträge im gewählten Zeitraum (diese/letzte Woche, dieser/letzter Monat oder frei), mit Filtern nach Projekt, Kunde, Status, Quelle (manuell, Timer, Kalender, Import), Cluster und Team.
- **Woche:** eine Kalenderwoche als Raster mit Soll (geplante Stunden aus Einstellungen › Allgemein) und Differenz.
- **Zusammenfassung:** Stunden je Projekt und Person mit Anteil und verrechenbaren Stunden; *Liste darauf filtern* übernimmt eine Zeile als Filter.

![Wochenansicht](u-woche.webp)

## Woche einreichen {#einreichen}

Brauchen Ihre Stunden eine Freigabe, tragen sie den grauen Hinweis *nicht eingereicht*. Am Ende der Woche **Woche einreichen** – unter Zeiten oder unter [Freigaben](help:approvals). Danach wartet die Woche auf die Freigabe; zurückgegebene Einträge korrigieren Sie und reichen sie neu ein.

![Woche einreichen](u-einreichen.webp)

## Dem Kunden gemeldet {#gemeldet}

Bei Projekten mit *Stunden werden dem Kunden gemeldet* (z. B. wöchentlich in ein Kundenportal) markieren Sie die übertragenen Einträge mit **Als gemeldet markieren**. Abgerechnet werden dort nur gemeldete Stunden; der Filter *Noch nicht gemeldet* zeigt, was noch fehlt.

## Rechnung aus gewählten Stunden {#rechnung}

Einträge auswählen › **Rechnung erstellen …** öffnet die [Abrechnung](help:run) nur mit diesen Stunden – je Kunde und Rechnungsgruppe ein Vorschlag.

## Für Mitarbeitende erfassen {#fuer-andere}

Führungskräfte können für ihre direkten Mitarbeitenden **interne** Zeiten erfassen (Urlaub, Krank …): *Für Mitarbeiter erfassen*. Die Person sieht den Eintrag mit Ihrem Namen.

## Kalender übernehmen {#kalender}

Termine aus Outlook oder einem anderen Kalender lassen sich als Einträge übernehmen – siehe [Kalender](help:settings-calendar).
`,Qe=`---
title: Heute
group: start
order: 2
contexts: today
summary: Die Startseite – Zeit erfassen, Timer, was heute ansteht, und für Verantwortliche die wichtigsten Kennzahlen.
keywords: Startseite, Dashboard, Timer, Wiedervorlage, Kennzahlen, Übersicht, Willkommen
---

„Heute“ ist die Startseite. Was Sie sehen, hängt von Ihren Rechten ab: Mitarbeitende sehen vor allem ihre Zeiten, wer Rechnungen und Auswertungen sieht, bekommt zusätzlich Kennzahlen.

![Die Startseite „Heute“](u-heute.webp)

## Zeit erfassen {#erfassen}

Oben steht die Eingabezeile für einen Zeiteintrag: Datum, Von, Bis (oder die Dauer), Projekt und Tätigkeit. **Enter** speichert. Uhrzeiten dürfen als \`0900\`, \`9:00\`, \`9\` oder \`9,5\` eingegeben werden. Alles Weitere zur Zeiterfassung steht unter [Zeiten](help:time).

![Eingabezeile](u-erfassen.webp)

## Timer {#timer}

Mit **Timer** wählen Sie ein Projekt (zuletzt verwendete stehen oben) und starten die Uhr. Beim Stoppen wird gebucht; ist für das Projekt eine Tätigkeit Pflicht, fragt die App danach. *Verwerfen* löscht den laufenden Timer ohne Buchung. Es kann immer nur ein Timer laufen.

## Was heute ansteht {#heute}

- **Heute:** Ihre heutigen Einträge mit der Summe der Stunden.
- **Ohne Projekt:** aus dem Kalender übernommene Termine, denen noch ein Projekt fehlt – bitte zuordnen. Schlägt die App eine Zuordnungsregel vor („Betreff mit … → Projekt?“), legt *Regel anlegen* sie für künftige Termine an.
- **Kalender:** findet der Abgleich neue Termine, erscheint *Prüfen* – siehe [Kalender](help:settings-calendar).
- **Vorschläge von Kolleg:innen:** Hat jemand Sie bei einem Eintrag genannt, nehmen Sie den Vorschlag an oder lehnen ihn ab.
- **Zurückgegebene Stunden:** Hat eine Führungskraft Einträge zur Korrektur zurückgegeben, steht hier ein Hinweis mit *Zu den Zeiten*.
- **Fällige Wiedervorlagen:** Aktivitäten bei Kunden mit Wiedervorlage-Datum ([Kunden](help:customers#aktivitaeten)) und Ihre offenen To-dos aus Projektlogs.
- **Budget-Warnungen:** Projekte, deren Budget knapp oder überschritten ist.

## Kennzahlen {#kennzahlen}

Wer Rechnungen sehen darf, bekommt Kacheln mit Umsatz im Geschäftsjahr und im laufenden Monat (netto, ohne stornierte), offenen Posten mit Überfälligem, Stunden des Monats und offenen (noch nicht verrechneten) Stunden mit ihrem Wert. *Bericht dazu öffnen* springt in die passende [Auswertung](help:reports).

Überfällige Rechnungen und fällige Mahnungen werden ebenfalls hier gemeldet – siehe [E-Mails & Mahnwesen](help:settings-mail#mahnungen).
`,Ye=`---
title: Approvals
group: work
order: 2
contexts: approvals
summary: Check submitted weeks, approve them or return them for correction.
keywords: approve, approval, submit, return, week, manager, project management, sign off
audience: Managers, project management, admins
---

The **Approvals** menu appears as soon as the company uses approvals – either for everyone (Settings › Team: *Hours need approval*) or for single tasks of a project (*Hours need approval* on the role, with *Approved by*).

## How it works {#ablauf}

1. Employees record their hours and **submit the week** (under Time or Approvals).
2. The approver sees the week here, grouped by person and calendar week, with project, task and activity.
3. **Approve** – single entries or all selected ones. Approved hours go into the [invoicing run](help:run).
4. **Return** – with a note on what to correct. The person sees the notice under "Today", corrects it and submits again.

## Not submitted yet {#nicht-eingereicht}

*Not submitted yet* lists hours that need approval but have not been submitted. They are invoiced only after submitting and approval; the invoicing run points this out ("… h still waiting for approval").

## Good to know {#tipps}

- Hours the approver books themselves count as approved.
- Hours on tasks **without** approval are approved automatically.
- Only a manager changes submitted entries, only an admin approved ones.
- Whether you get a count on the menu and an e-mail for new submissions is set by each person under [My profile › Notifications](help:profile#benachrichtigungen).
- With the module [Processes](help:processes) you can build approval chains with several steps, reminders and escalation.
`,Xe=`---
title: Custom reports
group: reports
order: 2
contexts: reports.custom
summary: Your own reports from all tables – with filters, grouping, comparison, chart, Excel and PDF; save them and pin them to the overview.
keywords: report, custom report, own analysis, group, filter, chart, diagram, compare tables, pin, dashboard, save
audience: Managers, finance, admins
---

Reports › **Custom reports**: combine all tables of the app (hours, projects, customers, invoices, offers, expenses …) into your own reports.

## Build a report {#bauen}

1. **New report** – or pick a template.
2. Pick the **table**, e.g. hours.
3. **Add column:** fields of the table and its linked tables (for hours also project, customer, person).
4. **Add filter:** field, comparison, value. Date fields also take \`today\`, \`today-30\`.
5. **Group by** (e.g. customer, month) – figures are summed.
6. View as a table or **chart**; export to **Excel** and **PDF**.

If only the first rows are shown, use filters or grouping.

## Compare tables {#vergleichen}

*Compare tables* puts figures from several tables side by side, joined by customer, project, person or period – e.g. hours worked next to invoiced revenue per customer.

## Save and pin {#speichern}

- **Save report** or **Save as …** – the team sees saved reports under *Saved reports*.
- **Pin to overview** shows the report as a tile on the [overview](help:reports#uebersicht); *Unpin from overview* removes it.

## Reports in processes {#ablaeufe}

The filters of custom reports are also the conditions in [processes](help:processes); a process can send a saved report regularly as PDF or Excel.
`,en=`---
title: Customers
group: sales
order: 1
contexts: customers, customers.detail#kunde-bearbeiten
summary: Master data, contacts, activities and everything that belongs to a customer.
keywords: customer, client, master data, contact, contact person, activity, follow-up, code, invoice e-mail, VAT number, UID, payment terms, invoice rhythm, sub-customer, customer group, group of companies, CRM
---

## Add a customer {#anlegen}

1. **+ New customer**.
2. Enter the **company name** and address. The app assigns the **code** (A, B … Z, AA …) when saving – unique in the whole company.
3. Under **Invoices**: invoice e-mail, VAT number (UID), payment terms (days), VAT rate and, if needed, a VAT note (e.g. reverse charge), invoice language, currency, invoice rhythm (weekly/monthly), *Attach timesheet*, *Expenses as a separate invoice* and an own document design.
4. **Save**.

It is quicker right in the offer: in the customer dropdown *+ New customer …* – a name is enough, the rest later.

> **VAT number:** invoices over €10,000 gross and reverse-charge invoices abroad need the customer's VAT number. If it is missing, the invoicing run warns.

## Edit a customer {#kunde-bearbeiten}

Clicking a customer opens it with its tabs:

| Tab | Content |
|---|---|
| Master data | Name, address, invoice details, picture/logo (*Search online* finds it on the website) |
| Contacts | Contact persons with function, e-mail, phone; *Invoice recipient* and *Invoice CC* (get invoices, reminders and offers in copy); *Projects* assigns the contact to single projects |
| Activities | Calls, meetings, e-mails, notes with a follow-up date; mails sent from the app appear here automatically |
| Projects | All projects of the customer; *+ Project* adds one |
| Sub-customers, framework contracts, documents | When switched on under Settings › General – see [Larger companies](help:large) |
| Expenses | Expenses for this customer, with status and receipts |
| E-mail templates | Own texts for this customer – see [E-mails & dunning](help:settings-mail#kundenvorlagen) |

## Activities and follow-ups {#aktivitaeten}

*Record activity* notes a contact: date, kind (call, meeting, e-mail, offer, task, note), subject, note. With a **follow-up** date it appears under [Today](help:today#heute) on that day until it is *done*.

## Contact {#kontaktieren}

The envelope icon in the list (or *Contact* with several selected) opens an e-mail to the contacts. With a mail server set up the app sends directly, you get a copy and the mail is noted as an activity; otherwise your mail program opens.

## Deactivate and delete {#loeschen}

A customer without projects, offers, invoices or expenses is deleted. If it already has some, it is **deactivated** – it disappears from the dropdowns but stays in reports. *Show inactive* brings it back, *Reactivate* makes it selectable again.

## Customer project {#kundenprojekt}

Every customer has a **customer project** (code A0, B0 …) for hours that belong to no project of their own, e.g. sales work with the customer. It belongs to the customer and is deactivated with it.
`,nn=`---
title: Expenses
group: work
order: 3
contexts: expenses, expenses.reports#abrechnungen
summary: Record receipts, mileage and per diem, settle them monthly or in an expense report and pass them on to customers.
keywords: expenses, travel costs, receipt, mileage, kilometre allowance, per diem, daily allowance, overnight, expense report, reimburse, re-invoice, pass on, foreign currency
---

Everyone records their expenses under **Expenses**. The status follows by itself: *open* → *paid to employee* (reimbursed) → *invoiced* (on a customer invoice) → *paid by customer*.

## Record an expense {#erfassen}

1. **Record expense**.
2. Pick the **category** – it decides what is asked:
   - *Amount per receipt* (hotel, train …): amount, currency, VAT rate.
   - *Kilometres × rate*: kilometres, from, to.
   - *Days × per diem*: country, days (also \`0.5\`) and meals provided, which reduce the per diem.
   - *Overnight*: nights.
3. **Paid with:** private (is reimbursed) or company card.
4. **Customer / project** and whether the expense is **passed on to the customer** – then it appears in the customer's next invoicing run as "Expenses" at the net amount.
5. **Add receipt** – photo or PDF, at most 8 MB.

For a foreign currency the app suggests the day's ECB rate; you can change it.

## Expense reports {#abrechnungen}

Tab **Reports**:

- **Monthly reports** are made automatically – per person and month.
- **New expense report** collects the expenses of a trip or project (e.g. "Workshop Linz"). With customer and project, or with *Several projects* (then pick per line). *Assign existing …* moves expenses already recorded into the report.
- **Submit** → accounting marks it **reimbursed**. Reimbursed reports are locked; *Reopen* lifts that.
- **PDF** creates the report with all lines; missing receipts are shown.

## Pass on to customers {#weiterverrechnen}

Expenses passed on go onto the customer's invoice with the next [invoicing run](help:run) – or onto a separate invoice if *Expenses as a separate invoice* is set on the customer. Expense reports can also be **invoiced** directly, several together if they go to the same invoice recipient. When sending the invoice you can attach the **original receipts** as a PDF.

## Settings {#einstellungen}

Admins maintain categories, mileage and per diem rates per country and the reduction per meal under [Settings › Expenses](help:settings-expenses).
`,tn=`---
title: Invoices
group: billing
order: 2
contexts: invoices, invoices.detail#rechnung-oeffnen
summary: View, send, correct and cancel invoices, record payments – and write manual invoices.
keywords: invoice, bill, send, sent, paid, overdue, credit note, cancel, correct, version, manual invoice, payment, PDF, reminder, timesheet, receipts, copy
---

The list shows all invoices with their status (*draft*, *open*, *sent*, *partly paid*, *paid*, *overdue*, *cancelled*, *credit note*), filters by status and fiscal year and the open total at the top. The tab **Payments received** is described under [Payments and bank statement](help:payments).

## Open an invoice {#rechnung-oeffnen}

A click opens the invoice: lines, totals per VAT rate, linked hours and expenses, payments, sending, internal note and archived versions.

## Send {#senden}

1. **Send**.
2. **To** is filled in (project, customer or contact e-mail); pick **CC** from contacts, colleagues or *Other …* (up to 10). Subject and text come from the [e-mail template](help:settings-mail).
3. Attachments: the invoice PDF, if you like the **timesheet** (*Choose hours …* for invoices without linked hours), the **original receipts** of the expenses and further files.
4. **Send now** – through your company's mail server; you get a copy. Without a mail server: *Open mail program*, then **Mark as sent**.

Several invoices of the same customer: select them in the list › *Send in one mail*.

## Correct and cancel {#korrigieren}

- **Edit** works as long as the invoice is **not sent** and not paid. Number and customer stay; every saved state stays as a version (v1, v2 …) in the archive.
- After sending, the invoice is read-only. Correct it by **cancelling**: this creates a **credit note** with its own number; the invoiced hours become open again and can be invoiced anew.
- *Undo sending* reverses a "sent" made by mistake.

## Payments {#zahlungen}

- **Record payment:** date, amount, note. Partial payments are possible; for a foreign currency optionally the amount credited in euros.
- **Mark as paid** (also for several selected): records one payment per invoice for the open amount.
- ✕ on a payment removes it from the invoice. Payments from the bank statement stay under Payments received and can be assigned again.

## Reminders and dunning {#mahnungen}

Overdue invoices get payment reminders and dunning levels according to the rules under [E-mails & dunning](help:settings-mail#mahnungen). In the invoice you can **pause** dunning for this invoice (e.g. during a complaint).

## Manual invoice {#manuell}

**Manual invoice** for work without booked hours: customer, optionally project and project text, external order number, service period, lines (with their own VAT rate, from [items](help:items)), *Take over open expenses*. **Create invoice** assigns the next number.

Invoices from an offer are created in the [offer](help:offers#rechnungen).

## Copy {#kopieren}

**Copy** creates a new invoice with the same lines (new number on creating) – only without booked hours and if the company allows it.

## PDF {#pdf}

**Open PDF** shows the archived original. *Recreate PDF* builds it with the current design – issued content does not change. Where PDFs are saved is set under [Document design](help:settings-design#ablage).
`,rn=`---
title: Items
group: sales
order: 3
contexts: items
summary: Item catalogue for material and labour – with number, unit, price and margin.
keywords: item, article, catalogue, product, material, labour, item number, product group, sales price, purchase price, margin, trades
---

The **Items** menu appears when the *Item catalogue (trades)* is switched on under [Settings › General](help:settings-general).

## Add an item {#anlegen}

1. **+ Item**.
2. **Item no.**, **description**, **product group** and **kind** (*material* or *labour*).
3. **Unit** (from [units](help:settings-units-vat)), **sales price** and optionally **VAT %** (empty = the customer's rate).
4. **Purchase price** – visible only to those allowed, never printed. The app shows the **margin**.
5. **Long text** – the line text on offer and invoice (empty = description).

Price changes stay visible in the **price history**. Items already on documents are archived when deleted.

## Use items {#verwenden}

In offers and manual invoices **+ Item** takes a line from the catalogue. The totals show subtotals for material and labour.

## Excel {#excel}

Many items at once: *Import › Download template*, fill in, import – see [Lists](help:lists#excel).
`,sn=`---
title: Features for larger companies
group: projects
order: 3
summary: Sub-customers, customer groups, programmes, framework contracts, milestones, documents and clusters – each can be switched on separately.
keywords: sub-customer, end customer, invoice to, customer group, group of companies, programme, sub-project, framework contract, call-off, milestone, payment plan, documents, contract, NDA, purchase order, link, follow-up project, total budget
---

Admins switch these building blocks on one by one under [Settings › General](help:settings-general). Switched off, none of them is visible.

## Sub-customers {#unterkunden}

For work invoiced through another customer (e.g. through a partner): on the project or offer pick the actual customer and under **Invoice to** the customer who receives the invoice. Reports still count the project for the actual customer. On the invoice recipient, the tab *Sub-customers* shows all that go through it. *Create customer from project* turns a project name into a customer of its own.

## Customer groups {#kundengruppen}

On the customer pick *Belongs to customer group* (the customer at the top of the group). Reports can be grouped by customer group.

## Programmes with sub-projects {#programme}

Mark a project as a **programme (parent project)**; other projects – also of other customers – are *Part of programme*. Hours, budget and invoices are summed in the tab *Sub-projects*.

## Links {#verknuepfungen}

Projects that belong together: *is follow-up of*, *is part of the programme*, *is related to*. **Create follow-up project** copies settings, roles with today's rates and team – also for another customer – and links both.

## Framework contracts with call-offs {#rahmenvertraege}

Create an offer as a **framework contract** (on the customer, tab *Framework contracts › Framework contract*). Projects pick *Call-off from framework contract*; what is invoiced on them counts against the contract's net amount. *Rates from framework contract* takes roles and rates into the call-off project. An [hours quota](help:quota) can run across all call-offs.

## Milestones {#meilensteine}

Invoice offers, framework contracts and projects by **milestones** instead of hours:

1. In the offer under invoicing *Invoice by milestones* – the milestones appear as a **payment plan** in the PDF.
2. On acceptance they go into the project (tab *Milestones*). Amount fixed or as % of the **total budget (net)**.
3. Status: pending → in progress → **done** (the app then offers an *acceptance mail*) → invoiced → paid.
4. Invoice finished milestones one by one or together – in the project or in the [invoicing run](help:run).

Hours on milestone projects are recorded but not invoiced in the run – except on tasks with *Invoice (hours)*.

## Documents and contracts {#dokumente}

Tab *Documents* on customers, projects and offers: drag in files (up to 25 MB), kind (contract, purchase order, NDA, other), validity and signatories. Only finance, admins and project management see contracts. If a contract expires within 60 days, the [data check](help:settings-data#datenpruefung) reports it.

## Clusters {#cluster}

Coloured bookmarks across customers – see [Clusters](help:settings-tags).
`,an=`---
title: Lists, filters and views
group: start
order: 4
summary: Sort, filter, select several rows, save and share views, Excel import and export.
keywords: list, table, sort, filter, view, columns, selection, multi-select, export, import, Excel, cluster
---

Customers, projects, offers, invoices, expenses and time all work the same way as lists.

## Search and filter {#filtern}

- **Search field** at the top: finds as you type, e.g. code, name or city.
- **Filter by …:** up to four filter fields. Pick the column first, then the value – the suggestions follow the other filters. Amounts and dates have *from* and *to*.
- **Cluster** and **Team** filter when these features are switched on.
- **Show inactive / archived** brings finished items back.

## Sort {#sortieren}

Click a column title to sort, click again to reverse.

## Columns and saved views {#ansichten}

- **Columns:** tick = column is shown, the arrows change the order.
- **Save as view** (menu "…"): saves columns, filters and sorting under a name. The *standard view* shows the usual columns.
- **Share:** a view can stay private or be visible to your teams, everyone with one of your roles or everyone in the company. Only its owner changes a shared view; others save it as their own. Who may share what is set in the [roles](help:settings-roles).

## Select several {#auswahl}

Tick the boxes on the left to select rows; actions for the selection appear, e.g. *Contact*, *Copy*, *Send in one mail* (invoices, offers of the same customer), *Mark as sent / paid*, *To cluster* or *Delete*.

## Clusters {#cluster}

Clusters are coloured bookmarks across customers (e.g. "Energy", "Tender 2027"). Add with **#** on a page or *To cluster*, or drag a cluster onto a row. Set up under [Settings › Clusters](help:settings-tags).

## Excel export and import {#excel}

- **Export:** exactly the filtered rows as Excel.
- **Import:** *Download template*, fill it in, *Import …* – you see a preview first; nothing changes until you confirm. Importing the same list again updates instead of duplicating. References use codes (customer A, project A1).
`,on=`---
title: Offers
group: sales
order: 2
contexts: offers, offers.edit#bearbeiten
summary: Write offers, send them as PDF, accept or decline them – and turn them into a project and invoices.
keywords: offer, quote, quotation, proposal, estimate, lines, acceptance, accepted, declined, version, order number, purchase order, partial invoice, final invoice, hit rate, PDF, send, framework contract, milestones
---

The list shows all offers with their status (*draft*, *sent*, *accepted*, *declined*), the totals at the top (open, accepted) and the **hit rate**.

## Write an offer {#bearbeiten}

1. **New offer** – or *Create offer* in the project, then customer and project are already set. A new project enters the *offer phase* with the offer.
2. Pick the **customer** (*+ New customer …* creates it right away), **title**, **date** and **valid until**.
3. **Description (scope):** separate paragraphs with an empty line; the buttons above turn lines into a heading, bold, bullets or numbering – exactly as it appears in the PDF.
4. **Lines:** description, quantity, unit, unit price and VAT rate per line. *Suggestions* offers agreed rates (project roles, framework contracts, earlier offers, standard rates) and – with the item catalogue – [items](help:items).
5. **Invoicing:** *By hours worked (time and material)* or by **milestones** (payment plan); plus a text that appears in the PDF as the section "Invoicing".
6. **Terms:** one line = one point; \`{terms}\` inserts the payment terms, \`{valid_until}\` the validity.
7. **Language** of the document and **Save**. The app assigns the number (O1, O2 …) on the first save.

## PDF and sending {#senden}

- **View PDF** shows the offer in the company's design ([Document design](help:settings-design)).
- **Send by e-mail:** recipients come from the customer (contacts, invoice e-mail), the text from the e-mail template, the PDF is attached; further files and CC are possible. Without a mail server your mail program opens – then **Mark as sent**.
- Several offers of the same customer can be selected in the list and **sent in one mail**.

## Versions {#versionen}

Changing a sent offer creates a new **version**. To show the version next to the number in the PDF, tick *Show version next to the offer number in the PDF* (off by default).

## Accepted {#angenommen}

**Accepted** asks:

1. *Was the offer accepted with changes?* – if *yes*, adjust the offer first, then *Accepted with changes* (new version).
2. **Customer's order number** – goes onto every invoice for this offer.
3. **Allow invoicing more than the offer amount** – otherwise the app stops when the invoices together exceed the offer.
4. **Create project from the offer** – with title, order number and one task per hour or day line (with its rate). Then invoicing runs by hours through the project. With *Take offered quantities as budget* the roles get their budget. Without a project you invoice straight from the offer.

The project becomes *active* and needs a project manager.

## Invoices from the offer {#rechnungen}

An accepted offer without a project can be invoiced any number of times, e.g. monthly for ongoing services: **Create invoice** (whole), *Share in percent*, *Partial invoice* or *Final invoice* (less the earlier invoices). For every invoice the app asks whether it is the **final invoice** – then the offer is closed for further invoices. *Reopen for invoices* lifts that. The top of the offer shows how much is already invoiced.

## Declined, reopen, copy, delete {#weiteres}

- **Declined** – optionally closes the project right away.
- **Reopen** makes an accepted or declined offer editable again.
- **Copy** creates a new draft with the same lines (new number on saving) – if the company allows it.
- **Delete** works for drafts only.
- **Related documents** shows the project and invoices that belong to this offer.

## Framework contracts and milestones {#rahmenvertrag}

An offer can act as a **framework contract** that projects call off, and can be invoiced by **milestones** – see [Features for larger companies](help:large).
`,ln=`---
title: Payments and bank statement
group: billing
order: 3
contexts: invoices.receipts
summary: Record incoming payments, import the bank statement and assign payments to invoices.
keywords: payment received, incoming payment, payment, bank statement, bank, account statement, George, Erste, MT940, CAMT, CSV, assign, match, unassign, difference, transfer
audience: Finance, admins
---

Invoices › tab **Payments received** shows all incoming payments with their source (manual or bank statement) and how much of each is assigned to invoices.

## Import the bank statement {#kontoauszug}

1. **Import bank statement …** and pick the file: George CSV, other CSV or Excel exports, MT940, CAMT (XML) or the Erste Bank PDF. Please save old .xls files as .xlsx or CSV.
2. The app reads the credits and suggests assignments – invoice numbers in the payment reference are matched first.
3. Check the suggestions, tick or untick, **Book selected**.

## Assign {#zuordnen}

- One payment can be split over several invoices, one invoice can have several payments.
- *Exact match* means: amount and open amount are the same.
- **Unassign** takes the payment off an invoice without deleting it; it is then open for assigning again.
- Differences (too much, too little) never block. They appear as a notice in the [data check](help:settings-data#datenpruefung).

## Payments without a bank statement {#manuell}

Here with **Book payment** (date, amount, payer, reference) or right in the invoice with *Record payment* or *Mark as paid* – see [Invoices](help:invoices#zahlungen). These payments are listed here too.
`,dn=`---
title: Phone app
group: work
order: 4
summary: Timer, time and approvals on the phone – also offline.
keywords: Android, phone, smartphone, mobile, app, timer, widget, weekly budget, APK, iPhone
---

The phone app (Android) and the web version on a phone show their own simple layout: **Timer**, **Time**, **Approvals** (for approvers) and **Account**. Everything else stays on the PC.

## Set up {#einrichten}

1. Download the app from diary.parto.at and install it (Android: APK).
2. Under *Account* sign in with the same e-mail and password as on the PC.
3. The data comes from the cloud; afterwards the app also works offline.

## Timer {#timer}

Tap a project – the timer starts at once. *Stop & book* books the time; if an activity is required, the app asks for it. Tapping *Discard* twice deletes the timer. The start page shows your hours today and this week, your streak and the **weekly budgets** of your tasks.

## Time {#zeiten}

View entries per day, add new ones (project, role, from/to or hours), edit and delete them – as on the PC.

## Budget notices {#budget}

On the phone the app already reports at 50, 75 and 90 % of a budget if you switched that on under [My profile › Notifications](help:profile#benachrichtigungen).

## What a role may do on the phone {#rechte}

Under [Roles & permissions](help:settings-roles) admins can allow less in the phone app than on the desktop (never more).
`,un=`---
title: Processes
group: settings
order: 50
contexts: settings.processes
summary: Automate recurring work – invoicing runs, approval chains, reminders, tasks and e-mails. Licence module.
keywords: process, workflow, automation, trigger, schedule, event, threshold, condition, step, action, approval chain, escalation, automatic invoicing run, e-mail template, log, test run, mode, test, active
audience: Admins (module Processes)
---

**Processes** automate recurring work. A process is a sentence of four parts:

| Part | Question | Example |
|---|---|---|
| **When** (trigger) | When does it start? | on the 1st working day of every month at 06:00 |
| **for** (subject) | What does it apply to? | projects |
| **only if** (conditions) | For which of them? | rhythm monthly, billable, active |
| **then** (steps) | What happens? | invoicing run (drafts) → notify |

Processes are a **licence module**; Parto switches it on per company. People with the permission *Set up processes and e-mail templates* (admins by default) may set them up. Without the module everything stays as before.

> **Status:** processes can be fully created, checked and tested. Automatic execution in the cloud follows in the next stage; until then the log stays empty.

## Mode: Off · Test · Active {#betrieb}

| Mode | Meaning |
|---|---|
| Off | resting; only this way can an incomplete process be saved |
| Test | runs as a trial, marked "Test" in the log, without any effect on customers – **every new process starts like this** |
| Active | runs for real |

Recommendation: let it run in test for a few days or a month change, check the log, then *Active*.

## New process {#neu}

**New process** opens a gallery of templates – all of them only create drafts or internal notices:

- **Monthly invoicing run** – on the 1st working day, the previous month's hours of all monthly projects as drafts.
- **Approval from 80 % budget** – after that every new time entry needs the project manager's approval; reminder and escalation after 2 working days.
- **Offer expires** – a follow-up task 7 days before.
- **Week not submitted** – Mondays at 9:00 a reminder to everyone with unsubmitted hours.
- **Overdue invoice** – a task for accounting 14 days after the due date.
- **Start empty**.

## The editor {#editor}

At the top the process reads as a sentence; click a part of it to change it. Below are the **steps** as a timeline, on the right the **test run**: which objects the process applies to today and – for schedules – the next three dates. A process applies to one kind of object: projects, time entries, invoices, offers, expense lines or customers.

## Triggers {#ausloeser}

- **Schedule:** daily, weekly, monthly or quarterly (calendar day or n-th working day), time of day (Vienna time).
- **Event:** when an object changes – e.g. invoice issued, offer sent, time entry submitted.
- **Threshold reached:** once, as soon as a condition holds (e.g. budget used ≥ 80 %).
- **On click:** via *Start process* on the object.

Working days are Monday to Friday; public holidays are not taken into account yet.

## Conditions {#bedingungen}

The same filters as in [custom reports](help:custom-reports): **field · comparison · value**, also fields of linked objects (a time entry knows the budget use and project manager of its project). *All* or *at least one* must hold; **groups (or …)** for mixed rules. Date fields take \`today\`, \`today+7\`, \`today-14\`.

## Steps and actions {#schritte}

| Action | What it does |
|---|---|
| Invoicing run | invoices the previous month, week or quarter – as **drafts (recommended)**, issued or issued and sent |
| Request approval | one person is enough or all must approve |
| Send e-mail | with an e-mail template, CC and **BCC (always possible)**, attachments |
| Notify | in the app, on the phone or by e-mail – according to the person's settings |
| Send report | a saved report as PDF or Excel |
| Create task | with a due date on the person's start page |
| Set field | e.g. project status, lock budget, offer declined |
| Wait | days or working days |

Recipients: person, team, role, project manager, booking person, approvers of the task, owners of the process – for e-mails also the customer or an address.

**Options per step:** *at the same time as the step before* (parallel), *only under a condition*, *escalate if nothing happens* (remind, hand on) and *on error* (stop and inform, stop, skip). Several approvals in a row run one after another.

## E-mail templates of processes {#vorlagen}

Tab *E-mail templates*: own templates used by several processes – subject and text in German and English, placeholders from the object (\`{project_name}\`, \`{customer}\`, \`{budget_used}\` …), signature, **always CC/BCC to these addresses** and a preview. Templates in use are archived when deleted.

> **E-mails to customers** go out automatically only if an admin explicitly sets it up that way. The templates always suggest drafts; a BCC to a company address is recommended.

## Log and versions {#protokoll}

The **log** shows every run with time, object, step and status (planned, running, waiting, done, failed, skipped, cancelled). Changing triggers, conditions or steps gives the process a new **version**; runs in progress keep theirs.

## Frequently asked questions {#fragen}

- *I don't see "Processes".* – The module is not switched on or you lack the permission.
- *Can a process create invoices twice?* – No, the invoicing run only invoices hours not invoiced yet.
- *What without the module?* – Approvals, manual invoicing runs, dunning and e-mail templates stay as before.
`,hn=`---
title: My profile and the user menu
group: start
order: 3
contexts: profile
summary: Name, call name, picture, language, notifications, projects and your own account.
keywords: user menu, profile, call name, notifications, language, delete account, two-factor, password, switch company
---

## The user menu {#benutzermenue}

Top right, with your name. It holds:

- **Company:** which company you work in and with which role. If your account belongs to several companies, switch here in the web version.
- **Language:** Deutsch or English – applies to you on all devices.
- **Help** (F1): opens the help at the article for the current page, with all topics and the search.
- **My profile**, **Account & cloud** and **Sign out**.

## My profile {#profil}

- **First name, last name** and **call name** – how the app greets you ("Welcome, …") and how you appear in invitation e-mails. Empty = first name.
- **E-mail, phone, position** – appear in the company signature of your e-mails ([E-mail signatures](help:settings-signatures)). You change the sign-in e-mail of your cloud account under *Sign-in*; you get a confirmation link at the new address.
- **Profile picture** – shown in the team and in the user menu.
- **Preferred language** – applies on all devices.
- **Roles, teams, manager** – view only; whoever manages the team changes them ([Team](help:team)).
- **My projects and customers** – which projects and tasks you may book on.

## Notifications {#benachrichtigungen}

Tab *Notifications*: for each kind separately, whether you get it **in the app**, **on the phone** or **by e-mail** – e.g. hours submitted for approval, a decision on your hours, being named on an entry, budget exceeded, overdue invoices, reminders due, data check, customer messages on the hours quota and a **copy of your sent e-mails** (blind copy of every mail you send from the app).

> Customers never receive anything automatically – except through a [process](help:processes) that an admin explicitly set up to send.

## Security and account {#konto}

- **Change password, two-factor sign-in:** user menu › *Account & cloud* – see [Cloud](help:settings-cloud).
- **Delete account:** only in your own profile. In a company with other people you leave the company; the hours you booked stay there. The last admin first makes someone else admin.
`,cn=`---
title: Projects
group: projects
order: 1
contexts: projects, projects.detail#projekt-bearbeiten
summary: Create projects, roles and rates, budget, project manager, status and everything that controls invoicing.
keywords: project, job, order, role, task, rate, hourly rate, daily rate, budget, project manager, status, offer phase, closed, invoice group, project text, cost centre, order number, project log, copy, follow-up project
---

A project collects the hours, expenses, offers and invoices of one job. A customer's projects are named after the customer plus a running number (A1, A2 …), internal projects INT1, INT2 …

> Depending on the settings, "project" may be called "job" in your company (Settings › Company › *Name for projects*).

## Create a project {#anlegen}

1. **New project** – or *+ Project* on the customer, or when accepting an offer.
2. **Project name**, **customer** and **project manager**. Active customer projects need a project manager; they are suggested as approver and named for questions.
3. **First role:** the company's standard role is suggested ([Standard rates](help:settings-rates)); the person creating the project is assigned to it.
4. **Save** – the code is assigned.

## Edit a project {#projekt-bearbeiten}

A click in the list opens the project. ‹ › move to the previous or next project of the list. The tabs:

| Tab | Content |
|---|---|
| Master data | Name, customer, invoicing, status, period, colour/picture |
| Hours & budget | Hours per role and status (open, invoiced, paid), budget use |
| Quota | Fixed hours per month – see [Hours quota](help:quota) |
| Project log | Notes and to-dos with owner and due date |
| Roles and rates | Who books at which rate, budgets, approval |
| Contacts | The customer's contact persons for this project; *Contact customer* |
| Milestones, sub-projects, links, documents | When switched on – see [Larger companies](help:large) |
| Expenses | Expenses for this project |

## Roles and rates {#rollen}

Every **role** (or task, e.g. "Senior Consultant", "Workshop") has:

- a **rate** per hour, person day or day – changes as a new line with *Valid from*; older hours keep their rate;
- a **budget** in hours or as % of the total budget, optionally a **weekly budget**;
- **Who may book** – people can only book on roles they are assigned to (also project managers and admins);
- **Hours need approval** with *Approved by*;
- optionally its own **line text** on the invoice.

*Save as standard rate* makes a role a template for new projects. **Budget extensions** (change requests) raise the budget of a role or the total budget; the hours keep running on the same role.

## Invoicing of the project {#abrechnung}

- **Billable** / **Internal project (no invoice)**.
- **Invoice rhythm** weekly or monthly, **invoice group** (projects with the same group go onto one invoice).
- **Invoice lines:** one line for the period, per calendar week or per month; **line text** with placeholders \`{KW}\` (week), \`{Monat}\` (month); **project text** on the invoice.
- **Customer's order / project number**, **cost centre**, a different **invoice e-mail**.
- **When the budget is exceeded:** *Only warn* or *Lock* (then nobody books or invoices beyond the budget).
- **Hours are reported to the customer** – only hours marked as reported are invoiced ([Time](help:time#gemeldet)).
- **Activity on time entries:** as the company, required or optional.

## Status {#status}

| Status | Meaning |
|---|---|
| Offer phase | Hours count as offer effort and are never invoiced. |
| Active | Normal operation |
| Budget exceeded | Set automatically at 100 % and lifted again when the budget is raised |
| Closed | No new bookings; setting *Active* reopens it |

## More actions {#aktionen}

- **More › Create offer**, **Timesheet …**, **Copy** (settings and roles with today's rates, without hours and invoices), **Create follow-up project**.
- **Show time for this project** jumps to [Time](help:time) with a filter.
- **Delete:** a project with time entries, offers, invoices or expenses is not deleted but closed.
- **All employees may book on this project** – for internal projects such as holiday or sick leave.
`,gn=`---
title: Hours quota
group: projects
order: 2
contexts: projects.quota
summary: Fixed hours per month with a running balance – and a customer page where the customer sees the quota.
keywords: quota, hours quota, hours pool, hours account, retainer, balance, extra hours, fewer hours, expiry, cap, framework contract, customer page, link, share, confirm, flat fee
---

For customers who pay for fixed hours per month (support, maintenance, framework contracts). Project › tab **Quota**. Only **approved, billable** hours count, rounded as on the invoice.

## Set up a quota {#anlegen}

1. **Create quota**.
2. **Name** (e.g. "Support 2027"), **first** and optionally **last month**.
3. **Hours per month**.
4. **Extra and fewer hours** – the rule:

| Rule | Meaning |
|---|---|
| Balance over the term | evens out by the end of the term |
| Balance with a cap | the balance stays within ± hours; beyond that it is settled at once |
| Expiry after months | unused hours expire after n months; extra hours are settled at once |
| Invoice monthly | each month on its own; extra hours are invoiced, the rest expires |

5. Optionally a **monthly flat fee** (for information only), **which tasks count** and **different months** (e.g. ramp-up, holidays).

Budget extensions of the counted tasks raise the quota from their month on.

## The overview {#uebersicht}

Tiles show the **balance to the end of last month**, the current month (worked/planned), the total and what is **to be settled**. Below are months or weeks with planned, worked, difference and balance, as a chart and per task. **PDF** creates the hours account.

## Share with the customer {#teilen}

*Share with the customer* (permission "Share with customers"):

- **Secret link** – the customer sees the page without signing in. The link is shown only once; *New link* invalidates the old one.
- **Invite contact person** – the contact signs in with their e-mail and a code. *Send invitation* opens an e-mail that you see before sending.

For each access you choose what the page **shows** (tasks, flat fee, people as role or by name, single bookings) and what the customer **may do** (confirm months, write messages), plus *Valid until*. **Preview** shows the page exactly as the customer sees it. Accesses can be blocked and released again.

> Names are personal data of your employees – show them only with their consent. Nothing is sent automatically; you pass on the link or address yourself.

## Messages and confirmations {#nachrichten}

When the customer confirms a month, it appears with their name in the overview. When they write a message, the app reports it under "Today" and by e-mail to the project manager; you reply under *Messages with the customer* (if you like, also by e-mail).
`,mn=`---
title: Reports
group: reports
order: 1
contexts: reports
summary: Management summary, ready-made reports and export to Excel or PDF.
keywords: reports, analysis, key figures, KPI, revenue, project status, open items, receivables, hours list, open hours, unbilled hours, invoice journal, offers, expenses, previous year, Excel, PDF, management
audience: Managers, finance, admins
---

## Overview {#uebersicht}

The **management summary**: revenue, hours, open items, hours not yet invoiced and projects over budget – for a period, compared with the **previous period** and the **previous year**. Below are your **pinned reports**. With *Customise* you choose which tiles are visible and order them with ↑ ↓ (applies to you on this device).

## Ready-made reports {#berichte}

| Report | Shows |
|---|---|
| Project status | Budget, previous period, worked, open, invoiced, paid and budget use per project and role |
| Open items | Unpaid invoices with days overdue; *Overdue only* |
| Revenue per month | Net per month in the fiscal year, with previous year and difference |
| Hours list | All hours with date, person, role, activity and status |
| Open hours | Hours not invoiced yet, with their value |
| Invoice journal | All invoices and credit notes of a period |
| Offers | Offers with status and totals |
| Expenses | Expenses by category, passed on or not |

Every report has filters (customer, project, period, status …). A click on a row opens the record. **Excel** exports exactly the filtered rows, **PDF** prints the report.

The **fiscal year** (Settings › [Company](help:settings-company)) decides the year comparisons.

## Custom reports {#eigene}

Under *Custom reports* you combine all tables freely – see [Custom reports](help:custom-reports).
`,pn=`---
title: Invoicing run
group: billing
order: 1
contexts: run
summary: Turn open billable hours and expenses into invoices – for a period, all customers at once.
keywords: invoicing run, billing run, billing, invoice hours, invoice date, timesheet, invoice group, rhythm, milestones, warning
audience: Finance, admins
---

The **invoicing run** suggests one invoice per customer and invoice group for a period – with all open billable hours and expenses. You check, adjust and create them all with one click.

## How it works {#ablauf}

1. Pick the **period**: last/this week, last/this month or custom (from, to).
2. Pick the **rhythm** (weekly, monthly, all) and optionally a **customer**.
3. Check the **invoice date**.
4. Go through the proposals: lines with quantity, unit, text, unit price and VAT. Texts and amounts can be changed; single invoices can be left out with *Create this invoice*.
5. **Create n invoices** – the numbers are assigned for good, the hours are marked *invoiced* and the PDFs are saved.

Afterwards the invoices are under [Invoices](help:invoices), ready to send.

## Which hours are included {#welche-stunden}

Only hours that

- are on a **billable**, non-internal project in the *Active* phase,
- are **approved** (if the task needs approval),
- are **reported to the customer** (if the project requires that),
- are not on any invoice yet.

What is missing is shown above the list: *… h still waiting for approval*, *… h not submitted yet*, *… h not reported to the customer yet*, *… open entries without project*.

The duration of each entry is rounded up to the **billing increment** (company › customer › project; empty = inherit).

## Warnings {#warnungen}

| Warning | What to do |
|---|---|
| Project has no rate | Enter a rate in the project under Roles and rates |
| Customer has no VAT number | Enter it on the customer (required above €10,000 gross and for reverse charge) |
| Total budget is exceeded | Check; with *Lock* the project is not invoiced |
| No exchange rate for the currency | Look under [Exchange rates](help:settings-fx) |
| Customer is normally invoiced monthly | Check the rhythm |

## Only selected hours {#auswahl}

Under [Time](help:time#rechnung) select entries › *Create invoice …* – the run then shows only these hours (without expenses).

## Milestones {#meilensteine}

Projects invoiced by milestones are listed under *Finished milestones*; their hours do not go into the run. See [Milestones](help:large#meilensteine).

## Timesheet {#stundennachweis}

If *Attach timesheet* is set on the customer, a timesheet PDF is created for every invoice. A timesheet for any hours is made under project, customer or invoice › *More › Timesheet …*.

> **Invoicing twice is impossible:** if hours were invoiced on another device in the meantime, the app creates nothing and syncs first.
`,fn=`---
title: App design
group: settings
order: 13
contexts: settings.appdesign
summary: Logo and colour scheme of the app itself – light, dark or as the system.
keywords: app design, colour, color, colour scheme, theme, main colour, logo, dark mode, light, dark, sidebar
audience: Admins
---

The look of the app for everyone in the company – sidebar, buttons, highlights. The [document design](help:settings-design) is not affected.

- **Company logo** – appears in the sidebar and on the lock screen.
- **Main colour** – from the palette or as a colour code (#RRGGBB). Project colours follow this scheme.
- **Light / dark:** as the system, always light or always dark.
- *Take logo and colour from the document design* and *Restore default*.
`,bn=`---
title: Calendar
group: settings
order: 20
contexts: settings.calendar
summary: Connect Outlook or another calendar and take meetings over as time entries – with assignment rules.
keywords: calendar, Outlook, Microsoft 365, ICS, meetings, appointments, take over, import, assignment rule, rule, subject, sync
---

Meetings from your calendar become time entries – you check beforehand what is taken over. Only date, start, end, subject and response status are read; nothing is changed in the calendar.

## Connect a calendar {#verbinden}

- **Connect Microsoft account** (Microsoft 365, Outlook.com): copy the code, paste it on the Microsoft page, sign in, confirm the permission. Step by step: [Connect a Microsoft calendar](help:howto-calendar-microsoft).
- **Add ICS link:** works with almost any calendar, also when a company allows no third-party apps. Step by step: [Calendar via ICS link](help:howto-calendar-ics).

Several calendars are possible (e.g. one account per customer). *Sync automatically at start* fetches the meetings of the last 14 days.

## Take over meetings {#uebernehmen}

1. **Sync calendar** (or automatically at start) – "n meetings found" appears under *Today* › **Review**.
2. The list shows *New*, *Already in the diary* and *Not taken over* (declined, tentative, all-day, marked as free …).
3. Tick them, **take over**. Meetings without a matching project then appear under *Today* › *Without project*.

## Assignment rules {#regeln}

Words in the subject assign meetings to a project:

- \`+\` joins words that must all appear (\`Ariba+weekly\`),
- \`*\` at the end of a word finds word beginnings (\`Work*\`),
- \`;\` separates alternatives (\`SAP;S4\`).

The first matching rule (lowest priority number) wins. *Test rules* checks a subject. If you often assign meetings the same way, the app suggests a rule itself.
`,wn=`---
title: Cloud and sign-in
group: settings
order: 30
contexts: settings.cloud
summary: Sign in, password, two-factor sign-in, register a company and connect this device to the cloud.
keywords: cloud, sign in, login, log in, account, forgot password, reset password, code, invitation, register, two-factor, authenticator, 2FA, MFA, Microsoft, sign out, connect, device
---

With the cloud your data is on all devices – PC, browser and phone. Every device also keeps working offline ([sync](help:sync)).

## Sign in {#anmelden}

- **E-mail and password** – the same on all devices.
- **Invitation / code:** you were invited or registered a company? Enter the e-mail address and the 6-digit code from the e-mail, then set your password (at least 10 characters, upper and lower case and a digit).
- **Forgot password?** – you get a code by e-mail and set a new password.
- **Register a new company** – for companies new to Parto Diary. After approval an e-mail with a code arrives.

## Two-factor sign-in {#zwei-faktor}

In addition to the password, a code from an authenticator app (e.g. Microsoft or Google Authenticator). **Set up**, scan the QR code, enter the code shown. Strongly recommended for admins and finance; admins can make it **mandatory** for all admins and managers.

## This device {#geraet}

- **Last synced**, **Still to upload** and **Sync now**.
- **Sign out:** this device no longer syncs until you sign in again. In the web version the copy in the browser is deleted on signing out; after 60 minutes without input it signs you out.

## Bring a company into the cloud {#hochladen}

For a company's first device: *Upload this workspace to the cloud*. Further devices fetch the data with *Get onto this device* (only into an empty workspace). Then invite your [team](help:team).

## Delete account {#loeschen}

In your own [profile](help:profile#konto). A company with invoices is not deleted but closed: accounting records must be kept (Austria 7 years, Germany and Switzerland 10 years). Download the full export and the PDF archive first.
`,kn=`---
title: Company
group: settings
order: 2
contexts: settings.company
summary: Company details for invoices and offers, bank, currency, fiscal year, billing increment and switches for the whole company.
keywords: company details, name, address, VAT number, UID, company register, IBAN, BIC, bank, signatory, currency, fiscal year, billing increment, small business, QR-bill, QR-IBAN, payment part, Switzerland, pay by code, GiroCode, EPC, name for projects, job, activity required, allow copying
audience: Admins
---

## Company details {#daten}

**Company name**, address, country, e-mail, **VAT number (UID)**, **company register number** and court, **bank, IBAN, BIC**, **signatory** and **place** (for "place, date"). They appear on invoices and offers, by default in the footer. The IBAN is checked while typing.

## Currency {#waehrung}

- **Default currency** – for new customers, invoices, offers and reports. Issued documents keep theirs.
- **Allowed currencies** – can be picked on customers. Invoices then go out in the customer's currency; the conversion comes from the [exchange rates](help:settings-fx).

## Fiscal year and billing increment {#geschaeftsjahr}

- **Fiscal year from/to (month)** – the basis for year comparisons and revenue per fiscal year.
- **Billing increment** – to how many minutes an entry's duration is rounded up when invoicing. Customer and project can differ; empty = inherit.

## Switches for the whole company {#schalter}

- **Small business – charge no VAT:** new offers and invoices with 0 % and the legal note (Austria § 6 (1) Z 27 UStG, Germany § 19 UStG).
- **Swiss QR-bill on invoices:** adds the Swiss payment part with QR code as the last page of invoices in CHF or EUR. Works only with a Swiss or Liechtenstein account (IBAN or *QR-IBAN*); below it says whether the details entered are enough. With a QR-IBAN the payment part carries a QR reference, otherwise a creditor reference (RF) – both contain the invoice number, which the bank import uses to assign the payment.
- **Pay by code (EPC QR code):** small QR code next to the bank details on invoices in EUR; banking apps take over recipient, IBAN, amount and invoice number. A customer can have a different payment QR code (or *none*).
- **Name for projects:** *Project* (consulting, services) or *Job* (trades) – changes the words in the app, on documents and in standard e-mails.
- **Activity on time entries is required:** applies to all projects that set nothing else.
- **Offers / projects / invoices may be copied:** shows or hides the *Copy* button.

Don't forget to **Save**.
`,vn=`---
title: Backups, data security, data migration
group: settings
order: 33
contexts: settings.backups#sicherungen, settings.data#datenpruefung, settings.migration#uebernahme
summary: Daily backups, full export and import, data check, unchangeable archive and data migration.
keywords: backup, restore, export, import, Excel, data check, check, archive, unchangeable, data migration, Access, migration, change log, audit
audience: Admins
---

## Backups {#sicherungen}

The desktop app makes a backup automatically at the first start each day; the last 30 are kept. **Back up now** makes one at once, **Restore** brings back an earlier state (the current one is backed up first). *Open folder* shows the files. In the browser there are no local backups – there the data lives in the cloud.

**Full export & import:** one Excel file with a sheet per table. *Import* reads it back – only into an empty workspace (e.g. a new device). Single lists are imported in the list itself ([Excel](help:lists#excel)).

## Data security {#datenpruefung}

- **Data check:** looks for data that seems unusual – e.g. payment differences, hours without a rate, expiring contracts. The app shows new findings at start; *Check again* checks at once.
- **Unchangeable archive:** every issued invoice (and every version) is stored as a PDF in the cloud and can no longer be changed. *Download* fetches the archive.
- **Backups in the cloud:** admins store a backup online in the cloud.
- **Change log:** who changed what and when – also under every settings area.

## Data migration {#uebernahme}

Takes over data from the previous system and then compares rows, hours, amounts and numbers with the source file (*Check reconciliation*). Admins only, and only until an import has been kept. Past years (hours and invoices) can also be taken over through the list imports – they then count as invoiced and paid.
`,yn=`---
title: Document design
group: settings
order: 10
contexts: settings.design
summary: The look of invoice, offer and timesheet – layout, logo, colour, texts, footer, own layout and PDF storage.
keywords: design, layout, logo, font, colour, accent colour, signature, texts, footer, letterhead, PDF, preview, own layout, free layout, text block, file name, folder, take over design, template
audience: Admins
---

The **preview** with the latest invoice or offer is always on the right. Invoices already issued and offers already sent never change.

## Basics {#grundlagen}

- **Logo** (drag in a PNG or JPG, paste with Ctrl+V) and **position** (left, centre, right).
- **Accent colour** – or *Colour from the logo*.
- **Font:** sans serif or serif.
- **Signature** as a picture.
- **Layout** per document: *Classic*, *Modern*, *Minimal*, *Offer style* – or *Own layout (free design)*.

## Texts {#texte}

Introduction, lead-in to the table, thanks, payment terms, bank note and closing – per language. Placeholders such as \`{salutation}\`, \`{period}\`, \`{terms}\`, \`{due_date}\`, \`{number}\` (offer: \`{valid_until}\`) are replaced when printing. A text switched off is not printed.

**Own text blocks:** additional notes or conditions, for invoices, offers or both – before the table, after the totals, at the end or placed freely.

## Footer {#fusszeile}

Three columns from the [company details](help:settings-company). If you edit here directly, the design prints your text from then on; *Take from company details again* switches back.

## Own layout {#eigenes-layout}

Place the blocks (logo, address, number and date, title, lines, totals, footer …) freely on the page: click and drag, they snap to edges and other blocks; arrow keys move by 1 mm (with Shift by 5 mm). Fixed blocks can print on the first, last, every or following pages. **Templates** (clear with lines, shaded, boxes, logo left) are a good start. The layout can be copied between invoice and offer.

## Several designs {#designs}

*+ New design (copy)* adds another design with its own name; *Use as default* makes it the design for new documents. With *Designs selectable per customer* every customer gets their design – e.g. for countries with other mandatory details.

## Take over the design of an existing invoice {#uebernehmen}

Drag in an invoice PDF from your previous program: logo, colours, font and arrangement are recognised and taken over. The PDF is read only on this device. Recognised areas can be adjusted.

## PDF storage {#ablage}

**Folder** and **file name** for invoice, offer and timesheet PDFs (placeholders \`{number}\`, \`{customer}\`). Without a folder of their own, offers land in the invoices' folder. In the browser, Chrome or Edge ask once per session whether Parto Diary may write to the folder; other browsers save to Downloads.
`,An=`---
title: E-invoice
group: settings
order: 4
contexts: settings.einvoice
summary: Which details are checked before sending as an e-invoice – per format, can be switched off, with your own checks.
keywords: e-invoice, XRechnung, ZUGFeRD, Factur-X, Peppol, ebInterface, e-Rechnung.gv.at, EN 16931, Leitweg-ID, buyer reference, supplier number, check, required field
audience: Admins
---

## Checks {#pruefungen}

The list shows every built-in check with the formats it applies to (EN 16931 / ZUGFeRD, XRechnung, Peppol BIS, ebInterface) and whether the standard or the format requires it. Each check can be switched off. A switched-off check is only hidden here – the receiving platform still rejects missing required details.

## Own checks {#eigene}

Own checks require a field of the invoice, the customer or the company to be filled in or to match a pattern – for all formats or only chosen ones.

## Per customer {#kunde}

On the customer, checks can be switched off, switched back on or added. The customer also holds the buyer reference / Leitweg-ID, supplier number, Peppol ID and VAT category.

## On the invoice {#rechnung}

The *E-invoice* section on the invoice shows what is missing and where to add it. The format is suggested from the customer (Germany or a Leitweg-ID → XRechnung, Belgium or a Peppol ID → Peppol, else EN 16931).
`,Sn=`---
title: Expense settings
group: settings
order: 21
contexts: settings.expenses
summary: Categories, mileage and per diem rates per country and the reduction for meals provided.
keywords: category, mileage, kilometre allowance, per diem, daily allowance, rate, country, meal, reduction, overnight
audience: Admins
---

## Categories {#kategorien}

Every category has a **kind** that decides what is asked for an expense: *Amount per receipt*, *Kilometres × rate*, *Days × per diem* or *Overnight*. **Archive** categories no longer needed – existing expenses keep them.

## Mileage and per diem {#saetze}

Rate per kilometre or per day, with **country** and **valid from**. Add a change as a new line with a new date; older expenses keep their rate. (Austria from 2025: €0.50 per km, €30.00 per day – please check.)

## Reduction for meals provided {#mahlzeiten}

By what percentage each meal provided reduces the per diem. Austria: lunch or dinner reduces by half, breakfast does not.

How employees record expenses: [Expenses](help:expenses).
`,jn=`---
title: Exchange rates
group: settings
order: 5
contexts: settings.fx
summary: Daily ECB rates for invoices in foreign currency and a currency calculator.
keywords: exchange rate, rate, ECB, currency, foreign currency, CHF, USD, convert, exchange difference, FX
---

Every morning the app fetches the European Central Bank (ECB) reference rates for the allowed currencies ([Company › Currency](help:settings-company#waehrung)).

- **Invoices in foreign currency:** if a customer has another currency, their offers and invoices go out in it. Rates are converted at the rate of the invoice date; the rate is printed on the document ("1 CHF = … EUR, ECB, date") and stays frozen.
- **No rate:** if a currency has no rate yet, the invoicing run skips this customer and says so.
- **Payments:** when recording a payment in foreign currency you can enter the amount credited in euros – this makes the exchange difference visible.
- **Expenses:** expenses in foreign currency suggest the day's ECB rate.
- **Calculator:** converts amounts between the currencies.
`,zn=`---
title: General
group: settings
order: 7
contexts: settings.general
summary: Language, planned hours per week, customer categories and switching features on and off.
keywords: language, planned hours, weekly hours, target, postcode, kilometres, features, clusters, sub-customers, documents, customer groups, programmes, framework contracts, milestones, item catalogue, categories, phone app, download
---

## For you {#persoenlich}

- **Language** of the app on this device.
- **Planned hours per week** – the target in the week view under [Time](help:time#woche).
- **Show postcode and km on time entries** – for trips to customers.
- **Download apps** – desktop app for Windows and macOS, Android app.

## Switch features on and off {#gross}

For the whole company (admins). Switched off, none of these is visible:

| Switch | What it adds |
|---|---|
| Use clusters | coloured bookmarks on customers, projects, offers, invoices … – [Clusters](help:settings-tags) |
| Use sub-customers | "Invoice to" on projects and offers – [Sub-customers](help:large#unterkunden) |
| Use documents | tab "Documents" for contracts, purchase orders, NDAs – [Documents](help:large#dokumente) |
| Customer groups | assign customers to a group of companies – [Customer groups](help:large#kundengruppen) |
| Programmes with sub-projects | [Programmes](help:large#programme) |
| Framework contracts with call-offs | [Framework contracts](help:large#rahmenvertraege) |
| Define milestones | invoice by milestones – [Milestones](help:large#meilensteine) |
| Item catalogue (trades) | menu [Items](help:items) |

## Customer categories {#kategorien}

One category per line – the choices in the field *Category* on the customer.
`,Pn=`---
title: E-mails & dunning
group: settings
order: 11
contexts: settings.dunning
summary: E-mail templates for invoices, offers and contacts, standard CC, customer templates, payment reminders and dunning.
keywords: e-mail, email, template, text, subject, placeholder, CC, copy, dunning, dunning letter, reminder, payment reminder, dunning fee, mail server, sender, overdue, pause
audience: Admins
---

## How e-mails are sent {#versand}

With a mail server set up the app sends directly: the sender is your company, replies go to the person who sent, and they get a copy. Parto sets up the mail server for your company. Without it the app opens your mail program (e.g. Outlook) with recipient, subject, text and attachments.

> Nothing goes to customers automatically. You see every e-mail before sending – unless an admin has explicitly set up a [process](help:processes) to send.

## E-mail templates {#vorlagen}

Subject and text per language for: **invoice**, **credit note**, **offer**, **e-mail to customer contact**, **e-mail to project contact**, **milestone acceptance**, **hours quota invitation** and **hours quota reply**. Under each template are its placeholders (e.g. \`{number}\`, \`{customer}\`, \`{due}\`). *Restore default* resets the original text.

**Standard CC (optional):** suggested when sending and can be changed there. The sender is added when sending if they switched on *Copy of sent e-mails* under My profile.

## Customer templates {#kundenvorlagen}

If a customer needs other texts (e.g. order number in the subject, another salutation), adjust the template on the customer in the tab **E-mail templates**. *Take the company text* starts from the company's text; *Reset* makes the company text apply again.

## Payment reminders and dunning {#mahnungen}

Dunning levels with waiting time, optional **dunning fees** and text per language. Default:

| Level | When |
|---|---|
| Payment reminder | 7 days after the due date |
| 1st dunning letter | 14 days after the payment reminder |
| 2nd dunning letter | 14 days after the 1st dunning letter |

**How it works:** the app shows dunning letters due with a count on the menu *Invoices* and under *Today*. You select them and **send** them (with the invoice attached) or open them in your mail program and *mark them as sent*. Dunning can be **paused** in an invoice, e.g. during a complaint. **CC for payment reminders and dunning letters**, e.g. to accounting.

More in the "i" next to *Dunning* or in the guide [Dunning](help:howto-dunning).
`,xn=`---
title: Number ranges
group: settings
order: 3
contexts: settings.numbers
summary: Format of invoice numbers, last number used, customer, project and offer numbers.
keywords: invoice number, number range, numbering, prefix, digits, format, sequential, without gaps, offer number, customer code, project code, free text
audience: Admins
---

## Invoice numbers {#rechnungen}

- **Format:** *Year + month + running number* (e.g. 2611672), *Year – running number*, *Running number only* or *Free text* (entered on each invoice; the last number with its final digits counted up is suggested).
- **Prefix (optional):** up to 6 characters, e.g. "INV-".
- **Total digits:** how many digits the number has.
- **Last running number used:** to continue the numbers of your previous program. It may not be below an invoice already issued.

Invoice numbers are assigned **without gaps** and never reused. In a company the cloud assigns them, so that no device uses the same number twice.

## Customer, project and offer numbers {#codes}

New customers, projects and offers get their code automatically when saved:

| What | Number |
|---|---|
| Customers | Letters A … Z, AA … (optionally with a prefix) |
| Projects of a customer | The customer's letters + running number: A1, A2 … |
| Customer project | A0, B0 … |
| Internal projects | INT1, INT2 … |
| Offers | Prefix (default O) + running number, 3 to 6 digits |

Codes typed in or imported stay as they are.
`,Rn=`---
title: Standard rates
group: settings
order: 6
contexts: settings.rates
summary: Hourly rates as templates for project roles and the standard role for new projects.
keywords: standard rate, hourly rate, daily rate, template, role, standard role, price list
---

Hourly rates you need again and again, e.g. "Senior Consultant €150/h". When adding a role in a project, choose *Use standard rate* – name, unit, rate and line text are taken over and can be adjusted afterwards.

- Add a **standard rate**: name, unit (per hour, person day or day), rate, hours per day, line text.
- **Standard role for new projects:** suggested as the first role of every new project, with the creating person assigned.
- From a project: on a role, *Save as standard rate*.

If a standard rate changes, existing projects stay unchanged – their rates belong to the project ([Roles and rates](help:projects#rollen)).
`,En=`---
title: Roles & permissions
group: settings
order: 31
contexts: settings.roles
summary: What each role may see and do – on the desktop and in the phone app – and creating your own roles.
keywords: role, permissions, rights, access, admin, manager, project manager, finance, employee, see menu, create & change, phone, custom role
audience: Admins
---

Tick = this role may do it. The rows follow the app's menu: **See menu** shows the menu item, **Create & change** allows new, edit, delete and Excel import. Then there are special permissions such as *Approve hours & expenses*, *Run invoicing*, *See purchase prices*, *Work as another person* or *Share with customers*.

## The standard roles {#standard}

| Role | Meant for |
|---|---|
| Employee (standard) | Own time and expenses – no invoices, payments, contacts or hourly rates |
| Project manager | Own projects, approvals, offers |
| Manager | Team, approvals, projects and customers |
| Finance | Invoicing run, invoices, payments, reports |
| Admin | Everything – always, so nobody locks themselves out |

The permissions of the standard roles can be changed; *Restore default* resets them.

## Several roles, own roles {#eigene}

A person can have several roles and gets all their permissions (assign them under [Team](help:team)). **New role:** give it a name, *Copy permissions from* an existing role, then adjust.

## Phone app {#handy}

Switch to **Phone app**: what the role may do on the phone. On the phone a role can do less than on the desktop, never more.

> The cloud checks the same permissions – what the app hides cannot be reached through the cloud either.
`,Tn=`---
title: App lock
group: settings
order: 32
contexts: settings.security
summary: Lock the app with a password – after a time without input or right away.
keywords: lock, app lock, password, idle, unlock, security, screen lock
---

The app lock protects the data on this device when others have access to the computer.

1. Enter a **password** (at least 8 characters) twice.
2. Choose **Lock after (minutes without input)**.
3. **Switch on app lock**.

**Lock now** then appears bottom left in the sidebar. To unlock, enter the password.

> **Forgot the password?** A [backup](help:settings-data#sicherungen) from before switching it on can be restored; with the cloud the data also comes back from the cloud.

The app lock applies only to this device. Secure the cloud sign-in with [two-factor sign-in](help:settings-cloud#zwei-faktor).
`,Mn=`---
title: E-mail signatures
group: settings
order: 12
contexts: settings.signatures
summary: Your own signatures and the company signature for e-mails from the app.
keywords: signature, e-mail signature, Outlook, logo, contact details, company signature
---

Every e-mail from the app (invoices, offers, reminders, contact mails) gets a signature. When sending, pick it in the field *Signature* – or *No signature*.

- **Company signature:** an admin creates it once for everyone. It fills in each person's details from their [profile](help:profile#profil) (name, position, phone, e-mail).
- **Own signatures:** each person for themselves, e.g. copied from Outlook – with formatting and up to 10 pictures.
`,_n=`---
title: Clusters
group: settings
order: 22
contexts: settings.tags
summary: Coloured bookmarks for customers, projects, offers, invoices and more – to group across customers.
keywords: cluster, tag, label, keyword, group, colour, merge, archive
---

Clusters appear when *Use clusters* is switched on under [General](help:settings-general).

## Use {#verwenden}

- Press **#** on a page or click *Cluster*, type a name – existing ones are suggested, *New cluster "…"* creates one (if you may).
- In lists select several rows › *To cluster* (key **T**), or drag a cluster onto a row.
- Every list and every report can be filtered and grouped by cluster.

## Manage {#verwalten}

Here: name, colour and description. Clicking a cluster shows all records in it. **Archive** – stays on the records but is no longer offered. **Merge into …** – all records get the other cluster, this one is deleted.

Who may create clusters and who may only assign them is set in the [roles](help:settings-roles).
`,Dn=`---
title: Units and VAT rates
group: settings
order: 4
contexts: settings.units#einheiten, settings.vat#ust
summary: The units for lines and the VAT rates for offers and invoices.
keywords: unit, hour, day, person day, lump sum, piece, VAT, value added tax, sales tax, tax rate, 20 %, 10 %, reverse charge
audience: Admins
---

## Units {#einheiten}

The choices in the field *Unit* on offer and invoice lines and on items, e.g. h, PD (person day), day, lump sum, piece. Add, rename or remove your own units; units on existing documents stay.

## VAT rates {#ust}

The VAT rates offered on lines (e.g. 20 %, 10 %, 0 %). Every line can have its own rate; the invoice shows the VAT per rate.

The **customer's VAT rate** is filled in (customer › Invoices). For customers abroad without VAT enter 0 % there and the note *Reverse charge – the recipient is liable for VAT* – and the customer's VAT number.

As a **small business** switch VAT off under [Company](help:settings-company#schalter).
`,Kn=`---
title: Parto admin
group: settings
order: 40
contexts: settings.vendor
summary: For Parto only – approve company requests, create new companies and switch licence modules.
keywords: Parto admin, registration, company request, approve, module, licence, license
audience: Parto
---

Only the Parto account sees this area.

- **Open company requests:** check new registrations and **approve** them (the contact person gets an e-mail with a code) or **decline**.
- **Create new company:** for a company won directly – company, contact person, e-mail, language. The person gets the same e-mail with a code.
- **Modules per company:** switch licence modules such as [Processes](help:processes) on or off. Without a module everything works as before.
`,Bn=`---
title: Settings – overview
group: settings
order: 1
contexts: settings
summary: All settings on one page, grouped and searchable.
keywords: settings, configuration, setup, preferences, find quickly, admin
---

**Settings** shows all areas on one page, in groups. Which ones you see depends on your permissions; areas without a permission (e.g. calendar, app lock, cloud) only concern your own device and are always there.

**Find quickly:** type into the field at the top, e.g. *IBAN*, *dunning* or *milestones* – it also finds areas by the things inside them. *← All settings* goes back to the overview. Under every area is the **change log**: who changed what and when.

## The areas {#bereiche}

| Group | Areas |
|---|---|
| Company & master data | [Company](help:settings-company), [Number ranges](help:settings-numbers), [Units and VAT rates](help:settings-units-vat), [Exchange rates](help:settings-fx), [Standard rates](help:settings-rates), [General](help:settings-general) |
| Documents & e-mails | [Document design](help:settings-design), [E-mails & dunning](help:settings-mail), [E-mail signatures](help:settings-signatures), [App design](help:settings-appdesign) |
| Time & costs | [Calendar](help:settings-calendar), [Expenses](help:settings-expenses), [Clusters](help:settings-tags) |
| Team & access | [Cloud](help:settings-cloud), [Roles & permissions](help:settings-roles), [App lock](help:settings-security) |
| Data | [Backups, data security, data migration](help:settings-data) |
| Automation | [Processes](help:processes) (licence module) |

## First setup {#einrichtung}

For a new company in this order:

1. [Company](help:settings-company): name, address, VAT number, bank, currency, fiscal year.
2. [Number ranges](help:settings-numbers): format and last invoice number.
3. [Document design](help:settings-design): logo, colour, texts – check the preview.
4. [Standard rates](help:settings-rates): the usual hourly rates.
5. [Team](help:team): invite people and give them roles.
`,Cn=`---
title: Welcome to Parto Diary
group: start
order: 1
summary: What Parto Diary does, how the app is organised and where to find help.
keywords: overview, getting started, navigation, menu, help, F1, wiki, PARTO
---

Parto Diary takes a job from the first offer to the paid invoice: **P**roposal · **A**greement · **R**ecording (time tracking) · **T**racking (budget and approvals) · **O**utgoing invoice.

## The typical flow {#ablauf}

1. **Add a customer** – under [Customers](help:customers). The app assigns the code (A, B, … AA) when saving.
2. **Write an offer** – under [Offers](help:offers), view it as a PDF and send it by e-mail.
3. **Accept the offer** – if you like, this creates the [project](help:projects) with roles, rates and budget.
4. **Record hours** – everyone books under [Today](help:today) or [Time](help:time), on the PC, in the browser or on the phone.
5. **Approve** – where needed, managers approve the submitted weeks under [Approvals](help:approvals).
6. **Invoice** – the [invoicing run](help:run) turns open billable hours into invoices.
7. **Send and record payments** – under [Invoices](help:invoices): send, record payments or [import the bank statement](help:payments).

## How the app is organised {#aufbau}

- **Sidebar on the left:** the menus. Which ones you see depends on your roles (Settings › [Roles & permissions](help:settings-roles)).
- **Top right:** the user menu with your name – company, language, [My profile](help:profile), help, account and sign out.
- **Bottom left:** the sync with the cloud ("synced", "offline", conflicts). More under [Cloud and sync](help:sync).
- **Lists:** click a column title to sort; filter fields and saved views help you find things – see [Lists, filters and views](help:lists).

## Finding help {#hilfe}

- **Opening the help:** user menu top right › *Help* or the **F1** key. The help opens at the article for the page you are on – also for single areas such as one setting or an open project. All topics are listed on the left, the dot ● marks the article for your current page; *Help for this page* at the top takes you back there.
- **Search:** just type into the search field. It copes with typos, word parts (*number* finds *invoice number*) and common other words (*quote*, *bill*, *receipt*). Choose a result with ↑ ↓ and Enter; **/** or **Ctrl+K** jumps to the search field, **Esc** closes.
- **The small "i"** next to some settings explains a task step by step; *Open in the help* shows the same guide in the help.

> **Tip:** The help belongs to your version of the app. What you read here matches the version you are using.
`,Fn=`---
title: Cloud, sync and conflicts
group: start
order: 5
summary: How your data is synced between PC, browser and phone – also offline – and what happens with simultaneous changes.
keywords: sync, synchronisation, offline, synced, conflict, changed at the same time, update, version too old, cloud
---

Every device has its own copy of the data and keeps working **offline**. As soon as there is a connection, the app syncs with the cloud in the background.

## The status bottom left {#status}

| Shown | Meaning |
|---|---|
| synced | Everything is in the cloud. |
| syncing … | The sync is running. |
| offline – will catch up | No connection; your changes are saved and go out automatically. |
| n pending | This many changes are still waiting to be uploaded. |
| Sign in again | The sign-in has expired – sign in again under Settings › Cloud. Nothing is lost. |
| Update required | This app version is too old. Restart the app and install the update (or reinstall from diary.parto.at). |

## Conflicts {#konflikte}

If the same record was changed on two devices at the same time, the app never overwrites silently. **"n conflicts"** appears bottom left. A click shows both versions field by field; choose *Keep my version* or *Keep the cloud version* for each.

## Numbers need a connection {#nummern}

Invoice, offer, customer and project numbers come from the cloud so that no number is used twice. Offline you can prepare everything; issuing an invoice or saving a new customer needs a connection for a moment.

## Updates {#updates}

The desktop app checks for a new version at start and offers *Install and restart*. The web version is always up to date. The Android app is reinstalled from diary.parto.at. More on the cloud sign-in under [Cloud](help:settings-cloud).
`,In=`---
title: Team
group: admin
order: 1
contexts: team, team.user#person
summary: Invite people, assign roles and teams, assign projects, deactivate – and work as another person.
keywords: team, employees, staff, invite, invitation, role, teams, manager, supervisor, deactivate, assign, assign projects, work as another person, act as, approval
audience: Admins, managers
---

Under **Team** you manage who works in the company. For this the company must be in the cloud ([Cloud](help:settings-cloud)).

## Invite a person {#einladen}

1. **+ Invite person**.
2. Name, e-mail and **roles** (several possible – the person gets all permissions of these roles).
3. **Invite** – with a mail server set up the invitation goes out directly, otherwise your mail program opens with the finished text.
4. The person opens the link (or diary.parto.at), chooses *Create account* with exactly this e-mail address, confirms the code and sets their password.

Managers can invite people and give roles at employee level; an admin gives roles with more permissions. **Copy (new person like this one)** takes over the roles, teams, manager and project tasks of an existing person.

## Open a person {#person}

A click shows the details:

- **Details:** name, call name, contact, profile picture, preferred language, **manager** (may record internal time such as holiday for the person), status.
- **Roles** and **teams**.
- **Projects & rates:** which tasks the person may book on. *Assign*: a customer without a project assigns all open projects of the customer, a project without a task all its tasks. *+ New task with its own rate …* creates a task just for this person.

## Teams {#teams}

Teams are groups in the company, e.g. consulting or accounting. A person can be in several teams. Lists can be filtered by team, and saved [views](help:lists#ansichten) can be shared with your own teams.

## Approval of hours {#freigabe}

*Hours must be approved before they are invoiced* switches [approvals](help:approvals) on for everyone. Hours of admins and managers need no approval. Single tasks can require approval even without this switch.

## Deactivate and delete {#deaktivieren}

Someone who has already signed in is **deactivated**: access ends, hours and history stay, and they can be reactivated later. Someone who never signed in can be deleted; the invitation expires. Your own account is deleted in your own [profile](help:profile#konto).

## Work as this person {#als-person}

With the permission *Work as another person* the app shows and books everything as the chosen person – e.g. to add missing hours. A banner shows this on every page; *Back to my account* ends it. The cloud still checks your own permissions and logs under your account.
`,Nn=`---
title: Recording time
group: work
order: 1
contexts: time, time.week#woche
summary: Book, correct, copy, submit and summarise hours – in the list or in the week view.
keywords: time tracking, hours, book, entry, timer, week, activity, role, copy, reported, customer portal, overlap, colleagues, holiday, sick, timesheet
---

**Time** lists all your time entries. Whoever has more permissions (e.g. project management, finance) also sees other people's entries.

## Record an entry {#erfassen}

1. Pick the date (default: today).
2. Type **From** and **To** – or the duration in **h** instead of "To" (e.g. \`2.5\` or \`2:30\`). Times can be \`0900\`, \`9:00\`, \`9\` or \`9.5\`.
3. Search the **project**: type its code, name or customer; recently used ones come first. If the project has several roles, pick the **role**.
4. Describe the **activity** – required on some projects.
5. **Enter** saves.

> You can only book on projects and roles you are assigned to. If a project is missing, ask the project manager – they assign you in the project under *Roles and rates › Who may book*.

## Overlaps {#ueberschneidung}

If a new entry falls into time already booked, the app asks: *Keep the old entry*, *Keep the new entry*, *Shorten the old entry* or *Keep both* (e.g. working for two projects in parallel). Invoiced entries are never changed.

## Change, delete, copy {#aendern}

- Click an entry, change it, save. *Undo* brings a deleted entry back straight away.
- **Copy:** an entry to another day, *Copy to tomorrow* or a whole day (*Copy day to …*).
- **Copy activity:** puts the text on the clipboard, e.g. for a customer portal; *Copy texts* takes all selected entries, one line each.
- **Invoiced** entries (already on an invoice) and **submitted** ones are locked: a manager changes submitted ones, only an admin approved ones.

## Name colleagues {#kollegen}

If several people were at the same meeting, name your colleagues on the entry. They get a **proposal** and take it over with one click (or decline) – under [Today](help:today#heute).

## List and week {#woche}

- **List:** all entries in the chosen period (this/last week, this/last month or custom), with filters for project, customer, status, source (manual, timer, calendar, import), cluster and team.
- **Week:** one calendar week as a grid with the target (planned hours from Settings › General) and the difference.
- **Summary:** hours per project and person with share and billable hours; *Filter the list on it* takes a row over as a filter.

## Submit the week {#einreichen}

If your hours need approval, they carry the grey label *not submitted*. At the end of the week click **Submit week** – under Time or under [Approvals](help:approvals). The week then waits for approval; correct returned entries and submit them again.

## Reported to the customer {#gemeldet}

On projects with *Hours are reported to the customer* (e.g. weekly in a customer portal) mark the transferred entries with **Mark as reported**. Only reported hours are invoiced there; the filter *Not reported yet* shows what is missing.

## Invoice from selected hours {#rechnung}

Select entries › **Create invoice …** opens the [invoicing run](help:run) with only these hours – one proposal per customer and invoice group.

## Record for employees {#fuer-andere}

Managers can record **internal** time (holiday, sick …) for their direct reports: *Record for employee*. The person sees the entry with your name.

## Take over the calendar {#kalender}

Meetings from Outlook or another calendar can become entries – see [Calendar](help:settings-calendar).
`,Wn=`---
title: Today
group: start
order: 2
contexts: today
summary: The start page – record time, the timer, what is due today and, for those responsible, the key figures.
keywords: start page, dashboard, timer, follow-up, key figures, overview, welcome
---

"Today" is the start page. What you see depends on your permissions: employees mainly see their time, whoever may see invoices and reports also gets key figures.

## Record time {#erfassen}

At the top is the entry line: date, from, to (or the duration), project and activity. **Enter** saves. Times can be typed as \`0900\`, \`9:00\`, \`9\` or \`9.5\`. Everything else about time tracking is under [Time](help:time).

## Timer {#timer}

**Timer** lets you pick a project (recently used ones first) and starts the clock. Stopping books the time; if the project requires an activity, the app asks for it. *Discard* deletes the running timer without booking. Only one timer can run at a time.

## What is due today {#heute}

- **Today:** your entries of today with the total hours.
- **Without project:** meetings taken over from the calendar that still need a project – please assign one. If the app suggests a matching rule ("Subject with … → project?"), *Create rule* applies it to future meetings.
- **Calendar:** when the sync finds new meetings, *Review* appears – see [Calendar](help:settings-calendar).
- **Proposals from colleagues:** if someone named you on an entry, accept or decline the proposal.
- **Returned hours:** if a manager returned entries for correction, a notice with *Go to time* appears.
- **Follow-ups due:** customer activities with a follow-up date ([Customers](help:customers#aktivitaeten)) and your open to-dos from project logs.
- **Budget warnings:** projects whose budget is nearly used up or exceeded.

## Key figures {#kennzahlen}

Whoever may see invoices gets tiles with revenue in the fiscal year and in the current month (net, without cancelled), open items with the overdue part, hours of the month and open (not yet invoiced) hours with their value. *Open the report* jumps to the matching [report](help:reports).

Overdue invoices and reminders due are also shown here – see [E-mails & reminders](help:settings-mail#mahnungen).
`;function Un(n){return n.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function R(n){const r=[];let i="";const t=()=>{i&&(r.push({t:"text",v:i}),i="")};let e=0;for(;e<n.length;){const o=n[e];if(o==="`"){const a=n.indexOf("`",e+1);if(a>e){t(),r.push({t:"code",v:n.slice(e+1,a)}),e=a+1;continue}}if(o==="*"&&n[e+1]==="*"){const a=n.indexOf("**",e+2);if(a>e+1){t(),r.push({t:"b",c:R(n.slice(e+2,a))}),e=a+2;continue}}if(o==="*"&&n[e+1]!==" "){const a=n.indexOf("*",e+1);if(a>e+1&&n[a-1]!==" "){t(),r.push({t:"i",c:R(n.slice(e+1,a))}),e=a+1;continue}}if(o==="["){const a=n.indexOf("](",e+1),u=a>0?n.indexOf(")",a+2):-1;if(a>e&&u>a){t(),r.push({t:"link",href:n.slice(a+2,u).trim(),c:R(n.slice(e+1,a))}),e=u+1;continue}}i+=o,e++}return t(),r}function T(n){return n.map(r=>r.t==="text"||r.t==="code"?r.v:T(r.c)).join("")}const Zn=n=>n.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(r=>r.trim());function Vn(n){const r={};let i=n.replace(/\r\n?/g,`
`);const t=/^---\n([\s\S]*?)\n---\n?/.exec(i);if(t){for(const p of t[1].split(`
`)){const g=/^([a-z_]+):\s*(.*)$/i.exec(p.trim());g&&(r[g[1].toLowerCase()]=g[2].trim())}i=i.slice(t[0].length)}const e=i.split(`
`),o=[];let a=r.title??"";const u=new Set;let c=[];const w=()=>{c.length&&(o.push({t:"p",c:R(c.join(" "))}),c=[])};for(let p=0;p<e.length;p++){const m=e[p].trim();if(!m){w();continue}const f=/^(#{1,3})\s+(.*)$/.exec(m);if(f){w();let b=f[2],h="";const k=/\s*\{#([a-z0-9-]+)\}\s*$/i.exec(b);if(k&&(h=k[1],b=b.slice(0,k.index)),f[1].length===1){a||(a=b);continue}const A=R(b);h=h||Un(T(A));let j=2;const I=h;for(;u.has(h);)h=`${I}-${j++}`;u.add(h),o.push({t:"h",level:f[1].length,id:h,c:A});continue}const v=/^!\[([^\]]*)\]\(([^)]+)\)$/.exec(m);if(v){w(),o.push({t:"img",alt:v[1],src:v[2].trim()});continue}if(/^[-*]\s+/.test(m)||/^\d+[.)]\s+/.test(m)){w();const b=/^\d/.test(m),h=[];let k=null;for(;p<e.length;p++){const A=e[p],j=b?/^\s*\d+[.)]\s+(.*)$/.exec(A):/^\s*[-*]\s+(.*)$/.exec(A);if(j){k!==null&&h.push(R(k)),k=j[1];continue}if(A.trim()&&/^\s{2,}/.test(A)&&k!==null){k+=` ${A.trim()}`;continue}break}k!==null&&h.push(R(k)),p--,o.push({t:b?"ol":"ul",items:h});continue}if(m.startsWith(">")){w();const b=[[]];for(;p<e.length&&e[p].trim().startsWith(">");p++){const h=e[p].trim().replace(/^>\s?/,"");h?b[b.length-1].push(h):b.push([])}p--,o.push({t:"note",c:b.filter(h=>h.length).map(h=>R(h.join(" ")))});continue}if(m.startsWith("|")){w();const b=[];for(;p<e.length&&e[p].trim().startsWith("|");p++)b.push(Zn(e[p]));p--;const h=b.filter((k,A)=>!(A===1&&k.every(j=>/^:?-{2,}:?$/.test(j))));o.push({t:"table",head:(h[0]??[]).map(R),rows:h.slice(1).map(k=>k.map(R))});continue}c.push(m)}return w(),{meta:r,title:a,blocks:o}}function Ln(n){switch(n.t){case"h":case"p":return T(n.c);case"ul":case"ol":return n.items.map(T).join(`
`);case"note":return n.c.map(T).join(`
`);case"table":return[n.head,...n.rows].map(r=>r.map(T).join(" · ")).join(`
`);case"img":return n.alt}}function C(n){return n.toLowerCase().replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u")}const On=["ungen","heiten","keiten","innen","ing","ung","heit","keit","ern","em","en","er","es","ed","e","n","s"];function V(n){if(n.length<=4)return n;for(const r of On)if(n.endsWith(r)&&n.length-r.length>=4)return n.slice(0,-r.length);return n}const Gn=/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu;function ne(n){const r=[];for(const i of n.matchAll(Gn)){const t=i.index??0,e=i[0].split(/[-']/);if(e.length>1){let o=t;for(const a of e)r.push({w:a,start:o,end:o+a.length}),o+=a.length+1;r.push({w:e.join(""),start:t,end:t+i[0].length})}else r.push({w:i[0],start:t,end:t+i[0].length})}return r}const J=n=>ne(n).map(r=>V(C(r.w))).filter(r=>r.length>0),Hn=[["Rechnung","Faktura","Faktur","Honorarnote"],["Angebot","Offerte","Kostenvoranschlag","Kostenschätzung"],["Zeiten","Stunden","Zeiterfassung","Zeiteintrag","Buchung","Arbeitszeit"],["Reisekosten","Spesen","Ausgabe","Beleg","Auslagen"],["Mahnung","Zahlungserinnerung","Mahnwesen"],["Unternehmen","Firma","Betrieb"],["Kunde","Auftraggeber","Klient"],["Projekt","Auftrag"],["Freigabe","Genehmigung","freigeben"],["Gutschrift","Storno","stornieren"],["Einstellungen","Konfiguration","Optionen"],["Passwort","Kennwort"],["Abmelden","Logout"],["Anmelden","Login","Einloggen"],["Abläufe","Workflow","Prozess","Automatisierung"],["Stundenkontingent","Kontingent","Stundenpool","Stundenkonto"],["USt","MwSt","Umsatzsteuer","Mehrwertsteuer"],["Mail","E-Mail"],["Löschen","Entfernen"],["Cluster","Tag","Schlagwort"],["Zahlungseingang","Zahlung","Überweisung"],["Kontoauszug","Bankauszug","Bank"],["Satz","Stundensatz","Tagsatz","Preis"],["Mitarbeiter","Benutzer","Kollege","Person"],["Handy","Smartphone","Mobil","Android"],["Sicherung","Backup"],["Auswertung","Bericht","Report"],["invoice","bill"],["offer","quote","proposal","estimate"],["time","hours","timesheet","entry"],["expense","receipt","travel"],["reminder","dunning"],["company","firm","organisation","organization","business"],["approval","approve"],["credit","cancel"],["process","workflow","automation"],["quota","retainer"],["VAT","tax"],["sign","login","log"],["delete","remove"],["employee","user","colleague","member"],["phone","mobile","android"],["backup","restore"],["report","analysis"]],Z=new Map;for(const n of Hn){const r=n.map(i=>V(C(i.replace(/[-\s]/g,""))));for(const i of r)Z.set(i,[...new Set([...Z.get(i)??[],...r.filter(t=>t!==i)])])}function Q(n,r,i){if(Math.abs(n.length-r.length)>i)return i+1;const t=Array.from({length:n.length+1},(e,o)=>[o,...Array(r.length).fill(0)]);for(let e=0;e<=r.length;e++)t[0][e]=e;for(let e=1;e<=n.length;e++){let o=1/0;for(let a=1;a<=r.length;a++){const u=n[e-1]===r[a-1]?0:1;let c=Math.min(t[e-1][a]+1,t[e][a-1]+1,t[e-1][a-1]+u);e>1&&a>1&&n[e-1]===r[a-2]&&n[e-2]===r[a-1]&&(c=Math.min(c,t[e-2][a-2]+1)),t[e][a]=c,c<o&&(o=c)}if(o>i)return i+1}return t[n.length][r.length]}const qn=n=>n>=8?2:n>=4?1:0;function $n(n,r){if(n===r)return 1;if(n.length>=2&&r.startsWith(n))return .85;if(n.length>=4&&r.includes(n))return .65;if(r.length>=5&&n.length>r.length&&n.includes(r))return .45;const i=qn(n.length);if(i){const t=Q(n,r,i);if(t<=i)return .75-.15*t;if(n.length>=5&&r.length>n.length&&Q(n,r.slice(0,n.length),1)<=1)return .5}return 0}const _={title:3,heading:5,keywords:4,text:1};class Jn{constructor(r){N(this,"sections");N(this,"postings",new Map);N(this,"folded");this.sections=r,this.folded=r.map(i=>C(`${i.heading} ${i.text}`)),r.forEach((i,t)=>{const e=(o,a)=>{for(const u of J(o??"")){let c=this.postings.get(u);c||this.postings.set(u,c=new Map);const w=c.get(t)??0;c.set(t,w+a/(1+w/4))}};e(i.title,i.anchor?_.title/3:_.title),e(i.heading,i.anchor?_.heading:0),e(i.keywords,i.anchor?_.keywords/4:_.keywords),e(i.text,_.text)})}expand(r){const i=new Map,t=(e,o)=>{for(const a of this.postings.keys()){const u=$n(e,a)*o;u>(i.get(a)??0)&&i.set(a,u)}};t(r,1);for(const e of Z.get(r)??[])t(e,.8);return i}search(r,i=20){var p;const t=[...new Set(J(r))].filter(g=>g.length>=2||/\d/.test(g));if(!t.length)return[];const e=this.sections.length,o=new Map;for(const g of t){const m=new Map;for(const[f,v]of this.expand(g)){if(v<=0)continue;const b=this.postings.get(f),h=Math.log(1+e/b.size);for(const[k,A]of b){const j=v*A*h;j>(((p=m.get(k))==null?void 0:p.s)??0)&&m.set(k,{s:j,t:f})}}for(const[f,{s:v,t:b}]of m){const h=o.get(f)??{score:0,matched:0,terms:new Set};h.score+=v,h.matched+=1,h.terms.add(b),o.set(f,h)}}const a=[...o.values()].some(g=>g.matched===t.length),u=t.length>1?C(r.trim()):"",c=new Map;for(const[g,m]of o){if(a&&m.matched<t.length)continue;const f=this.sections[g];let v=m.score*(m.matched/t.length)**2;u&&this.folded[g].includes(u)&&(v*=1.5);const b={anchor:f.anchor,heading:f.heading,score:v,snippet:Qn(f.text,m.terms)},h=c.get(f.article)??{article:f.article,title:f.title,score:0,sections:[],terms:[]};h.sections.push(b),h.terms=[...new Set([...h.terms,...m.terms])],c.set(f.article,h)}const w=[...c.values()];for(const g of w)g.sections.sort((m,f)=>f.score-m.score),g.score=g.sections[0].score+.25*g.sections.slice(1).reduce((m,f)=>m+f.score,0),g.sections=g.sections.slice(0,3);return w.sort((g,m)=>m.score-g.score).slice(0,i)}}function te(n,r){const i=new Set(r);if(!i.size)return[];const t=[];for(const e of ne(n)){const o=V(C(e.w));(i.has(o)||[...i].some(a=>a.length>=4&&o.length>a.length&&o.includes(a)))&&(t.length&&t[t.length-1][1]>=e.start?t[t.length-1][1]=Math.max(t[t.length-1][1],e.end):t.push([e.start,e.end]))}return t}function Qn(n,r,i=200){const t=n.replace(/\s+/g," ").trim(),e=te(t,r);let o=0;e.length&&e[0][0]>i/3&&(o=t.lastIndexOf(" ",e[0][0]-i/4),o=o<0?0:o+1);let a=Math.min(t.length,o+i);if(a<t.length){const g=t.lastIndexOf(" ",a);g>o+i/2&&(a=g)}const u=o>0?"… ":"",c=a<t.length?" …":"",w=t.slice(o,a),p=u.length-o;return{text:u+w+c,marks:e.filter(([g,m])=>g>=o&&m<=a).map(([g,m])=>[g+p,m+p])}}const re=[{id:"start",de:"Erste Schritte",en:"Getting started"},{id:"work",de:"Zeiten & Reisekosten",en:"Time & expenses"},{id:"sales",de:"Kunden & Angebote",en:"Customers & offers"},{id:"projects",de:"Projekte",en:"Projects"},{id:"billing",de:"Abrechnung & Rechnungen",en:"Billing & invoices"},{id:"reports",de:"Auswertungen",en:"Reports"},{id:"admin",de:"Team & Verwaltung",en:"Team & administration"},{id:"settings",de:"Einstellungen",en:"Settings"},{id:"howto",de:"Schritt-für-Schritt-Anleitungen",en:"Step-by-step guides"}],Yn=Object.assign({"./de/approvals.md":ue,"./de/custom-reports.md":he,"./de/customers.md":ce,"./de/expenses.md":ge,"./de/invoices.md":me,"./de/items.md":pe,"./de/large.md":fe,"./de/lists.md":be,"./de/offers.md":we,"./de/payments.md":ke,"./de/phone.md":ve,"./de/processes.md":ye,"./de/profile.md":Ae,"./de/projects.md":Se,"./de/quota.md":je,"./de/reports.md":ze,"./de/run.md":Pe,"./de/settings-appdesign.md":xe,"./de/settings-calendar.md":Re,"./de/settings-cloud.md":Ee,"./de/settings-company.md":Te,"./de/settings-data.md":Me,"./de/settings-design.md":_e,"./de/settings-einvoice.md":De,"./de/settings-expenses.md":Ke,"./de/settings-fx.md":Be,"./de/settings-general.md":Ce,"./de/settings-mail.md":Fe,"./de/settings-numbers.md":Ie,"./de/settings-rates.md":Ne,"./de/settings-roles.md":We,"./de/settings-security.md":Ue,"./de/settings-signatures.md":Ze,"./de/settings-tags.md":Ve,"./de/settings-units-vat.md":Le,"./de/settings-vendor.md":Oe,"./de/settings.md":Ge,"./de/start.md":He,"./de/sync.md":qe,"./de/team.md":$e,"./de/time.md":Je,"./de/today.md":Qe,"./en/approvals.md":Ye,"./en/custom-reports.md":Xe,"./en/customers.md":en,"./en/expenses.md":nn,"./en/invoices.md":tn,"./en/items.md":rn,"./en/large.md":sn,"./en/lists.md":an,"./en/offers.md":on,"./en/payments.md":ln,"./en/phone.md":dn,"./en/processes.md":un,"./en/profile.md":hn,"./en/projects.md":cn,"./en/quota.md":gn,"./en/reports.md":mn,"./en/run.md":pn,"./en/settings-appdesign.md":fn,"./en/settings-calendar.md":bn,"./en/settings-cloud.md":wn,"./en/settings-company.md":kn,"./en/settings-data.md":vn,"./en/settings-design.md":yn,"./en/settings-einvoice.md":An,"./en/settings-expenses.md":Sn,"./en/settings-fx.md":jn,"./en/settings-general.md":zn,"./en/settings-mail.md":Pn,"./en/settings-numbers.md":xn,"./en/settings-rates.md":Rn,"./en/settings-roles.md":En,"./en/settings-security.md":Tn,"./en/settings-signatures.md":Mn,"./en/settings-tags.md":_n,"./en/settings-units-vat.md":Dn,"./en/settings-vendor.md":Kn,"./en/settings.md":Bn,"./en/start.md":Cn,"./en/sync.md":Fn,"./en/team.md":In,"./en/time.md":Nn,"./en/today.md":Wn}),M=(n,r)=>n==="en"?r.en:r.de;function Xn(n){return Object.keys($).map((r,i)=>{const t=$[r],e=[];return t.intro&&e.push({t:"p",c:[{t:"text",v:M(n,t.intro)}]}),t.sections.forEach((o,a)=>{o.title&&e.push({t:"h",level:2,id:`s${a+1}`,c:[{t:"text",v:M(n,o.title)}]}),e.push({t:"ol",items:o.steps.map(u=>[{t:"text",v:M(n,u.text)+(u.hint?` (${M(n,u.hint)})`:"")}])})}),t.note&&e.push({t:"note",c:[[{t:"text",v:M(n,t.note)}]]}),{id:et(r),lang:n,title:M(n,t.title),summary:t.intro?M(n,t.intro):"",group:"howto",order:i,contexts:[{ctx:`howto:${r}`,anchor:""}],keywords:"",audience:"",blocks:e}})}const et=n=>`howto-${n.replace(/[^a-z0-9]+/gi,"-")}`,Y=new Map;function F(n){const r=Y.get(n);if(r)return r;const i=[];for(const[e,o]of Object.entries(Yn)){const a=/^\.\/(de|en)\/([a-z0-9-]+)\.md$/.exec(e);if(!a||a[1]!==n)continue;const u=Vn(o);i.push({id:a[2],lang:n,title:u.title||a[2],summary:u.meta.summary??"",group:u.meta.group??"start",order:Number(u.meta.order??100),contexts:(u.meta.contexts??"").split(",").map(c=>c.trim()).filter(Boolean).map(c=>{const[w,p=""]=c.split("#");return{ctx:w,anchor:p}}),keywords:u.meta.keywords??"",audience:u.meta.audience??"",blocks:u.blocks})}i.push(...Xn(n));const t=e=>{const o=re.findIndex(a=>a.id===e);return o<0?99:o};return i.sort((e,o)=>t(e.group)-t(o.group)||e.order-o.order||e.title.localeCompare(o.title)),Y.set(n,i),i}function U(n,r){return F(n).find(i=>i.id===r)??F(n==="de"?"en":"de").find(i=>i.id===r)}function nt(n,r){const i=F(n);for(let t=r;t;t=t.includes(".")?t.slice(0,t.lastIndexOf(".")):"")for(const e of i){const o=e.contexts.find(a=>a.ctx===t);if(o)return{id:e.id,anchor:o.anchor}}return{id:"start",anchor:""}}function tt(n){const r=[];for(const i of F(n)){let t={article:i.id,anchor:"",title:i.title,heading:i.title,keywords:i.keywords,text:i.summary};for(const e of i.blocks)e.t==="h"?(r.push(t),t={article:i.id,anchor:e.id,title:i.title,heading:T(e.c),keywords:i.keywords,text:""}):t.text+=`${t.text?`
`:""}${Ln(e)}`;r.push(t)}return r}const X=new Map;function rt(n){let r=X.get(n);return r||X.set(n,r=new Jn(tt(n))),r}const it=n=>/^(https?:|data:)/.test(n)?n:`/help/${n}`;function st({v:n,marks:r}){const i=r!=null&&r.length?te(n,r):[];if(!i.length)return s.jsx(s.Fragment,{children:n});const t=[];let e=0;return i.forEach(([o,a],u)=>{o>e&&t.push(n.slice(e,o)),t.push(s.jsx("mark",{children:n.slice(o,a)},u)),e=a}),e<n.length&&t.push(n.slice(e)),s.jsx(s.Fragment,{children:t})}function x({c:n,open:r,marks:i}){return s.jsx(s.Fragment,{children:n.map((t,e)=>{if(t.t==="text")return s.jsx(st,{v:t.v,marks:i},e);if(t.t==="code")return s.jsx("code",{children:t.v},e);if(t.t==="b")return s.jsx("b",{children:s.jsx(x,{c:t.c,open:r,marks:i})},e);if(t.t==="i")return s.jsx("em",{children:s.jsx(x,{c:t.c,open:r,marks:i})},e);const o=t.href;if(o.startsWith("help:")){const[a,u=""]=o.slice(5).split("#");return s.jsx("a",{href:`#help-${a}`,className:"hc-link",onClick:c=>{c.preventDefault(),r(a,u)},children:s.jsx(x,{c:t.c,open:r,marks:i})},e)}return s.jsx("a",{href:o,target:"_blank",rel:"noreferrer noopener",children:s.jsx(x,{c:t.c,open:r,marks:i})},e)})})}function at({blocks:n,open:r,marks:i}){return s.jsx(s.Fragment,{children:n.map((t,e)=>{switch(t.t){case"h":return t.level===2?s.jsx("h2",{id:`hc-${t.id}`,children:s.jsx(x,{c:t.c,open:r,marks:i})},e):s.jsx("h3",{id:`hc-${t.id}`,children:s.jsx(x,{c:t.c,open:r,marks:i})},e);case"p":return s.jsx("p",{children:s.jsx(x,{c:t.c,open:r,marks:i})},e);case"ul":return s.jsx("ul",{children:t.items.map((o,a)=>s.jsx("li",{children:s.jsx(x,{c:o,open:r,marks:i})},a))},e);case"ol":return s.jsx("ol",{className:"hc-steps",children:t.items.map((o,a)=>s.jsx("li",{children:s.jsx(x,{c:o,open:r,marks:i})},a))},e);case"note":return s.jsx("div",{className:"hc-note",children:t.c.map((o,a)=>s.jsx("p",{children:s.jsx(x,{c:o,open:r,marks:i})},a))},e);case"table":return s.jsx("div",{className:"hc-table",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsx("tr",{children:t.head.map((o,a)=>s.jsx("th",{className:"nosort",children:s.jsx(x,{c:o,open:r})},a))})}),s.jsx("tbody",{children:t.rows.map((o,a)=>s.jsx("tr",{children:o.map((u,c)=>s.jsx("td",{children:s.jsx(x,{c:u,open:r,marks:i})},c))},a))})]})},e);case"img":return s.jsxs("figure",{className:"hc-fig",children:[s.jsx("img",{src:it(t.src),alt:t.alt,loading:"lazy"}),t.alt&&s.jsx("figcaption",{children:t.alt})]},e)}})})}const ot=new Set(Object.keys(ee));function ct({req:n,ctx:r,go:i,onClose:t}){var q;const{t:e,lang:o}=le(),{can:a}=de(),u=o==="en"?"en":"de",c=S.useMemo(()=>nt(u,r),[u,r]),[w,p]=S.useState(n.article?{id:n.article,anchor:n.anchor??""}:c),[g,m]=S.useState([]),[f,v]=S.useState(n.query??""),[b,h]=S.useState(0),[k,A]=S.useState(!1),j=S.useRef(null),I=S.useRef(null),z=U(u,w.id)??U(u,"start"),L=((q=U(u,c.id))==null?void 0:q.title)??"",P=S.useMemo(()=>f.trim()?rt(u).search(f,30):null,[f,u]),W=S.useMemo(()=>(P??[]).flatMap(l=>l.sections.map(d=>({r:l,s:d}))),[P]),D=(l,d="",y)=>{m(E=>[...E,{id:w.id,anchor:w.anchor}].slice(-30)),p({id:l,anchor:d,marks:y}),v(""),A(!1)},O=()=>{const l=g[g.length-1];l&&(m(g.slice(0,-1)),p(l),v(""))};S.useEffect(()=>{var d;if(P)return;const l=w.anchor?document.getElementById(`hc-${w.anchor}`):null;l?l.scrollIntoView({block:"start"}):(d=I.current)==null||d.scrollTo({top:0})},[w,P]),S.useEffect(()=>{h(0)},[f]),S.useEffect(()=>{var l;(l=j.current)==null||l.focus()},[]),S.useEffect(()=>{const l=d=>{var E,B;if(d.key==="Escape"){d.preventDefault(),d.stopPropagation(),f?v(""):t();return}const y=((E=d.target)==null?void 0:E.tagName)==="INPUT";if(d.key==="/"&&!y||(d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="k"){d.preventDefault(),(B=j.current)==null||B.focus();return}d.altKey&&d.key==="ArrowLeft"&&(d.preventDefault(),O())};return window.addEventListener("keydown",l,!0),()=>window.removeEventListener("keydown",l,!0)});const ie=l=>{if(W.length){if(l.key==="ArrowDown")l.preventDefault(),h(d=>Math.min(W.length-1,d+1));else if(l.key==="ArrowUp")l.preventDefault(),h(d=>Math.max(0,d-1));else if(l.key==="Enter"){l.preventDefault();const d=W[b];d&&D(d.r.article,d.s.anchor,d.r.terms)}}};S.useEffect(()=>{var l;(l=document.getElementById(`hc-r${b}`))==null||l.scrollIntoView({block:"nearest"})},[b]);const K=(l=>{for(const d of l.contexts){if(d.ctx===r)return null;const[y,E]=d.ctx.split(".");if(!ot.has(y))continue;const B=ee[y];if(!(B&&!a(B))){if(y==="settings"&&E)return{view:"settings",tab:E};if(!E)return{view:y}}}return null})(z),G=z.blocks.filter(l=>l.t==="h"&&l.level===2).map(l=>l.t==="h"?{id:l.id,text:T(l.c)}:null).filter(Boolean),se=re.map(l=>({...l,items:F(u).filter(d=>d.group===l.id)})).filter(l=>l.items.length);let H=-1;return s.jsx("div",{className:"overlay hc-overlay",role:"presentation",onMouseDown:l=>{l.target===l.currentTarget&&t()},children:s.jsxs("div",{className:"hc-shell",role:"dialog","aria-modal":"true","aria-label":e("help.title"),children:[s.jsxs("div",{className:"hc-top",children:[s.jsxs("button",{type:"button",className:"btn ghost sm hc-navbtn","aria-expanded":k,onClick:()=>A(l=>!l),children:["☰ ",e("help.allTopics")]}),s.jsxs("div",{className:"hc-brand",children:[s.jsx("b",{children:e("help.title")}),L&&s.jsx("span",{className:"muted",children:e("help.forPage",{p:L})})]}),s.jsxs("div",{className:"hc-search",children:[s.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("path",{d:"M20 20l-3.5-3.5"})]}),s.jsx("input",{ref:j,type:"search",value:f,onChange:l=>v(l.target.value),onKeyDown:ie,placeholder:e("help.search"),"aria-label":e("help.search"),"aria-controls":"hc-results"})]}),(w.id!==c.id||P)&&s.jsx("button",{type:"button",className:"btn ghost sm",onClick:()=>D(c.id,c.anchor),children:e("help.toPage")}),s.jsx("button",{type:"button",className:"dialog-close","aria-label":e("common.close"),title:`${e("common.close")} (Esc)`,onClick:t,children:"×"})]}),s.jsxs("div",{className:"hc-body",children:[s.jsx("nav",{className:`hc-nav${k?" open":""}`,"aria-label":e("help.allTopics"),children:se.map(l=>s.jsxs("div",{className:"hc-group",children:[s.jsx("div",{className:"hc-group-h",children:u==="en"?l.en:l.de}),s.jsx("ul",{children:l.items.map(d=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:d.id===z.id&&!P?"on":"","aria-current":d.id===z.id?"page":void 0,onClick:()=>D(d.id),children:[d.title,d.id===c.id&&s.jsx("span",{className:"hc-here",title:e("help.thisPage"),children:"●"})]})},d.id))})]},l.id))}),s.jsx("div",{className:"hc-main",ref:I,children:P?s.jsxs("div",{id:"hc-results",className:"hc-results",role:"listbox","aria-label":e("help.results",{n:String(P.length)}),children:[s.jsx("div",{className:"hc-count muted",children:P.length?e("help.results",{n:String(P.length)}):""}),!P.length&&s.jsx("div",{className:"empty",children:e("help.noResults")}),P.map(l=>s.jsxs("section",{className:"hc-hit",children:[s.jsx("h3",{children:l.title}),l.sections.map(d=>{H++;const y=H;return s.jsxs("button",{type:"button",id:`hc-r${y}`,role:"option","aria-selected":y===b,className:y===b?"sel":"",onMouseEnter:()=>h(y),onClick:()=>D(l.article,d.anchor,l.terms),children:[d.anchor&&s.jsx("span",{className:"hc-hit-h",children:d.heading}),s.jsx("span",{className:"hc-snip",children:lt(d.snippet.text,d.snippet.marks)})]},d.anchor||"_")})]},l.article))]}):s.jsxs("article",{className:"hc-article",lang:z.lang,children:[g.length>0&&s.jsxs("button",{type:"button",className:"btn ghost sm hc-back",onClick:O,children:["← ",e("help.back")]}),s.jsx("h1",{children:z.title}),(z.audience||K)&&s.jsxs("div",{className:"hc-meta",children:[z.audience&&s.jsx("span",{className:"pill",children:e("help.audience",{a:z.audience})}),K&&s.jsxs("button",{type:"button",className:"btn sm",onClick:()=>{t(),i(K.view,K.tab?{settingsTab:K.tab}:void 0)},children:[e("help.goTo")," →"]})]}),z.summary&&s.jsx("p",{className:"hc-summary",children:z.summary}),G.length>2&&s.jsxs("nav",{className:"hc-toc","aria-label":e("help.contents"),children:[s.jsx("span",{children:e("help.contents")}),G.map(l=>s.jsx("a",{href:`#hc-${l.id}`,onClick:d=>{var y;d.preventDefault(),p({id:z.id,anchor:l.id}),(y=document.getElementById(`hc-${l.id}`))==null||y.scrollIntoView({block:"start"})},children:l.text},l.id))]}),s.jsx(at,{blocks:z.blocks,open:(l,d)=>D(l,d),marks:w.marks})]})})]})]})})}function lt(n,r){const i=[];let t=0;return r.forEach(([e,o],a)=>{e>t&&i.push(n.slice(t,e)),i.push(s.jsx("mark",{children:n.slice(e,o)},a)),t=o}),i.push(n.slice(t)),i}export{ct as default};
