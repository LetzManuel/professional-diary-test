var ae=Object.defineProperty;var oe=(n,r,i)=>r in n?ae(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i;var N=(n,r,i)=>oe(n,typeof r!="symbol"?r+"":r,i);import{Z as X,j as s,u as de,$ as le,r as S,a0 as ee}from"./index-DWgItzfM.js";const he=`---
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

Nicht eingereichte Stunden bleiben bei der Person, die sie erfasst hat: Andere sehen sie weder in Zeiten noch in Berichten, bis sie eingereicht sind. Hier steht von anderen nur die Summe je Person und Woche, damit Sie nachfragen können – die Einträge selbst erscheinen erst nach dem Einreichen. Das Einreichen ist immer ein Klick der Person, nie automatisch. Stunden, die eine Führungskraft für jemand anderen bucht, gelten sofort als eingereicht.

## Gut zu wissen {#tipps}

- Stunden, die die freigebende Person selbst bucht, gelten als freigegeben.
- Stunden von Aufgaben **ohne** Freigabepflicht sind automatisch freigegeben.
- Eingereichte Einträge ändert nur ein Manager, freigegebene nur ein Admin.
- Wer eine Zahl beim Menü und eine E-Mail bei neuen Einreichungen bekommt, stellt jede Person unter [Mein Profil › Benachrichtigungen](help:profile#benachrichtigungen) ein.
- Mit dem Modul [Automatisierung](help:processes) lassen sich mehrstufige Freigabeketten mit Erinnerung und Eskalation bauen.
`,ue=`---
title: Projekt-Cockpit
group: projects
order: 2
contexts: projects.cockpit
summary: Das Projekt auf einen Blick – Kacheln mit Budget, Meilensteinen, Stunden, offenen Beträgen, To-dos und eigenen Auswertungen, anpassbar für sich, das Projekt-Team oder das ganze Unternehmen.
keywords: Cockpit, Dashboard, Übersicht, Kachel, Kacheln, anpassen, Layout, Standard, Budget, Meilensteine, Stunden, verrechnen, Kontingent, To-do, Auswertung, Projektübersicht
---

Jedes gespeicherte Projekt öffnet mit dem Reiter **Cockpit**: Kacheln mit den wichtigsten Zahlen des Projekts. Ein Klick auf einen Kacheltitel mit › öffnet den passenden Reiter (z. B. Budget → Stunden & Budget).

## Die Kacheln {#kacheln}

| Kachel | Was sie zeigt |
|---|---|
| Budget | gebuchte Stunden gegen das Budget der Rollen |
| Nächste Meilensteine | offene Meilensteine nach Fälligkeit; erledigte, noch nicht verrechnete mit „zu verrechnen“ |
| Stunden diese Woche | gebuchte Stunden je Person, Montag bis Sonntag |
| Zu verrechnen | offene verrechenbare Stunden und ihr Wert |
| Verrechnet | alle Rechnungen zum Projekt gegen die angenommenen Angebote |
| Stundenkontingent | Saldo des aktuellen Kontingents |
| Projektlog | die letzten Einträge |
| Meine To-dos | Ihre offenen To-dos in diesem Projekt |
| Plan und Ist, Fällige Aufgaben, Gantt, Board, Meilensteintrend, Burndown, Velocity, Roadmap (agile Projekte) | mit der Lizenz Projektmanagement – siehe [Projektplan](help:plan) |
| Auswertung | eine gespeicherte [eigene Auswertung](help:custom-reports), auf dieses Projekt eingeschränkt, als Tabelle oder Diagramm |

Jede Person sieht nur, was sie sehen darf: Beträge und die Kacheln „Zu verrechnen“ und „Verrechnet“ nur mit Rechnungs- bzw. Preisrechten, Auswertungen nur mit Zugang zu Auswertungen. So kann ein Layout mit dem ganzen Team geteilt werden.

## Anpassen {#anpassen}

**Anpassen** schaltet den Bearbeitungsmodus ein:

- Kacheln am Griff ⠿ **ziehen** (mit der Maus auch an der Kachel, oder mit ← → verschieben), die **Breite** am rechten Rand der Kachel ziehen oder die **Größe** wählen (Klein, Mittel, Breit, Ganze Breite) und mit ✕ entfernen. Am Tablet geht das Ziehen mit dem Finger am Griff.
- **+ Kachel** fügt eine Kachel oder eine eigene Auswertung hinzu.
- **Standard laden** holt das Layout des Projekts bzw. des Unternehmens als Ausgangspunkt.

Dann speichern:

| Knopf | Für wen | Wer darf |
|---|---|---|
| Für mich speichern | nur für Sie, in diesem Projekt | alle |
| Für das Projekt-Team speichern | alle im Projekt | Projektleitung und wer Projekte bearbeitet |
| Als Unternehmensstandard | alle Projekte ohne eigenes Layout | Admins (Unternehmenseinstellungen) |

Es gilt das erste vorhandene Layout: Ihr eigenes → das des Projekts → der Unternehmensstandard → der eingebaute Standard. Oben links steht, welches Sie gerade sehen. **Auf Standard zurücksetzen** entfernt Ihr eigenes Layout wieder.

Am Handy stehen die Kacheln in derselben Reihenfolge untereinander.
`,ce=`---
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

## Berichte in Automatisierungen {#ablaeufe}

Die Filter eigener Berichte sind auch die Bedingungen in [Automatisierungen](help:processes); ein gespeicherter Bericht kann per Automatisierung regelmäßig als PDF oder Excel verschickt werden.
`,ge=`---
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

> **UID-Nummer:** Rechnungen über 10.000 € brutto und Reverse-Charge-Rechnungen ins Ausland brauchen die UID des Kunden. Fehlt sie, warnt die Abrechnung. Das Format wird beim Eingeben geprüft: EU-Nummern beginnen mit dem Ländercode (z. B. \`ATU12345678\`, \`DE123456789\`), Schweizer Nummern haben die Form \`CHE-123.456.788 MWST\` – ein Hinweis, gespeichert wird trotzdem.
>
> **Im Register prüfen:** fragt das amtliche Register ab – Schweiz: UID-Register des BFS, EU: VIES, Norwegen: Brønnøysund-Register. Angezeigt werden gültig/ungültig, MWST-Registrierung, Name und Adresse laut Register; weicht der Name ab, steht ein Hinweis dabei. Bei EU-Nummern vergleicht VIES zusätzlich Name, Straße, PLZ und Ort des Kunden mit dem Register (*stimmt*, *stimmt nicht* oder *vom Land nicht geprüft* – Deutschland und Spanien z. B. geben keine Daten heraus). Ist beim Unternehmen eine EU-UID eingetragen, liefert VIES eine **Abfragenummer** (Nachweis der Prüfung für Reverse-Charge-Rechnungen). Österreichische Unternehmen mit hinterlegtem FinanzOnline-Webservice-Benutzer (Einstellungen › Unternehmen) bekommen für ausländische EU-Nummern zusätzlich die **UID-Abfrage Stufe 2** des BMF mit Name und Anschrift; das BMF erlaubt zwei Abfragen derselben Nummer pro Tag. Jede Prüfung eines gespeicherten Kunden wird als Aktivität beim Kunden abgelegt. **Im Register suchen** (Schweiz und Norwegen) findet die Nummer über den Kundennamen; *Übernehmen* trägt sie ein und füllt leere Adressfelder. Für die Abfrage ist die Cloud-Anmeldung nötig.

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
`,me=`---
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
`,pe=`---
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
`,fe=`---
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
`,be=`---
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
`,we=`---
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
`,ke=`---
title: Angebote
group: sales
order: 2
contexts: offers, offers.edit#bearbeiten
summary: Angebote schreiben, als PDF senden, annehmen oder ablehnen – und daraus Projekt und Rechnungen machen.
keywords: Angebot, Offerte, Kostenvoranschlag, Positionen, Annahme, angenommen, abgelehnt, Version, Bestellnummer, Teilrechnung, Schlussrechnung, Trefferquote, PDF, senden, Rahmenvertrag, Meilensteine, Projektplan, Team, Vorlage, Gantt
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

## Plan & Team {#plan}

Mit der Lizenz **Projektmanagement** hat ein gespeichertes Angebot den Abschnitt **Plan & Team**. Dort planen Sie schon im Angebot:

- **Meilensteine** und **Aufgaben** (auch Unteraufgaben). Mit **+** in einer Zeile legen Sie darunter eine Aufgabe an.
- **Termine**, entweder als **Arbeitstage ab Beauftragung** (Tag 1 = erster Arbeitstag) oder als festes Datum.
- **Team**: geplante Stunden aus einer Stunden- oder Tagesposition des Angebots, auf Wunsch mit Person. Die Position wird im Projekt zur Rolle.

Die Spalte **Wert** zeigt geplante Stunden × Preis der Position. Wird nach Meilensteinen abgerechnet, setzt **Beträge aus Plan** den Betrag jedes Meilensteins auf diesen Wert.

Unten wählen Sie, was das PDF zusätzlich zeigt: den **Projektplan** als Tabelle oder Gantt-Diagramm und eine Seite **Team** mit Rollen und Stunden. Namen erscheinen nur, wenn Sie **Namen der Personen zeigen** ankreuzen. Diese Seiten folgen auf das Angebot; die Druckoptionen ändern die Angebotsversion nicht.

Beim **Annehmen** wird der Plan ins Projekt übernommen: Termine in Arbeitstagen zählen ab dem Tag der Annahme, die Stunden landen bei der Rolle der Position. Danach wird der ursprüngliche Plan eingefroren (siehe [Plan](help:plan#termine)). Wird das Angebot nicht nach Meilensteinen abgerechnet, kommen die Meilensteine ohne Betrag ins Projekt, damit nichts doppelt verrechnet wird.

**+ Sprints** bietet ein agiles Projekt an: *N Sprints à X Wochen* mit einem Team – je Sprint dieselben Stunden je
Angebotsposition. Die Sprints folgen in Arbeitstagen aufeinander (auch nach bereits angebotenen Sprints). Wird nach
Meilensteinen abgerechnet, ergibt **Beträge aus Plan** den Festpreis je Sprint. Beim **Annehmen** wird das Projekt agil
mit diesen Sprints (geplant), die Sprintlänge und – bei gleichem Betrag aller Sprints – der Festpreis je Sprint werden
übernommen; andere Meilensteine des Angebots werden Releases, ihre Aufgaben Stories im Backlog
(siehe [Agile Projekte](help:plan#agil)).

**Vorlage anwenden …** und **Als Vorlage speichern …** arbeiten mit Projektvorlagen, siehe [Plan](help:plan#vorlagen).

## Kalkulation {#kalkulation}

Mit der Lizenz *Kosten & Kalkulation* sehen Finanzen und Admin unter dem Angebot den Abschnitt **Kalkulation**: je Position Stunden, Personalkosten, Material und Fremdleistungen, Gemeinkosten, Preis, **DB II** und Marge, dazu die Summe mit **DB I** (Preis − direkte Kosten) und **DB II** (DB I − Gemeinkosten).

- **Stunden- und Tagespositionen:** Gibt es in *Plan & Team* Planzeilen für die Position, zählt der geplante Aufwand mit dem Satz der genannten Person; sonst die angebotene Menge mit der **Kostenstufe** der Position. Ohne Satz wird der Durchschnitt aller Personen genommen und die Zeile sagt das.
- **Artikel:** der Einkaufspreis des Artikels; für andere Positionen tragen Sie die Kosten je Einheit selbst ein.
- **Weitere Kosten** wie zugekaufte Fremdleistungen kommen als eigene Kostenzeile dazu.
- Liegt eine Position oder das Angebot unter der [Mindestmarge](help:settings-costs#marge), ist die Marge rot und der Preis für die Mindestmarge wird vorgeschlagen; **Übernehmen** setzt ihn in die Position (danach speichern). Gesperrt wird nichts.
- Meilensteine und Sprints aus *Plan & Team* zeigen ihre Kosten gegen ihren Betrag.
- Beim Versand und bei der Annahme wird die Kalkulation **festgehalten**; „angenommen mit Änderungen“ hält einen neuen Stand fest.

Die Gemeinkosten kommen aus dem neuesten verfügbaren Wirtschaftsjahr, siehe [Kalkulation](help:settings-costs); vorläufige Zahlen oder Schätzungen sind gekennzeichnet.
`,ye=`---
title: Bestellungen
group: sales
order: 4
contexts: orders
summary: Bestellungen Ihrer Kunden mit Positionen – was davon verrechnet ist und was offen bleibt.
keywords: Bestellung, Bestellnummer, PO, Purchase Order, Auftrag, Rahmenbestellung, Abruf, Position, Bestellposition, Coupa, Ariba, cXML
---

Das Menü **Bestellungen** gehört zur Lizenz *Angebote & Rechnungen*. Sie sehen es, wenn Ihr Unternehmen *Bestellungen* unter [Allgemein](help:settings-general) eingeschaltet hat und Ihre Rolle *Bestellungen erfassen* darf.

Eine Bestellung ist der Auftrag Ihres Kunden mit seiner **Bestellnummer** und seinen **Positionen**. Rechnungen nennen die Bestellnummer und je Zeile die Positionsnummer des Kunden – so kann das Einkaufssystem des Kunden jede Rechnung seiner Bestellung zuordnen.

## Eine Bestellung erfassen {#erfassen}

1. **+ Bestellung** wählen.
2. Kunde, Bestellnummer und Bestelldatum eintragen, optional eine Bezeichnung und den Besteller beim Kunden.
3. Unter **Positionen** jede Position mit der **Positionsnummer des Kunden** eintragen (meist 1, 2, 3 … oder 10, 20, 30 …). Art *Betrag* passt für Dienstleistungen, *Menge × Preis* für Stunden, Tage oder Stück.
4. Optional das **Angebot** und das **Projekt** wählen, zu dem die Bestellung gehört.
5. **Speichern**.

Kam die Bestellung als PDF, legen Sie die Datei unter *Dokumente* in der Bestellung ab (wenn Dokumente unter Einstellungen eingeschaltet sind).

Nehmen Sie ein Angebot mit einer Bestellnummer an, legt die App die Bestellung selbst an – mit den Zeilen des Angebots als Positionen.

## Rahmenbestellungen {#rahmen}

Eine **Rahmenbestellung** hat mehrere Positionen zu unterschiedlichen Sätzen, zum Beispiel eine je Rolle, und wird über die Zeit abgerufen. Setzen Sie dafür das Häkchen *Rahmenbestellung*.

## Verrechnet und offen {#rest}

Für eine gespeicherte Bestellung zeigt die Tabelle je Position **Verrechnet** und **Offen**. Es zählen gültige Rechnungen; stornierte Rechnungen und Gutschriften zählen nicht. In der Liste sehen Sie dieselben Summen je Bestellung.

Eine Position, die schon verrechnet ist, kann nicht mehr entfernt werden. Eine Bestellung mit Rechnungen kann nicht gelöscht werden – setzen Sie sie auf *erledigt* oder *storniert*.

## cXML-Rechnungen {#cxml}

Sind die Zeilen einer Rechnung ihren Bestellpositionen zugeordnet, trägt der Versand als [cXML-Rechnung](help:settings-einvoice#cxml) die Positionsnummern des Kunden selbst ein.

## Stunden und Abrechnung {#stunden}

Gehört eine Bestellung zu einem Projekt, nennt jede Stunde auf diesem Projekt eine **Bestellposition**. Die App wählt sie selbst, wenn es klar ist: die Position mit der gebuchten Rolle, die einzige offene Position oder die Position Ihrer letzten Stunde im Projekt. Sonst wählen Sie sie beim Erfassen ([Zeiten](help:time#bestellung)).

Der [Abrechnungslauf](help:run#bestellungen) macht je Bestellung eine eigene Rechnung mit der Bestellnummer und ordnet jede Zeile ihrer Position zu. Bei einer Rahmenbestellung gilt der Preis der Position, wenn dort einer eingetragen ist. Soll eine Rechnung mehrere Bestellungen enthalten, setzen Sie unter *Einstellungen › Unternehmen* das Häkchen *Mehrere Bestellungen auf einer Rechnung*; beim Kunden lässt es sich abweichend einstellen.

## Empfangene Bestellungen {#empfangen}

Ist [Bestellungen empfangen](help:settings-einvoice#bestellungen) eingerichtet, kommen Bestellungen aus dem Einkaufssystem des Kunden von selbst in die Liste:

- **Neu**: Die App sucht das gesendete Angebot, zu dem die Bestellung gehört – die Angebotsnummer in der Bestellung, die beim Angebot eingetragene Bestellnummer oder derselbe Betrag (± 1 %). Passt genau eines, zeigt die Bestellung **Angebot … annehmen**; mit dem Häkchen *Angebote aus empfangenen Bestellungen automatisch annehmen* ist es schon angenommen. **Gesehen** macht sie zu einer offenen Bestellung.
- **Geändert**: Eine Änderung des Kunden erhöht die Version und listet, was sich geändert hat (Positionen neu, entfallen, Menge, Preis, Betrag, Text). Schon verrechnete Positionen bleiben, wie sie sind; entfallen sie, werden sie geschlossen.
- **Storniert**: Der Kunde hat die Bestellung storniert.

Die Person, die das Angebot gesendet hat, und die Projektleitung bekommen eine E-Mail (abschaltbar unter Mein Profil › Benachrichtigungen); bei „Heute“ steht ein Hinweis.
`,ve=`---
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
`,Ae=`---
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
`,Se=`---
title: Projektplan (Projektmanagement)
group: projects
order: 3
contexts: projects.plan
summary: Meilensteine, Aufgaben und Unteraufgaben mit Team und geplanten Stunden – gebucht wird auf die Aufgabe, Plan und Ist kommen von selbst.
keywords: Pinnwand, Haftzettel, Post-it, Kommentar, Kommentare, Beschreibung, formatieren, fett, kursiv, unterstrichen, durchgestrichen, Aufzählung, Nummerierung, erwähnen, Erwähnung, @, Verlinkung, Gantt, Balkendiagramm, kritischer Pfad, Puffer, Board, Kanban, Meilensteintrendanalyse, MTA, Trend, Budgetwarnung, PDF, Basisplan, Abhängigkeit, Vorgänger, Nachfolger, Änderungsprotokoll, Unterstützung, Anfrage, Erinnerung, fällig, Plan, Projektplan, Aufgabe, Aufgaben, Unteraufgabe, Meilenstein, Team, Besetzung, geplante Stunden, Soll, Ist, Plan-Ist, Rolle, offener Bedarf, Projektmanagement, Lizenz, Fortschritt, Status, Vorlage, Projektvorlage
---

Mit der Lizenz **Projektmanagement** hat jedes Projekt den Reiter **Plan**. Er ersetzt den Reiter „Meilensteine“: Meilensteine tragen weiterhin das Geld, die **Aufgaben** darunter tragen die Arbeit – was, wann, wer und wie viele Stunden. Ohne die Lizenz bleibt alles wie bisher.

## Rollen und Aufgaben {#rollen}

Die Zeilen unter **Rollen und Sätze** heißen mit der Lizenz nur noch **Rolle**: Sie bestimmen Satz und Budget, also das, wofür der Kunde zahlt. Eine **Aufgabe** ist die Arbeit dahinter und fragt Stunden von einer oder mehreren Rollen an (z. B. 40 h Senior Consultant + 80 h Consultant). Die Verrechnung ändert sich dadurch nicht – Stunden werden weiter zum Satz ihrer Rolle verrechnet, Meilensteinprojekte weiter nach Meilensteinen.

## Den Plan aufbauen {#aufbauen}

- **+ Meilenstein** legt einen Meilenstein an (Betrag oder Anteil, Fälligkeit – wie bisher).
- Unten im Plan tippen Sie Aufgaben einfach ein: Name eingeben und **Enter** – die nächste Zeile ist sofort bereit. Die Auswahl links legt fest, unter welchem Meilenstein neue Aufgaben landen.
- **Tab** rückt ein: Die folgenden Zeilen werden Unteraufgaben der zuletzt eingegebenen Aufgabe. **Umschalt+Tab** geht wieder eine Ebene zurück. Es gibt eine Ebene Unteraufgaben.
- **Bearbeiten** öffnet die Aufgabe: Beschreibung, Meilenstein, übergeordnete Aufgabe, Status, Fortschritt in %, Beginn und Ende.
- **Ziehen** ordnet um: Fassen Sie eine Aufgabe am Griff ⠿ (mit der Maus auch an der Zeile) und ziehen Sie sie an
  den oberen oder unteren Rand einer anderen Aufgabe (davor oder danach), auf einen Meilenstein (dann steht sie als
  erste darunter) oder auf die Mitte einer Aufgabe – dann wird sie deren Unteraufgabe. Unter die letzte Zeile gezogen
  steht sie ohne Meilenstein. Eine blaue Linie zeigt, wo sie landet; Esc bricht ab. Das klappt auch am Tablet und
  Handy mit dem Finger am Griff.
- Mit ↑ und ↓ ändern Sie die Reihenfolge ebenso.

Aufgaben gibt es auf jedem Projekt, auch auf Projekten nach Stunden; dort dürfen sie auch ohne Meilenstein stehen.

## Team und geplante Stunden {#team}

In der Spalte **Team** tragen Sie je Aufgabe ein, wer mit welcher Rolle wie viele Stunden arbeiten soll:

| Feld | Bedeutung |
|---|---|
| Rolle | der Satz, zu dem die Stunden gebucht werden |
| Person | wer die Arbeit macht; leer = **offener Bedarf** |
| Geplant (h) | die geplanten Stunden |

Eine genannte Person kann damit sofort buchen, auch ohne eigene Zuordnung unter „Rollen und Sätze“. Ein Meilenstein ohne Aufgaben kann selbst ein Team haben.

## Buchen auf Aufgaben {#buchen}

Wer im Plan eingetragen ist, wählt beim Erfassen der Zeit (Desktop, Web, Handy und Timer) statt der Rolle die Aufgabe: **Projekt › Meilenstein › Aufgabe**. Die Rolle ergibt sich aus der eigenen Zeile im Plan. Angeboten werden:

- Aufgaben ohne Unteraufgaben, die nicht erledigt sind und auf denen Sie eingeplant sind – oder offener Bedarf einer Rolle, auf die Sie buchen dürfen;
- Aufgaben ganz ohne Team (dann wählen Sie die Rolle);
- Meilensteine **ohne** Aufgaben, auf denen Sie eingeplant sind.

Ein Meilenstein mit Aufgaben und eine Aufgabe mit Unteraufgaben sind selbst nicht mehr buchbar. Projekte ohne Plan, oder ohne Platz für Sie im Plan, bieten wie bisher die Rollen an.

Wird eine Aufgabe über ihre geplanten Stunden gebucht, erscheint ein Hinweis – gesperrt wird nicht.

## Plan und Ist {#planist}

Jede Zeile zeigt geplante und gebuchte Stunden mit Balken (gelb ab 80 %, rot ab 100 %); Meilensteine und Aufgaben zählen ihre Unteraufgaben mit. Darunter steht **Plan und Ist** nach Rolle oder nach Person: geplante Stunden, alle gebuchten Stunden des Projekts und die Abweichung.

## Status und Fortschritt {#status}

Aufgaben haben den Status **Offen**, **In Arbeit**, **Blockiert** oder **Erledigt** und einen Fortschritt in %, den Sie von Hand eintragen. Den Status ändern Projektleitung und die Personen, die auf der Aufgabe eingeplant sind. Erledigte Aufgaben werden beim Buchen nicht mehr angeboten. Meilensteine setzen und verrechnen Sie hier genauso wie bisher im Reiter Meilensteine.

Eine Aufgabe mit gebuchten Stunden lässt sich nicht löschen – setzen Sie sie auf **Erledigt**.

## Termine und Basisplan {#termine}

Jede Aufgabe und jeder Meilenstein hat drei Termine: **Beginn**, **Ende** (der aktuelle Plan) und das **ursprünglich geplante Ende** (Basisplan). Der Basisplan wird festgehalten, sobald das Angebot angenommen oder das Projekt aktiv wird – oder von Hand mit **Basisplan festlegen**. Weicht das Ende danach ab, steht das ursprüngliche Ende grau darunter („urspr. …“).

Verschieben Sie ein Ende, fragt der Dialog nach dem **Grund**. Jede Änderung von Terminen und geplanten Stunden steht mit Datum, Person und Grund unter **Änderungen**. Mit **Neuer Basisplan …** (mit Grund) werden die heutigen Enddaten der neue Basisplan; die bisherigen bleiben im Protokoll.

## Abhängigkeiten {#abhaengig}

Im Dialog einer Aufgabe wählen Sie unter **Abhängig von** Vorgänger (Aufgaben oder Meilensteine), optional mit **Tagen danach**. Beginnt eine Aufgabe vor dem Ende ihres Vorgängers, zeigt der Plan oben einen Hinweis. Verschoben wird nichts von selbst – erst mit **Nachfolger verschieben**: Dann rücken alle betroffenen Aufgaben mit gleicher Dauer auf den frühestmöglichen Beginn, auch deren Nachfolger. Das steht ebenfalls im Änderungsprotokoll.

## Pinnwand {#pinnwand}

In der Ansicht **Sprints** schaltet **Pinnwand** (oben neben „Liste“) auf die Darstellung, mit der agile Teams angefangen haben: Backlog und Sprints stehen nebeneinander, jede Story ist ein Haftzettel – gelb für User Stories, rosa für Fehler, blau für Aufgaben – mit Story Points, Akzeptanzkriterien, Kommentaren, Release und den Kürzeln der eingeplanten Personen. Zettel lassen sich am Griff ⠿ in einen anderen Sprint oder zurück ins Backlog ziehen; ein Klick öffnet die Story. Abgeschlossene Sprints blenden Sie unten ein. Die Wahl merkt sich die App je Gerät. Auch das **Board** des laufenden Sprints zeigt die Stories als Haftzettel.

## Beschreibung, Erwähnungen und Verweise {#beschreibung}

Aufgaben, Stories, Sprints und Meilensteine haben eine **Beschreibung**, die Sie ein wenig formatieren können: **fett**, *kursiv*, unterstrichen, durchgestrichen, Aufzählung und Nummerierung (Knöpfe über dem Text oder Strg+B / Strg+I / Strg+U).

- **@** und ein paar Buchstaben schlagen Kolleginnen und Kollegen vor; mit ↑/↓ und Enter (oder einem Klick) wählen. Wer so erwähnt wird, sieht es nach dem Speichern unter **Heute › Meine Aufgaben** und bekommt gleich eine E-Mail – abschaltbar unter *Mein Profil › Benachrichtigungen › In einer Beschreibung erwähnt*. Jede Person wird pro Beschreibung nur einmal benachrichtigt, auch wenn sie später wieder gespeichert wird.
- **#** verlinkt eine andere Aufgabe, einen Sprint oder Meilenstein desselben Projekts (im Angebot: desselben Angebots). Ein Klick auf den Verweis in der gespeicherten Beschreibung öffnet sie über dem aktuellen Dialog. Verweise aus dem Angebotsplan zeigen nach der Annahme auf die Kopie im Projekt.
- Ein Klick auf den Beschreibungstext oder **Bearbeiten** schaltet zum Bearbeiten um. Eingefügte Texte aus Word oder dem Web behalten nur diese Formatierungen.
- **Kommentare** stehen unter der Beschreibung: gleiche Formatierung, @ und #, gespeichert mit **Kommentieren** (unabhängig vom Speichern des Dialogs). Erwähnte bekommen dieselbe Benachrichtigung. Ändern oder löschen kann einen Kommentar nur, wer ihn geschrieben hat.
- Im Excel-Export steht die Beschreibung als Text (Listen mit „- “); bleibt der Text beim Import gleich, bleiben Formatierung und Erwähnungen erhalten. Auf der Kundenseite erscheint eine Meilensteinbeschreibung als einfacher Text.

## Unterstützung anfragen {#anfrage}

Wer auf einer Aufgabe eingeplant ist, kann über **Unterstützung anfragen** eine Kollegin oder einen Kollegen um Stunden bitten (Rolle, Stunden, Notiz). Die Projektleitung kann im Team-Dialog bei einer neuen Zeile **erst anfragen** ankreuzen. Die angefragte Person sieht die Anfrage unter **Heute › Meine Aufgaben** und nimmt sie an oder lehnt sie ab. Erst angenommen zählen die Stunden im Plan und die Person kann darauf buchen; eine Ablehnung bleibt im Team sichtbar.

## Erinnerungen {#erinnerungen}

Unter **Heute › Meine Aufgaben** stehen Ihre offenen Aufgaben, die in den nächsten **3 Arbeitstagen** enden oder überfällig sind – als eingeplante Person, und als Projektleitung für das ganze Projekt. Die Zahl der Tage stellen Admins unter *Einstellungen › Allgemein* ein. Wer will, bekommt dazu jeden Morgen ab 7 Uhr eine E-Mail: *Mein Profil › Benachrichtigungen › Fällige Aufgaben*.

## Rechnung bei Erreichen eines Meilensteins {#rechnung}

Setzen Sie einen Meilenstein mit Betrag auf **Erledigt**, geschieht mit seiner Rechnung, was im Projekt (Reiter Details) unter **Rechnung bei Erreichen eines Meilensteins** steht:

| Einstellung | Was passiert |
|---|---|
| Rechnung vorbereiten (Standard) | das Rechnungsformular öffnet sich mit dem Meilenstein – prüfen und erstellen |
| Rechnung gleich erstellen | die Rechnung wird sofort erstellt (mit Nummer und PDF) |
| Nichts | Sie verrechnen später, z. B. im Rechnungslauf |

Gesendet wird die Rechnung nie automatisch. Soll das ohne Klick an einem Datum geschehen, richten Sie eine [Automatisierung](help:processes) ein.

## Ansichten: Liste, Gantt, Board, Meilensteintrend {#ansichten}

Oben links wählen Sie, wie der Plan gezeigt wird. Die Wahl bleibt gespeichert.

- **Liste**: der Plan als Baum (wie oben beschrieben).
- **Gantt**: je Aufgabe ein Balken von Beginn bis zum aktuellen Ende. Darunter liegt eine graue Linie bis zum ursprünglichen Ende (Basisplan). Meilensteine sind Rauten, mit Betrag für alle, die Preise sehen. Dazu kommen Pfeile für Abhängigkeiten und eine gestrichelte Linie für heute. Mit **Woche / Monat / Quartal** ändern Sie das Zeitraster.
- **Board**: die Aufgaben in den Spalten Offen, In Arbeit, Blockiert und Erledigt. Ziehen Sie eine Karte in eine andere Spalte oder wählen Sie den Status auf der Karte.
- **Meilensteintrend**: die Meilensteintrendanalyse, siehe [unten](#trend).

## Gantt: kritischer Pfad und Verschieben {#gantt}

Rot sind die Aufgaben und Meilensteine des **kritischen Pfads**: Verschiebt sich eine davon, verschiebt sich das Projektende oder ein Nachfolger. Alle anderen haben **Puffer**. Wie viele Tage, zeigt der Hinweis, wenn Sie mit der Maus über den Balken fahren. Der Haken **Kritischer Pfad** blendet die Färbung aus.

Wer den Plan bearbeiten darf, kann Balken direkt verschieben:

- Den Balken ziehen verschiebt Beginn und Ende gemeinsam.
- Den rechten Rand ziehen ändert nur das Ende.
- Eine Raute ziehen verschiebt den Meilenstein.

Danach fragt Parto Diary nach dem **Grund**. Er steht im Änderungsprotokoll und in der Meilensteintrendanalyse. Haben Sie die Aufgabe mit Nachfolgern verknüpft, bietet der Dialog an, diese mitzuverschieben. **Als PDF** speichert das Diagramm über den ganzen Plan auf A4 quer, mit Logo und Fußzeile aus dem Dokumentdesign.

## Meilensteintrendanalyse {#trend}

Für jeden Meilenstein zeigt die Analyse sein geplantes Ende an jedem Tag, an dem es sich geändert hat:

- Waagrecht ist der Berichtstag, senkrecht der geplante Termin.
- Eine flache Linie hält ihren Termin. Steigt die Linie, rutscht der Meilenstein nach hinten. Fällt sie, kommt er früher.
- Erreicht ein Meilenstein sein Ziel, trifft seine Linie die gestrichelte Diagonale.

Die Liste darunter zeigt, um wie viele Tage sich jeder Meilenstein seit dem ersten Plan verschoben hat. Die Daten kommen aus dem Änderungsprotokoll.

## Budgetwarnungen und Auswertungen {#warnungen}

Als Projektleitung sehen Sie unter **Heute › Meine Aufgaben**, welche Aufgaben und Meilensteine Ihrer Projekte **80 %** oder **100 %** ihrer geplanten Stunden verbraucht haben. Ein Klick öffnet den Plan. Mit **Board** sehen Sie dort auch Ihre Aufgaben aus allen Projekten.

Unter **Auswertungen** gibt es mit der Lizenz die Tabellen **Aufgaben** und **Meilensteine**. Sie zeigen:

- geplante und gebuchte Stunden, Rest und Abweichung;
- wie viel vom Plan verbraucht ist;
- ursprüngliches, aktuelles und tatsächliches Ende, Verzug in Tagen und ob etwas überfällig ist.

Diese Auswertungen lassen sich speichern, regelmäßig senden und als Kachel ins Cockpit legen. In **Automatisierungen** sind Aufgaben und Meilensteine eigene Objekte, etwa „wenn eine Aufgabe überfällig ist“. Gantt, Board und Meilensteintrend gibt es auch als Kacheln im [Cockpit](help:cockpit).

## Projektvorlagen {#vorlagen}

**Als Vorlage speichern …** speichert den Plan eines Projekts oder Angebots als Vorlage: Meilensteine, Aufgaben, Rollen mit Preis und geplante Stunden. Termine werden zu Arbeitstagen ab dem frühesten Termin. Personen werden nicht gespeichert. Unter *Speichern als* ersetzen Sie eine bestehende Vorlage.

**Vorlage anwenden …** fügt eine Vorlage zum bestehenden Plan hinzu:

- im **Projekt** ab einem Beginn, den Sie wählen. Fehlende Rollen werden mit dem Preis der Vorlage angelegt; Meilensteine kommen ohne Betrag.
- im **Angebot** mit Terminen in Arbeitstagen ab Beauftragung. Fehlende Positionen werden mit den geplanten Stunden ergänzt (siehe [Angebote](help:offers#plan)).

Im selben Fenster lässt sich eine Vorlage auch löschen.

## Plan aus Excel {#excel}

Über **Import** im Plan lassen sich Meilensteine, Aufgaben, Unteraufgaben und geplante Stunden aus Excel einlesen – zum Beispiel einen Projektplan, den Sie schon in Excel haben. **Exportieren** schreibt den Plan in dieselbe Struktur; die Datei kann geändert und wieder eingelesen werden.

- Eine Zeile je Plan-Zeile (Rolle × Person). Die Spalten *Meilenstein*, *Aufgabe* und *Unteraufgabe* sagen, wohin sie gehört; was es mit diesem Namen noch nicht gibt, wird angelegt.
- Eine Zeile ohne Aufgabe beschreibt den Meilenstein selbst (Ende = fällig am, Betrag).
- Leere Zellen ändern nichts: Mehrere Zeilen derselben Aufgabe müssen Start und Ende nicht wiederholen.
- *Projekt* leer = das Projekt, in dem Sie importieren. Mit Projektcodes kann eine Datei die Pläne mehrerer Projekte enthalten.
- Rollen müssen im Projekt bestehen; Personen werden über Name oder E-Mail gefunden.
- Der Import zeigt zuerst eine Vorschau; erst nach Bestätigung wird etwas geändert. Er braucht die Berechtigung, Projekte zu bearbeiten.

## Agile Projekte: Backlog und Sprints {#agil}

Oben im Reiter wählen Sie die **Methode** des Projekts: *Klassisch* (Meilensteine, Gantt) oder *Agil*. Neue Projekte
übernehmen die Standard-Methode aus Einstellungen › Allgemein. Beim Umstellen wird nichts gelöscht: Meilensteine werden
zu Releases und ihre Aufgaben zu Stories im Backlog – und beim Zurückstellen wieder umgekehrt.

Im agilen Modus zeigt die Ansicht **Sprints** links das **Backlog**, rechts die Sprints:

- **Stories** legen Sie im Backlog an („Neue Story …“). Ein Klick öffnet die Story: Art (User Story, Fehler, Aufgabe),
  **Story Points**, Release, Beschreibung und **Akzeptanzkriterien** zum Abhaken. Nach Priorität ordnen Sie per **Ziehen** am Griff ⠿ oder mit ↑/↓.
  Stunden planen Sie zusätzlich wie gewohnt in der Liste.
- **+ Sprint** plant den nächsten Sprint im Anschluss an den letzten (Länge unter *Sprint-Einstellungen*, Standard 14
  Tage). Im Sprint tragen Sie das **Sprintziel** ein; Stories **ziehen** Sie aus dem Backlog in den Sprint (und zurück, oder von Sprint zu Sprint) – an die Stelle, an der sie stehen sollen; die Auswahl an der Story geht ebenso. Abgeschlossene Sprints nehmen nichts mehr auf.
- **Sprint starten**: Die Punkte der Stories sind jetzt die Zusage. Es läuft immer nur ein Sprint. Was danach dazukommt
  oder herausfällt, wird festgehalten.
- **Board** zeigt die Stories (und Unteraufgaben) des laufenden Sprints. Eine Story mit offenen Akzeptanzkriterien kann
  erledigt werden, Sie erhalten aber einen Hinweis.
- **Sprint abschließen**: Sie sehen erledigte und zugesagte Punkte und wählen für jede unfertige Story: nächster Sprint
  (wird bei Bedarf angelegt) oder Backlog. Der Sprint ist dann ein erreichter Meilenstein – mit Betrag gelten die Regeln
  der [Rechnung bei Erreichen](#rechnung).
- **Velocity**: der Durchschnitt der erledigten Punkte der letzten drei Sprints, als Anhaltspunkt für die Planung.
- **Roadmap** (Ansicht): Releases mit ihren Sprints auf einer Zeitachse – abgeschlossen grau, laufend in der
  Akzentfarbe, geplant hell; die Raute ist der Release-Termin, die rote Linie heute.
- **Burndown & Velocity** (Ansicht):
  - *Burndown* eines Sprints (laufender oder abgeschlossener wählbar): offene Punkte je Tag gegen die Ideallinie von
    der Zusage bis null am letzten Arbeitstag; Wochenenden sind grau hinterlegt. Später hinzugefügte oder entfernte
    Stories zählen ab dem Tag der Änderung, erledigt zählt ab dem Erledigt-Datum.
  - *Velocity*: zugesagte und erledigte Punkte je abgeschlossenem Sprint mit dem Durchschnitt der letzten drei.
  - *Prognose je Release*: offene Punkte geteilt durch die Velocity ergibt die nötigen Sprints und ein ungefähres
    Fertig-Datum (ab dem laufenden oder nächsten geplanten Sprint, Releases nacheinander). Liegt es nach dem
    Release-Termin, ist es rot markiert.
  - *Release-Burnup*: erledigte Punkte gegen den Gesamtumfang des Releases am Ende jedes Sprints – wächst der Umfang,
    steigt die gestrichelte Linie.
- Als **Cockpit-Kacheln** gibt es Burndown (laufender Sprint), Velocity und Roadmap; in den
  [eigenen Berichten](help:custom-reports) die Tabellen **Sprints** und **Stories**.
- **Release** fasst Sprints und Stories zusammen. Unter *Sprint-Einstellungen* steht auch die *Definition of Done* des
  Projekts.

**Abrechnung** (unter *Sprint-Einstellungen*, nur mit Preisrechten):

- **Nach Aufwand** (Standard): Die Stunden gehen wie immer über den Abrechnungslauf; der Sprint gliedert nur.
- **Festpreis je Sprint**: Jeder neue Sprint bekommt den Betrag, geplante und laufende Sprints werden angepasst; einen
  einzelnen Sprint ändern Sie unter *Bearbeiten*. Die Rechnung kommt
  - **beim Sprintabschluss** – wie bei einem erreichten Meilenstein: Rechnungsentwurf oder gleich erstellt, je nach
    [Rechnung bei Erreichen](#rechnung), oder
  - **nach Abnahme durch den Kunden**: Nimmt der Kunde den abgeschlossenen Sprint auf der
    [Kundenseite](help:portal#agil) ab (Sprint Review), erscheint über den Sprints „Zur Verrechnung bereit“ mit dem
    Knopf **Rechnung für Sprint N**. Abgenommene Sprints tragen den Hinweis *Vom Kunden abgenommen*.

  Gesendet wird nichts automatisch.
`,ze=`---
title: Kundenseite des Projekts
group: projects
order: 4
contexts: projects.portal
summary: Ein Projektbericht für den Kunden im Web – Status, Fortschritt, Meilensteine, Zeitplan und Stunden, immer im veröffentlichten Stand.
keywords: Kundenseite, Kundenportal, Projektbericht, Statusbericht, Ampel, Fortschritt, Meilensteine, Zeitplan, Gantt, veröffentlichen, Freigabe, Link, Kunde, Sprint, Burndown, Roadmap, Backlog, Sprint Review, agil, Pinnwand, Haftzettel
---

Mit der Lizenz **Projektmanagement** bekommt jedes Kundenprojekt den Reiter **Kundenseite**. Daraus wird eine Webseite für den Kunden: ein Projektbericht für die Geschäftsführung, mit Zusammenfassung, Grafiken und Zeitplan statt Listen.

## Was der Kunde sieht {#inhalt}

- **Auf einen Blick**: Ampel und Statustext, erledigter Anteil (mit dem Soll laut Plan), verstrichene Zeit, erreichte Meilensteine, nächster Meilenstein, auf Wunsch das Budget.
- **Fortschritt**: ein Balken vom Projektbeginn bis zum Ende – verstrichene Zeit, erledigte Arbeit, das Soll laut Plan und die Meilensteine als Rauten. Darunter die Meilensteine als Etappen.
- **Meilensteine**: Karten mit Status (erreicht, geplant, bald fällig, überfällig), Datum (verschobene mit dem ursprünglichen Datum) und erledigten Aufgaben. Ein Klick öffnet die Details: offene und erledigte Aufgaben.
- **Zeitplan**: Gantt der veröffentlichten Meilensteine und Aufgaben.
- **Stunden**: freigegebene Stunden pro Monat, gegen die geplanten Stunden.
- **Pinnwand** (standardmäßig aus, unter „Bereiche und Reihenfolge“ einschalten): die Meilensteine als Spalten mit je einem Haftzettel pro Aufgabe (Status, Termin, Fortschritt; erledigte durchgestrichen) – im agilen Projekt die Sprints mit ihren Stories (Farbe nach Art, Punkte) und, wenn eingeschaltet, das Backlog. Eine Zusatzansicht für Kunden, die es genauer wissen wollen; ein Klick auf den Spaltentitel öffnet den Meilenstein oder Sprint.

Interne Notizen, Personen, Sätze, Kosten und die Stunden einzelner Personen sieht der Kunde nie.

## Einstellen {#einstellen}

- **Ampel** und **Statustext**: ein, zwei Sätze, wo das Projekt steht.
- **Fortschritt**: *Plan und Ist* zeigt zusätzlich, wo das Projekt laut Plan stehen sollte; *Nur Ist* lässt das weg.
- **Beträge zeigen**: Budget und Meilensteinbeträge – standardmäßig aus.
- **Bereiche und Reihenfolge**: Bereiche ausblenden, am Griff ⠿ ziehen (oder mit den Pfeilen) ordnen und je Bereich **Ganze Breite** oder **Halbe Breite** wählen. Zwei halbe Bereiche hintereinander stehen nebeneinander (am Handy untereinander). Reihenfolge und Breite gehören zum veröffentlichten Stand.
- **Sichtbare Meilensteine und Aufgaben**: standardmäßig sind Meilensteine und Aufgaben sichtbar, Unteraufgaben nicht. Jeder Eintrag lässt sich ein- oder ausblenden; was unter einem ausgeblendeten Eintrag steht, ist mit ausgeblendet.

## Speichern und veröffentlichen {#veroeffentlichen}

Der Kunde sieht immer den zuletzt **veröffentlichten** Stand, nie den laufenden. Vor der ersten Veröffentlichung zeigt die Seite nur Unternehmen und Kontakt.

- **Veröffentlichen** friert den heutigen Stand ein. *Unveröffentlichte Änderungen* listet, was sich seitdem geändert hat (verschobene Termine, neue oder geänderte Aufgaben, Status, Stunden).
- **Speichern und veröffentlichen** macht beides in einem Schritt.
- Mit *Kundenseiten nur durch die Projektleitung veröffentlichen* (Projekt › Details) senden alle anderen **zur Freigabe**; die Projektleitung gibt frei oder zurück (Heute › Meine Aufgaben).
- **Vorschau** zeigt den veröffentlichten oder den aktuellen Stand.

## Zugang für den Kunden {#zugang}

Wie beim Stundenkontingent: ein **geheimer Link** (\`…/#portal=…\`) oder **Kontakte**, die sich unter \`…/#portal\` mit einem Code per E-Mail anmelden. Ein angemeldeter Kontakt wählt zwischen allen Seiten, die er sehen darf (Kontingente und Projekte). Die App sendet nichts von selbst: Sie kopieren die Adresse oder öffnen sie im eigenen E-Mail-Programm. Zugänge lassen sich befristen, sperren und löschen.

Der Zugang per E-Mail funktioniert mit **jeder Adresse** – auch für interne Beteiligte wie einen Lenkungsausschuss, die denselben Projektbericht sehen sollen. Je Zugang legen Sie fest, ob Nachrichten und Aufgabenvorschläge erlaubt sind und ob erreichte Meilensteine abgenommen werden dürfen.

## Nachrichten, Abnahmen und Vorschläge {#rueckmeldungen}

- **Nachrichten**: zum ganzen Projekt oder zu einem Meilenstein (in dessen Details). Mit **@Name** erwähnt der Kunde jemanden aus dem Team (Projektleitung, Projektmitglieder, Personen im Plan); die Projektleitung und jeder Erwähnte bekommen eine E-Mail.
- **Abnahme**: Ist ein Meilenstein erreicht, kann der Kunde ihn in den Details **abnehmen**. Die Statuszeile zeigt *Erreicht → Abgenommen → Verrechnet → Bezahlt*; Verrechnet und Bezahlt nur, wenn *Beträge zeigen* eingeschaltet ist.
- **Aufgabe vorschlagen**: unter einem Meilenstein oder zum ganzen Projekt. Im Reiter *Kundenseite* übernehmen Sie den Vorschlag mit einem Klick als Aufgabe in den Plan oder lehnen ihn ab; der Kunde sieht die Entscheidung.
- Unter **Rückmeldungen des Kunden** antworten Sie – zum ganzen Projekt oder zu einem Meilenstein. Antworten, Abnahmen und Nachrichten erscheinen sofort, ohne Veröffentlichen.

## Logo und Titelbild {#bilder}

Im Kopf stehen Ihr Logo (Standard-Belegdesign oder App-Design) und das **Logo des Kunden** (Kunde › Stammdaten › Bild / Logo). Ein breites **Titelbild** pro Projekt laden Sie im Reiter *Kundenseite* hoch.

## Agile Projekte {#agil}

Arbeitet das Projekt **agil** (Reiter „Plan“ › Methode), zeigt die Kundenseite statt Meilensteinen und Gantt:

- **Auf einen Blick**: aktueller Sprint mit Sprintziel und verbleibenden Tagen, Story Points erledigt gegenüber zugesagt,
  Velocity, erledigter Anteil aller Punkte, abgeschlossene Sprints und das nächste Release mit seiner Prognose.
- **Aktueller Sprint**: die Stories des laufenden Sprints in drei Spalten (offen, in Arbeit, erledigt; nur lesen) und
  der **Burndown** – offene Punkte je Arbeitstag gegen die Ideallinie.
- **Sprints** statt Meilensteine: jeder Sprint mit Ziel, Zeitraum, Punkten und Statuszeile erledigt → abgenommen →
  verrechnet → bezahlt. Einen abgeschlossenen Sprint kann der Kunde **abnehmen** (Sprint Review).
- **Roadmap** statt Zeitplan: Releases mit ihren Sprints auf der Zeitachse, Release-Termin und Prognose.
- **Backlog** (standardmäßig aus): die nächsten Stories in ihrer Reihenfolge, ohne Schätzung. Der Kunde kann neue
  Stories vorschlagen; übernommen landen sie am Ende des Backlogs.

Bereiche, die Sie gespeichert haben, als das Projekt noch klassisch war, werden übernommen: der Gantt wird zur Roadmap,
der aktuelle Sprint kommt nach „Auf einen Blick“. Auf einer Programmseite zeigt die Karte eines agilen Teilprojekts den
laufenden Sprint mit seinem Ziel statt des nächsten Meilensteins.

## Programmseite {#programm}

Ist das Projekt ein **Programm** (andere Projekte sind „Teil von Programm“), zeigt seine Kundenseite zusätzlich den
Bereich **Projekte**:

- je Teilprojekt eine Karte mit Ampel, Statustext, Fortschritt, erreichten Meilensteinen und nächstem Meilenstein,
- einen gemeinsamen Zeitplan aller Teilprojekte mit ihren Meilensteinen,
- Summen über das Programm: Anzahl Projekte und Ampeln, Meilensteine erreicht, Stunden gesamt, Zeitraum.

Jede Karte zeigt den **zuletzt veröffentlichten Stand des Teilprojekts** – veröffentlichen Sie also die Teilprojekte auf
ihrem eigenen Reiter „Kundenseite“. Ein Teilprojekt ohne veröffentlichten Stand erscheint nur mit seinem Namen. Ampel
und Statustext des Programms stellen Sie hier auf dem Programm ein. Ein Klick auf eine Karte öffnet den Bericht des
Teilprojekts (nur lesen), „Zurück“ führt zum Programm. Ein Zugang auf dem Programm genügt, z. B. für einen
Lenkungsausschuss; Rückmeldungen schreibt der Kunde auf der Programmseite.


## Ansprechpartner {#ansprechpartner}

Ohne Auswahl zeigt die Kundenseite die Projektleitung als Ansprechpartner. Unter **Ansprechpartner auf der
Kundenseite** wählen Sie stattdessen mehrere Personen aus Ihrem Team (bis zu sechs), ordnen sie per Ziehen am Griff ⠿ oder mit den Pfeilen und
geben jeder optional eine Rolle, z. B. „Projektleitung“ oder „Technik“. Der Kunde sieht Name, Rolle, E-Mail und
Telefon. Die Auswahl gilt nach dem Speichern sofort, ohne Veröffentlichen; inaktive Personen verschwinden von selbst.
`,Pe=`---
title: Automatisierung
group: settings
order: 50
contexts: settings.processes
summary: Wiederkehrende Arbeit automatisieren – Rechnungsläufe, Freigabeketten, Erinnerungen, Aufgaben und E-Mails. Lizenzmodul.
keywords: Automatisierung, Abläufe, Ablauf, Workflow, Prozess, Auslöser, Zeitplan, Ereignis, Schwelle, Bedingung, Schritt, Aktion, Freigabekette, Eskalation, Rechnungslauf automatisch, E-Mail-Vorlage, Protokoll, Testlauf, Betrieb, Test, Aktiv
audience: Admins (Modul Automatisierung)
---

Mit der **Automatisierung** erledigt Parto Diary wiederkehrende Arbeit selbst. Eine Automatisierung ist ein Satz aus vier Teilen:

| Teil | Frage | Beispiel |
|---|---|---|
| **Wenn** (Auslöser) | Wann startet sie? | am 1. Arbeitstag jedes Monats um 06:00 |
| **für** (Objekt) | Worauf bezieht sie sich? | Projekte |
| **nur wenn** (Bedingungen) | Für welche davon? | Rhythmus monatlich, verrechenbar, aktiv |
| **dann** (Schritte) | Was passiert? | Rechnungslauf (Entwürfe) → Benachrichtigen |

Die Automatisierung ist eine **Zusatzlizenz** zur Basis ([Lizenz](help:settings-licence)); Parto schaltet sie je Unternehmen frei. Einrichten dürfen Personen mit dem Recht *Automatisierungen und E-Mail-Vorlagen einrichten* (standardmäßig Admins). Ohne Modul bleibt alles wie bisher.

> **Stand:** Automatisierungen lassen sich vollständig anlegen, prüfen und testen. Die automatische Ausführung in der Cloud folgt in der nächsten Ausbaustufe; bis dahin bleibt das Protokoll leer.

## Betrieb: Aus · Test · Aktiv {#betrieb}

| Stellung | Bedeutung |
|---|---|
| Aus | ruht; nur so lässt sich eine unvollständige Automatisierung speichern |
| Test | läuft zur Probe, im Protokoll mit „Test“ markiert, ohne Wirkung auf Kunden – **jede neue Automatisierung startet so** |
| Aktiv | läuft wirklich |

Empfehlung: einige Tage oder einen Monatswechsel im Test laufen lassen, das Protokoll prüfen, dann *Aktiv*.

## Neue Automatisierung {#neu}

**Neue Automatisierung** öffnet eine Galerie mit Vorlagen – alle erzeugen nur Entwürfe bzw. interne Hinweise:

- **Monatlicher Rechnungslauf** – am 1. Arbeitstag die Stunden des Vormonats aller monatlichen Projekte als Entwürfe.
- **Freigabe ab 80 % Budget** – danach braucht jeder neue Zeiteintrag die Freigabe der Projektleitung; nach 2 Arbeitstagen Erinnerung und Eskalation.
- **Angebot läuft ab** – 7 Tage vorher eine Aufgabe zum Nachfassen.
- **Woche nicht eingereicht** – montags 9:00 Erinnerung an alle mit nicht eingereichten Stunden.
- **Überfällige Rechnung** – 14 Tage nach Fälligkeit eine Aufgabe für die Buchhaltung.
- **Leer beginnen**.

![Vorlagen-Galerie](e-ablauf-galerie.webp)

## Der Editor {#editor}

Oben steht die Automatisierung als lesbarer Satz; ein Klick auf einen Satzteil ändert ihn. Darunter die **Schritte** als Zeitleiste, rechts der **Testlauf**: auf welche Objekte die Automatisierung heute zutrifft und – bei Zeitplänen – die nächsten drei Termine. Eine Automatisierung bezieht sich auf eine Objektart: Projekte, Zeiteinträge, Rechnungen, Angebote, Reisekostenpositionen oder Kunden.

![Editor](e-ablauf-editor.webp)

## Auslöser {#ausloeser}

- **Zeitplan:** täglich, wöchentlich, monatlich oder quartalsweise (Kalendertag oder n-ter Arbeitstag), Uhrzeit (Wiener Zeit).
- **Ereignis:** wenn sich ein Objekt ändert – z. B. Rechnung ausgestellt, Angebot versendet, Zeiteintrag eingereicht.
- **Schwelle erreicht:** einmal, sobald eine Bedingung zutrifft (z. B. Budgetverbrauch ≥ 80 %).
- **Per Klick:** über *Automatisierung starten* am Objekt.

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

Empfänger: Person, Team, Rolle, Projektleitung, buchende Person, Freigebende der Aufgabe, Verantwortliche der Automatisierung – bei E-Mails auch der Kunde oder eine Adresse.

**Optionen je Schritt:** *gleichzeitig mit dem Schritt davor* (parallel), *nur unter einer Bedingung*, *eskalieren, wenn nichts passiert* (erinnern, weitergeben) und *bei Fehler* (anhalten und informieren, anhalten, überspringen). Mehrere Freigaben untereinander laufen nacheinander.

## E-Mail-Vorlagen der Automatisierung {#vorlagen}

Reiter *E-Mail-Vorlagen*: eigene Vorlagen, die mehrere Automatisierungen nutzen – Betreff und Text deutsch und englisch, Platzhalter aus dem Objekt (\`{project_name}\`, \`{customer}\`, \`{budget_used}\` …), Signatur, **immer CC/BCC an diese Adressen** und Vorschau. Verwendete Vorlagen werden beim Löschen archiviert.

> **E-Mails an Kunden** gehen automatisch nur, wenn ein Admin das ausdrücklich so einrichtet. Die Vorlagen schlagen immer Entwürfe vor; eine BCC an eine Unternehmensadresse wird empfohlen.

## Protokoll und Versionen {#protokoll}

Das **Protokoll** zeigt jede Ausführung mit Zeit, Objekt, Schritt und Status (geplant, läuft, wartet, erledigt, fehlgeschlagen, übersprungen, abgebrochen). Ändern Sie Auslöser, Bedingungen oder Schritte, bekommt die Automatisierung eine neue **Version**; laufende Ausführungen bleiben bei ihrer.

## Häufige Fragen {#fragen}

- *Ich sehe „Automatisierung“ nicht.* – Das Modul ist nicht freigeschaltet oder Ihnen fehlt das Recht.
- *Kann eine Automatisierung Rechnungen doppelt erstellen?* – Nein, der Rechnungslauf verrechnet nur noch nicht verrechnete Stunden.
- *Was ohne Modul?* – Freigaben, Rechnungsläufe von Hand, Mahnwesen und E-Mail-Vorlagen bleiben wie bisher.
`,je=`---
title: Mein Profil und Benutzermenü
group: start
order: 3
contexts: profile
summary: Name, Ansprechname, Bild, Sprache, Benachrichtigungen, Projekte und das eigene Konto.
keywords: Benutzermenü, Profil, Ansprechname, Benachrichtigungen, Sprache, Konto löschen, Zwei-Faktor, Passwort, Unternehmen wechseln
---

## Das Benutzermenü {#benutzermenue}

Oben rechts, mit Ihrem Namen. Dort finden Sie:

- **Unternehmen:** in welchem Unternehmen Sie arbeiten und mit welcher Rolle. Gehört Ihr Konto zu mehreren Unternehmen, wechseln Sie hier – in der Web-Version, der Desktop-App und am Handy. Eine Einladung eines weiteren Unternehmens nehmen Sie hier ebenfalls an.
- **Sprache:** Deutsch oder English – gilt für Sie auf allen Geräten.
- **Hilfe** (F1): öffnet die Hilfe beim Artikel zur aktuellen Seite, mit allen Themen und der Suche.
- **Mein Profil**, **Konto & Cloud** und **Abmelden**.

![Benutzermenü](u-benutzermenu.webp)

## Mein Profil {#profil}

- **Unternehmen** – in welchem Unternehmen Sie gerade arbeiten, mit welcher Rolle, zu welchen weiteren Unternehmen Ihr Konto gehört und offene Einladungen – jeweils mit **Wechseln zu …** bzw. **Annehmen und wechseln**.
- **Vorname, Nachname** und **Ansprechname** – so spricht die App Sie an („Willkommen, …“) und so stehen Sie in Einladungs-E-Mails. Leer = Vorname.
- **E-Mail, Telefon, Position** – erscheinen in der Unternehmenssignatur Ihrer E-Mails ([E-Mail-Signaturen](help:settings-signatures)). Die Anmelde-E-Mail Ihres Cloud-Kontos ändern Sie unter *Anmeldung*; Sie bekommen dafür einen Bestätigungslink an die neue Adresse.
- **Profilbild** – erscheint im Team und im Benutzermenü.
- **Bevorzugte Sprache** – gilt auf allen Geräten.
- **Rollen, Teams, Vorgesetzte(r)** – nur zur Ansicht; ändern kann das, wer das Team verwaltet ([Team](help:team)).
- **Meine Projekte und Kunden** – auf welche Projekte und Aufgaben Sie buchen dürfen.

## Benachrichtigungen {#benachrichtigungen}

Reiter *Benachrichtigungen*: je Art einzeln, ob Sie sie **in der App**, **am Handy** oder **per E-Mail** bekommen – z. B. eingereichte Stunden zur Freigabe, Entscheidung über Ihre Stunden, Nennung bei einem Eintrag, Budget überschritten, überfällige Rechnungen, fällige Mahnungen, Datenprüfung, Nachrichten von Kunden zum Stundenkontingent, fällige Aufgaben aus dem [Projektplan](help:plan#erinnerungen) (E-Mail ab 7 Uhr) und eine **Kopie Ihrer gesendeten E-Mails** (Blindkopie jeder Mail, die Sie aus der App senden).

![Benachrichtigungen](u-benachrichtigungen.webp)

> Kunden bekommen nie automatisch etwas – außer durch eine [Automatisierung](help:processes), die ein Admin ausdrücklich so eingerichtet hat.

## Sicherheit und Konto {#konto}

- **Passwort ändern, Zwei-Faktor-Anmeldung:** Benutzermenü › *Konto & Cloud* – siehe [Cloud](help:settings-cloud).
- **Konto löschen:** nur im eigenen Profil. In einem Unternehmen mit weiteren Personen verlassen Sie das Unternehmen, Ihre gebuchten Stunden bleiben dort. Wer der letzte Admin ist, macht zuerst eine andere Person zum Admin.

## Mehrere Unternehmen {#unternehmen}

Ein Konto (eine Anmelde-E-Mail) kann zu mehreren Unternehmen gehören – jedes mit eigenen Rollen und Daten. Beim Wechsel lädt die App noch nicht hochgeladene Änderungen hoch und öffnet das andere Unternehmen. In der Desktop-App und am Handy hat jedes Unternehmen eine eigene Datei auf dem Gerät (auch eigene Sicherungen): Daten werden nie vermischt, und was noch nicht hochgeladen war, bleibt beim Unternehmen und geht hoch, sobald Sie es wieder öffnen. Im Browser wird die Kopie des bisherigen Unternehmens entfernt.
`,Be=`---
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
| Stunden & Budget | Stunden je Rolle und Status (offen, verrechnet, bezahlt), Budgetverbrauch; Stunden anderer, die noch nicht eingereicht sind, nur als Summe |
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
`,Re=`---
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

## Speichern und veröffentlichen {#veroeffentlichen}

Der Kunde sieht nie den laufenden Stand, sondern den zuletzt **veröffentlichten**. Gebuchte Stunden und Änderungen am Kontingent werden gespeichert, bleiben aber intern, bis jemand veröffentlicht.

- Vor der ersten Veröffentlichung zeigt die Kundenseite **keine Zahlen** – nur Kontakt und Nachrichten.
- **Veröffentlichen** friert den heutigen Stand ein (Monate, Stunden, Aufgaben, Personen, Einträge). Unter *Unveröffentlichte Änderungen* steht, welche Monate sich seitdem geändert haben.
- **Speichern und veröffentlichen** im Kontingent-Dialog macht beides in einem Schritt.
- Ist im Projekt *Kundenseiten nur durch die Projektleitung veröffentlichen* eingeschaltet (Projekt › Details), veröffentlicht nur die Projektleitung (oder ein Admin). Alle anderen **senden zur Freigabe**; die Projektleitung sieht die Anfrage unter Heute › Meine Aufgaben und im Kontingent, **gibt frei** oder **gibt zurück** mit einer Notiz.
- **Verlauf** zeigt alle veröffentlichten Stände und Anfragen.
- Die Vorschau zeigt wahlweise den veröffentlichten oder den aktuellen Stand.

## Nachrichten und Bestätigungen {#nachrichten}

Bestätigt der Kunde einen Monat, steht das mit seinem Namen in der Übersicht. Schreibt er eine Nachricht, meldet die App das unter „Heute“ und per E-Mail an die Projektleitung; Sie antworten unter *Nachrichten mit dem Kunden* (auf Wunsch zusätzlich per E-Mail).
`,Ee=`---
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
`,De=`---
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

## Bestellungen {#bestellungen}

Sind *Bestellungen* eingeschaltet (Allgemein), macht der Lauf je Bestellung eine eigene Rechnung: Die Bestellnummer steht als externe Nummer darauf, jede Zeile ist ihrer Bestellposition zugeordnet. Warnungen zeigen Stunden ohne Bestellposition und Bestellungen, deren Restbetrag überschritten würde. Mehrere Bestellungen auf einer Rechnung: Häkchen unter *Einstellungen › Unternehmen* oder beim Kunden. Mehr unter [Bestellungen](help:orders#stunden).

## Nur gewählte Stunden {#auswahl}

In [Zeiten](help:time#rechnung) Einträge auswählen › *Rechnung erstellen …* – die Abrechnung zeigt dann nur diese Stunden (ohne Reisekosten).

## Meilensteine {#meilensteine}

Projekte, die nach Meilensteinen abgerechnet werden, stehen unter *Erledigte Meilensteine*; ihre Stunden kommen nicht in den Lauf. Siehe [Meilensteine](help:large#meilensteine).

## Stundennachweis {#stundennachweis}

Ist beim Kunden *Stundennachweis mitschicken* gesetzt, entsteht zu jeder Rechnung ein Stundennachweis als PDF. Einen Nachweis für beliebige Stunden erstellen Sie unter Projekt, Kunde oder Rechnung › *Mehr › Stundennachweis …*.

> **Doppelt verrechnen ist ausgeschlossen:** Sind Stunden inzwischen auf einem anderen Gerät verrechnet worden, erstellt die App nichts und gleicht zuerst ab.
`,Me=`---
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
`,Te=`---
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
`,xe=`---
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

Zusätzlich zum Passwort ein Code aus einer Authenticator-App (z. B. Microsoft oder Google Authenticator). **Einrichten**, den QR-Code scannen, den angezeigten Code eingeben. Für Admin- und Finanzrechte (Einstellungen, Benutzer, Rechnungen, Kosten) ist sie ab einem Stichtag **Pflicht**: vorher erinnert ein Hinweis oben in der App, danach fehlen diese Rechte, solange Sie nur mit dem Passwort angemeldet sind – alles andere bleibt. Admins können sie zusätzlich für alle Admins und Manager **verpflichtend** machen.

## Dieses Gerät {#geraet}

- **Zuletzt abgeglichen**, **Noch hochzuladen** und **Jetzt abgleichen**.
- **Abmelden:** Dieses Gerät gleicht danach nicht mehr ab, bis Sie sich wieder anmelden. In der Web-Version wird die Kopie im Browser beim Abmelden gelöscht; nach 60 Minuten ohne Eingabe meldet sie Sie ab.

## Ein Unternehmen in die Cloud bringen {#hochladen}

Für das erste Gerät eines Unternehmens: *Diesen Arbeitsbereich in die Cloud hochladen*. Weitere Geräte holen die Daten mit *Auf dieses Gerät holen* (nur in einen leeren Arbeitsbereich). Danach laden Sie Ihr [Team](help:team) ein. Gehört Ihr Konto zu mehreren Unternehmen, wechseln Sie hier, im Benutzermenü oder im [Profil](help:profile#unternehmen) – jedes Unternehmen bekommt auf dem Gerät eine eigene Datei.

## Konto löschen {#loeschen}

Im eigenen [Profil](help:profile#konto). Ein Unternehmen mit Rechnungen wird nicht gelöscht, sondern geschlossen: Buchhaltungsunterlagen müssen aufbewahrt werden (Österreich 7 Jahre, Deutschland und Schweiz 10 Jahre). Vorher den vollständigen Export und das PDF-Archiv herunterladen.
`,Ke=`---
title: Unternehmen
group: settings
order: 2
contexts: settings.company
summary: Unternehmensdaten für Rechnungen und Angebote, Bank, Währung, Geschäftsjahr, Abrechnungstakt und Schalter fürs ganze Unternehmen.
keywords: Unternehmensdaten, Name, Adresse, UID, Firmenbuch, IBAN, BIC, Bank, Unterzeichner, Währung, Geschäftsjahr, Abrechnungstakt, Kleinunternehmer, QR-Rechnung, QR-IBAN, Zahlteil, Schweiz, Zahlen mit Code, GiroCode, EPC, Bezeichnung für Projekte, Auftrag, Tätigkeit Pflicht, Kopieren erlauben, FinanzOnline, UID-Abfrage, Webservice-Benutzer, VIES
audience: Admins
---

![Unternehmen](a-set-unternehmen.webp)

## Unternehmensdaten {#daten}

**Unternehmensname**, Anschrift, Land, E-Mail, **UID-Nummer**, **Firmenbuchnummer** und -gericht, **Bank, IBAN, BIC**, **Unterzeichner** und **Ort** (für „Ort, Datum“). Sie erscheinen auf Rechnungen und Angeboten, standardmäßig in der Fußzeile. Die IBAN wird beim Eingeben geprüft, ebenso das Format der UID-Nummer (nur ein Hinweis, gespeichert wird wie eingegeben). In der Fußzeile heißt die Nummer je nach Land des Unternehmens *UID* (Österreich), *USt-IdNr.* (Deutschland) oder *MWST-Nr.* (Schweiz); eine Schweizer Nummer wird in der amtlichen Form \`CHE-123.456.788 MWST\` gedruckt. Mit **Im Register prüfen** lässt sich die eigene Nummer im amtlichen Register kontrollieren (Schweiz, EU, Norwegen).

**FinanzOnline – UID-Abfrage Stufe 2** (nur österreichische Unternehmen in der Cloud): In FinanzOnline unter *Admin › Benutzer verwalten* einen **Webservice-Benutzer** anlegen (mit dem Recht für UID-Abfragen) und hier Teilnehmer-ID, Benutzer-ID und PIN eintragen. Die Daten werden verschlüsselt in der Cloud gespeichert und nie wieder angezeigt; *Entfernen* löscht sie. Danach prüft *Im Register prüfen* beim Kunden ausländische EU-UID-Nummern zusätzlich in FinanzOnline.

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
`,Fe=`---
title: Kalkulation
group: settings
order: 7
contexts: settings.costs
summary: Gemeinkosten je Wirtschaftsjahr, der Gemeinkostensatz daraus, Kostenstufen, Mindestmarge und die Kosten je Person.
keywords: Kalkulation, Kosten, Gemeinkosten, Gemeinkostensatz, Gemeinkostenzuschlag, Vollkosten, Personensatz, Stundensatz, KER, Kostenrechnung, Wirtschaftsjahr, Kostenstufe, Marge, Deckungsbeitrag, Gehalt, Verwaltungsanteil
audience: Finanzen, Admins
---

Unter **Einstellungen › Kalkulation** legen Sie fest, was eine Stunde Ihr Unternehmen wirklich kostet. Die Seite gehört zur Zusatzlizenz **Kosten & Kalkulation** und ist nur mit dem Recht *Kosten ansehen* sichtbar (Standard: Finanzen und Admin); ändern dürfen Personen mit *Kosten bearbeiten*.

Eine Stunde kostet **Personensatz + Gemeinkosten**:

- Der **Personensatz** kommt aus den Kosten der Person (siehe [Kosten einer Person](#person)).
- Die **Gemeinkosten** kommen aus dem Gemeinkostensatz des Wirtschaftsjahres.

## Gemeinkostensatz {#satz}

Gemeinkostensatz = (Gemeinkosten des Jahres + Personal ohne Eintrag + Verwaltungsanteile der Personen) ÷ freigegebene Stunden auf Kundenprojekten in diesem Jahr.

Stunden auf internen Projekten zählen nicht als produktiv; ihre Kosten tragen die produktiven Stunden mit. Oben auf der Seite steht der Satz, der heute gilt, und aus welchem Jahr er kommt:

- Gibt es für das laufende Jahr vorläufige oder abgeschlossene Zahlen, gelten diese.
- Sonst gilt das **letzte abgeschlossene Jahr**.
- Gibt es noch kein abgeschlossenes Jahr, gilt eine **Schätzung**.

Unter **Kalkulationsregeln** wählen Sie, ob die Gemeinkosten **je produktiver Stunde** gleich verteilt werden oder **in % auf die direkten Personalkosten**.

## Wirtschaftsjahre {#jahre}

Mit **+ Jahr erfassen** tragen Sie die Gemeinkosten eines Wirtschaftsjahres ein: Miete, Fahrzeuge, Software, Versicherungen, Beratung – alles außer den Personalkosten der Personen, für die Kosten erfasst sind. Personalkosten ohne eigenen Eintrag (z. B. Aushilfen) kommen in **Personal ohne Eintrag**; sie zählen zu den Gemeinkosten.

Der **Stand** eines Jahres ist *Schätzung*, *vorläufig* (laufendes Jahr) oder *abgeschlossen* (endgültige Zahlen). Das Wirtschaftsjahr beginnt mit dem Monat aus [Einstellungen › Unternehmen](help:settings-company). Statt die Summen einzutippen, importieren Sie die Kostenrechnung (KER).

## KER importieren {#ker}

**KER importieren …** liest eine KER oder Saldenliste als Excel oder CSV. Empfohlen ist BMD *KERF Auswertung 504* mit Gliederungsschema 225: Sie enthält das laufende Jahr und das Vorjahr. Andere Systeme wie DATEV gehen auch, solange die Datei Kontonummern und je Zeitraum eine Betragsspalte hat. Gelesen werden nur Erfolgskonten (Klassen 4–8).

- **Quellsystem:** Je Quellsystem (z. B. *BMD*) merkt sich Parto, zu welcher **Kostengruppe** jedes Konto zählt: Erlöse, Material/Fremdleistung, Personal, Geschäftsführung, Gemeinkosten oder nicht relevant. Beim ersten Import schlägt Parto die Gruppen nach der Gliederung vor; spätere Importe übernehmen Ihre Zuordnung. Unter **KER-Konten** ändern Sie sie jederzeit, die importierten Jahre werden dann neu gerechnet.
- **Wirtschaftsjahre:** Jeder Zeitraum, der ein ganzes Wirtschaftsjahr ist, kann übernommen werden: das Vorjahr als *abgeschlossen*, das laufende Jahr als *vorläufig*. Ein Import ersetzt den bisherigen Stand des Jahres.
- **Personal:** Personalkosten laut KER zählen nur so weit zu den Gemeinkosten, wie sie nicht durch erfasste Personenkosten abgedeckt sind (z. B. Aushilfen). Das Geschäftsführergehalt ist ein Personalaufwand, auch wenn es in der KER unter den sonstigen Aufwendungen steht.
- **Kontrolle:** Im Jahr sehen Sie die Erlöse laut KER neben den Rechnungen in Parto und das Personal laut KER neben den Kosten der erfassten Personen. Abweichungen sperren nichts.

## Kostenstufen {#stufen}

Kostenstufen wie *Junior*, *Senior* oder *Partner* geben Planzeilen ohne bestimmte Person einen Personensatz. Daneben steht der Durchschnitt der Personen dieser Stufe; **Durchschnitt übernehmen** setzt ihn ein.

## Mindestmarge {#marge}

Liegt die Marge (DB II) eines Angebots oder Projekts unter der Mindestmarge, wird sie rot angezeigt. Gesperrt wird nichts.

## Kosten einer Person {#person}

In **Team › Person › Kosten** erfassen Sie je Stichtag:

- Bruttogehalt, Anzahl der Gehälter, Lohnnebenkosten und weitere Kosten;
- den **Verwaltungsanteil** (Geschäftsführung, Office: dieser Teil der Kosten zählt zu den Gemeinkosten);
- die **interne Zeit** (Vertrieb, Weiterbildung: nicht produktiv, die Kosten bleiben bei der Person);
- Wochenstunden, Urlaubs-, Feier- und Krankenstandstage.

Daraus ergibt sich der Personensatz je produktiver Stunde. Eine Gehaltsänderung erfassen Sie als **Neuer Stand** mit dem Datum, ab dem sie gilt; frühere Stände bleiben für die Nachkalkulation erhalten.

Die Gehaltsangaben bleiben in der Cloud und kommen auf kein Gerät; nur Personen mit *Kosten bearbeiten* sehen sie. Alle anderen mit *Kosten ansehen* sehen nur den Personensatz.
`,Ie=`---
title: Sicherungen, Datensicherheit, Datenübernahme
group: settings
order: 33
contexts: settings.backups#sicherungen, settings.data#datenpruefung, settings.migration#uebernahme
summary: Tägliche Sicherungen, vollständiger Export und Import, Datenprüfung, unveränderbares Archiv und Datenübernahme.
keywords: Sicherung, Backup, wiederherstellen, Export, Import, Excel, Datenprüfung, Prüfung, Archiv, unveränderbar, Datenübernahme, Access, Migration, Änderungsprotokoll, Zugriff, Support, Zustimmung
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
- **Zugriffe von Parto auf Ihre Daten:** Parto sieht Daten Ihres Unternehmens nur für einen Support-Fall und mit Ihrer schriftlichen Zustimmung an. Jeder Zugriff steht vorher hier – mit Support-Fall, Grund, Umfang, Zustimmung, wer und wann. Sichtbar für Admins.

## Datenübernahme {#uebernahme}

Übernimmt Daten aus dem bisherigen System und vergleicht danach Zeilen, Stunden, Beträge und Nummern mit der Quelldatei (*Abgleich prüfen*). Nur für Admins und nur, bis ein Import behalten wurde. Vergangene Jahre (Stunden und Rechnungen) lassen sich auch über die Listen-Importe übernehmen – sie gelten dann als verrechnet und bezahlt.
`,Ce=`---
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
`,_e=`---
title: E-Rechnung
group: settings
order: 4
contexts: settings.einvoice
summary: E-Rechnung mit jeder Rechnung (ZUGFeRD oder XRechnung) und welche Angaben vorher geprüft werden – je Format, abschaltbar, mit eigenen Prüfungen.
keywords: cXML, Coupa, Ariba, Jaggaer, Recommand, Peppol-ID, E-Rechnung, E-Rechnungspflicht, Deutschland 2027, PDF/A-3, XML, XRechnung, ZUGFeRD, Factur-X, Peppol, ebInterface, e-Rechnung.gv.at, EN 16931, Leitweg-ID, Käuferreferenz, Lieferantennummer, Prüfung, Pflichtfeld
audience: Admins
---

## E-Rechnung mit jeder Rechnung {#format}

- **ZUGFeRD (PDF mit eingebetteten Daten):** das Rechnungs-PDF enthält die Rechnungsdaten nach EN 16931 als XML (PDF/A-3, Profil EN 16931). Menschen lesen das PDF, Buchhaltungsprogramme die Daten. Erfüllt die deutsche E-Rechnungspflicht im B2B (Versand ab 2027 bzw. 2028).
- **XRechnung (XML-Datei zusätzlich):** zum PDF kommt eine XRechnung-XML-Datei (Version 3.0) mit gleichem Namen – für deutsche Behörden, mit Leitweg-ID beim Kunden.
- **ebInterface (XML-Datei zusätzlich):** zum PDF kommt eine ebInterface-6.1-XML-Datei – das österreichische Format, für Kunden, die es per E-Mail wollen.
- **keine:** nur das PDF.

Beim Kunden lässt sich das Format abweichend wählen. Die E-Rechnung geht beim Senden, Herunterladen und Speichern des PDFs mit, sobald keine Angabe fehlt; fehlt etwas, geht die Rechnung als normales PDF hinaus und das Senden-Fenster sagt es.

## Prüfungen {#pruefungen}

Die Liste zeigt jede eingebaute Prüfung mit den Formaten, für die sie gilt (EN 16931 / ZUGFeRD, XRechnung, Peppol BIS, ebInterface), und ob der Standard oder das Format sie verlangt. Jede Prüfung lässt sich abschalten. Eine abgeschaltete Prüfung wird nur hier nicht mehr angezeigt – die Empfangsplattform lehnt fehlende Pflichtangaben trotzdem ab.

## Eigene Prüfungen {#eigene}

Eigene Prüfungen verlangen, dass ein Feld der Rechnung, des Kunden oder des Unternehmens ausgefüllt ist oder einem Muster entspricht – für alle Formate oder nur für gewählte.

## Je Kunde {#kunde}

Beim Kunden können Prüfungen abgeschaltet, wieder eingeschaltet oder ergänzt werden. Dort stehen auch Käuferreferenz / Leitweg-ID, Lieferantennummer, Peppol-ID und USt-Kategorie.

## In der Rechnung {#rechnung}

Der Abschnitt *E-Rechnung* in der Rechnung zeigt, was fehlt und wo es zu ergänzen ist. Das Format wird aus dem Kunden vorgeschlagen (Deutschland oder Leitweg-ID → XRechnung, Belgien oder Peppol-ID → Peppol, sonst EN 16931). Ist alles da, lässt sich das ZUGFeRD-PDF (EN 16931) oder die XRechnung dort auch einzeln herunterladen.

## cXML-Rechnungen {#cxml}

Kunden, deren Einkaufssystem Rechnungen als **cXML** annimmt (z. B. Coupa, SAP Ariba, Jaggaer), können Rechnungen direkt aus der App bekommen, ohne E-Mail.

cXML-Rechnungen gehören zum Modul *Integrationen*: Sie sehen diesen Abschnitt nur, wenn Parto das Modul für Ihr Unternehmen freigeschaltet hat.

1. Im Lieferantenportal des Kunden cXML-Rechnungen einschalten und die Felder ausfüllen: Lieferantendomäne und -identität (Ihre, z. B. *NetworkID* / *Parto*), Käuferdomäne und -identität (vom Kunden) und einen **gemeinsamen Schlüssel**, den Sie selbst wählen (lang und zufällig).
2. Hier unter **cXML-Rechnungen** dieselbe Lieferantendomäne und -identität eintragen (gilt für alle Kunden).
3. Beim Kunden unter **cXML-Rechnungen** die URL (aus dem Lieferantenportal des Kunden, z. B. \`https://…/cxml/invoices\`), Käuferdomäne und -identität eintragen, **Rechnungspositionen** wählen (*als Betrag* für Dienstleistungen – üblich – oder *mit Menge und Einheit*, wie die Bestellpositionen des Kunden angelegt sind) und speichern. Dann den gemeinsamen Schlüssel eingeben und **Schlüssel in der Cloud speichern** – er wird verschlüsselt in der Cloud abgelegt, nie in der App gespeichert und nie wieder angezeigt.

Einen Schalter gibt es dafür nicht: Sobald beim Kunden eine URL eingetragen ist, erscheint im Versenden-Dialog der Rechnung **Als cXML-Rechnung senden**. Die Rechnung geht mit dem PDF als Anhang hinaus; die Antwort des Empfängers (angenommen oder der Grund der Ablehnung) wird angezeigt. Angenommene Rechnungen werden als versendet markiert und beim Kunden als Aktivität vermerkt. Gesendet wird nur auf diesen Klick. Wurde die Rechnung schon einmal angenommen, fragt die App vor dem erneuten Senden nach (mit Datum der Annahme). Bricht die Verbindung ab (z. B. am Handy), holt die App die Antwort nachträglich.

Mit **Bestellnummer des Kunden** auf der Rechnung (aus „Bestell- / Projektnummer des Kunden“ beim Projekt oder der Bestellnummer beim Annehmen des Angebots) bezieht sich die Rechnung auf diese Bestellung, die Positionen der Reihe nach auf die Bestellpositionen 1, 2, … – im Versenden-Dialog unter **Bestellpositionen** lässt sich das je Position ändern (z. B. **Alle auf Position 1**, wenn die Bestellung nur eine Position hat; Positionen ohne passende Bestellposition werden abgelehnt); ohne Bestellnummer geht sie als Rechnung ohne Bestellung – manche Systeme (z. B. Coupa) verlangen dann im Versenden-Dialog den **Anforderer beim Kunden** (E-Mail der Person, die bestellt hat), andere nehmen nur Rechnungen mit Bestellung an. Lehnt der Empfänger ab, erklärt die App den Grund; die Originalantwort steht darunter. Gutschriften gehen als Gutschrift mit negativen Beträgen. Für Positionen mit Menge können unter **Einheiten-Codes des Kunden** abweichende Codes angegeben werden (z. B. \`HUR=HR\`).

Die Testumgebung sendet nur an Test-, Demo- und Sandbox-Systeme, nie an das echte System eines Kunden.

## Bestellungen empfangen {#bestellungen}

Mit den Modulen *Integrationen* und *Bestellungen* können die Einkaufssysteme Ihrer Kunden Bestellungen als cXML direkt an die App senden – neue Bestellungen, Änderungen und Stornos.

1. Unter **Bestellungen empfangen** **Adresse erzeugen** und **Speichern**. Diese Adresse und Ihre Lieferantenidentität (oben) tragen Sie im Lieferantenportal des Kunden als Ziel für Bestellungen ein.
2. Dort einen eigenen **gemeinsamen Schlüssel** für Bestellungen an Sie wählen (lang und zufällig, mindestens 8 Zeichen, besser 16 oder mehr) und denselben Schlüssel beim Kunden unter **cXML › Schlüssel für empfangene Bestellungen** speichern. Käuferdomäne und -identität des Kunden müssen eingetragen sein.
3. Optional **Angebote aus empfangenen Bestellungen automatisch annehmen**.

Die App nimmt eine Bestellung nur an, wenn Absender, Empfänger und Schlüssel stimmen; was sie wie verarbeitet hat, steht unter [Bestellungen](help:orders#empfangen). Mit **Neue Adresse** gilt die alte Adresse nach dem Speichern nicht mehr. Die Testumgebung nimmt nur Bestellungen von Test- und Demo-Kunden an und sendet keine E-Mails an Kunden.

## Peppol {#peppol}

Über **Peppol** gehen E-Rechnungen direkt an die Buchhaltung des Kunden – an österreichische und deutsche Behörden (e-Rechnung.gv.at, ZRE, OZG-RE) und an viele Unternehmen in der EU. Peppol gehört zum Modul *Integrationen* und erscheint, sobald Parto Peppol für Ihr Unternehmen bereitstellt; ohne das ist hier nichts davon zu sehen.

1. Unter **Peppol** das Unternehmen einmal **als Peppol-Absender registrieren** (Name, Adresse, Land und UID-Nummer aus Einstellungen › Unternehmen). Eine zeichnungsberechtigte Person bestätigt danach über den Link **Identität jetzt bestätigen** ihre Identität; erst dann kann gesendet werden.
2. Beim Kunden die **Peppol-ID des Kunden** eintragen (z. B. \`9930:DE123456788\` für eine deutsche UID-Nummer, \`0204:\` + Leitweg-ID für deutsche Behörden) und mit **Im Peppol-Netz prüfen** kontrollieren, ob sie Rechnungen empfängt.
3. Im Versenden-Dialog der Rechnung **Über Peppol senden**. Die Rechnung geht mit dem PDF als Anhang hinaus, wird als versendet markiert und beim Kunden als Aktivität vermerkt. Gesendet wird nur auf diesen Klick. Wurde die Rechnung schon einmal angenommen, fragt die App vor dem erneuten Senden nach (mit Datum der Annahme).

Gutschriften gehen als Gutschrift mit Hinweis auf die ursprüngliche Rechnung. Die Testumgebung sendet nie ins echte Peppol-Netz.

## e-Rechnung.gv.at (Bund) {#erb}

Rechnungen an den österreichischen Bund (Ministerien, Bundesdienststellen) müssen über **e-Rechnung.gv.at** eingebracht werden. Die App macht das direkt, als ebInterface 6.1 mit dem Rechnungs-PDF. Wie cXML und Peppol gehört es zum Modul *Integrationen*.

1. Im **Unternehmensserviceportal (USP)** einen **Webservice-Benutzer** anlegen und dort *e-Rechnung.gv.at Webservice* freischalten.
2. Hier unter **e-Rechnung.gv.at** Benutzer und Passwort eintragen und **In der Cloud speichern** – beides liegt nur verschlüsselt in der Cloud und wird nie wieder angezeigt.
3. Beim Kunden **Rechnungsversand** auf *e-Rechnung.gv.at (Bund)* stellen und **Unsere Lieferantennummer** (8-stellig, vom Bund vergeben) eintragen.
4. In jeder Rechnung die **Auftragsreferenz** des Bundes als Bestellnummer: eine 10-stellige Bestellnummer, eine Einkäufergruppe (z. B. \`Z01\`) oder Einkäufergruppe:Referenz (z. B. \`Z01:111599\`). Die Auftragsreferenz nennt die bestellende Dienststelle.

Im Senden-Fenster der Rechnung zeigt der Abschnitt **e-Rechnung.gv.at**, was noch fehlt. Bei einer 10-stelligen Bestellnummer braucht jede Position die Positionsnummer der Bestellung (aus der [Bestellung](help:orders), sonst dort eintragen). **Beim Portal prüfen** lässt das Portal die Rechnung nur prüfen, ohne sie einzubringen; **An e-Rechnung.gv.at senden** bringt sie ein, markiert sie als versendet und vermerkt beim Kunden eine Aktivität mit der Dokument-ID des Portals. Ob die Dienststelle die Rechnung annimmt, meldet das Portal danach per E-Mail. Die Testumgebung lässt Rechnungen nur prüfen, nie einbringen.

`,Ne=`---
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
`,Ue=`---
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
`,We=`---
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
| Bestellungen | Menü [Bestellungen](help:orders) |

Mit der Lizenz Projektmanagement legen Sie hier auch fest, wie viele **Arbeitstage vor dem Ende** eine Aufgabe unter „Meine Aufgaben“ erscheint (Standard 3) – siehe [Projektplan](help:plan#erinnerungen).

## Kundenkategorien {#kategorien}

Eine Kategorie pro Zeile – die Auswahl im Feld *Kategorie* beim Kunden.
`,Ze=`---
title: Schnittstellen
group: settings
order: 32
contexts: settings.interfaces, invoices.acctExport
summary: Export der Ausgangsrechnungen an die Buchhaltung (BMD, DATEV, CSV), Erlöskonten und Steuercodes, eigene Import- und Export-Profile.
keywords: Schnittstelle, BMD, NTCS, DATEV, Buchhaltung, Steuerberater, Steuerbüro, Export, Import, CSV, Erlöskonto, Steuercode, Buchungssymbol, Debitor, Personenkonto, Skonto, Mapping, Profil, Spalten
audience: Finanzen, Admins
---

Parto Diary ersetzt die Buchhaltung nicht. Unter **Einstellungen › Schnittstellen** legen Sie fest, wie Ihre Ausgangsrechnungen und Gutschriften als Datei an die Buchhaltung gehen – und welche Datei-Formate die App liest und schreibt.

## Export für die Buchhaltung {#export}

Unter **Rechnungen › Export für Buchhaltung** wählen Sie einen Zeitraum (vorgeschlagen: der Vormonat). Die App zeigt die Belege, je Rechnung und Erlöskonto eine Zeile, mit Netto, Steuer und Brutto. **Datei speichern** legt die Datei auf Ihrem Gerät ab – verschickt wird nichts.

- *Nur noch nicht exportierte Belege* lässt Rechnungen weg, die schon einmal exportiert wurden. Sind trotzdem Belege doppelt dabei, warnt der Dialog.
- Fehlt für eine Rechnung ein Erlöskonto, steht sie unter *Nicht im Export* – ergänzen Sie dann die Tabelle der Erlöskonten.
- Kunden ohne Debitorenkonto bekommen beim Export die nächste freie Nummer. Mit *Neue Debitoren als eigene Datei* speichert die App gleich die Personenkonten dazu.

Den Export sieht, wer die Berechtigung *Export für die Buchhaltung* hat (Standard: Finanzen und Admin).

## Buchhaltung einstellen {#buchhaltung}

- **Profil für Buchungen / Debitoren**: welches Datei-Format der Export schreibt, zum Beispiel *BMD NTCS – Buchungsimport*.
- **Buchungssymbol** für Rechnungen und Gutschriften (BMD zum Beispiel *AR*). Gutschriften gehen mit negativem Betrag hinaus.
- **Debitorenkonten**: jeder Kunde ein eigenes Konto (ab der angegebenen Nummer) oder ein Sammeldebitor. Das Konto eines Kunden lässt sich am Kunden ändern (*Debitorenkonto*).
- **Buchungstext** mit Platzhaltern wie \`{docNo} {customerName}\`.

## Erlöskonten und Steuercodes {#konten}

Jede Rechnungszeile bekommt ein Erlöskonto und einen Steuercode nach **Steuerfall** (Inland, EU Reverse Charge, Drittland …), **Positionsart** (Leistung oder weiterverrechnete Spesen) und **Steuersatz**. Die erste passende Zeile der Tabelle gilt; leere Positionsart oder leerer Steuersatz passen immer. Die Steuer rechnet die App je Steuersatz wie auf der Rechnung.

## Profile: Standard und eigene {#profile}

Ein **Profil** beschreibt eine Datei: Dateiart (Text/CSV oder Excel), Trennzeichen, Zeichensatz, Datumsformat, Dezimalzeichen und die **Spalten**. Jede Spalte nimmt ein Feld von Parto (zum Beispiel *Bruttobetrag*) oder einen festen Wert, optional über eine **Werteliste** (Parto-Wert → Wert in der Datei) und eine Umwandlung (Vorzeichen umkehren, S/H-Kennzeichen …).

**Standard-Profile** (BMD, DATEV, neutrale CSV) sind schreibgeschützt. Passt eines nicht genau zu Ihrer Buchhaltung, wählen Sie **Kopieren** und ändern die Kopie. Die Vorschau zeigt sofort, wie die Datei mit Beispieldaten aussieht.

Dieselben Profile beschreiben auch Importe, zum Beispiel die KER oder Saldenliste aus BMD für die Kalkulation oder Bestellungen als CSV.
`,Ve=`---
title: Lizenz
group: settings
order: 33
contexts: settings.licence
summary: Welche Lizenzen Ihr Unternehmen hat, was jede enthält und wie viele Benutzer sie erlaubt.
keywords: Lizenz, Modul, Benutzer, Benutzerzahl, Abo, Paket, Erweiterung, Grundlizenz, Zeit & Projekte, Angebote & Rechnungen, Integrationen, Automatisierung, Abläufe, Projektmanagement, Kosten & Kalkulation
audience: Admins
---

Unter **Einstellungen › Lizenz** sehen Sie, welche Lizenzen Ihr Unternehmen hat und wie viele Benutzer sie erlaubt. Jedes Unternehmen hat die **Basislizenz** *Zeit & Projekte*; alle anderen Lizenzen kommen als Zusatz dazu. Jede Lizenz enthält alles, was ihr Name verspricht.

## Basislizenz {#grundlizenzen}

**Zeit & Projekte (Basis)** – immer enthalten: Zeiten, Timer, Kalenderübernahme, Telefon-App, Reisekosten und Spesenberichte, Freigaben, Projekte mit Rollen, Sätzen, Budgets und Meilensteinen, Stundennachweis, Stundenkontingent mit Kundenseite, Auswertungen zu Stunden und Reisekosten. Dazu Kunden, Projekte, Kontakte, Team, Rollen, Cluster, Dokumente, Listenansichten, Hilfe, Datenprüfung und alle Apps.

## Zusatzlizenzen {#erweiterungen}

| Zusatzlizenz | Braucht außer der Basis | Enthält |
|---|---|---|
| Angebote & Rechnungen | – | Angebote, [Bestellungen](help:orders), Rechnungen, Gutschriften, Abrechnungslauf, Stunden und Reisekosten verrechnen, Artikelkatalog, Fremdwährungen, E-Rechnungen (ZUGFeRD, XRechnung, ebInterface), Zahlungs-QR, Zahlungseingänge, Bankimport, Mahnwesen |
| Integrationen | Angebote & Rechnungen | Rechnungen per cXML, Peppol, Upload an e-Rechnung.gv.at, Bestellungen per cXML empfangen |
| [Automatisierung](help:processes) | – | Automatisierungen und eigene E-Mail-Vorlagen |
| Projektmanagement | – | Aufgaben, Termine, Abhängigkeiten, Gantt (in Vorbereitung) |
| [Kosten & Kalkulation](help:settings-costs) | – | Kosten je Person, Gemeinkosten je Wirtschaftsjahr, Vollkosten und Marge; nur für Finanzen und Admin |

## Laufzeit {#laufzeit}

Oben steht, bis wann Ihre Lizenz bezahlt ist oder bis wann Ihr Testzeitraum läuft. Ab 14 Tagen vor dem Ende sehen Admins einen Hinweis, auch oben in der App. Ist die Lizenz abgelaufen, läuft alles während einer Nachfrist von 14 Tagen weiter; danach kann Parto das Unternehmen sperren. Die Daten bleiben dabei gespeichert.

## Benutzer {#benutzer}

Die Lizenz erlaubt eine bestimmte Zahl an Benutzern. Gezählt werden alle Mitglieder des Unternehmens und offene Einladungen. Ist die Zahl erreicht, lehnt **Team › Einladen** weitere Einladungen mit einem Hinweis ab.

Menüs, Rechte unter [Rollen & Rechte](help:settings-roles) und Daten gibt es nur für die Bereiche Ihrer Lizenzen. Lizenzen und Benutzerzahl ändert Parto – bitte wenden Sie sich an Parto.
`,Le=`---
title: E-Mails & Mahnwesen
group: settings
order: 11
contexts: settings.dunning
summary: E-Mail-Vorlagen für Rechnungen, Angebote und Kontakte, Standard-CC, Kundenvorlagen sowie Zahlungserinnerungen und Mahnungen.
keywords: E-Mail, Vorlage, Text, Betreff, Platzhalter, CC, Kopie, Mahnung, Zahlungserinnerung, Mahnwesen, Mahnspesen, Mailserver, Absender, überfällig, pausieren, Brief, Post, Mahnbrief, Handy
audience: Admins
---

![E-Mails & Mahnwesen](a-set-mail.webp)

## Wie E-Mails gesendet werden {#versand}

Mit eingerichtetem Mailserver sendet die App direkt: Absender ist Ihr Unternehmen, Antworten gehen an die Person, die gesendet hat, und diese bekommt eine Kopie. Den Mailserver richtet Parto für Ihr Unternehmen ein. Ohne ihn öffnet die App Ihr Mailprogramm (z. B. Outlook) mit Empfänger, Betreff, Text und Anhängen.

> Nichts geht automatisch an Kunden. Jede E-Mail sehen Sie vor dem Senden – außer ein Admin hat eine [Automatisierung](help:processes) ausdrücklich zum Senden eingerichtet.

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

**Als Brief:** Im Sendedialog erzeugt **Als Brief (PDF)** das Schreiben im Design der Rechnung (Anschrift, offener Betrag, Mahnspesen, Ihr Text) zum Ausdrucken für die Post; **Per Post gesendet** vermerkt es danach. Mit *Zusätzlich als PDF-Brief anhängen* geht der Brief auch mit der E-Mail mit.

**Erinnert werden:** Wer Rechnungen bearbeiten darf, bekommt fällige Mahnungen auf Wunsch jeden Morgen per E-Mail und in der Android-App als Mitteilung am Handy – einzustellen unter [Mein Profil › Benachrichtigungen](help:profile#benachrichtigungen). Gesendet wird an Kunden trotzdem nur auf Ihren Klick.

Mehr dazu im „i“ neben *Mahnwesen* bzw. in der Anleitung [Mahnwesen](help:howto-dunning).
`,Ge=`---
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
`,Oe=`---
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
`,He=`---
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
`,qe=`---
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
`,Xe=`---
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
`,Je=`---
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
`,Qe=`---
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
`,$e=`---
title: Parto-Admin
group: settings
order: 40
contexts: settings.vendor
summary: Nur für Parto – Unternehmensanfragen freigeben, neue Unternehmen anlegen, Lizenzen schalten und abrechnen.
keywords: Parto-Admin, Registrierung, Unternehmensanfrage, freigeben, Modul, Lizenz
audience: Parto
---

Diesen Bereich sieht nur das Parto-Konto.

- **Offene Unternehmensanfragen:** neue Registrierungen prüfen und **freigeben** (die Ansprechperson bekommt eine E-Mail mit Code) oder **ablehnen**.
- **Neues Unternehmen anlegen:** für ein selbst gewonnenes Unternehmen – Unternehmen, Ansprechperson, E-Mail, Sprache. Die Person bekommt dieselbe E-Mail mit Code.
- **Lizenz beim Freigeben:** Beim Freigeben und beim Anlegen wählen Sie die [Lizenzen](help:settings-licence) und die Zahl der Benutzer (Vorschlag: nur die Basis *Zeit & Projekte*, 1 Benutzer) und die **Testtage** (Vorschlag 30; leer = kein Test). Das neue Unternehmen bekommt sie, sobald die Ansprechperson es anlegt, und startet mit Testtagen im Status *Test*.
- **Lizenzen je Unternehmen:** die Basislizenz *Zeit & Projekte* (immer eingeschaltet) und die Zusatzlizenzen *Angebote & Rechnungen*, *Integrationen* (alle Rechnungs- und Bestell-Schnittstellen: [cXML](help:settings-einvoice#cxml), [Peppol](help:settings-einvoice#peppol), e-Rechnung.gv.at, Bestellungen empfangen), [Automatisierung](help:processes) und *Projektmanagement*, dazu die Zahl der Benutzer (leer = unbegrenzt). Integrationen lässt sich nur mit Angebote & Rechnungen einschalten. Peppol erscheint zusätzlich erst, wenn in der Cloud ein Peppol-Zugang hinterlegt ist. [Bestellungen](help:orders) sind keine eigene Lizenz mehr: Das Unternehmen schaltet sie unter *Allgemein* ein.
- **Unternehmen sperren:** Nutzt ein Unternehmen den Dienst nicht mehr, setzen Sie bei ihm das Häkchen *Gesperrt*. Die Daten bleiben in der Cloud gespeichert, aber niemand des Unternehmens kann sie mehr lesen oder ändern; die App zeigt nur noch einen Hinweis, Einladungen, Berichte, Bestellungen und die Kontingent-Seite für Kunden sind abgeschaltet. Häkchen entfernen hebt die Sperre auf, alles ist wieder wie vorher. Die Basislizenz bleibt dabei eingeschaltet.

## Lizenzen und Abrechnung {#abrechnung}

Die Tabelle **Lizenzen und Abrechnung** zeigt je Unternehmen Lizenzen, Benutzer, den Preis pro Monat, **bezahlt bis** mit den verbleibenden Tagen und den Status. Darüber stehen die Summen: Unternehmen, Lizenzumsatz pro Monat, fällige Verträge, offene Lizenzrechnungen, Nachfrist und überfällige.

| Status | Bedeutung |
| --- | --- |
| Aktiv | bezahlt, mehr als 14 Tage übrig |
| Läuft bald ab | endet in den nächsten 14 Tagen; der Admin des Unternehmens sieht einen Hinweis |
| Nachfrist | abgelaufen, bis zu 14 Tage; alles läuft weiter |
| Überfällig | Nachfrist vorbei – prüfen, ob Sie sperren |
| Test / Test abgelaufen | Testzeitraum läuft bzw. ist vorbei |
| Ohne Ablauf | kein Datum gesetzt (z. B. Parto selbst) |

**Vertrag …** öffnet je Unternehmen: Vertrag (Test, Aktiv, Gekündigt), Rhythmus (monatlich oder jährlich im Voraus), bezahlt bis, Test bis, Rabatt oder fester Preis pro Monat und den **Kunden in diesem Unternehmen**, an den die Lizenzrechnung geht. Mit **+14 Tage**, **+30 Tage** und **+1 Monat/Jahr** verlängern Sie jederzeit von Hand, auch im Test; ein Grund ist Pflicht. Der **Verlauf** zeigt jede Änderung an Lizenzen, Benutzern, Vertrag und Sperre mit Zeitpunkt, Person und Grund.

**Abrechnungsrunde:** Verträge, deren Zeitraum in den nächsten 30 Tagen endet, stehen darunter. **Rechnung erstellen …** öffnet das gewohnte Rechnungsformular mit einer Zeile je Lizenz, einer für die Benutzer und dem Rabatt. Versendet wird die Rechnung wie jede andere, per Klick. Ist sie bezahlt (Zahlungseingang oder Bankimport), rückt **bezahlt bis** beim nächsten Öffnen dieser Seite um den Zeitraum vor. Änderungen mitten im Zeitraum gelten sofort und werden ab dem nächsten Zeitraum verrechnet.

**Preisliste:** Preis je Lizenz und je Benutzer, netto pro Monat. Ein Vertrag mit festem Preis oder Rabatt weicht davon ab.

`,Ye=`---
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
| Team & Zugang | [Cloud](help:settings-cloud), [Rollen & Rechte](help:settings-roles), [App-Sperre](help:settings-security), [Lizenz](help:settings-licence) |
| Daten | [Sicherungen, Datensicherheit, Datenübernahme](help:settings-data) |
| Automatisierung | [Automatisierung](help:processes) (Lizenzmodul) |

## Erste Einrichtung {#einrichtung}

Für ein neues Unternehmen in dieser Reihenfolge:

1. [Unternehmen](help:settings-company): Name, Anschrift, UID, Bank, Währung, Geschäftsjahr.
2. [Nummernkreise](help:settings-numbers): Format und letzte Rechnungsnummer.
3. [Dokumentdesign](help:settings-design): Logo, Farbe, Texte – Vorschau prüfen.
4. [Standardsätze](help:settings-rates): die üblichen Stundensätze.
5. [Team](help:team): Personen einladen und Rollen geben.
`,en=`---
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
- **Oben rechts:** das Benutzermenü mit Ihrem Namen – Unternehmen, Sprache, [Mein Profil](help:profile), Hilfe, Support, Konto und Abmelden.
- **Unten links:** der Abgleich mit der Cloud („abgeglichen“, „offline“, Konflikte). Mehr unter [Cloud und Abgleich](help:sync).
- **Listen:** Klick auf eine Spaltenüberschrift sortiert, Filterfelder und gespeicherte Ansichten helfen beim Finden – siehe [Listen, Filter und Ansichten](help:lists).

## Hilfe finden {#hilfe}

- **Hilfe öffnen:** Benutzermenü oben rechts › *Hilfe* oder die Taste **F1**. Die Hilfe öffnet sich beim Artikel zur Seite, auf der Sie gerade sind – auch für einzelne Bereiche wie eine Einstellung oder ein geöffnetes Projekt. Links stehen alle Themen, der Punkt ● markiert den Artikel Ihrer aktuellen Seite; *Hilfe zu dieser Seite* oben bringt Sie dorthin zurück.
- **Suche:** einfach ins Suchfeld tippen. Die Suche findet Wörter auch mit Tippfehlern, ohne Umlaute (*Ablaeufe*), in Wortteilen (*Nummer* findet *Rechnungsnummer*) und kennt gängige andere Wörter (*Faktura*, *Offerte*, *Spesen*). Mit ↑ ↓ und Enter wählen Sie einen Treffer; **/** oder **Strg+K** springt ins Suchfeld, **Esc** schließt.
- **Support:** Benutzermenü › *Support kontaktieren* öffnet eine E-Mail an support@parto.at, in der Version, Unternehmen und Konto schon stehen. Beschreiben Sie kurz, was Sie tun wollten und was passiert ist; ein Bildschirmfoto hilft.
- **Das kleine „i“** neben manchen Einstellungen erklärt einen Vorgang Schritt für Schritt; *In der Hilfe öffnen* zeigt dieselbe Anleitung in der Hilfe.

> **Tipp:** Die Texte der Hilfe gehören zur jeweiligen Version der App. Was Sie hier lesen, passt zu der Version, die Sie gerade verwenden.
`,nn=`---
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
`,tn=`---
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
- **Kosten** (Lizenz *Kosten & Kalkulation*, Finanzen und Admin): Gehalt, Verwaltungsanteil und der Personensatz daraus – siehe [Kalkulation](help:settings-costs#person).

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
`,rn=`---
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

## Bestellposition {#bestellung}

Hat das Projekt Bestellungen des Kunden (Schalter *Bestellungen* unter Allgemein), gehört jede Stunde zu einer **Bestellposition**. Bei mehreren offenen Positionen erscheint das Feld *Bestellposition*: *automatisch* nimmt die Position der Rolle, die einzige oder Ihre zuletzt gewählte – lässt sich das nicht sagen, fragt die App nach. Stunden aus Timer, Kalender oder Import ohne Position zeigt der Abrechnungslauf als Warnung. Mehr unter [Bestellungen](help:orders#stunden).

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
`,sn=`---
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

## Startseite anpassen {#anpassen}

**Startseite anpassen** (oben rechts) macht „Heute“ zu Ihrem eigenen Dashboard:

- Bereiche am Griff ⠿ **ziehen** (oder mit ↑ ↓) ordnen – Schnellerfassung, Heute erfasst, Meine Aufgaben,
  Wiedervorlagen, Budgetwarnungen, Kennzahlen und mehr.
- Je Bereich **Ganze Breite** oder **Halbe Breite** wählen: zwei halbe Bereiche hintereinander stehen nebeneinander.
- Mit ✕ ausblenden; ausgeblendete Bereiche holen Sie oben mit **+ Name** zurück. **Standard** stellt die übliche
  Anordnung wieder her.
- **Speichern** gilt nur für Sie, aber auf allen Ihren Geräten. Hinweise (zurückgegebene Stunden, überfällige
  Rechnungen …) bleiben immer oben.

## Kennzahlen {#kennzahlen}

Wer Rechnungen sehen darf, bekommt Kacheln mit Umsatz im Geschäftsjahr und im laufenden Monat (netto, ohne stornierte), offenen Posten mit Überfälligem, Stunden des Monats und offenen (noch nicht verrechneten) Stunden mit ihrem Wert. *Bericht dazu öffnen* springt in die passende [Auswertung](help:reports).

Überfällige Rechnungen und fällige Mahnungen werden ebenfalls hier gemeldet – siehe [E-Mails & Mahnwesen](help:settings-mail#mahnungen).
`,an=`---
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

Unsubmitted hours stay with the person who recorded them: others see them neither in Hours nor in reports until they are submitted. For other people this page shows only the total per person and week, so you can follow up; the entries themselves appear once submitted. Submitting is always a click by the person, never automatic. Hours a manager books for someone else count as submitted right away.

## Good to know {#tipps}

- Hours the approver books themselves count as approved.
- Hours on tasks **without** approval are approved automatically.
- Only a manager changes submitted entries, only an admin approved ones.
- Whether you get a count on the menu and an e-mail for new submissions is set by each person under [My profile › Notifications](help:profile#benachrichtigungen).
- With the module [Processes](help:processes) you can build approval chains with several steps, reminders and escalation.
`,on=`---
title: Project cockpit
group: projects
order: 2
contexts: projects.cockpit
summary: The project at a glance – tiles with budget, milestones, hours, open amounts, to-dos and own reports, adjustable for yourself, the project team or the whole company.
keywords: cockpit, dashboard, overview, tile, tiles, customize, layout, standard, budget, milestones, hours, to invoice, quota, to-do, report, project overview
---

Every saved project opens with the tab **Cockpit**: tiles with the project's key figures. A click on a tile title with › opens the matching tab (e.g. Budget → Hours & budget).

## The tiles {#kacheln}

| Tile | What it shows |
|---|---|
| Budget | booked hours against the roles' budget |
| Next milestones | open milestones by due date; done ones not invoiced yet marked "to invoice" |
| Hours this week | booked hours per person, Monday to Sunday |
| To invoice | open billable hours and their value |
| Invoiced | all invoices of the project against the accepted offers |
| Hours quota | balance of the current quota |
| Project log | the latest entries |
| My to-dos | your open to-dos in this project |
| Plan vs. actual, Tasks due, Gantt, Board, Milestone trend, Burndown, Velocity, Roadmap (agile projects) | with the licence Project management – see [Project plan](help:plan) |
| Report | a saved [custom report](help:custom-reports), restricted to this project, as a table or chart |

Everyone only sees what they may see: amounts and the tiles "To invoice" and "Invoiced" only with invoice or price rights, reports only with access to reports. So one layout can be shared with the whole team.

## Customize {#anpassen}

**Customize** switches to edit mode:

- **Drag** tiles by the grip ⠿ (with a mouse also by the tile, or move them with ← →), drag the tile's right edge to change its **width** or choose the **size** (Small, Medium, Wide, Full width) and remove them with ✕. On a tablet, drag with a finger on the grip.
- **+ Tile** adds a tile or one of your custom reports.
- **Load standard** takes the project's or the company's layout as a starting point.

Then save:

| Button | For whom | Who may |
|---|---|---|
| Save for me | only you, in this project | everyone |
| Save for the project team | everyone in the project | project management and whoever edits projects |
| As company standard | every project without its own layout | admins (company settings) |

The first layout that exists applies: your own → the project's → the company standard → the built-in standard. The top left says which one you see. **Reset to standard** removes your own layout again.

On the phone the tiles are stacked in the same order.
`,dn=`---
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
`,ln=`---
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

> **VAT number:** invoices over €10,000 gross and reverse-charge invoices abroad need the customer's VAT number. If it is missing, the invoicing run warns. Its format is checked while typing: EU numbers start with the country code (e.g. \`ATU12345678\`, \`DE123456789\`), Swiss numbers look like \`CHE-123.456.788 MWST\` – a hint only, it is saved anyway.
>
> **Check in register:** asks the official register – Switzerland: the federal UID register, EU: VIES, Norway: the Brønnøysund register. It shows valid/invalid, VAT registration, and name and address as registered; a hint appears when the name differs. For EU numbers VIES also compares the customer's name, street, postcode and town with the register (*matches*, *does not match* or *not compared by the country* – Germany and Spain, for example, publish no data). When the company has its own EU VAT number, VIES returns a **consultation number** (proof of the check for reverse charge invoices). Austrian companies with a FinanzOnline web service user stored (Settings › Company) also get the BMF's **VAT number check level 2** with name and address for foreign EU numbers; the BMF allows two checks of the same number per day. Each check of a saved customer is stored as a customer activity. **Search register** (Switzerland and Norway) finds the number from the customer name; *Use* fills it in, plus empty address fields. The check needs the cloud sign-in.

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
`,hn=`---
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
`,un=`---
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
`,cn=`---
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
`,gn=`---
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
`,mn=`---
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
`,pn=`---
title: Offers
group: sales
order: 2
contexts: offers, offers.edit#bearbeiten
summary: Write offers, send them as PDF, accept or decline them – and turn them into a project and invoices.
keywords: offer, quote, quotation, proposal, estimate, lines, acceptance, accepted, declined, version, order number, purchase order, partial invoice, final invoice, hit rate, PDF, send, framework contract, milestones, project plan, team, template, Gantt
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

## Plan & team {#plan}

With the **Project management** licence, a saved offer has the section **Plan & team**. There you plan already in the offer:

- **Milestones** and **tasks** (also sub-tasks). **+** in a row adds a task below it.
- **Dates**, either as **working days from the order** (day 1 = first working day) or as a fixed date.
- **Team**: planned hours from an hour or day line of the offer, a person if you like. The line becomes the role in the project.

The column **Value** shows planned hours × the line's price. When the offer is billed by milestones, **Amounts from plan** sets each milestone's amount to this value.

Below, you choose what the PDF shows in addition: the **project plan** as table or Gantt chart, and a page **Team** with roles and hours. Names only appear when you tick **Show people's names**. These pages follow the offer; the print options do not change the offer version.

On **accepting**, the plan goes to the project: dates in working days count from the day of acceptance, the hours go to the line's role. Then the original plan is frozen (see [Plan](help:plan#termine)). If the offer is not billed by milestones, the milestones come to the project without amount, so nothing is billed twice.

**+ Sprints** offers an agile project: *N sprints of X weeks* with a team – the same hours per offer line in each sprint.
The sprints follow one another in working days (also after sprints already offered). When billed by milestones,
**Amounts from plan** gives the fixed price per sprint. On **accepting**, the project becomes agile with these sprints
(planned); the sprint length and – when all sprints have the same amount – the fixed price per sprint carry over; the
offer's other milestones become releases, their tasks stories in the backlog (see [Agile projects](help:plan#agil)).

**Apply template …** and **Save as template …** work with project templates, see [Plan](help:plan#vorlagen).

## Calculation {#kalkulation}

With the licence *Costs & calculation*, Finance and Admin see the section **Calculation** below the offer: per line hours, staff costs, material and external services, overheads, price, **CM II** and margin, plus the total with **CM I** (price − direct costs) and **CM II** (CM I − overheads).

- **Hour and day lines:** if *Plan & team* has plan rows for the line, the planned effort counts at the named person's rate; otherwise the offered quantity at the line's **cost level**. Without a rate the average of all persons is used and the row says so.
- **Items:** the item's purchase price; for other lines you enter the cost per unit yourself.
- **Further costs** such as external services bought in are added as cost lines of their own.
- If a line or the offer is below the [minimum margin](help:settings-costs#marge), the margin shows in red and the price for the minimum margin is suggested; **Apply** puts it into the line (then save). Nothing is blocked.
- Milestones and sprints from *Plan & team* show their costs against their amount.
- When the offer is sent and when it is accepted, the calculation is **frozen**; "accepted with changes" freezes a new state.

Overheads come from the newest available fiscal year, see [Calculation](help:settings-costs); provisional figures or estimates are marked.
`,fn=`---
title: Purchase orders
group: sales
order: 4
contexts: orders
summary: Your customers' purchase orders with their lines – what is invoiced and what remains.
keywords: purchase order, order number, PO, order, framework order, blanket order, call-off, line, order line, Coupa, Ariba, cXML
---

The **Purchase orders** menu belongs to the licence *Offers & invoices*. You see it when your company has switched on *Purchase orders* under [General](help:settings-general) and your role may *enter purchase orders*.

A purchase order is your customer's order with its **order number** and its **lines**. Invoices quote the order number and, per line, the customer's line number – so the customer's procurement system can match each invoice to its order.

## Enter a purchase order {#enter}

1. Choose **+ Purchase order**.
2. Enter customer, order number and order date, optionally a title and the customer's requester.
3. Under **Lines**, enter each line with the **customer's line number** (usually 1, 2, 3 … or 10, 20, 30 …). Type *Amount* suits services, *Quantity × price* hours, days or pieces.
4. Optionally choose the **offer** and the **project** the order belongs to.
5. **Save**.

If the order came as a PDF, store the file under *Documents* in the order (when documents are switched on in the settings).

When you accept an offer with an order number, the app creates the order itself – with the offer's lines as order lines.

## Framework orders {#framework}

A **framework order** has several lines at different rates, for example one per role, and is called off over time. Tick *Framework order* for it.

## Invoiced and remaining {#remaining}

For a saved order the table shows **Invoiced** and **Remaining** per line. Valid invoices count; cancelled invoices and credit notes do not. The list shows the same totals per order.

A line that was already invoiced cannot be removed. An order with invoices cannot be deleted – set it to *closed* or *cancelled*.

## cXML invoices {#cxml}

When an invoice's lines are linked to their order lines, sending it as a [cXML invoice](help:settings-einvoice#cxml) fills in the customer's line numbers by itself.

## Hours and billing {#stunden}

When an order belongs to a project, every hour on that project names an **order line**. The app picks it itself when it is clear: the line with the booked role, the only open line, or the line of your last hour on the project. Otherwise you choose it when you enter the hour ([Hours](help:time#bestellung)).

The [billing run](help:run#bestellungen) makes one invoice per order with the order number and links every line to its order line. On a framework order the line's price applies when it has one. If one invoice may hold several orders, tick *Several purchase orders on one invoice* under *Settings › Company*; it can be set differently per customer.

## Received purchase orders {#empfangen}

When [Receive purchase orders](help:settings-einvoice#bestellungen) is set up, orders from the customer's procurement system arrive in the list by themselves:

- **New**: the app looks for the sent offer the order belongs to – the offer number in the order, the order number typed on the offer, or the same amount (± 1 %). When exactly one fits, the order shows **Accept offer …**; with *Automatically accept offers from received purchase orders* it is already accepted. **Seen** makes it an open order.
- **Changed**: a change by the customer raises the version and lists what changed (lines new, dropped, quantity, price, amount, text). Lines already invoiced stay as they are; when dropped, they are closed.
- **Cancelled**: the customer cancelled the order.

Whoever sent the offer and the project manager get an e-mail (can be switched off under My profile › Notifications); "Today" shows a notice.
`,bn=`---
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
`,wn=`---
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
`,kn=`---
title: Project plan (project management)
group: projects
order: 3
contexts: projects.plan
summary: Milestones, tasks and sub-tasks with team and planned hours – hours are booked on the task, plan vs. actual comes by itself.
keywords: wall, sticky note, post-it, comment, comments, description, format, bold, italic, underline, strikethrough, bullet list, numbered list, mention, @, link, Gantt, bar chart, critical path, slack, board, kanban, milestone trend analysis, trend, budget alert, PDF, baseline, dependency, predecessor, successor, change log, support, request, reminder, due, plan, project plan, task, tasks, sub-task, milestone, team, staffing, planned hours, actual, plan vs actual, role, open demand, project management, licence, progress, status, template, project template
---

With the licence **Project management** every project has the tab **Plan**. It replaces the tab “Milestones”: milestones still carry the money, the **tasks** under them carry the work – what, when, who and how many hours. Without the licence everything stays as before.

## Roles and tasks {#rollen}

With the licence the rows under **Roles and rates** are called just **Role**: they set rate and budget, i.e. what the customer pays for. A **task** is the work behind it and asks hours from one or more roles (e.g. 40 h Senior Consultant + 80 h Consultant). Invoicing does not change – hours are still invoiced at their role's rate, milestone projects still by milestone.

## Build the plan {#aufbauen}

- **+ Milestone** adds a milestone (amount or share, due date – as before).
- At the bottom of the plan you simply type tasks: enter the name and press **Enter** – the next row is ready at once. The selection on the left sets the milestone new tasks go under.
- **Tab** indents: the following rows become sub-tasks of the task entered last. **Shift+Tab** goes back one level. There is one level of sub-tasks.
- **Edit** opens the task: description, milestone, parent task, status, progress in %, start and end.
- **Drag** to rearrange: take a task by its grip ⠿ (with a mouse also by the row) and drop it on the upper or lower
  edge of another task (before or after it), on a milestone (it becomes the first task under it) or on the middle of a
  task – then it becomes its sub-task. Dropped below the last row it has no milestone. A blue line shows where it
  lands; Esc cancels. This also works on tablets and phones with a finger on the grip.
- ↑ and ↓ change the order as well.

Tasks exist on every project, hourly projects too; there they may also stand without a milestone.

## Team and planned hours {#team}

In the column **Team** you enter per task who works with which role for how many hours:

| Field | Meaning |
|---|---|
| Role | the rate the hours are booked at |
| Person | who does the work; empty = **open demand** |
| Planned (h) | the planned hours |

A person named can book at once, even without an assignment of their own under “Roles and rates”. A milestone without tasks can have a team of its own.

## Booking on tasks {#buchen}

Whoever is in the plan picks the task instead of the role when recording time (desktop, web, phone and timer): **Project › Milestone › Task**. The role follows from their own row in the plan. Offered are:

- tasks without sub-tasks that are not done and that you are planned on – or open demand of a role you may book;
- tasks without any team (then you choose the role);
- milestones **without** tasks that you are planned on.

A milestone with tasks and a task with sub-tasks are no longer bookable themselves. Projects without a plan, or without a place for you in the plan, offer their roles as before.

Booking a task over its planned hours shows a note – nothing is blocked.

## Plan vs. actual {#planist}

Each row shows planned and booked hours with a bar (amber from 80 %, red from 100 %); milestones and tasks include their sub-tasks. Below, **Plan vs. actual** by role or by person: planned hours, all booked hours of the project and the deviation.

## Status and progress {#status}

Tasks have the status **Open**, **In progress**, **Blocked** or **Done** and a progress in % entered by hand. The project management and the people planned on a task change its status. Done tasks are no longer offered for booking. Milestones are set and invoiced here just as before in the tab Milestones.

A task with booked hours cannot be deleted – set it to **Done**.

## Dates and baseline {#termine}

Every task and milestone has three dates: **start**, **end** (the current plan) and the **originally planned end** (baseline). The baseline is kept as soon as the offer is accepted or the project becomes active – or by hand with **Set baseline**. When the end moves after that, the original end shows in grey below it ("orig. …").

When you move an end, the dialog asks for the **reason**. Every change of dates and planned hours is listed with date, person and reason under **Changes**. **New baseline …** (with a reason) makes today's end dates the new baseline; the previous ones stay in the log.

## Dependencies {#abhaengig}

In a task's dialog you choose predecessors (tasks or milestones) under **Depends on**, optionally with **days after**. When a task starts before its predecessor ends, the plan shows a note at the top. Nothing moves by itself – only with **Move successors**: then every task concerned moves to its earliest possible start with the same duration, and their successors too. This is also logged.

## Wall {#pinnwand}

In the **Sprints** view, **Wall** (at the top next to "List") switches to the layout agile teams started with: backlog and sprints side by side, each story a sticky note – yellow for user stories, pink for bugs, blue for tasks – with story points, acceptance criteria, comments, release and the initials of the people planned on it. Drag a note by its grip ⠿ into another sprint or back to the backlog; a click opens the story. Show closed sprints with the button below. The app remembers the choice per device. The **Board** of the running sprint shows the stories as sticky notes too.

## Description, mentions and links {#beschreibung}

Tasks, stories, sprints and milestones have a **description** you can format a little: **bold**, *italic*, underline, strikethrough, bullet and numbered lists (buttons above the text, or Ctrl+B / Ctrl+I / Ctrl+U).

- **@** and a few letters suggest colleagues; pick with ↑/↓ and Enter (or a click). Whoever is mentioned sees it under **Today › My tasks** once saved and gets an e-mail right away – switched off under *My profile › Notifications › Mentioned in a description*. Each person is notified once per description, even when it is saved again later.
- **#** links another task, sprint or milestone of the same project (in an offer: the same offer). A click on the link in the saved description opens it on top of the current dialog. Links from the offer plan point to the copy in the project once the offer is accepted.
- A click on the description text or **Edit** switches to editing. Text pasted from Word or the web keeps only these formats.
- **Comments** sit below the description: same formatting, @ and #, saved with **Comment** (independent of the dialog's Save). People mentioned get the same notification. Only whoever wrote a comment can change or delete it.
- The Excel export has the description as text (lists with "- "); if the text comes back unchanged on import, formatting and mentions stay. On the customer page a milestone description shows as plain text.

## Ask for support {#anfrage}

Anyone planned on a task can ask a colleague for hours with **Ask for support** (role, hours, note). The project management can tick **ask first** for a new row in the team dialog. The person asked sees the request under **Today › My tasks** and accepts or declines it. Only once accepted do the hours count in the plan and can the person book on it; a decline stays visible in the team.

## Reminders {#erinnerungen}

**Today › My tasks** lists your open tasks that end within the next **3 working days** or are overdue – as a person planned on them, and as project manager for the whole project. Admins set the number of days under *Settings › General*. If you like, you also get an e-mail every morning from 7 am: *My profile › Notifications › Tasks due*.

## Invoice when a milestone is reached {#rechnung}

When you set a milestone with an amount to **Done**, its invoice follows the project's setting (tab Details) **Invoice when a milestone is reached**:

| Setting | What happens |
|---|---|
| Prepare the invoice (default) | the invoice form opens with the milestone – check and create |
| Create the invoice right away | the invoice is created at once (with number and PDF) |
| Nothing | you invoice later, e.g. in the billing run |

The invoice is never sent automatically. To do this on a date without a click, set up a [process](help:processes).

## Views: list, Gantt, board, milestone trend {#ansichten}

At the top left, choose how the plan is shown. Your choice is remembered.

- **List**: the plan as a tree (as described above).
- **Gantt**: one bar per task, from start to current end. Below it, a grey line runs to the original end (baseline). Milestones are diamonds, with their amount for anyone who sees prices. Arrows show dependencies, and a dashed line marks today. **Week / Month / Quarter** changes the time scale.
- **Board**: tasks in the columns Open, In progress, Blocked and Done. Drag a card to another column or pick the status on the card.
- **Milestone trend**: the milestone trend analysis, see [below](#trend).

## Gantt: critical path and moving {#gantt}

Tasks and milestones on the **critical path** are red: if one of them moves, the project end or a successor moves too. All others have **slack**. Hover over a bar to see how many days. The **Critical path** tick turns the colouring off.

If you may edit the plan, you can move bars directly:

- Dragging a bar moves start and end together.
- Dragging its right edge changes only the end.
- Dragging a diamond moves the milestone.

Parto Diary then asks for a **reason**. It goes into the change log and the milestone trend analysis. If you linked the task to successors, the dialog offers to move them along. **As PDF** saves the chart of the whole plan on landscape A4, with logo and footer from the document design.

## Milestone trend analysis {#trend}

For each milestone, the analysis shows its planned end on each day it changed:

- Across is the report date, up is the planned date.
- A flat line keeps its date. A rising line means the milestone is slipping; a falling one means it comes earlier.
- When a milestone is reached, its line meets the dashed diagonal.

The list below shows how many days each milestone has moved since the first plan. The data comes from the change log.

## Budget alerts and reports {#warnungen}

As project manager, **Today › My tasks** shows the tasks and milestones of your projects that have used **80 %** or **100 %** of their planned hours. A click opens the plan. **Board** there shows your tasks from all projects.

With the licence, **Reports** has the tables **Tasks** and **Milestones**. They show:

- planned and booked hours, remaining hours and deviation;
- how much of the plan is used;
- original, current and actual end, delay in days, and whether something is overdue.

You can save these reports, send them on a schedule and put them on the cockpit as tiles. In **Processes**, tasks and milestones are objects of their own, for example "when a task is overdue". Gantt, board and milestone trend are also cockpit tiles, see [Cockpit](help:cockpit).

## Project templates {#vorlagen}

**Save as template …** saves the plan of a project or offer as a template: milestones, tasks, roles with price and planned hours. Dates become working days from the earliest date. People are not saved. Under *Save as* you replace an existing template.

**Apply template …** adds a template to the existing plan:

- in a **project** from a start you choose. Missing roles are created with the template's price; milestones come without amount.
- in an **offer** with dates in working days from the order. Missing lines are added with the planned hours (see [Offers](help:offers#plan)).

You can also delete a template in the same window.

## Plan from Excel {#excel}

**Import** on the plan reads milestones, tasks, sub-tasks and planned hours from Excel – for example a project plan you already have in Excel. **Export** writes the plan in the same structure; the file can be changed and read back in.

- One row per plan row (role × person). The columns *Milestone*, *Task* and *Sub-task* say where it belongs; anything not there yet under that name is created.
- A row without task describes the milestone itself (end = due date, amount).
- Empty cells change nothing: several rows of one task need not repeat start and end.
- *Project* empty = the project you import in. With project codes one file can hold the plans of several projects.
- Roles must exist in the project; people are found by name or e-mail.
- The import shows a preview first; nothing changes before you confirm. It needs the permission to edit projects.

## Agile projects: backlog and sprints {#agil}

At the top of the tab you choose the project's **method**: *Classic* (milestones, Gantt) or *Agile*. New projects take
the default method from Settings › General. Switching deletes nothing: milestones become releases and their tasks
stories in the backlog – and back again when you switch back.

In agile mode the **Sprints** view shows the **backlog** on the left and the sprints on the right:

- Add **stories** in the backlog ("New story …"). A click opens the story: type (user story, bug, task), **story
  points**, release, description and **acceptance criteria** to tick. Order them by priority by **dragging** the grip ⠿ or with ↑/↓. Plan hours
  additionally in the list as usual.
- **+ Sprint** plans the next sprint right after the last one (length under *Sprint settings*, default 14 days). Enter
  the **sprint goal** in the sprint; **drag** stories from the backlog into the sprint (and back, or from sprint to sprint) to the place where they belong; the selection on the story works too. Closed sprints take nothing more.
- **Start sprint**: the points of its stories are now the commitment. Only one sprint runs at a time. What is added or
  removed afterwards is recorded.
- **Board** shows the stories (and sub-tasks) of the running sprint. A story with open acceptance criteria can be
  finished, but you get a notice.
- **Close sprint**: you see done and committed points and choose for each unfinished story: next sprint (created when
  needed) or backlog. The sprint is then a reached milestone – with an amount, the rules of
  [invoice when reached](#rechnung) apply.
- **Velocity**: the average of points done in the last three sprints, as a guide for planning.
- **Roadmap** (view): releases with their sprints on one time axis – closed grey, running in the accent colour, planned
  light; the diamond is the release date, the red line today.
- **Burndown & velocity** (view):
  - *Burndown* of a sprint (running or closed, selectable): open points per day against the ideal line from the
    commitment to zero on the last working day; weekends are shaded. Stories added or removed later count from the day
    of the change, done counts from the done date.
  - *Velocity*: committed and done points per closed sprint with the average of the last three.
  - *Forecast per release*: open points divided by the velocity give the sprints needed and an approximate finish date
    (from the running or next planned sprint, releases one after the other). If it is after the release date, it is
    shown in red.
  - *Release burnup*: points done against the release's whole scope at the end of each sprint – when the scope grows,
    the dashed line rises.
- **Cockpit tiles**: burndown (running sprint), velocity and roadmap; in [custom reports](help:custom-reports) the
  tables **Sprints** and **Stories**.
- A **release** groups sprints and stories. *Sprint settings* also hold the project's *definition of done*.

**Billing** (under *Sprint settings*, with price permissions only):

- **By effort** (default): hours go through the billing run as always; the sprint only structures them.
- **Fixed price per sprint**: every new sprint gets the amount, planned and running sprints are updated; change a single
  sprint under *Edit*. The invoice comes
  - **when the sprint is closed** – as for a milestone reached: an invoice draft or created right away, as set under
    [Invoice when reached](#rechnung), or
  - **after the customer's acceptance**: once the customer accepts the closed sprint on the
    [customer page](help:portal#agil) (sprint review), "Ready to invoice" appears above the sprints with the button
    **Invoice Sprint N**. Accepted sprints are marked *Accepted by the customer*.

  Nothing is sent automatically.
`,yn=`---
title: Project customer page
group: projects
order: 4
contexts: projects.portal
summary: A project report for the customer on the web – status, progress, milestones, schedule and hours, always as published.
keywords: customer page, customer portal, project report, status report, status light, progress, milestones, schedule, Gantt, publish, approval, link, customer, sprint, burndown, roadmap, backlog, sprint review, agile, sticky notes, wall, Pinnwand
---

With the **Project management** licence every customer project gets the tab **Customer page**. It becomes a web page for the customer: a project report for management, with a summary, charts and a schedule rather than lists.

## What the customer sees {#inhalt}

- **At a glance**: status light and text, share done (with the share planned by now), time passed, milestones reached, next milestone, the budget if wanted.
- **Progress**: a bar from project start to end – time passed, work done, the planned state and the milestones as diamonds. Below it the milestones as stages.
- **Milestones**: cards with state (reached, planned, due soon, overdue), date (moved ones with the original date) and tasks done. A click opens the details: open and finished tasks.
- **Schedule**: Gantt of the published milestones and tasks.
- **Hours**: approved hours per month, against the planned hours.
- **Sticky-note wall** (off by default, switch it on under "Sections and order"): the milestones as columns with one sticky note per task (state, date, progress; finished ones struck through) – in an agile project the sprints with their stories (colour by type, points) and, when switched on, the backlog. Extra detail for customers who want it; clicking a column title opens the milestone or sprint.

The customer never sees internal notes, people, rates, costs or the hours of individual people.

## Settings {#einstellen}

- **Status light** and **status text**: one or two sentences on where the project stands.
- **Progress**: *Plan and actual* also shows where the project should be by plan; *Actual only* leaves it out.
- **Show amounts**: budget and milestone amounts – off by default.
- **Sections and order**: hide sections, order them by dragging the grip ⠿ (or with the arrows) and choose **Full width** or **Half width** for each. Two half-width sections in a row sit side by side (stacked on phones). Order and width are part of the published state.
- **Milestones and tasks shown**: by default milestones and tasks are shown, sub-tasks are not. Each entry can be shown or hidden; what sits under a hidden entry is hidden too.

## Save and publish {#veroeffentlichen}

The customer always sees the most recently **published** state, never the working state. Before the first publication the page shows only the company and the contact.

- **Publish** freezes today's state. *Unpublished changes* lists what changed since (moved dates, new or changed tasks, states, hours).
- **Save and publish** does both in one step.
- With *Customer pages are published by the project manager only* (Project › Details) everyone else **sends for approval**; the project manager approves or sends back (Today › My tasks).
- **Preview** shows the published or the current state.

## Customer access {#zugang}

As with the hours quota: a **secret link** (\`…/#portal=…\`) or **contacts** who sign in at \`…/#portal\` with a code by e-mail. A signed-in contact chooses among all pages they may see (quotas and projects). The app sends nothing by itself: copy the address or open it in your own e-mail program. Access can be limited in time, blocked and deleted.

Sign-in by e-mail works with **any address** – also for internal stakeholders such as a steering committee who should see the same project report. Per access you decide whether messages and task proposals are allowed and whether reached milestones may be approved.

## Messages, approvals and proposals {#rueckmeldungen}

- **Messages**: about the whole project or one milestone (in its details). With **@Name** the customer mentions someone of the team (project manager, project members, people in the plan); the project manager and everyone mentioned get an e-mail.
- **Approval**: once a milestone is reached, the customer can **approve** it in its details. The status line shows *Reached → Approved → Invoiced → Paid*; invoiced and paid only when *Show amounts* is on.
- **Propose a task**: under a milestone or for the whole project. On the *Customer page* tab you add the proposal to the plan as a task with one click or decline it; the customer sees the decision.
- Under **Customer feedback** you reply – about the whole project or one milestone. Replies, approvals and messages appear at once, without publishing.

## Logo and banner {#bilder}

The header shows your logo (default document design or app design) and the **customer's logo** (customer › details › picture / logo). Upload a wide **banner** per project on the *Customer page* tab.

## Agile projects {#agil}

When the project works **agile** (tab "Plan" › method), the customer page shows instead of milestones and the Gantt:

- **At a glance**: the current sprint with its goal and days left, story points done against committed, velocity, the
  share of all points done, sprints closed and the next release with its forecast.
- **Current sprint**: the running sprint's stories in three columns (open, in progress, done; read only) and the
  **burndown** – open points per working day against the ideal line.
- **Sprints** instead of milestones: each sprint with goal, period, points and the status line done → accepted →
  invoiced → paid. The customer can **accept** a closed sprint (sprint review).
- **Roadmap** instead of the schedule: releases with their sprints on the time axis, release date and forecast.
- **Backlog** (off by default): the next stories in their order, without estimates. The customer can propose new
  stories; once taken over they go to the end of the backlog.

Sections you saved while the project was classic carry over: the Gantt becomes the roadmap, the current sprint comes
after "At a glance". On a programme page, the card of an agile part shows its running sprint and goal instead of the
next milestone.

## Programme page {#programm}

When the project is a **programme** (other projects are "part of programme"), its customer page also shows the section
**Projects**:

- one card per part project with status light, status text, progress, milestones reached and the next milestone,
- a combined schedule of all part projects with their milestones,
- totals for the programme: number of projects and status lights, milestones reached, total hours, period.

Each card shows the **part project's most recently published state** – so publish the part projects on their own
"Customer page" tab. A part project without a published state appears with its name only. Set the programme's status
light and text here on the programme. Clicking a card opens the part project's report (read only); "Back" returns to
the programme. One access on the programme is enough, for example for a steering committee; the customer writes
feedback on the programme page.


## Contacts {#ansprechpartner}

Without a choice the customer page shows the project manager as the contact. Under **Contacts on the customer page**
you pick several people from your team instead (up to six), order them by dragging the grip ⠿ or with the arrows and give each an optional role,
e.g. "Project lead" or "Technical". The customer sees name, role, e-mail and phone. The choice applies as soon as you
save, without publishing; inactive people disappear by themselves.
`,vn=`---
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

Processes are an **add-on** to the base licence ([Licence](help:settings-licence)); Parto switches it on per company. People with the permission *Set up processes and e-mail templates* (admins by default) may set them up. Without the module everything stays as before.

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
`,An=`---
title: My profile and the user menu
group: start
order: 3
contexts: profile
summary: Name, call name, picture, language, notifications, projects and your own account.
keywords: user menu, profile, call name, notifications, language, delete account, two-factor, password, switch company
---

## The user menu {#benutzermenue}

Top right, with your name. It holds:

- **Company:** which company you work in and with which role. If your account belongs to several companies, switch here – in the web version, the desktop app and on the phone. You also accept an invitation of a further company here.
- **Language:** Deutsch or English – applies to you on all devices.
- **Help** (F1): opens the help at the article for the current page, with all topics and the search.
- **My profile**, **Account & cloud** and **Sign out**.

## My profile {#profil}

- **Company** – which company you are working in right now, with which role, which other companies your account belongs to and open invitations – each with **Switch to …** or **Accept and switch**.
- **First name, last name** and **call name** – how the app greets you ("Welcome, …") and how you appear in invitation e-mails. Empty = first name.
- **E-mail, phone, position** – appear in the company signature of your e-mails ([E-mail signatures](help:settings-signatures)). You change the sign-in e-mail of your cloud account under *Sign-in*; you get a confirmation link at the new address.
- **Profile picture** – shown in the team and in the user menu.
- **Preferred language** – applies on all devices.
- **Roles, teams, manager** – view only; whoever manages the team changes them ([Team](help:team)).
- **My projects and customers** – which projects and tasks you may book on.

## Notifications {#benachrichtigungen}

Tab *Notifications*: for each kind separately, whether you get it **in the app**, **on the phone** or **by e-mail** – e.g. hours submitted for approval, a decision on your hours, being named on an entry, budget exceeded, overdue invoices, reminders due, data check, customer messages on the hours quota, tasks due from the [project plan](help:plan#erinnerungen) (e-mail from 7 am) and a **copy of your sent e-mails** (blind copy of every mail you send from the app).

> Customers never receive anything automatically – except through a [process](help:processes) that an admin explicitly set up to send.

## Security and account {#konto}

- **Change password, two-factor sign-in:** user menu › *Account & cloud* – see [Cloud](help:settings-cloud).
- **Delete account:** only in your own profile. In a company with other people you leave the company; the hours you booked stay there. The last admin first makes someone else admin.

## Several companies {#unternehmen}

One account (one sign-in e-mail) can belong to several companies – each with its own roles and data. On a switch the app uploads changes still waiting and opens the other company. In the desktop app and on the phone each company has its own file on the device (and its own backups): data is never mixed, and what was not uploaded yet stays with its company and goes up when you open it again. In the browser the copy of the previous company is removed.
`,Sn=`---
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
| Hours & budget | Hours per role and status (open, invoiced, paid), budget use; others' hours not submitted yet as a sum only |
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
`,zn=`---
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

## Save and publish {#veroeffentlichen}

The customer never sees the running state, only the last **published** one. Booked hours and changes to the quota are saved but stay internal until someone publishes.

- Before the first publication the customer page shows **no figures** – only the contact and messages.
- **Publish** freezes today's state (months, hours, tasks, people, entries). *Unpublished changes* lists the months that changed since.
- **Save and publish** in the quota dialog does both in one step.
- With *Customer pages are published by the project manager only* switched on (project › Details), only the project manager (or an admin) publishes. Everyone else **sends for approval**; the project manager sees the request under Today › My tasks and in the quota, and **approves** or **sends it back** with a note.
- **History** lists all published states and requests.
- The preview shows either the published or the current state.

## Messages and confirmations {#nachrichten}

When the customer confirms a month, it appears with their name in the overview. When they write a message, the app reports it under "Today" and by e-mail to the project manager; you reply under *Messages with the customer* (if you like, also by e-mail).
`,Pn=`---
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
`,jn=`---
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

## Purchase orders {#bestellungen}

With *Purchase orders* switched on (General) the run makes one invoice per order: the order number is its external number and every line is linked to its order line. Warnings show hours without an order line and orders whose remaining amount would be exceeded. Several orders on one invoice: tick under *Settings › Company* or on the customer. More under [Purchase orders](help:orders#stunden).

## Only selected hours {#auswahl}

Under [Time](help:time#rechnung) select entries › *Create invoice …* – the run then shows only these hours (without expenses).

## Milestones {#meilensteine}

Projects invoiced by milestones are listed under *Finished milestones*; their hours do not go into the run. See [Milestones](help:large#meilensteine).

## Timesheet {#stundennachweis}

If *Attach timesheet* is set on the customer, a timesheet PDF is created for every invoice. A timesheet for any hours is made under project, customer or invoice › *More › Timesheet …*.

> **Invoicing twice is impossible:** if hours were invoiced on another device in the meantime, the app creates nothing and syncs first.
`,Bn=`---
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
`,Rn=`---
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
`,En=`---
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

In addition to the password, a code from an authenticator app (e.g. Microsoft or Google Authenticator). **Set up**, scan the QR code, enter the code shown. For admin and finance rights (settings, users, invoices, costs) it is **mandatory** from a set date: before it a notice at the top of the app reminds you, afterwards these rights are missing while you are signed in with the password alone – everything else stays. Admins can also make it **mandatory** for all admins and managers.

## This device {#geraet}

- **Last synced**, **Still to upload** and **Sync now**.
- **Sign out:** this device no longer syncs until you sign in again. In the web version the copy in the browser is deleted on signing out; after 60 minutes without input it signs you out.

## Bring a company into the cloud {#hochladen}

For a company's first device: *Upload this workspace to the cloud*. Further devices fetch the data with *Get onto this device* (only into an empty workspace). Then invite your [team](help:team). If your account belongs to several companies, switch here, in the user menu or in your [profile](help:profile#unternehmen) – each company gets its own file on the device.

## Delete account {#loeschen}

In your own [profile](help:profile#konto). A company with invoices is not deleted but closed: accounting records must be kept (Austria 7 years, Germany and Switzerland 10 years). Download the full export and the PDF archive first.
`,Dn=`---
title: Company
group: settings
order: 2
contexts: settings.company
summary: Company details for invoices and offers, bank, currency, fiscal year, billing increment and switches for the whole company.
keywords: company details, name, address, VAT number, UID, company register, IBAN, BIC, bank, signatory, currency, fiscal year, billing increment, small business, QR-bill, QR-IBAN, payment part, Switzerland, pay by code, GiroCode, EPC, name for projects, job, activity required, allow copying, FinanzOnline, VAT number check, web service user, VIES
audience: Admins
---

## Company details {#daten}

**Company name**, address, country, e-mail, **VAT number (UID)**, **company register number** and court, **bank, IBAN, BIC**, **signatory** and **place** (for "place, date"). They appear on invoices and offers, by default in the footer. The IBAN is checked while typing, and so is the format of the VAT number (only a hint, it is saved as typed). In the footer the number is labelled by the company's country: *UID* (Austria), *USt-IdNr.* (Germany) or *MWST-Nr.* (Switzerland) on German documents, *VAT ID* on English ones; a Swiss number prints in its official form \`CHE-123.456.788 MWST\`. **Check in register** checks the own number in the official register (Switzerland, EU, Norway).

**FinanzOnline – VAT number check level 2** (Austrian companies in the cloud only): in FinanzOnline under *Admin › manage users* create a **web service user** (with the right for VAT number checks) and enter participant id, user id and PIN here. The data is stored encrypted in the cloud and never shown again; *Remove* deletes it. *Check in register* on a customer then also checks foreign EU VAT numbers in FinanzOnline.

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
`,Mn=`---
title: Calculation
group: settings
order: 7
contexts: settings.costs
summary: Overheads per fiscal year, the overhead rate they come to, cost levels, minimum margin and the costs per person.
keywords: calculation, costs, overheads, overhead rate, overhead surcharge, full cost, person rate, hourly rate, cost accounting, fiscal year, cost level, margin, contribution margin, salary, admin share
audience: Finance, admins
---

Under **Settings › Calculation** you set what an hour really costs your company. The page belongs to the add-on licence **Costs & calculation** and is visible only with the permission *view costs* (by default Finance and Admin); people with *edit costs* change it.

An hour costs **person rate + overheads**:

- The **person rate** comes from the person's costs (see [Costs of a person](#person)).
- The **overheads** come from the overhead rate of the fiscal year.

## Overhead rate {#satz}

Overhead rate = (overheads of the year + staff without entry + admin shares of the persons) ÷ approved hours on customer projects in that year.

Hours on internal projects do not count as productive; the productive hours carry their costs. At the top of the page you see the rate that applies today and the year it comes from:

- If the running year has provisional or closed figures, those apply.
- Otherwise the **last closed year** applies.
- If there is no closed year yet, an **estimate** applies.

Under **Calculation rules** you choose whether overheads go **per productive hour** (the same on every hour) or **as % on direct staff costs**.

## Fiscal years {#jahre}

**+ Add year** takes the overheads of a fiscal year: rent, cars, software, insurance, advisers – everything except the staff costs of persons with a cost entry. Staff costs without an entry of their own (e.g. temps) go into **Staff without entry**; they count as overheads.

The **state** of a year is *estimate*, *provisional* (running year) or *closed* (final figures). The fiscal year starts with the month set in [Settings › Company](help:settings-company). Instead of typing the totals, import the cost accounting.

## Import cost accounting {#ker}

**Import cost accounting …** reads a short-term income statement (KER) or balance list as Excel or CSV. Recommended is BMD *KERF Auswertung 504* with outline 225: it holds the running year and the year before. Other systems such as DATEV work too, as long as the file has account numbers and one amount column per period. Only P&L accounts (classes 4–8) are read.

- **Source system:** Per source system (e.g. *BMD*) Parto keeps which **cost group** each account counts to: revenue, material/external, staff, management, overheads or not relevant. At the first import Parto suggests the groups from the outline; later imports keep your choice. Under **Cost accounting accounts** you change them at any time; the imported years are then recomputed.
- **Fiscal years:** Every period that is a whole fiscal year can be imported: the year before as *closed*, the running year as *provisional*. An import replaces the year's current figures.
- **Staff:** Staff costs of the cost accounting count as overheads only as far as the persons' entered costs do not cover them (e.g. temps). The managing director's pay is a staff cost, even when the cost accounting lists it under other expenses.
- **Check:** In the year you see the revenue of the cost accounting next to the invoices in Parto, and its staff costs next to the costs of the persons entered. Differences block nothing.

## Cost levels {#stufen}

Cost levels like *Junior*, *Senior* or *Partner* give plan rows without a named person a person rate. Next to it you see the average of the persons on that level; **Use the average** fills it in.

## Minimum margin {#marge}

If the margin (CM II) of an offer or project is below the minimum margin, it shows in red. Nothing is blocked.

## Costs of a person {#person}

Under **Team › person › Costs** you enter per date:

- gross salary, number of salaries, payroll costs and further costs;
- the **admin share** (management, office: this part of the costs counts as overheads);
- the **internal time** (sales, training: not productive, the costs stay with the person);
- hours a week, holidays, public holidays and sick days.

They come to the person rate per productive hour. Enter a salary change as a **New entry** with the date it applies from; earlier entries stay for the post-calculation.

Salary inputs stay in the cloud and never reach a device; only people with *edit costs* see them. Everyone else with *view costs* sees only the person rate.
`,Tn=`---
title: Backups, data security, data migration
group: settings
order: 33
contexts: settings.backups#sicherungen, settings.data#datenpruefung, settings.migration#uebernahme
summary: Daily backups, full export and import, data check, unchangeable archive and data migration.
keywords: backup, restore, export, import, Excel, data check, check, archive, unchangeable, data migration, Access, migration, change log, audit, access, support, consent
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
- **Parto accesses to your data:** Parto looks at your company's data only for a support case and with your written consent. Every access is listed here first – support case, reason, scope, consent, who and when. Visible to admins.

## Data migration {#uebernahme}

Takes over data from the previous system and then compares rows, hours, amounts and numbers with the source file (*Check reconciliation*). Admins only, and only until an import has been kept. Past years (hours and invoices) can also be taken over through the list imports – they then count as invoiced and paid.
`,xn=`---
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
`,Kn=`---
title: E-invoice
group: settings
order: 4
contexts: settings.einvoice
summary: E-invoice with every invoice (ZUGFeRD or XRechnung) and which details are checked first – per format, can be switched off, with own checks.
keywords: cXML, Coupa, Ariba, Jaggaer, Recommand, Peppol ID, e-invoice mandate, Germany 2027, PDF/A-3, XML, e-invoice, XRechnung, ZUGFeRD, Factur-X, Peppol, ebInterface, e-Rechnung.gv.at, EN 16931, Leitweg-ID, buyer reference, supplier number, check, required field
audience: Admins
---

## E-invoice with every invoice {#format}

- **ZUGFeRD (PDF with embedded data):** the invoice PDF carries the invoice data as EN 16931 XML (PDF/A-3, profile EN 16931). People read the PDF, accounting software reads the data. Meets the German B2B e-invoice mandate (sending from 2027 or 2028).
- **XRechnung (XML file in addition):** an XRechnung XML file (version 3.0) with the same name comes with the PDF – for German authorities, with the Leitweg-ID on the customer.
- **ebInterface (XML file in addition):** an ebInterface 6.1 XML file goes with the PDF – the Austrian format, for customers who want it by e-mail.
- **none:** the PDF only.

A customer can have a different format. The e-invoice goes along when sending, downloading and saving the PDF as soon as no detail is missing; otherwise the invoice goes out as a plain PDF and the send dialog says so.

## Checks {#pruefungen}

The list shows every built-in check with the formats it applies to (EN 16931 / ZUGFeRD, XRechnung, Peppol BIS, ebInterface) and whether the standard or the format requires it. Each check can be switched off. A switched-off check is only hidden here – the receiving platform still rejects missing required details.

## Own checks {#eigene}

Own checks require a field of the invoice, the customer or the company to be filled in or to match a pattern – for all formats or only chosen ones.

## Per customer {#kunde}

On the customer, checks can be switched off, switched back on or added. The customer also holds the buyer reference / Leitweg-ID, supplier number, Peppol ID and VAT category.

## On the invoice {#rechnung}

The *E-invoice* section on the invoice shows what is missing and where to add it. The format is suggested from the customer (Germany or a Leitweg-ID → XRechnung, Belgium or a Peppol ID → Peppol, else EN 16931). When everything is there, the ZUGFeRD PDF (EN 16931) or the XRechnung can also be downloaded on its own there.

## cXML invoices {#cxml}

Customers whose procurement system accepts invoices as **cXML** (e.g. Coupa, SAP Ariba, Jaggaer) can get invoices directly from the app, without e-mail.

cXML invoices belong to the module *Integrations*: you see this section only when Parto has enabled the module for your company.

1. In the customer's supplier portal, switch on cXML invoices and fill in the fields: supplier domain and identity (yours, e.g. *NetworkID* / *Parto*), buyer domain and identity (from the customer) and a **shared secret** you choose yourself (long and random).
2. Here under **cXML invoices**, enter the same supplier domain and identity (for all customers).
3. On the customer under **cXML invoices**, enter the URL (from the customer's supplier portal, e.g. \`https://…/cxml/invoices\`), buyer domain and identity, choose **Invoice lines** (*as amount* for services – usual – or *with quantity and unit*, as the customer's order lines are set up) and save. Then enter the shared secret and click **Store secret in the cloud** – it is stored encrypted in the cloud, never kept in the app and never shown again.

There is no switch for it: as soon as a customer has a URL, the invoice's send dialog shows **Send as cXML invoice**. The invoice goes out with its PDF attached; the recipient's answer (accepted, or the reason it was rejected) is shown. Accepted invoices are marked as sent and noted as an activity on the customer. Nothing is sent except on this click. If the invoice was already accepted once, the app asks before sending it again (showing when it was accepted). If the connection drops (e.g. on a phone), the app fetches the answer afterwards.

With the **customer's order number** on the invoice (from the project's “Customer order / project number” or the order number given when accepting the offer) the invoice refers to that order, its lines in order to order lines 1, 2, … – the send dialog's **Order lines** lets you change that per line (e.g. **All to line 1** when the order has just one line; lines without a matching order line are refused); without one it goes as a non-PO invoice – some systems (e.g. Coupa) then want the **Requester at the customer** (e-mail of the person who ordered) in the send dialog, others only accept invoices against an order. If the recipient refuses, the app explains why; the original answer is shown below it. Credit notes go as credit memos with negative amounts. For lines with quantities, **Customer unit codes** can map our units to theirs (e.g. \`HUR=HR\`).

The test environment only sends to test, demo and sandbox systems, never to a customer's live system.

## Receive purchase orders {#bestellungen}

With the modules *Integrations* and *Purchase orders*, your customers' procurement systems can send purchase orders as cXML straight to the app – new orders, changes and cancellations.

1. Under **Receive purchase orders** choose **Create address** and **Save**. Enter this address and your supplier identity (above) in the customer's supplier portal as the target for orders.
2. Choose a separate **shared secret** for orders to you there (long and random, at least 8 characters, better 16 or more) and store the same key on the customer under **cXML › Key for received purchase orders**. The customer's buyer domain and identity must be filled in.
3. Optionally tick **Automatically accept offers from received purchase orders**.

The app only takes an order when sender, recipient and key match; what it did with it is described under [Purchase orders](help:orders#empfangen). **New address** makes the old address stop working once saved. The test environment only takes orders from test and demo customers and sends no e-mails to customers.

## Peppol {#peppol}

With **Peppol**, e-invoices go straight into the customer's accounting – to Austrian and German authorities (e-Rechnung.gv.at, ZRE, OZG-RE) and to many companies in the EU. Peppol belongs to the module *Integrations* and appears once Parto provides Peppol for your company; until then none of this is shown.

1. Under **Peppol**, **register the company as Peppol sender** once (name, address, country and VAT ID from Settings › Company). An authorised person then confirms their identity through the link **Confirm identity now**; only then can invoices be sent.
2. On the customer, enter the **customer's Peppol ID** (e.g. \`9930:DE123456788\` for a German VAT ID, \`0204:\` + Leitweg-ID for German authorities) and use **Check in the Peppol network** to see whether it receives invoices.
3. In the invoice's send dialog, click **Send over Peppol**. The invoice goes out with its PDF attached, is marked as sent and noted as an activity on the customer. Nothing is sent except on this click. If the invoice was already accepted once, the app asks before sending it again (showing when it was accepted).

Credit notes go as credit notes referring to the original invoice. The test environment never sends to the real Peppol network.

## e-Rechnung.gv.at (Austrian federal government) {#erb}

Invoices to the Austrian federal government (ministries, federal offices) must be delivered through **e-Rechnung.gv.at**. The app does this directly, as ebInterface 6.1 with the invoice PDF. Like cXML and Peppol it belongs to the module *Integrations*.

1. In the **Unternehmensserviceportal (USP)** create a **web service user** and enable *e-Rechnung.gv.at Webservice* for it.
2. Here under **e-Rechnung.gv.at** enter user and password and **Store in the cloud** – both are kept only encrypted in the cloud and never shown again.
3. On the customer set **Invoice delivery** to *e-Rechnung.gv.at (federal government)* and enter **Our supplier number** (8 digits, given by the federal government).
4. On each invoice the government's **order reference** as order number: a 10-digit order number, a buyer group (e.g. \`Z01\`) or buyer group:reference (e.g. \`Z01:111599\`). The ordering office tells you the order reference.

In the invoice's send dialog the section **e-Rechnung.gv.at** shows what is still missing. With a 10-digit order number every line needs the order's position number (from the [purchase order](help:orders), otherwise enter it there). **Check at the portal** has the portal only check the invoice without delivering it; **Send to e-Rechnung.gv.at** delivers it, marks it as sent and notes an activity with the portal's document ID on the customer. Whether the office accepts the invoice, the portal reports by e-mail afterwards. The test environment only checks invoices, never delivers them.

`,Fn=`---
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
`,In=`---
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
`,Cn=`---
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
| Purchase orders | menu [Purchase orders](help:orders) |

With the licence Project management you also set here how many **working days before its end** a task shows under "My tasks" (default 3) – see [Project plan](help:plan#erinnerungen).

## Customer categories {#kategorien}

One category per line – the choices in the field *Category* on the customer.
`,_n=`---
title: Interfaces
group: settings
order: 32
contexts: settings.interfaces, invoices.acctExport
summary: Export of outgoing invoices to the bookkeeping (BMD, DATEV, CSV), revenue accounts and tax codes, own import and export profiles.
keywords: interface, BMD, NTCS, DATEV, bookkeeping, accountant, tax adviser, export, import, CSV, revenue account, tax code, booking symbol, debtor, discount, mapping, profile, columns
audience: Finance, admins
---

Parto Diary does not replace the bookkeeping. Under **Settings › Interfaces** you set how your outgoing invoices and credit notes go to the bookkeeping as a file – and which file formats the app reads and writes.

## Export for bookkeeping {#export}

Under **Invoices › Export for bookkeeping** you choose a period (suggested: last month). The app shows the documents, one row per invoice and revenue account, with net, tax and gross. **Save file** stores the file on your device – nothing is sent.

- *Only documents not exported yet* leaves out invoices exported before. If documents are included a second time, the dialog warns.
- If an invoice has no revenue account, it is listed under *Not in the export* – add a row to the revenue account table.
- Customers without a debtor account get the next free number on export. With *New debtors as a separate file* the app saves their debtor accounts as well.

The export is available with the permission *Export for bookkeeping* (standard: Finance and Admin).

## Bookkeeping settings {#buchhaltung}

- **Profile for bookings / debtors**: which file format the export writes, e.g. *BMD NTCS – Buchungsimport*.
- **Booking symbol** for invoices and credit notes (BMD e.g. *AR*). Credit notes go out with a negative amount.
- **Debtor accounts**: an own account per customer (from the number given) or one collective debtor. A customer's account can be changed on the customer (*Debtor account*).
- **Booking text** with placeholders such as \`{docNo} {customerName}\`.

## Revenue accounts and tax codes {#konten}

Each invoice line gets a revenue account and a tax code by **tax case** (domestic, EU reverse charge, non-EU …), **line kind** (service or re-billed expenses) and **VAT rate**. The first matching row applies; an empty line kind or rate always matches. The app computes the tax per rate as on the invoice.

## Profiles: standard and own {#profile}

A **profile** describes a file: file type (text/CSV or Excel), separator, encoding, date format, decimal sign and the **columns**. Each column takes a Parto field (e.g. *Gross amount*) or a fixed value, optionally through a **value list** (Parto value → value in the file) and a transform (negate, debit/credit mark …).

**Standard profiles** (BMD, DATEV, neutral CSV) are read-only. If one does not quite fit your bookkeeping, choose **Copy** and change the copy. The preview shows at once what the file looks like with sample data.

The same profiles also describe imports, for example the income statement or balance list from BMD for the calculation, or purchase orders as CSV.
`,Nn=`---
title: Licence
group: settings
order: 33
contexts: settings.licence
summary: Which licences your company has, what each contains and how many users it allows.
keywords: licence, module, users, number of users, subscription, package, add-on, base licence, Time & projects, Offers & invoices, Integrations, Processes, Project management, Costs & calculation
audience: Admins
---

Under **Settings › Licence** you see which licences your company has and how many users they allow. Every company has the **base licence** *Time & projects*; all other licences come on top as add-ons. Each licence contains everything its name promises.

## Base licence {#grundlizenzen}

**Time & projects (base)** – always included: time, timer, calendar takeover, phone app, expenses and expense reports, approvals, projects with roles, rates, budgets and milestones, timesheet, hours quota with customer page, reports on hours and expenses. Plus customers, projects, contacts, team, roles, clusters, documents, list views, help, data check and all apps.

## Add-ons {#erweiterungen}

| Add-on | Needs besides the base | Contains |
|---|---|---|
| Offers & invoices | – | Offers, [purchase orders](help:orders), invoices, credit notes, billing run, billing hours and expenses, item catalogue, foreign currencies, e-invoices (ZUGFeRD, XRechnung, ebInterface), payment QR, payments, bank import, reminders |
| Integrations | Offers & invoices | Invoices as cXML, Peppol, upload to e-Rechnung.gv.at, receiving purchase orders as cXML |
| [Processes](help:processes) | – | automatic processes and own e-mail templates |
| Project management | – | tasks, dates, dependencies, Gantt (in preparation) |
| [Costs & calculation](help:settings-costs) | – | costs per person, overheads per fiscal year, full cost and margin; for Finance and Admin only |

## Term {#laufzeit}

At the top you see until when your licence is paid or your trial runs. From 14 days before the end, admins see a notice, also at the top of the app. Once the licence has ended, everything keeps working during a grace period of 14 days; after that Parto may suspend the company. The data stays stored.

## Users {#benutzer}

The licence allows a number of users. All members of the company and open invitations count. Once the number is reached, **Team › Invite** refuses further invitations with a note.

Menus, permissions under [Roles & permissions](help:settings-roles) and data exist only for the areas of your licences. Parto changes licences and the number of users – please contact Parto.
`,Un=`---
title: E-mails & dunning
group: settings
order: 11
contexts: settings.dunning
summary: E-mail templates for invoices, offers and contacts, standard CC, customer templates, payment reminders and dunning.
keywords: e-mail, email, template, text, subject, placeholder, CC, copy, dunning, dunning letter, reminder, payment reminder, dunning fee, mail server, sender, overdue, pause, letter, post, phone
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

**As a letter:** in the send dialog, **As letter (PDF)** creates the letter in the invoice's design (address, open amount, fee, your text) to print for the post; **Sent by post** then notes it. With *Also attach the reminder as a PDF letter* the letter goes with the e-mail too.

**Being reminded:** whoever may edit invoices can get the reminders due every morning by e-mail and, in the Android app, as a notification on the phone – set under [My profile › Notifications](help:profile#benachrichtigungen). Customers still only get mail on your click.

More in the "i" next to *Dunning* or in the guide [Dunning](help:howto-dunning).
`,Wn=`---
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
`,Zn=`---
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
`,Vn=`---
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
`,Ln=`---
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
`,Gn=`---
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
`,On=`---
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
`,Hn=`---
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
`,qn=`---
title: Parto admin
group: settings
order: 40
contexts: settings.vendor
summary: Parto only – approve company registrations, set up companies, switch licences and bill them.
keywords: Parto admin, registration, company request, approve, module, licence, license
audience: Parto
---

Only the Parto account sees this area.

- **Open company requests:** check new registrations and **approve** them (the contact person gets an e-mail with a code) or **decline**.
- **Create new company:** for a company won directly – company, contact person, e-mail, language. The person gets the same e-mail with a code.
- **Licence when approving:** when approving or creating a company you choose the [licences](help:settings-licence) and the number of users (suggested: only the base *Time & projects*, 1 user) and the **trial days** (suggested 30; empty = no trial). The new company gets them once the contact person creates it, and with trial days it starts in the state *Trial*.
- **Licences per company:** the base licence *Time & projects* (always on) and the add-ons *Offers & invoices*, *Integrations* (every invoice and order interface: [cXML](help:settings-einvoice#cxml), [Peppol](help:settings-einvoice#peppol), e-Rechnung.gv.at, receiving purchase orders), [Processes](help:processes) and *Project management*, plus the number of users (empty = no limit). Integrations can only be switched on with Offers & invoices. Peppol also needs a Peppol access in the cloud before it appears. [Purchase orders](help:orders) are no longer a licence of their own: the company switches them on under *General*.
- **Suspend a company:** when a company no longer uses the service, tick *Suspended* for it. The data stays stored in the cloud, but nobody of the company can read or change it any more; the app only shows a notice, and invitations, reports, orders and the customers' quota page are switched off. Untick it to lift the suspension; everything is as before. The base licence stays on.

## Licences and billing {#abrechnung}

The table **Licences and billing** shows per company its licences, users, price per month, **paid until** with the days left, and the state. Above it are the totals: companies, licence revenue per month, contracts due, open licence invoices, grace period and overdue.

| State | Meaning |
| --- | --- |
| Active | paid, more than 14 days left |
| Ends soon | ends within 14 days; the company's admin sees a notice |
| Grace period | ended, up to 14 days ago; everything keeps working |
| Overdue | grace period over – check whether to suspend |
| Trial / Trial over | trial running or over |
| No end date | no date set (e.g. Parto itself) |

**Contract …** opens per company: contract (trial, active, cancelled), rhythm (monthly or yearly in advance), paid until, trial until, discount or fixed price per month, and the **customer in this company** the licence invoice goes to. **+14 days**, **+30 days** and **+1 month/year** extend by hand at any time, also in test; a reason is required. The **history** shows every change to licences, users, contract and suspension with time, person and reason.

**Billing round:** contracts whose period ends within 30 days are listed below. **Create invoice …** opens the usual invoice form with one line per licence, one for the users and the discount. The invoice is sent like any other, by click. Once it is paid (payment receipt or bank import), **paid until** moves on by the period the next time this page is opened. Changes in the middle of a period apply at once and are billed from the next period.

**Price list:** price per licence and per user, net per month. A contract with a fixed price or discount differs from it.

`,Xn=`---
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
| Team & access | [Cloud](help:settings-cloud), [Roles & permissions](help:settings-roles), [App lock](help:settings-security), [Licence](help:settings-licence) |
| Data | [Backups, data security, data migration](help:settings-data) |
| Automation | [Processes](help:processes) (licence module) |

## First setup {#einrichtung}

For a new company in this order:

1. [Company](help:settings-company): name, address, VAT number, bank, currency, fiscal year.
2. [Number ranges](help:settings-numbers): format and last invoice number.
3. [Document design](help:settings-design): logo, colour, texts – check the preview.
4. [Standard rates](help:settings-rates): the usual hourly rates.
5. [Team](help:team): invite people and give them roles.
`,Jn=`---
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
- **Top right:** the user menu with your name – company, language, [My profile](help:profile), help, support, account and sign out.
- **Bottom left:** the sync with the cloud ("synced", "offline", conflicts). More under [Cloud and sync](help:sync).
- **Lists:** click a column title to sort; filter fields and saved views help you find things – see [Lists, filters and views](help:lists).

## Finding help {#hilfe}

- **Opening the help:** user menu top right › *Help* or the **F1** key. The help opens at the article for the page you are on – also for single areas such as one setting or an open project. All topics are listed on the left, the dot ● marks the article for your current page; *Help for this page* at the top takes you back there.
- **Search:** just type into the search field. It copes with typos, word parts (*number* finds *invoice number*) and common other words (*quote*, *bill*, *receipt*). Choose a result with ↑ ↓ and Enter; **/** or **Ctrl+K** jumps to the search field, **Esc** closes.
- **Support:** user menu › *Contact support* opens an e-mail to support@parto.at that already names the version, company and account. Describe briefly what you wanted to do and what happened; a screenshot helps.
- **The small "i"** next to some settings explains a task step by step; *Open in the help* shows the same guide in the help.

> **Tip:** The help belongs to your version of the app. What you read here matches the version you are using.
`,Qn=`---
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
`,$n=`---
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
- **Costs** (licence *Costs & calculation*, Finance and Admin): salary, admin share and the person rate they come to – see [Calculation](help:settings-costs#person).

## Teams {#teams}

Teams are groups in the company, e.g. consulting or accounting. A person can be in several teams. Lists can be filtered by team, and saved [views](help:lists#ansichten) can be shared with your own teams.

## Approval of hours {#freigabe}

*Hours must be approved before they are invoiced* switches [approvals](help:approvals) on for everyone. Hours of admins and managers need no approval. Single tasks can require approval even without this switch.

## Deactivate and delete {#deaktivieren}

Someone who has already signed in is **deactivated**: access ends, hours and history stay, and they can be reactivated later. Someone who never signed in can be deleted; the invitation expires. Your own account is deleted in your own [profile](help:profile#konto).

## Work as this person {#als-person}

With the permission *Work as another person* the app shows and books everything as the chosen person – e.g. to add missing hours. A banner shows this on every page; *Back to my account* ends it. The cloud still checks your own permissions and logs under your account.
`,Yn=`---
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

## Order line {#bestellung}

When the project has purchase orders from the customer (switch *Purchase orders* under General), every hour belongs to an **order line**. With several open lines the field *Order line* appears: *automatic* takes the role's line, the only one or the one you chose last – when that cannot be told, the app asks. Hours from the timer, calendar or an import without a line show up as a warning in the billing run. More under [Purchase orders](help:orders#stunden).

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
`,et=`---
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

## Customize the start page {#anpassen}

**Customize start page** (top right) makes "Today" your own dashboard:

- Order the sections by **dragging** the grip ⠿ (or with ↑ ↓) – quick entry, recorded today, my tasks, follow-ups,
  budget warnings, key figures and more.
- Choose **Full width** or **Half width** per section: two half-width sections in a row sit side by side.
- Hide with ✕; bring hidden sections back at the top with **+ name**. **Standard** restores the usual arrangement.
- **Save** applies to you only, but on all your devices. Notices (returned hours, overdue invoices …) always stay on
  top.

## Key figures {#kennzahlen}

Whoever may see invoices gets tiles with revenue in the fiscal year and in the current month (net, without cancelled), open items with the overdue part, hours of the month and open (not yet invoiced) hours with their value. *Open the report* jumps to the matching [report](help:reports).

Overdue invoices and reminders due are also shown here – see [E-mails & reminders](help:settings-mail#mahnungen).
`;function nt(n){return n.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function R(n){const r=[];let i="";const t=()=>{i&&(r.push({t:"text",v:i}),i="")};let e=0;for(;e<n.length;){const o=n[e];if(o==="`"){const a=n.indexOf("`",e+1);if(a>e){t(),r.push({t:"code",v:n.slice(e+1,a)}),e=a+1;continue}}if(o==="*"&&n[e+1]==="*"){const a=n.indexOf("**",e+2);if(a>e+1){t(),r.push({t:"b",c:R(n.slice(e+2,a))}),e=a+2;continue}}if(o==="*"&&n[e+1]!==" "){const a=n.indexOf("*",e+1);if(a>e+1&&n[a-1]!==" "){t(),r.push({t:"i",c:R(n.slice(e+1,a))}),e=a+1;continue}}if(o==="["){const a=n.indexOf("](",e+1),h=a>0?n.indexOf(")",a+2):-1;if(a>e&&h>a){t(),r.push({t:"link",href:n.slice(a+2,h).trim(),c:R(n.slice(e+1,a))}),e=h+1;continue}}i+=o,e++}return t(),r}function D(n){return n.map(r=>r.t==="text"||r.t==="code"?r.v:D(r.c)).join("")}const tt=n=>n.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(r=>r.trim());function rt(n){const r={};let i=n.replace(/\r\n?/g,`
`);const t=/^---\n([\s\S]*?)\n---\n?/.exec(i);if(t){for(const p of t[1].split(`
`)){const g=/^([a-z_]+):\s*(.*)$/i.exec(p.trim());g&&(r[g[1].toLowerCase()]=g[2].trim())}i=i.slice(t[0].length)}const e=i.split(`
`),o=[];let a=r.title??"";const h=new Set;let c=[];const w=()=>{c.length&&(o.push({t:"p",c:R(c.join(" "))}),c=[])};for(let p=0;p<e.length;p++){const m=e[p].trim();if(!m){w();continue}const f=/^(#{1,3})\s+(.*)$/.exec(m);if(f){w();let b=f[2],u="";const k=/\s*\{#([a-z0-9-]+)\}\s*$/i.exec(b);if(k&&(u=k[1],b=b.slice(0,k.index)),f[1].length===1){a||(a=b);continue}const A=R(b);u=u||nt(D(A));let z=2;const _=u;for(;h.has(u);)u=`${_}-${z++}`;h.add(u),o.push({t:"h",level:f[1].length,id:u,c:A});continue}const y=/^!\[([^\]]*)\]\(([^)]+)\)$/.exec(m);if(y){w(),o.push({t:"img",alt:y[1],src:y[2].trim()});continue}if(/^[-*]\s+/.test(m)||/^\d+[.)]\s+/.test(m)){w();const b=/^\d/.test(m),u=[];let k=null;for(;p<e.length;p++){const A=e[p],z=b?/^\s*\d+[.)]\s+(.*)$/.exec(A):/^\s*[-*]\s+(.*)$/.exec(A);if(z){k!==null&&u.push(R(k)),k=z[1];continue}if(A.trim()&&/^\s{2,}/.test(A)&&k!==null){k+=` ${A.trim()}`;continue}break}k!==null&&u.push(R(k)),p--,o.push({t:b?"ol":"ul",items:u});continue}if(m.startsWith(">")){w();const b=[[]];for(;p<e.length&&e[p].trim().startsWith(">");p++){const u=e[p].trim().replace(/^>\s?/,"");u?b[b.length-1].push(u):b.push([])}p--,o.push({t:"note",c:b.filter(u=>u.length).map(u=>R(u.join(" ")))});continue}if(m.startsWith("|")){w();const b=[];for(;p<e.length&&e[p].trim().startsWith("|");p++)b.push(tt(e[p]));p--;const u=b.filter((k,A)=>!(A===1&&k.every(z=>/^:?-{2,}:?$/.test(z))));o.push({t:"table",head:(u[0]??[]).map(R),rows:u.slice(1).map(k=>k.map(R))});continue}c.push(m)}return w(),{meta:r,title:a,blocks:o}}function it(n){switch(n.t){case"h":case"p":return D(n.c);case"ul":case"ol":return n.items.map(D).join(`
`);case"note":return n.c.map(D).join(`
`);case"table":return[n.head,...n.rows].map(r=>r.map(D).join(" · ")).join(`
`);case"img":return n.alt}}function I(n){return n.toLowerCase().replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u")}const st=["ungen","heiten","keiten","innen","ing","ung","heit","keit","ern","em","en","er","es","ed","e","n","s"];function V(n){if(n.length<=4)return n;for(const r of st)if(n.endsWith(r)&&n.length-r.length>=4)return n.slice(0,-r.length);return n}const at=/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu;function ne(n){const r=[];for(const i of n.matchAll(at)){const t=i.index??0,e=i[0].split(/[-']/);if(e.length>1){let o=t;for(const a of e)r.push({w:a,start:o,end:o+a.length}),o+=a.length+1;r.push({w:e.join(""),start:t,end:t+i[0].length})}else r.push({w:i[0],start:t,end:t+i[0].length})}return r}const J=n=>ne(n).map(r=>V(I(r.w))).filter(r=>r.length>0),ot=[["Rechnung","Faktura","Faktur","Honorarnote"],["Angebot","Offerte","Kostenvoranschlag","Kostenschätzung"],["Zeiten","Stunden","Zeiterfassung","Zeiteintrag","Buchung","Arbeitszeit"],["Reisekosten","Spesen","Ausgabe","Beleg","Auslagen"],["Mahnung","Zahlungserinnerung","Mahnwesen"],["Unternehmen","Firma","Betrieb"],["Kunde","Auftraggeber","Klient"],["Projekt","Auftrag"],["Freigabe","Genehmigung","freigeben"],["Gutschrift","Storno","stornieren"],["Einstellungen","Konfiguration","Optionen"],["Passwort","Kennwort"],["Abmelden","Logout"],["Anmelden","Login","Einloggen"],["Automatisierung","Abläufe","Ablauf","Workflow","Prozess"],["Stundenkontingent","Kontingent","Stundenpool","Stundenkonto"],["USt","MwSt","Umsatzsteuer","Mehrwertsteuer"],["Mail","E-Mail"],["Löschen","Entfernen"],["Cluster","Tag","Schlagwort"],["Zahlungseingang","Zahlung","Überweisung"],["Kontoauszug","Bankauszug","Bank"],["Satz","Stundensatz","Tagsatz","Preis"],["Mitarbeiter","Benutzer","Kollege","Person"],["Handy","Smartphone","Mobil","Android"],["Sicherung","Backup"],["Auswertung","Bericht","Report"],["invoice","bill"],["offer","quote","proposal","estimate"],["time","hours","timesheet","entry"],["expense","receipt","travel"],["reminder","dunning"],["company","firm","organisation","organization","business"],["approval","approve"],["credit","cancel"],["process","workflow","automation"],["quota","retainer"],["VAT","tax"],["sign","login","log"],["delete","remove"],["employee","user","colleague","member"],["phone","mobile","android"],["backup","restore"],["report","analysis"]],Z=new Map;for(const n of ot){const r=n.map(i=>V(I(i.replace(/[-\s]/g,""))));for(const i of r)Z.set(i,[...new Set([...Z.get(i)??[],...r.filter(t=>t!==i)])])}function Q(n,r,i){if(Math.abs(n.length-r.length)>i)return i+1;const t=Array.from({length:n.length+1},(e,o)=>[o,...Array(r.length).fill(0)]);for(let e=0;e<=r.length;e++)t[0][e]=e;for(let e=1;e<=n.length;e++){let o=1/0;for(let a=1;a<=r.length;a++){const h=n[e-1]===r[a-1]?0:1;let c=Math.min(t[e-1][a]+1,t[e][a-1]+1,t[e-1][a-1]+h);e>1&&a>1&&n[e-1]===r[a-2]&&n[e-2]===r[a-1]&&(c=Math.min(c,t[e-2][a-2]+1)),t[e][a]=c,c<o&&(o=c)}if(o>i)return i+1}return t[n.length][r.length]}const dt=n=>n>=8?2:n>=4?1:0;function lt(n,r){if(n===r)return 1;if(n.length>=2&&r.startsWith(n))return .85;if(n.length>=4&&r.includes(n))return .65;if(r.length>=5&&n.length>r.length&&n.includes(r))return .45;const i=dt(n.length);if(i){const t=Q(n,r,i);if(t<=i)return .75-.15*t;if(n.length>=5&&r.length>n.length&&Q(n,r.slice(0,n.length),1)<=1)return .5}return 0}const T={title:3,heading:5,keywords:4,text:1};class ht{constructor(r){N(this,"sections");N(this,"postings",new Map);N(this,"folded");this.sections=r,this.folded=r.map(i=>I(`${i.heading} ${i.text}`)),r.forEach((i,t)=>{const e=(o,a)=>{for(const h of J(o??"")){let c=this.postings.get(h);c||this.postings.set(h,c=new Map);const w=c.get(t)??0;c.set(t,w+a/(1+w/4))}};e(i.title,i.anchor?T.title/3:T.title),e(i.heading,i.anchor?T.heading:0),e(i.keywords,i.anchor?T.keywords/4:T.keywords),e(i.text,T.text)})}expand(r){const i=new Map,t=(e,o)=>{for(const a of this.postings.keys()){const h=lt(e,a)*o;h>(i.get(a)??0)&&i.set(a,h)}};t(r,1);for(const e of Z.get(r)??[])t(e,.8);return i}search(r,i=20){var p;const t=[...new Set(J(r))].filter(g=>g.length>=2||/\d/.test(g));if(!t.length)return[];const e=this.sections.length,o=new Map;for(const g of t){const m=new Map;for(const[f,y]of this.expand(g)){if(y<=0)continue;const b=this.postings.get(f),u=Math.log(1+e/b.size);for(const[k,A]of b){const z=y*A*u;z>(((p=m.get(k))==null?void 0:p.s)??0)&&m.set(k,{s:z,t:f})}}for(const[f,{s:y,t:b}]of m){const u=o.get(f)??{score:0,matched:0,terms:new Set};u.score+=y,u.matched+=1,u.terms.add(b),o.set(f,u)}}const a=[...o.values()].some(g=>g.matched===t.length),h=t.length>1?I(r.trim()):"",c=new Map;for(const[g,m]of o){if(a&&m.matched<t.length)continue;const f=this.sections[g];let y=m.score*(m.matched/t.length)**2;h&&this.folded[g].includes(h)&&(y*=1.5);const b={anchor:f.anchor,heading:f.heading,score:y,snippet:ut(f.text,m.terms)},u=c.get(f.article)??{article:f.article,title:f.title,score:0,sections:[],terms:[]};u.sections.push(b),u.terms=[...new Set([...u.terms,...m.terms])],c.set(f.article,u)}const w=[...c.values()];for(const g of w)g.sections.sort((m,f)=>f.score-m.score),g.score=g.sections[0].score+.25*g.sections.slice(1).reduce((m,f)=>m+f.score,0),g.sections=g.sections.slice(0,3);return w.sort((g,m)=>m.score-g.score).slice(0,i)}}function te(n,r){const i=new Set(r);if(!i.size)return[];const t=[];for(const e of ne(n)){const o=V(I(e.w));(i.has(o)||[...i].some(a=>a.length>=4&&o.length>a.length&&o.includes(a)))&&(t.length&&t[t.length-1][1]>=e.start?t[t.length-1][1]=Math.max(t[t.length-1][1],e.end):t.push([e.start,e.end]))}return t}function ut(n,r,i=200){const t=n.replace(/\s+/g," ").trim(),e=te(t,r);let o=0;e.length&&e[0][0]>i/3&&(o=t.lastIndexOf(" ",e[0][0]-i/4),o=o<0?0:o+1);let a=Math.min(t.length,o+i);if(a<t.length){const g=t.lastIndexOf(" ",a);g>o+i/2&&(a=g)}const h=o>0?"… ":"",c=a<t.length?" …":"",w=t.slice(o,a),p=h.length-o;return{text:h+w+c,marks:e.filter(([g,m])=>g>=o&&m<=a).map(([g,m])=>[g+p,m+p])}}const re=[{id:"start",de:"Erste Schritte",en:"Getting started"},{id:"work",de:"Zeiten & Reisekosten",en:"Time & expenses"},{id:"sales",de:"Kunden & Angebote",en:"Customers & offers"},{id:"projects",de:"Projekte",en:"Projects"},{id:"billing",de:"Abrechnung & Rechnungen",en:"Billing & invoices"},{id:"reports",de:"Auswertungen",en:"Reports"},{id:"admin",de:"Team & Verwaltung",en:"Team & administration"},{id:"settings",de:"Einstellungen",en:"Settings"},{id:"howto",de:"Schritt-für-Schritt-Anleitungen",en:"Step-by-step guides"}],ct=Object.assign({"./de/approvals.md":he,"./de/cockpit.md":ue,"./de/custom-reports.md":ce,"./de/customers.md":ge,"./de/expenses.md":me,"./de/invoices.md":pe,"./de/items.md":fe,"./de/large.md":be,"./de/lists.md":we,"./de/offers.md":ke,"./de/orders.md":ye,"./de/payments.md":ve,"./de/phone.md":Ae,"./de/plan.md":Se,"./de/portal.md":ze,"./de/processes.md":Pe,"./de/profile.md":je,"./de/projects.md":Be,"./de/quota.md":Re,"./de/reports.md":Ee,"./de/run.md":De,"./de/settings-appdesign.md":Me,"./de/settings-calendar.md":Te,"./de/settings-cloud.md":xe,"./de/settings-company.md":Ke,"./de/settings-costs.md":Fe,"./de/settings-data.md":Ie,"./de/settings-design.md":Ce,"./de/settings-einvoice.md":_e,"./de/settings-expenses.md":Ne,"./de/settings-fx.md":Ue,"./de/settings-general.md":We,"./de/settings-interfaces.md":Ze,"./de/settings-licence.md":Ve,"./de/settings-mail.md":Le,"./de/settings-numbers.md":Ge,"./de/settings-rates.md":Oe,"./de/settings-roles.md":He,"./de/settings-security.md":qe,"./de/settings-signatures.md":Xe,"./de/settings-tags.md":Je,"./de/settings-units-vat.md":Qe,"./de/settings-vendor.md":$e,"./de/settings.md":Ye,"./de/start.md":en,"./de/sync.md":nn,"./de/team.md":tn,"./de/time.md":rn,"./de/today.md":sn,"./en/approvals.md":an,"./en/cockpit.md":on,"./en/custom-reports.md":dn,"./en/customers.md":ln,"./en/expenses.md":hn,"./en/invoices.md":un,"./en/items.md":cn,"./en/large.md":gn,"./en/lists.md":mn,"./en/offers.md":pn,"./en/orders.md":fn,"./en/payments.md":bn,"./en/phone.md":wn,"./en/plan.md":kn,"./en/portal.md":yn,"./en/processes.md":vn,"./en/profile.md":An,"./en/projects.md":Sn,"./en/quota.md":zn,"./en/reports.md":Pn,"./en/run.md":jn,"./en/settings-appdesign.md":Bn,"./en/settings-calendar.md":Rn,"./en/settings-cloud.md":En,"./en/settings-company.md":Dn,"./en/settings-costs.md":Mn,"./en/settings-data.md":Tn,"./en/settings-design.md":xn,"./en/settings-einvoice.md":Kn,"./en/settings-expenses.md":Fn,"./en/settings-fx.md":In,"./en/settings-general.md":Cn,"./en/settings-interfaces.md":_n,"./en/settings-licence.md":Nn,"./en/settings-mail.md":Un,"./en/settings-numbers.md":Wn,"./en/settings-rates.md":Zn,"./en/settings-roles.md":Vn,"./en/settings-security.md":Ln,"./en/settings-signatures.md":Gn,"./en/settings-tags.md":On,"./en/settings-units-vat.md":Hn,"./en/settings-vendor.md":qn,"./en/settings.md":Xn,"./en/start.md":Jn,"./en/sync.md":Qn,"./en/team.md":$n,"./en/time.md":Yn,"./en/today.md":et}),M=(n,r)=>n==="en"?r.en:r.de;function gt(n){return Object.keys(X).map((r,i)=>{const t=X[r],e=[];return t.intro&&e.push({t:"p",c:[{t:"text",v:M(n,t.intro)}]}),t.sections.forEach((o,a)=>{o.title&&e.push({t:"h",level:2,id:`s${a+1}`,c:[{t:"text",v:M(n,o.title)}]}),e.push({t:"ol",items:o.steps.map(h=>[{t:"text",v:M(n,h.text)+(h.hint?` (${M(n,h.hint)})`:"")}])})}),t.note&&e.push({t:"note",c:[[{t:"text",v:M(n,t.note)}]]}),{id:mt(r),lang:n,title:M(n,t.title),summary:t.intro?M(n,t.intro):"",group:"howto",order:i,contexts:[{ctx:`howto:${r}`,anchor:""}],keywords:"",audience:"",blocks:e}})}const mt=n=>`howto-${n.replace(/[^a-z0-9]+/gi,"-")}`,$=new Map;function C(n){const r=$.get(n);if(r)return r;const i=[];for(const[e,o]of Object.entries(ct)){const a=/^\.\/(de|en)\/([a-z0-9-]+)\.md$/.exec(e);if(!a||a[1]!==n)continue;const h=rt(o);i.push({id:a[2],lang:n,title:h.title||a[2],summary:h.meta.summary??"",group:h.meta.group??"start",order:Number(h.meta.order??100),contexts:(h.meta.contexts??"").split(",").map(c=>c.trim()).filter(Boolean).map(c=>{const[w,p=""]=c.split("#");return{ctx:w,anchor:p}}),keywords:h.meta.keywords??"",audience:h.meta.audience??"",blocks:h.blocks})}i.push(...gt(n));const t=e=>{const o=re.findIndex(a=>a.id===e);return o<0?99:o};return i.sort((e,o)=>t(e.group)-t(o.group)||e.order-o.order||e.title.localeCompare(o.title)),$.set(n,i),i}function W(n,r){return C(n).find(i=>i.id===r)??C(n==="de"?"en":"de").find(i=>i.id===r)}function pt(n,r){const i=C(n);for(let t=r;t;t=t.includes(".")?t.slice(0,t.lastIndexOf(".")):"")for(const e of i){const o=e.contexts.find(a=>a.ctx===t);if(o)return{id:e.id,anchor:o.anchor}}return{id:"start",anchor:""}}function ft(n){const r=[];for(const i of C(n)){let t={article:i.id,anchor:"",title:i.title,heading:i.title,keywords:i.keywords,text:i.summary};for(const e of i.blocks)e.t==="h"?(r.push(t),t={article:i.id,anchor:e.id,title:i.title,heading:D(e.c),keywords:i.keywords,text:""}):t.text+=`${t.text?`
`:""}${it(e)}`;r.push(t)}return r}const Y=new Map;function bt(n){let r=Y.get(n);return r||Y.set(n,r=new ht(ft(n))),r}const wt=n=>/^(https?:|data:)/.test(n)?n:`/help/${n}`;function kt({v:n,marks:r}){const i=r!=null&&r.length?te(n,r):[];if(!i.length)return s.jsx(s.Fragment,{children:n});const t=[];let e=0;return i.forEach(([o,a],h)=>{o>e&&t.push(n.slice(e,o)),t.push(s.jsx("mark",{children:n.slice(o,a)},h)),e=a}),e<n.length&&t.push(n.slice(e)),s.jsx(s.Fragment,{children:t})}function B({c:n,open:r,marks:i}){return s.jsx(s.Fragment,{children:n.map((t,e)=>{if(t.t==="text")return s.jsx(kt,{v:t.v,marks:i},e);if(t.t==="code")return s.jsx("code",{children:t.v},e);if(t.t==="b")return s.jsx("b",{children:s.jsx(B,{c:t.c,open:r,marks:i})},e);if(t.t==="i")return s.jsx("em",{children:s.jsx(B,{c:t.c,open:r,marks:i})},e);const o=t.href;if(o.startsWith("help:")){const[a,h=""]=o.slice(5).split("#");return s.jsx("a",{href:`#help-${a}`,className:"hc-link",onClick:c=>{c.preventDefault(),r(a,h)},children:s.jsx(B,{c:t.c,open:r,marks:i})},e)}return s.jsx("a",{href:o,target:"_blank",rel:"noreferrer noopener",children:s.jsx(B,{c:t.c,open:r,marks:i})},e)})})}function yt({blocks:n,open:r,marks:i}){return s.jsx(s.Fragment,{children:n.map((t,e)=>{switch(t.t){case"h":return t.level===2?s.jsx("h2",{id:`hc-${t.id}`,children:s.jsx(B,{c:t.c,open:r,marks:i})},e):s.jsx("h3",{id:`hc-${t.id}`,children:s.jsx(B,{c:t.c,open:r,marks:i})},e);case"p":return s.jsx("p",{children:s.jsx(B,{c:t.c,open:r,marks:i})},e);case"ul":return s.jsx("ul",{children:t.items.map((o,a)=>s.jsx("li",{children:s.jsx(B,{c:o,open:r,marks:i})},a))},e);case"ol":return s.jsx("ol",{className:"hc-steps",children:t.items.map((o,a)=>s.jsx("li",{children:s.jsx(B,{c:o,open:r,marks:i})},a))},e);case"note":return s.jsx("div",{className:"hc-note",children:t.c.map((o,a)=>s.jsx("p",{children:s.jsx(B,{c:o,open:r,marks:i})},a))},e);case"table":return s.jsx("div",{className:"hc-table",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsx("tr",{children:t.head.map((o,a)=>s.jsx("th",{className:"nosort",children:s.jsx(B,{c:o,open:r})},a))})}),s.jsx("tbody",{children:t.rows.map((o,a)=>s.jsx("tr",{children:o.map((h,c)=>s.jsx("td",{children:s.jsx(B,{c:h,open:r,marks:i})},c))},a))})]})},e);case"img":return s.jsxs("figure",{className:"hc-fig",children:[s.jsx("img",{src:wt(t.src),alt:t.alt,loading:"lazy"}),t.alt&&s.jsx("figcaption",{children:t.alt})]},e)}})})}const vt=new Set(Object.keys(ee));function jt({req:n,ctx:r,go:i,onClose:t}){var q;const{t:e,lang:o}=de(),{can:a}=le(),h=o==="en"?"en":"de",c=S.useMemo(()=>pt(h,r),[h,r]),[w,p]=S.useState(n.article?{id:n.article,anchor:n.anchor??""}:c),[g,m]=S.useState([]),[f,y]=S.useState(n.query??""),[b,u]=S.useState(0),[k,A]=S.useState(!1),z=S.useRef(null),_=S.useRef(null),P=W(h,w.id)??W(h,"start"),L=((q=W(h,c.id))==null?void 0:q.title)??"",j=S.useMemo(()=>f.trim()?bt(h).search(f,30):null,[f,h]),U=S.useMemo(()=>(j??[]).flatMap(d=>d.sections.map(l=>({r:d,s:l}))),[j]),x=(d,l="",v)=>{m(E=>[...E,{id:w.id,anchor:w.anchor}].slice(-30)),p({id:d,anchor:l,marks:v}),y(""),A(!1)},G=()=>{const d=g[g.length-1];d&&(m(g.slice(0,-1)),p(d),y(""))};S.useEffect(()=>{var l;if(j)return;const d=w.anchor?document.getElementById(`hc-${w.anchor}`):null;d?d.scrollIntoView({block:"start"}):(l=_.current)==null||l.scrollTo({top:0})},[w,j]),S.useEffect(()=>{u(0)},[f]),S.useEffect(()=>{var d;(d=z.current)==null||d.focus()},[]),S.useEffect(()=>{const d=l=>{var E,F;if(l.key==="Escape"){l.preventDefault(),l.stopPropagation(),f?y(""):t();return}const v=((E=l.target)==null?void 0:E.tagName)==="INPUT";if(l.key==="/"&&!v||(l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="k"){l.preventDefault(),(F=z.current)==null||F.focus();return}l.altKey&&l.key==="ArrowLeft"&&(l.preventDefault(),G())};return window.addEventListener("keydown",d,!0),()=>window.removeEventListener("keydown",d,!0)});const ie=d=>{if(U.length){if(d.key==="ArrowDown")d.preventDefault(),u(l=>Math.min(U.length-1,l+1));else if(d.key==="ArrowUp")d.preventDefault(),u(l=>Math.max(0,l-1));else if(d.key==="Enter"){d.preventDefault();const l=U[b];l&&x(l.r.article,l.s.anchor,l.r.terms)}}};S.useEffect(()=>{var d;(d=document.getElementById(`hc-r${b}`))==null||d.scrollIntoView({block:"nearest"})},[b]);const K=(d=>{for(const l of d.contexts){if(l.ctx===r)return null;const[v,E]=l.ctx.split(".");if(!vt.has(v))continue;const F=ee[v];if(!(F&&!a(F))){if(v==="settings"&&E)return{view:"settings",tab:E};if(!E)return{view:v}}}return null})(P),O=P.blocks.filter(d=>d.t==="h"&&d.level===2).map(d=>d.t==="h"?{id:d.id,text:D(d.c)}:null).filter(Boolean),se=re.map(d=>({...d,items:C(h).filter(l=>l.group===d.id)})).filter(d=>d.items.length);let H=-1;return s.jsx("div",{className:"overlay hc-overlay",role:"presentation",onMouseDown:d=>{d.target===d.currentTarget&&t()},children:s.jsxs("div",{className:"hc-shell",role:"dialog","aria-modal":"true","aria-label":e("help.title"),children:[s.jsxs("div",{className:"hc-top",children:[s.jsxs("button",{type:"button",className:"btn ghost sm hc-navbtn","aria-expanded":k,onClick:()=>A(d=>!d),children:["☰ ",e("help.allTopics")]}),s.jsxs("div",{className:"hc-brand",children:[s.jsx("b",{children:e("help.title")}),L&&s.jsx("span",{className:"muted",children:e("help.forPage",{p:L})})]}),s.jsxs("div",{className:"hc-search",children:[s.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("path",{d:"M20 20l-3.5-3.5"})]}),s.jsx("input",{ref:z,type:"search",value:f,onChange:d=>y(d.target.value),onKeyDown:ie,placeholder:e("help.search"),"aria-label":e("help.search"),"aria-controls":"hc-results"})]}),(w.id!==c.id||j)&&s.jsx("button",{type:"button",className:"btn ghost sm",onClick:()=>x(c.id,c.anchor),children:e("help.toPage")}),s.jsx("button",{type:"button",className:"dialog-close","aria-label":e("common.close"),title:`${e("common.close")} (Esc)`,onClick:t,children:"×"})]}),s.jsxs("div",{className:"hc-body",children:[s.jsx("nav",{className:`hc-nav${k?" open":""}`,"aria-label":e("help.allTopics"),children:se.map(d=>s.jsxs("div",{className:"hc-group",children:[s.jsx("div",{className:"hc-group-h",children:h==="en"?d.en:d.de}),s.jsx("ul",{children:d.items.map(l=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:l.id===P.id&&!j?"on":"","aria-current":l.id===P.id?"page":void 0,onClick:()=>x(l.id),children:[l.title,l.id===c.id&&s.jsx("span",{className:"hc-here",title:e("help.thisPage"),children:"●"})]})},l.id))})]},d.id))}),s.jsx("div",{className:"hc-main",ref:_,children:j?s.jsxs("div",{id:"hc-results",className:"hc-results",role:"listbox","aria-label":e("help.results",{n:String(j.length)}),children:[s.jsx("div",{className:"hc-count muted",children:j.length?e("help.results",{n:String(j.length)}):""}),!j.length&&s.jsx("div",{className:"empty",children:e("help.noResults")}),j.map(d=>s.jsxs("section",{className:"hc-hit",children:[s.jsx("h3",{children:d.title}),d.sections.map(l=>{H++;const v=H;return s.jsxs("button",{type:"button",id:`hc-r${v}`,role:"option","aria-selected":v===b,className:v===b?"sel":"",onMouseEnter:()=>u(v),onClick:()=>x(d.article,l.anchor,d.terms),children:[l.anchor&&s.jsx("span",{className:"hc-hit-h",children:l.heading}),s.jsx("span",{className:"hc-snip",children:At(l.snippet.text,l.snippet.marks)})]},l.anchor||"_")})]},d.article))]}):s.jsxs("article",{className:"hc-article",lang:P.lang,children:[g.length>0&&s.jsxs("button",{type:"button",className:"btn ghost sm hc-back",onClick:G,children:["← ",e("help.back")]}),s.jsx("h1",{children:P.title}),(P.audience||K)&&s.jsxs("div",{className:"hc-meta",children:[P.audience&&s.jsx("span",{className:"pill",children:e("help.audience",{a:P.audience})}),K&&s.jsxs("button",{type:"button",className:"btn sm",onClick:()=>{t(),i(K.view,K.tab?{settingsTab:K.tab}:void 0)},children:[e("help.goTo")," →"]})]}),P.summary&&s.jsx("p",{className:"hc-summary",children:P.summary}),O.length>2&&s.jsxs("nav",{className:"hc-toc","aria-label":e("help.contents"),children:[s.jsx("span",{children:e("help.contents")}),O.map(d=>s.jsx("a",{href:`#hc-${d.id}`,onClick:l=>{var v;l.preventDefault(),p({id:P.id,anchor:d.id}),(v=document.getElementById(`hc-${d.id}`))==null||v.scrollIntoView({block:"start"})},children:d.text},d.id))]}),s.jsx(yt,{blocks:P.blocks,open:(d,l)=>x(d,l),marks:w.marks})]})})]})]})})}function At(n,r){const i=[];let t=0;return r.forEach(([e,o],a)=>{e>t&&i.push(n.slice(t,e)),i.push(s.jsx("mark",{children:n.slice(e,o)},a)),t=o}),i.push(n.slice(t)),i}export{jt as default};
