import React, { useState, useEffect } from 'react';
import { Moon, Sparkles, BookOpen, RotateCcw } from 'lucide-react';

const cards = [
  { id: 1, name: "Artemis", category: "Göttin", symbol: "bow", image: "Artemis mit gespanntem Bogen im silbernen Wald", pastEcho: "Unabhängigkeit war einmal dein Schutz und deine Sprache", presentTouch: "Etwas in dir kennt nur einen einzigen Pfad, und das ist deiner", pathEssence: "den Weg der eigenen Spur, der ungezähmten Klarheit, der einsamen Wahrheit", futureMove: "Etwas Freies wartet auf dich, jenseits dessen, was andere erwarten", meaning: "Die Jägerin, Hüterin der Wildnis und der jungen Mädchen. Sie steht für Unabhängigkeit, Selbstbestimmung und die wilde, ungezähmte Kraft in dir.", message: "Vertraue deinem Instinkt. Du bist bereits ganz und vollständig. Gehe deinen eigenen Weg, auch wenn er einsam erscheint.", dailyReading: "Artemis erscheint heute als Hüterin deiner Wildnis und richtet deinen Blick auf das, was nur dir gehört. Etwas in deiner Umgebung zeigt sein wahres Gesicht erst, wenn du aufhörst, dich nach anderen zu richten, und deinem eigenen Instinkt vertraust. Alte Bedürfnisse nach Bestätigung lösen sich langsam aus dir und machen Platz für eine Klarheit, die längst in deinen Knochen wohnt. Folge heute dem Pfad, der nur dich kennt, denn genau dort findet dich Artemis." },
  { id: 2, name: "Persephone", category: "Göttin", symbol: "pomegranate", image: "Persephone mit dem Granatapfel in der Hand", pastEcho: "Die Dualität zwischen Licht und Schatten hat dich einst geformt", presentTouch: "Etwas zwischen den Welten in dir verlangt nach Anerkennung", pathEssence: "den Weg der Tiefe, der Verwandlung, der Rückkehr aus dem Verborgenen", futureMove: "Eine Krone wartet auf dich, doch sie wird im Dunkeln geschmiedet", meaning: "Königin der Unterwelt und Göttin des Frühlings. Sie verkörpert die Dualität zwischen Licht und Schatten.", message: "Du wandelst zwischen den Welten. Deine Schatten sind deine Verbündeten, deine Krone. Umarme beide Seiten von dir.", dailyReading: "Persephone erscheint heute als Königin zwischen Licht und Schatten und richtet deinen Blick auf das, was du in dir noch nicht zusammenführen wolltest. Etwas in deiner Welt offenbart heute beide Seiten gleichzeitig, das Süße und das Bittere, und beide gehören dazu. Alte Anstrengungen, dich nur in einer Hälfte zu zeigen, lösen sich langsam, und etwas in dir wird ganz. Folge heute dem, was sich nach Wahrheit anfühlt, auch wenn es nicht nur hell ist." },
  { id: 3, name: "Nyx", category: "Göttin", symbol: "night", image: "Nyx, in einen Mantel aus Sternen gehüllt", pastEcho: "Die Nacht hat dich einmal mehr gelehrt als jeder Tag", presentTouch: "Etwas Uraltes in dir spricht, sobald die Welt still wird", pathEssence: "den Weg der Mysterien, der schweigenden Weisheit, des dunklen Wissens", futureMove: "Etwas, das du nicht in Worte fassen kannst, kommt langsam in Reichweite", meaning: "Urgöttin der Nacht, Mutter der Schicksalsmächte. Sie ist das Mysterium, das allem vorausgeht.", message: "In der Dunkelheit liegt deine größte Weisheit. Höre auf das, was die Nacht dir flüstert.", dailyReading: "Nyx erscheint heute als Urgöttin der Nacht und richtet deinen Blick auf das, was du nur in tiefer Stille hören kannst. Etwas in dir flüstert seit Tagen, doch erst in der Dämmerung wirst du es vernehmen. Alte laute Stimmen verlieren ihr Gewicht, und ein leises Wissen steigt langsam aus deinem Inneren auf. Folge heute der Ahnung, die kommt, sobald du das Licht dimmst." },
  { id: 4, name: "Hekate", category: "Göttin", symbol: "key", image: "Hekate an der Wegkreuzung mit der Fackel", pastEcho: "Ein Übergang in deinem Leben hat dich an einen heiligen Ort gebracht", presentTouch: "Eine Wegkreuzung in dir wartet auf deine Aufmerksamkeit", pathEssence: "den Weg der Schwelle, der Magie, der bewussten Wahl", futureMove: "Die Fackel in deiner Hand brennt aus einem Grund. Sie zeigt sich", meaning: "Göttin der Magie, Kreuzwege und Schwellen. Hüterin der Schlüssel zu den drei Welten.", message: "Du stehst an einer Wegkreuzung. Die Fackel in deiner Hand brennt aus einem Grund. Sie weist deinen Weg.", dailyReading: "Hekate erscheint heute als Hüterin der Schwellen und richtet deinen Blick auf eine Wegkreuzung, die du längst spürst. Etwas in deiner Umgebung verlangt nach einer Entscheidung, die nicht von außen kommen wird, sondern aus dir. Alte Unentschiedenheit löst sich langsam, und die Fackel in deiner Hand findet ihre Richtung. Folge heute dem Weg, der dich an die Schwelle ruft, denn genau dort hat Hekate auf dich gewartet." },
  { id: 5, name: "Selene", category: "Göttin", symbol: "moon", image: "Selene auf ihrem Silberwagen über dem Nachthimmel", pastEcho: "Stille Reflexion war einmal deine größte Kraft", presentTouch: "Etwas in dir möchte spiegeln, statt zu strahlen", pathEssence: "den Weg des leisen Leuchtens, der empfangenden Aufmerksamkeit", futureMove: "Ein sanftes Licht steigt auf, ohne dass du es jagen musst", meaning: "Die personifizierte Mondgöttin. Sie zieht den Silberwagen über den Nachthimmel.", message: "Du darfst leise leuchten wie der Mond. Es genügt, das zu reflektieren, was wahr ist.", dailyReading: "Selene erscheint heute als stille Mondgöttin und richtet deinen Blick auf die Kraft des Reflektierens. Etwas in deiner Welt verlangt nicht dein Strahlen, sondern dein leises Spiegeln dessen, was wahr ist. Alte Bemühungen, gesehen zu werden, lösen sich langsam, und eine andere Art von Präsenz steigt in dir auf. Folge heute dem leisen Leuchten, das genug ist." },
  { id: 6, name: "Lilith", category: "Göttin", symbol: "serpent", image: "Lilith mit aufgerichteter Schlange an ihrer Seite", pastEcho: "Ein Nein, das du einmal gesagt hast, trägt dich bis heute", presentTouch: "Etwas Ungebeugtes in dir verlangt nach voller Größe", pathEssence: "den Weg der rohen Wahrheit, der ungezähmten Macht, des unverhandelbaren Selbst", futureMove: "Etwas in dir richtet sich auf, und es lässt sich nicht mehr umstimmen", meaning: "Die erste Frau, die sich weigerte zu beugen. Sie ist die ungezähmte Macht, die rohe Wahrheit.", message: "Sage nein. Mit deiner ganzen Brust. Du wurdest erschaffen, um in voller Größe zu leben.", dailyReading: "Lilith erscheint heute als die Ungebeugte und richtet deinen Blick auf das, was du zu lange klein gemacht hast. Etwas in deiner Umgebung hat ein Nein verdient, das du längst hättest aussprechen sollen. Alte Anpassungen lösen sich langsam aus dir, und deine wahre Größe beginnt sich wieder zu strecken. Folge heute dem Impuls, der dich aufrichtet, auch wenn er unbequem ist." },
  { id: 7, name: "Morrigan", category: "Göttin", symbol: "raven", image: "Die Morrigan mit Raben über dem Schlachtfeld", pastEcho: "Souveränität hat sich in dir einmal durch einen Kampf gefunden", presentTouch: "Etwas in dir kennt den Unterschied zwischen Kampf und Krieg", pathEssence: "den Weg der Souveränität, des heiligen Streits, der unverhandelbaren Würde", futureMove: "Etwas in dir hört auf zu erklären und beginnt zu regieren", meaning: "Keltische Göttin des Krieges, des Schicksals und der Souveränität.", message: "Es gibt einen Kampf, den du führen musst. Mit dir selbst. Deine Souveränität bleibt unverhandelbar.", dailyReading: "Morrigan erscheint heute als Schicksalsgöttin und richtet deinen Blick auf einen Kampf, der nicht im Außen geführt wird, sondern in dir. Etwas in deiner Welt fordert deine Souveränität heraus, und sie bleibt unverhandelbar. Alte Versuche, dich zu rechtfertigen, lösen sich langsam, und eine königliche Stille tritt an ihre Stelle. Folge heute dem Wissen, dass du dich niemandem erklären musst, der dich nicht sehen will." },
  { id: 8, name: "Inanna", category: "Göttin", symbol: "star", image: "Inanna an den sieben Toren der Unterwelt", pastEcho: "Du hast einmal etwas zurückgelassen, das dich gerettet hat", presentTouch: "Etwas in dir steigt hinab, und es weiß, warum", pathEssence: "den Weg des Abstiegs, der Häutung, der königlichen Rückkehr", futureMove: "Du steigst wieder, doch nicht als die, die du warst", meaning: "Sumerische Königin des Himmels, die in die Unterwelt hinabstieg und transformiert zurückkehrte.", message: "Du gehst durch sieben Tore. Bei jedem lässt du etwas zurück. Vertraue dem Abstieg.", dailyReading: "Inanna erscheint heute als Königin des Abstiegs und richtet deinen Blick auf das, was du gerade loslassen musst, um weiterzugehen. Etwas in deiner Welt verlangt ein Stück Schmuck, das du am liebsten behalten würdest. Alte Identitäten lösen sich langsam an einem nach dem anderen Tor, und du steigst tiefer in dein wahres Sein. Folge heute dem Abstieg, denn am tiefsten Punkt erwartet dich deine Krönung." },
  { id: 9, name: "Kali", category: "Göttin", symbol: "skull", image: "Kali tanzend, ihre Klinge im Mondlicht", pastEcho: "Eine alte Illusion ist einmal in dir gestorben", presentTouch: "Etwas in dir ist bereit, sein Schwert zu erheben gegen das Falsche", pathEssence: "den Weg der Befreiung, der reinigenden Zerstörung, der heiligen Klarheit", futureMove: "Etwas wird fallen, und das ist gut. Was bleibt, ist wahr", meaning: "Hindu Göttin der Zerstörung und Befreiung. Sie tanzt auf dem Tod alter Illusionen.", message: "Etwas muss sterben, damit du leben kannst. Lass los. Der Sturm reinigt, was bleiben darf.", dailyReading: "Kali erscheint heute als heilige Zerstörerin und richtet deinen Blick auf das, was endlich sterben darf. Etwas in deinem Leben verlangt nach einem Ende, das du längst spürst, aber noch nicht ausgesprochen hast. Alte Illusionen lösen sich langsam unter ihrer Klinge, und was bleibt, ist wahr. Folge heute dem Sturm in dir, denn er reinigt, was bleiben darf." },
  { id: 10, name: "Diana", category: "Göttin", symbol: "stag", image: "Diana mit Hirschkuh und Halbmond an der Stirn", pastEcho: "Du hast einmal etwas Heiliges in dir bewahrt, als niemand sonst es sah", presentTouch: "Etwas in dir spürt, was geschützt werden muss", pathEssence: "den Weg der Hüterin, der wachsamen Stille, der heiligen Grenze", futureMove: "Du wirst zur Wächterin dessen, was du am meisten liebst", meaning: "Römische Göttin des Mondes und der Jagd, Beschützerin der Frauen.", message: "Schütze, was heilig ist. Besonders in dir selbst. Du bist deine eigene Wächterin.", dailyReading: "Diana erscheint heute als Hüterin des Heiligen und richtet deinen Blick auf das, was deinen Schutz verdient. Etwas in deiner Umgebung berührt einen geheiligten Raum in dir, der nicht für jeden offen ist. Alte Bereitschaft, dich überall zugänglich zu machen, löst sich langsam, und du beginnst, deine eigene Wächterin zu sein. Folge heute dem Instinkt, der dir zeigt, wo deine Grenze verläuft." },
  { id: 11, name: "Brigid", category: "Göttin", symbol: "flame", image: "Brigid mit Feuer in ihren Händen", pastEcho: "Eine Flamme hat in dir einmal etwas Neues entzündet", presentTouch: "Etwas in dir möchte heilen, dichten, schmieden", pathEssence: "den Weg der Schöpfung, der Hingabe und des inneren Brennens", futureMove: "Was durch dich entstehen will, verlangt Raum. Deine Kraft sucht eine Form", meaning: "Keltische Göttin des Feuers, der Heilung und der Poesie.", message: "Entzünde deine Flamme neu. Was du erschaffst, ist heilig.", dailyReading: "Brigid erscheint heute als Göttin des heiligen Feuers und richtet deinen Blick auf das, was durch dich entstehen will. Etwas in deinem Inneren brennt seit Tagen, und es verlangt nach einer Form, in die es sich gießen kann. Alte Zweifel an deiner Schöpfungskraft lösen sich langsam, und deine Hände finden zurück zu ihrem Werk. Folge heute dem Funken, den du noch nicht ganz ernst genommen hast." },
  { id: 12, name: "Freya", category: "Göttin", symbol: "falcon", image: "Freya auf ihrem Falkenwagen, das Herz weit offen", pastEcho: "Liebe und Stärke in dir waren einmal keine Gegensätze", presentTouch: "Etwas in dir möchte zugleich zart und tödlich sein", pathEssence: "den Weg der Vereinigung, der offenen Verteidigung, der ungeteilten Liebe", futureMove: "Etwas Geliebtes nähert sich dir, und es kennt deinen Namen", meaning: "Nordische Göttin der Liebe, Schönheit und des Krieges.", message: "Liebe und Krieg bilden eine Einheit. Du darfst zugewandt und gleichzeitig tödlich sein.", dailyReading: "Freya erscheint heute als Göttin der Liebe und des Krieges und richtet deinen Blick auf die Einheit dessen, was du getrennt hieltst. Etwas in deiner Welt verlangt, dass du gleichzeitig zugewandt und klar bleibst, ohne dich zu zerteilen. Alte Vorstellungen, dass Liebe weich und Stärke hart sein muss, lösen sich langsam. Folge heute dem Mut, beides zu sein, denn so warst du immer gemeint." },
  { id: 13, name: "Der Silberbogen", category: "Symbol", symbol: "bow_silver", image: "Der Silberbogen, gespannt zwischen Stille und Pfeil", pastEcho: "Eine Absicht, die du einmal klar formuliert hast, trägt noch heute", presentTouch: "Etwas in dir hält die Spannung, ohne zu schießen", pathEssence: "den Weg der reinen Absicht, des konzentrierten Willens, des präzisen Loslassens", futureMove: "Der Pfeil findet sein Ziel. Du musst nicht alles steuern", meaning: "Werkzeug der Präzision und Absicht. Spannung, Fokus und Loslassen.", message: "Ziele klar. Spanne nur, was du auch loslassen kannst. Deine Absicht ist deine schärfste Waffe.", dailyReading: "Der Silberbogen erscheint heute als Werkzeug der reinen Absicht und richtet deinen Blick auf das, was du wirklich willst. Etwas in deiner Welt verlangt deine ganze Konzentration, nicht mehr und nicht weniger. Alte zerstreute Bemühungen lösen sich langsam, und ein einziger klarer Pfeil findet seine Spannung in dir. Folge heute dem Ziel, das du klar siehst, und spanne nur, was du auch loslassen kannst." },
  { id: 14, name: "Der Pfeil", category: "Symbol", symbol: "arrow", image: "Der Pfeil im Flug, der nicht mehr zögert", pastEcho: "Eine Bewegung, die du einmal gewagt hast, ist nie mehr umgekehrt", presentTouch: "Etwas in dir weiß bereits, wohin", pathEssence: "den Weg der reinen Richtung, der entschlossenen Bewegung, des unaufhaltsamen Flugs", futureMove: "Es ist Zeit zu fliegen. Du wirst es im Bauch spüren", meaning: "Reine Richtung. Der Pfeil zögert nicht, fragt nicht, zweifelt nicht.", message: "Höre auf zu überdenken. Es ist Zeit zu fliegen. Du weißt bereits, wohin.", dailyReading: "Der Pfeil erscheint heute als reine Richtung und richtet deinen Blick auf das, wozu du längst bereit bist. Etwas in deinem Leben braucht keine weiteren Überlegungen, sondern Bewegung. Alte Schichten des Zweifelns lösen sich langsam aus dir, und eine klare Linie wird sichtbar. Folge heute dem ersten Impuls, der nicht zögert, denn er weiß, wohin er will." },
  { id: 15, name: "Der Kelch", category: "Symbol", symbol: "chalice", image: "Der Kelch, übervoll vom flüssigen Mondlicht", pastEcho: "Empfangen hat dich einmal genährt, als das Geben dich leerte", presentTouch: "Etwas in dir möchte gefüllt werden, ohne zu betteln", pathEssence: "den Weg des Empfangens, der heiligen Empfänglichkeit, des fließenden Übergangs", futureMove: "Dein Kelch wird gefüllt, übervoll, mehr als du dir zugestehen wolltest", meaning: "Gefäß der Empfänglichkeit und des heiligen Weiblichen.", message: "Du darfst empfangen. Lass dich füllen. Dein Kelch verdient es, übervoll zu sein.", dailyReading: "Der Kelch erscheint heute als heiliges Gefäß und richtet deinen Blick auf deine Empfänglichkeit. Etwas in deiner Welt möchte zu dir kommen, aber es kann nur, wenn du aufhörst, alles selbst tragen zu müssen. Alte Anstrengung, dich nur zu geben, löst sich langsam, und deine Hände öffnen sich nach oben. Folge heute dem, was dir entgegenkommt, und lass dich füllen, bis es übergeht." },
  { id: 16, name: "Krone aus Dornen", category: "Symbol", symbol: "thorns", image: "Die Krone aus Dornen, die Wunden zu Würde wandelt", pastEcho: "Eine Verletzung in dir hat dich heilig gemacht", presentTouch: "Etwas in dir trägt ein Diadem, das andere nicht sehen", pathEssence: "den Weg der durchgegangenen Wunde, der durchschimmernden Würde, der gekrönten Schmerzen", futureMove: "Was dich verletzt hat, wird zur Quelle, aus der andere trinken", meaning: "Symbol für jene, die durch Leid in ihre Macht hineingewachsen sind.", message: "Deine Narben sind dein Diadem. Was dich verletzt hat, hat dich auch gekrönt.", dailyReading: "Die Krone aus Dornen erscheint heute als Symbol gewandelten Schmerzes und richtet deinen Blick auf das, was dich durch Verletzung geformt hat. Etwas in deiner Geschichte wird heute nicht zur Wunde, sondern zum Diadem. Alte Scham über vergangene Brüche löst sich langsam, und eine stille Würde tritt an ihre Stelle. Folge heute der Erkenntnis, dass deine Narben Teil deiner Krönung sind." },
  { id: 17, name: "Der Schleier", category: "Symbol", symbol: "veil", image: "Der Schleier, der die Welten voneinander trennt", pastEcho: "Du hast einmal etwas verborgen gehalten, das dich beschützt hat", presentTouch: "Etwas in dir weiß, dass nicht alles ausgesprochen werden muss", pathEssence: "den Weg des Verborgenen, der gewahrten Mysterien, der schweigenden Kraft", futureMove: "Etwas zieht sich zurück, damit Wertvolleres an die Oberfläche kommen kann", meaning: "Die Membran zwischen den Welten. Was verschleiert ist, bleibt verborgen.", message: "Manches darf verborgen bleiben. Das Verborgene hat eigene Kraft.", dailyReading: "Der Schleier erscheint heute als Membran zwischen den Welten und richtet deinen Blick auf das, was nicht alles ans Licht muss. Etwas in deiner Umgebung möchte ausgesprochen werden, doch es trägt mehr Kraft, wenn es verborgen bleibt. Alte Pflicht zur Offenlegung löst sich langsam, und das Mysterium findet zurück zu seiner Macht. Folge heute der Versuchung, manches einfach für dich zu behalten." },
  { id: 18, name: "Der Spiegel", category: "Symbol", symbol: "mirror", image: "Der Spiegel, in dem du dir selbst begegnest", pastEcho: "Ein ehrlicher Blick in dich hat einmal alles verändert", presentTouch: "Etwas in dir möchte gesehen werden, vor allem von dir selbst", pathEssence: "den Weg der Selbsterkenntnis, der unausweichlichen Wahrheit, der inneren Begegnung", futureMove: "Du wirst sehen, was du lange umgangen hast. Es ist gut so", meaning: "Werkzeug der Wahrheit und Selbsterkenntnis.", message: "Schau hin. Wirklich hin. Was dich triggert, ist eine Tür zu dir selbst.", dailyReading: "Der Spiegel erscheint heute als Werkzeug der Wahrheit und richtet deinen Blick auf das, was du an dir selbst noch nicht ansehen wolltest. Etwas in deiner Umgebung triggert dich gerade, und genau das ist eine offene Tür zu dir selbst. Alte Vermeidung löst sich langsam, und ein ehrliches Sehen wird möglich. Folge heute dem Reflex, der dich am meisten reizt, denn er führt dich nach Hause." },
  { id: 19, name: "Der Schlüssel", category: "Symbol", symbol: "key_symbol", image: "Der Schlüssel, der lange in deiner Hand ruht", pastEcho: "Du hast einmal eine Tür geöffnet, durch die du heute noch gehst", presentTouch: "Etwas in dir hält bereits den Schlüssel zum Nächsten", pathEssence: "den Weg des bewussten Zugangs, der freiwilligen Öffnung, des entscheidenden Drehens", futureMove: "Eine Tür öffnet sich, doch nur, wenn du erkennst, dass du den Schlüssel trägst", meaning: "Zugang zum Verschlossenen.", message: "Du hältst bereits den Schlüssel. Die Frage lautet, ob du kannst oder ob du willst.", dailyReading: "Der Schlüssel erscheint heute als Zugang zum Verschlossenen und richtet deinen Blick auf das, was du längst öffnen könntest. Etwas in deinem Leben wartet auf eine bewusste Entscheidung, die nur du treffen kannst. Alte Frage nach dem Ob lösen sich langsam, und die Frage nach dem Wann wird klarer. Folge heute der Hand, die den Schlüssel schon eine Weile hält." },
  { id: 20, name: "Die Fackel", category: "Symbol", symbol: "torch", image: "Die Fackel, die nur den nächsten Schritt erhellt", pastEcho: "Du hast einmal anderen geleuchtet und dich dabei nicht verbrannt", presentTouch: "Etwas in dir weiß den Weg, auch wenn du ihn nicht ganz sehen kannst", pathEssence: "den Weg der inneren Führung, des selbstgetragenen Lichts, der vertrauten Dunkelheit", futureMove: "Du wirst andere leuchten, und du wirst dabei nicht verlöschen", meaning: "Licht in der Dunkelheit, getragen von jenen, die führen.", message: "Du leuchtest. Achte darauf, dass du dich selbst bewahrst.", dailyReading: "Die Fackel erscheint heute als Licht in der Dunkelheit und richtet deinen Blick auf den nächsten Schritt, nicht den ganzen Weg. Etwas in deiner Umgebung verlangt nicht deine Übersicht, sondern deine Anwesenheit im Hier. Alte Sorge um das Ganze löst sich langsam, und du beginnst nur das zu sehen, was du erleuchten kannst. Folge heute dem kleinen Lichtkreis, der reicht." },
  { id: 21, name: "Der Granatapfel", category: "Symbol", symbol: "pomegranate_sym", image: "Der Granatapfel, dessen Kerne dich binden", pastEcho: "Eine bewusste Wahl hat dich an einen Ort gebunden, den du nicht bereust", presentTouch: "Etwas in dir prüft genauer, was es in sich aufnimmt", pathEssence: "den Weg der bewussten Aufnahme, der gewählten Bindung, der heiligen Verpflichtung", futureMove: "Du wirst kosten, und es wird Teil von dir werden", meaning: "Frucht der Unterwelt und der Fruchtbarkeit.", message: "Was du isst, wird Teil von dir. Wähle bewusst.", dailyReading: "Der Granatapfel erscheint heute als Frucht der bewussten Wahl und richtet deinen Blick auf das, was du gerade in dich aufnimmst. Etwas in deiner Umgebung möchte Teil von dir werden, doch du kannst entscheiden, ob du daran teilhast. Alte Automatismen des Mitlaufens lösen sich langsam, und du beginnst zu wählen, was du in dich lässt. Folge heute der Bewusstheit, denn du wirst, was du isst." },
  { id: 22, name: "Der Blutmond", category: "Seltener Mond", symbol: "blood_moon", image: "Der Blutmond, schwer am Himmel hängend", pastEcho: "Ein Umbruch in dir hat einmal alles verändert, was du für sicher hieltest", presentTouch: "Dein Blut weiß schon, was dein Verstand noch nicht zugibt", pathEssence: "den Weg der uralten Magie, des kosmischen Umbruchs, der Zellenwahrheit", futureMove: "Etwas ordnet sich neu, tief unter allem Sichtbaren. Alte Stimmen verlieren Gewicht. Ein neuer Ruf wird stärker", meaning: "Seltener kosmischer Moment. Zeichen für Umbruch und uralte Magie.", message: "Etwas Großes verschiebt sich in dir. Dein Blut weiß es vor deinem Verstand.", dailyReading: "Der Blutmond erscheint heute als seltener kosmischer Moment und richtet deinen Blick auf eine tiefe Verschiebung in dir. Etwas in deinen Zellen weiß bereits, was dein Verstand noch nicht ausgesprochen hat. Alte Identitäten lösen sich langsam unter seinem schweren Licht, und etwas Uraltes wird wachgerüttelt. Folge heute der Ahnung, die nicht aus dem Kopf kommt, sondern aus dem Bauch." },
  { id: 23, name: "Die Wölfin", category: "Wesen", symbol: "wolf", image: "Die Wölfin, die ihren Atem im Schnee hinterlässt", pastEcho: "Ein Rudel hat dich einmal getragen, als du allein nicht mehr konntest", presentTouch: "Etwas in dir sucht jene, die deine Sprache sprechen", pathEssence: "den Weg der Zugehörigkeit, der treuen Bindung, des gemeinsamen Heulens", futureMove: "Dein Rudel findet dich. Du wirst sie an den Augen erkennen", meaning: "Die Anführerin des Rudels, treu und tödlich.", message: "Finde dein Rudel. Die wenigen, die deine Sprache sprechen.", dailyReading: "Die Wölfin erscheint heute als Anführerin des Rudels und richtet deinen Blick auf die wenigen, die deine Sprache wirklich sprechen. Etwas in deinem Umfeld zeigt heute, wer zu deinem Rudel gehört und wer nur in der Nähe steht. Alte Bemühungen, alle zu erreichen, lösen sich langsam, und du wendest dich denen zu, die antworten. Folge heute dem Heulen, das in dir aufsteigt, denn es ruft die Deinen." },
  { id: 24, name: "Die Hirschkuh", category: "Wesen", symbol: "doe", image: "Die Hirschkuh, regungslos zwischen den Bäumen", pastEcho: "Eine Wachsamkeit hat dich einmal davor bewahrt, falsch zu vertrauen", presentTouch: "Etwas in dir hört genauer hin, bevor es sich bewegt", pathEssence: "den Weg der wachsamen Zurückhaltung, der spürenden Stille, der bewussten Vorsicht", futureMove: "Die richtige Bewegung kommt zur richtigen Zeit. Du wirst sie erkennen", meaning: "Zurückhaltung, die Stärke ist.", message: "Deine Zurückhaltung zeugt von Stärke. Sei wachsam und gleichzeitig vertrauensvoll.", dailyReading: "Die Hirschkuh erscheint heute als Lehrerin der wachsamen Stille und richtet deinen Blick auf die Stärke des Zögerns. Etwas in deiner Umgebung möchte schnell entschieden werden, doch deine Zurückhaltung trägt Wahrheit in sich. Alte Furcht, als unentschieden zu wirken, löst sich langsam, und du erkennst, dass Lauschen auch Handlung ist. Folge heute dem inneren Stehenbleiben, denn es schützt dich." },
  { id: 25, name: "Die Eule", category: "Wesen", symbol: "owl", image: "Die Eule, deren Augen die Nacht durchdringen", pastEcho: "Stilles Beobachten hat dir einmal Wahrheiten gezeigt, die andere übersahen", presentTouch: "Etwas in dir hört mehr, als es spricht", pathEssence: "den Weg der nächtlichen Weisheit, der sehenden Stille, des wachen Schweigens", futureMove: "Eine Erkenntnis steigt langsam in dir auf, ohne Anstrengung", meaning: "Hüterin der Nachtweisheit.", message: "Höre mehr als du sprichst. Beobachte.", dailyReading: "Die Eule erscheint heute als Hüterin verborgener Wahrheiten und richtet deinen Blick auf das, was zwischen den Worten liegt. Etwas in deiner Umgebung zeigt sein wahres Gesicht erst in der Stille, fern von Ablenkung und schnellen Antworten. Alte Gedanken lösen sich langsam aus deinem Inneren und machen Platz für eine tiefere Erkenntnis, die längst auf dich gewartet hat. Folge heute dem Gefühl, das immer wiederkehrt, denn genau dort beginnt deine Botschaft." },
  { id: 26, name: "Die Rabin", category: "Wesen", symbol: "crow", image: "Die Rabin auf dem Ast zwischen den Welten", pastEcho: "Eine Vorahnung hat sich einmal als wahrer erwiesen als alle Logik", presentTouch: "Etwas in dir liest die Zeichen, die andere nicht sehen", pathEssence: "den Weg der prophetischen Wahrnehmung, der gelesenen Zeichen, der vertrauten Vorahnung", futureMove: "Eine Botschaft erreicht dich, und du wirst sie schon kennen, wenn sie kommt", meaning: "Botin zwischen den Welten.", message: "Achte auf die Zeichen. Sie sind überall. Vertraue deinen Vorahnungen.", dailyReading: "Die Rabin erscheint heute als Botin zwischen den Welten und richtet deinen Blick auf die Zeichen, die überall liegen. Etwas in deiner Umgebung ist heute kein Zufall, sondern eine Antwort, die du schon gefragt hast. Alte Skepsis gegenüber Vorahnungen löst sich langsam, und dein inneres Lesen wird klarer. Folge heute der ersten Eingebung, denn sie kommt nicht aus dem Nichts." },
  { id: 27, name: "Die Schlange", category: "Wesen", symbol: "serpent_sym", image: "Die Schlange, die ihre alte Haut zurücklässt", pastEcho: "Eine Häutung hat dich einmal befreit, auch wenn sie wehgetan hat", presentTouch: "Etwas Altes in dir wird durchsichtig und gleitet ab", pathEssence: "den Weg der Häutung, der wiederkehrenden Erneuerung, des freigegebenen Selbst", futureMove: "Was nicht mehr passt, fällt von dir, ohne dass du es greifen musst", meaning: "Symbol der Häutung und Wiedergeburt.", message: "Häute dich. Lass die alte Identität fallen.", dailyReading: "Die Schlange erscheint heute als Symbol der Häutung und richtet deinen Blick auf das, was du längst nicht mehr bist. Etwas in dir trägt eine Identität, die alt geworden ist und sich ablösen will. Alte Selbstbilder lösen sich langsam und gleiten ab wie eine durchsichtige Haut. Folge heute dem Drang, dich zu erneuern, und behalte nichts aus reiner Gewohnheit." },
  { id: 28, name: "Der Panther", category: "Wesen", symbol: "panther", image: "Der Panther, lautlos im Mondschatten", pastEcho: "Eine stille Stärke in dir hat dich einmal an dein Ziel getragen, ohne Aufsehen", presentTouch: "Etwas in dir weiß, wann Stille wirkungsvoller ist als Worte", pathEssence: "den Weg der Tiefe, der Würde und der lautlosen Entschlossenheit", futureMove: "Du wirst dort sein, bevor andere es bemerken", meaning: "Stille Kraft, die in den Schatten lebt.", message: "Du darfst leise sein und dennoch kraftvoll.", dailyReading: "Der Panther erscheint heute als stille Kraft im Schatten und richtet deinen Blick auf die Macht des Leisen. Etwas in deinem Umfeld zeigt heute, dass laut nicht stark ist und schweigend nicht schwach. Alte Vorstellungen, du müsstest dich zeigen, um wirksam zu sein, lösen sich langsam. Folge heute dem inneren Pfad des Panthers, der ankommt, bevor andere ihn bemerken." },
  { id: 29, name: "Die Motte", category: "Wesen", symbol: "moth", image: "Die Motte, die zur Flamme fliegt", pastEcho: "Eine Sehnsucht hat dich einmal verbrannt, und doch hast du sie nicht bereut", presentTouch: "Etwas in dir prüft, welchem Licht du wirklich folgst", pathEssence: "den Weg der gefährlichen Sehnsucht, des klaren Verlangens, der hellen Wahl", futureMove: "Du wirst erkennen, ob das Licht, dem du folgst, deines ist oder das eines anderen", meaning: "Geschöpf, das ins Licht fliegt, auch wenn es sie verbrennt.", message: "Frage dich, welches Licht du verfolgst. Ist es deines oder das eines anderen?", dailyReading: "Die Motte erscheint heute als Geschöpf der gefährlichen Sehnsucht und richtet deinen Blick auf das Licht, dem du folgst. Etwas in deinem Leben verlangt eine ehrliche Antwort darauf, ob das, was dich zieht, wirklich dir gehört. Alte fremde Begehren lösen sich langsam, und deine eigenen Sehnsüchte werden klarer. Folge heute nur dem Licht, das aus dir selbst kommt." },
  { id: 30, name: "Die Spinne", category: "Wesen", symbol: "spider", image: "Die Spinne, die Fäden des Schicksals webt", pastEcho: "Du hast einmal etwas geknüpft, das dich heute noch trägt", presentTouch: "Etwas in dir webt, ohne dass du es bemerkst", pathEssence: "den Weg der Weberin, der gestalteten Wirklichkeit, des bewussten Knüpfens", futureMove: "Dein Netz wird sichtbar, und es ist schöner als du gedacht hast", meaning: "Weberin des Schicksals.", message: "Du webst dein eigenes Schicksal. Jeder Gedanke ist ein Faden.", dailyReading: "Die Spinne erscheint heute als Weberin des Schicksals und richtet deinen Blick auf die Fäden, die du selbst knüpfst. Etwas in deinen Gedanken webt heute an deiner Wirklichkeit, ob du es willst oder nicht. Alte Geschichten, die du dir erzählst, lösen sich langsam, und du wirst zur bewussten Weberin. Folge heute dem, was du erschaffen willst, denn jeder Gedanke ist ein Faden." },
  { id: 31, name: "Die Unterwelt", category: "Mysterium", symbol: "underworld", image: "Die Unterwelt mit ihren stillen Wassern", pastEcho: "Du bist einmal hinabgestiegen und mit etwas Wahrem zurückgekehrt", presentTouch: "Etwas in dir bittet dich, nochmal hinabzusteigen", pathEssence: "den Weg des Abstiegs, der dunklen Begegnung, der unter der Oberfläche liegenden Wahrheit", futureMove: "Was du dort findest, war immer schon dein, du hast es nur vergessen", meaning: "Der Ort, an dem alles Verdrängte wohnt.", message: "Steige hinab. Das, wovor du dich fürchtest, hält die Antwort.", dailyReading: "Die Unterwelt erscheint heute als Ort des Verdrängten und richtet deinen Blick auf das, was du nicht sehen wolltest. Etwas in dir hält eine Antwort, die du nur findest, wenn du tiefer gehst. Alte Vermeidung des Schwierigen löst sich langsam, und ein heiliger Abstieg beginnt. Folge heute der Furcht, die dir den Weg weist, denn sie hütet das Wesentliche." },
  { id: 32, name: "Die Jagd", category: "Mysterium", symbol: "hunt", image: "Die Jagd, eröffnet vor Sonnenaufgang", pastEcho: "Du hast einmal etwas verfolgt und es zu deinem gemacht", presentTouch: "Etwas in dir hört auf zu warten und beginnt sich zu bewegen", pathEssence: "den Weg der heiligen Verfolgung, des aktiven Greifens, des klaren Anspruchs", futureMove: "Manches kommt nur zu dir, wenn du es dir holst. Du weißt, was es ist", meaning: "Die heilige Verfolgung dessen, was dir gehört.", message: "Höre auf zu warten. Manche Dinge musst du dir holen.", dailyReading: "Die Jagd erscheint heute als heilige Verfolgung und richtet deinen Blick auf das, was nicht zu dir kommt, sondern auf das du dich zubewegen musst. Etwas in deinem Leben wartet nicht mehr darauf, dass du bereit bist. Alte Geduld, die schon zu Lähmung wurde, löst sich langsam, und Bewegung wird möglich. Folge heute der Spur, die dir gehört, und hole dir, was deins ist." },
  { id: 33, name: "Das Erwachen", category: "Mysterium", symbol: "awakening", image: "Das Erwachen, ein Licht durch geschlossene Lider", pastEcho: "Du hast einmal etwas gesehen, das du nicht mehr ungesehen machen kannst", presentTouch: "Etwas in dir öffnet sich, und es schmerzt schön", pathEssence: "den Weg der offenen Augen, der unausweichlichen Klarheit, des heiligen Schmerzes", futureMove: "Du wirst sehen. Es wird wehtun und es wird heilig sein", meaning: "Der Moment, in dem die Augen sich öffnen.", message: "Du siehst jetzt. Das tut weh und es ist heilig.", dailyReading: "Das Erwachen erscheint heute als Moment der offenen Augen und richtet deinen Blick auf eine Wahrheit, die nicht mehr zu übersehen ist. Etwas in deiner Umgebung wird heute klar, und du kannst es nicht mehr zurückrollen in das vorherige Nichtwissen. Alte Bequemlichkeit des Unwissens löst sich langsam, und eine heilige Klarheit tut sich auf. Folge heute dem Sehen, auch wenn es schmerzt, denn es ist heilig." },
  { id: 34, name: "Die Schwelle", category: "Mysterium", symbol: "threshold", image: "Die Schwelle, weder Drinnen noch Draußen", pastEcho: "Ein Übergang in dir hat dich einmal verändert, ohne dass du es sofort gemerkt hast", presentTouch: "Etwas in dir steht zwischen den Räumen und wartet", pathEssence: "den Weg des Dazwischen, der heiligen Pause, des langsamen Werdens", futureMove: "Du wirst die Schwelle übertreten, doch nicht durch Eile, sondern durch Erlaubnis", meaning: "Der heilige Raum zwischen dem Vergangenen und dem Kommenden.", message: "Du bist im Dazwischen. Lass dir Zeit.", dailyReading: "Die Schwelle erscheint heute als heiliger Zwischenraum und richtet deinen Blick auf das, was weder vergangen noch zukünftig ist. Etwas in dir steht gerade zwischen den Räumen und braucht keine Eile. Alte Drängelei nach Antworten löst sich langsam, und das Dazwischen bekommt seinen eigenen Wert. Folge heute keiner Richtung, sondern bleibe still und atme im Übergang." },
  { id: 35, name: "Die Wandlung", category: "Mysterium", symbol: "transformation", image: "Die Wandlung, gewebt aus Asche und Atem", pastEcho: "Eine Metamorphose hat dich einmal in eine neue Form gegossen", presentTouch: "Etwas in dir wird flüssig und sucht sich seine neue Gestalt", pathEssence: "den Weg der Auflösung, der alchemistischen Reife, der vertrauten Verwandlung", futureMove: "Was du wirst, kennst du noch nicht. Doch deine Zellen wissen es schon", meaning: "Die alchemistische Verwandlung.", message: "Was sich gerade in dir bewegt, ist Metamorphose. Lass dich auflösen.", dailyReading: "Die Wandlung erscheint heute als alchemistischer Vorgang und richtet deinen Blick auf das, was sich gerade in dir auflöst. Etwas in deinem Inneren verändert seinen Aggregatzustand und kennt seine neue Form noch nicht. Alte Festigkeit löst sich langsam, und du wirst flüssig genug, um neu zu werden. Folge heute keiner Antwort, sondern bleibe im Prozess, der dich umbaut." },
  { id: 36, name: "Schwesternschaft", category: "Mysterium", symbol: "sisterhood", image: "Schwesternschaft, ein Kreis aus Frauen unter dem Mond", pastEcho: "Frauen haben dich einmal getragen, als du nicht mehr stehen konntest", presentTouch: "Etwas in dir möchte gehalten werden, ohne sich erklären zu müssen", pathEssence: "den Weg der weiblichen Verbundenheit, des gemeinsamen Atems, des heiligen Kreises", futureMove: "Du wirst dein Rudel an Frauen finden. Sie wissen, wer du bist", meaning: "Heiliger Kreis aus Frauen, die einander halten.", message: "Du brauchst deine Schwestern. Suche sie. Halte sie.", dailyReading: "Schwesternschaft erscheint heute als heiliger Kreis und richtet deinen Blick auf die Frauen, die du brauchst und die dich brauchen. Etwas in deiner Welt erinnert dich daran, dass du nicht für dich allein leben sollst. Alte Vorstellungen vom alleinigen Schaffen lösen sich langsam, und du suchst, hältst, wirst gehalten. Folge heute dem Ruf nach deinen Schwestern, denn sie warten schon." },
  { id: 37, name: "Die Schatten", category: "Mysterium", symbol: "shadow", image: "Die Schatten, die mit dir gehen", pastEcho: "Etwas, das du abgelehnt hast, war immer ein Teil deiner Kraft", presentTouch: "Etwas in dir möchte heimgeholt werden", pathEssence: "den Weg der Integration, der unbequemen Versöhnung, des heimkommenden Selbst", futureMove: "Was du nicht sehen wolltest, wird zur Türschwelle. Du gehst hindurch", meaning: "Alles, was du an dir abgelehnt hast.", message: "Drehe dich um. Schau ihm ins Gesicht. Nimm es nach Hause.", dailyReading: "Die Schatten erscheinen heute als verleugneter Teil deiner Kraft und richten deinen Blick auf das, was du an dir abgelehnt hast. Etwas in dir, das du loswerden wolltest, war immer eine Quelle deiner Stärke. Alte Trennung von Teilen deines Selbst löst sich langsam, und du nimmst nach Hause, was zu dir gehört. Folge heute dem Schatten, der dich am meisten stört, und gib ihm einen Sitz in dir." },
  { id: 38, name: "Die Wiedergeburt", category: "Mysterium", symbol: "rebirth", image: "Die Wiedergeburt aus den Federn des Phönix", pastEcho: "Etwas in dir ist einmal gestorben, damit du leben konntest", presentTouch: "Etwas in dir richtet sich aus der Asche auf", pathEssence: "den Weg des Neubeginns, der trauernden Feier, der zweiten Geburt", futureMove: "Eine neue Version von dir steigt auf. Trauere kurz um die alte. Feiere lang", meaning: "Das Aufsteigen aus der Asche.", message: "Du bist neu. Trauere um die alte Version, und feiere dann.", dailyReading: "Die Wiedergeburt erscheint heute als Aufsteigen aus der Asche und richtet deinen Blick auf das, was du nach einem Ende geworden bist. Etwas in dir ist neu, und du hast es vielleicht selbst noch nicht ganz bemerkt. Alte Trauer um das Vergangene löst sich langsam und macht Platz für eine leise Feier. Folge heute dem neuen Atem, der in dir ist, und nimm ihn als deinen." },
  { id: 39, name: "Wolfsmond", category: "Seltener Mond", symbol: "wolf_moon", image: "Der Wolfsmond hoch über dem Winterwald", pastEcho: "Ein Winter hat dich einmal gelehrt, wozu Stille gut ist", presentTouch: "Etwas in dir sammelt Kraft, ohne sie schon zu zeigen", pathEssence: "den Weg der inneren Einkehr, der sammelnden Kälte, des verborgenen Heulens", futureMove: "Dein Heulen wird zur Sprache. Andere werden antworten", meaning: "Der erste Vollmond des Jahres.", message: "Höre auf dein Heulen. Der Winter dient dem Sammeln deiner Kraft.", dailyReading: "Der Wolfsmond erscheint heute als erster Vollmond des Jahres und richtet deinen Blick auf die Kraft des Sammelns. Etwas in deinem Inneren bittet dich, jetzt nicht zu blühen, sondern Wurzeln zu schlagen. Alte Eile nach Sichtbarkeit löst sich langsam, und der Winter wird zum Verbündeten. Folge heute dem Heulen, das aus dir aufsteigt, denn es sammelt die Deinen." },
  { id: 40, name: "Blauer Mond", category: "Seltener Mond", symbol: "blue_moon", image: "Der Blaue Mond, einmal nur in einem Atemzug", pastEcho: "Eine seltene Gelegenheit hat dich einmal an einen Ort gebracht, den du nicht vergisst", presentTouch: "Etwas in dir spürt, dass dieser Moment einmalig ist", pathEssence: "den Weg der seltenen Gelegenheit, der bewussten Manifestation, des magischen Fensters", futureMove: "Was du jetzt setzt, wird verstärkt. Die Zeit ist auf deiner Seite", meaning: "Zweiter Vollmond in einem Monat. Ein magisches Fenster.", message: "Diese Gelegenheit ist einmalig. Was du jetzt manifestierst, wird verstärkt.", dailyReading: "Der Blaue Mond erscheint heute als seltenes magisches Fenster und richtet deinen Blick auf das, was du jetzt manifestieren willst. Etwas in der Zeit selbst trägt heute mehr Gewicht, als sie es sonst tut. Alte Skepsis gegenüber Wirklichmachung löst sich langsam, und deine Absicht findet ihr Echo. Folge heute dem, was du wirklich willst, denn der Moment hört dich." },
  { id: 41, name: "Erntemond", category: "Seltener Mond", symbol: "harvest_moon", image: "Der Erntemond, schwer und golden über reifen Feldern", pastEcho: "Dankbarkeit war einmal ein Schlüssel für dich", presentTouch: "Etwas in dir möchte ernten, was es lange gepflegt hat", pathEssence: "den Weg der reifen Frucht, der gewürdigten Mühe, der goldenen Anerkennung", futureMove: "Du wirst sehen, was du erschaffen hast. Es ist mehr, als du glaubst", meaning: "Vollmond nahe der Herbst-Tagundnachtgleiche.", message: "Sieh, was du erschaffen hast. Würdige es.", dailyReading: "Der Erntemond erscheint heute als Vollmond der Anerkennung und richtet deinen Blick auf das, was du erschaffen hast, ohne es zu würdigen. Etwas in deinem Leben ist gereift, und es verlangt von dir gesehen zu werden. Alte Gewohnheit, immer schon das Nächste anzuvisieren, löst sich langsam, und du bleibst bei dem, was ist. Folge heute der Dankbarkeit für das Gewordene, denn sie ist Nahrung." },
  { id: 42, name: "Schwarzer Mond", category: "Seltener Mond", symbol: "black_moon", image: "Der Schwarze Mond, eine Tür ins Verborgene", pastEcho: "In tiefer Dunkelheit hattest du einmal deine größte Klarheit", presentTouch: "Etwas in dir kennt sein wahres Begehren, jenseits aller Geräusche", pathEssence: "den Weg der tiefen Intention, der bodenlosen Klarheit, des unverdünnten Wollens", futureMove: "Was du wirklich willst, wird sichtbar, sobald alle Lichter aus sind", meaning: "Zweiter Neumond in einem Monat. Die tiefste Dunkelheit.", message: "In dieser Dunkelheit hast du absolute Klarheit. Was willst du wirklich?", dailyReading: "Der Schwarze Mond erscheint heute als tiefste Dunkelheit und richtet deinen Blick auf die Klarheit, die nur in völliger Stille entsteht. Etwas in dir kennt sein wahres Begehren, sobald alle Geräusche aus sind. Alte Vermischung mit fremden Wünschen löst sich langsam, und du hörst dich selbst wieder. Folge heute keinem äußeren Licht, denn dein eigenes wird gerade sichtbar." },
  { id: 43, name: "Die Mutter", category: "Mensch", symbol: "mother", image: "Die Mutter, die ihre eigenen Kinder in sich trägt", pastEcho: "Du hast einmal genährt, ohne zu fragen, woher du es nimmst", presentTouch: "Etwas in dir möchte für sich selbst zur Mutter werden", pathEssence: "den Weg der nährenden Fülle, der haltenden Hände, der schöpferischen Geduld", futureMove: "Die Liebe, die du suchst, fängt in dir an. Sie wartet schon dort", meaning: "Die schöpferische Kraft, die nährt, hält und beschützt.", message: "Werde Mutter für dich selbst. Die Liebe, die du suchst, beginnt bei dir.", dailyReading: "Die Mutter erscheint heute als nährende Kraft und richtet deinen Blick auf das, was du dir selbst geben kannst. Etwas in dir sucht eine Liebe, die nicht von außen kommen wird, sondern aus dir. Alte Erwartung an andere löst sich langsam, und du wirst zur Mutter deiner eigenen Sehnsucht. Folge heute der Geste, die du als Kind gebraucht hättest, und gib sie dir selbst." },
  { id: 44, name: "Die Liebende", category: "Mensch", symbol: "lover", image: "Die Liebende, deren Herz unverschlossen bleibt", pastEcho: "Eine offene Hingabe hat dich einmal an einen Ort gebracht, an dem du dich nicht verloren hast", presentTouch: "Etwas in dir hat aufgehört, sich zu verschanzen", pathEssence: "den Weg der ungeteilten Hingabe, des offenen Herzens, der nicht ausweichenden Liebe", futureMove: "Liebe kommt nicht als Belohnung, sondern als Wiedererkennung", meaning: "Die offene, sich hingebende Seele.", message: "Liebe ist die Sprache deiner Seele. Halte dein Herz offen.", dailyReading: "Die Liebende erscheint heute als offene Seele und richtet deinen Blick auf den Mut, dein Herz nicht zu verschließen. Etwas in deiner Welt verlangt heute keine Vorsicht, sondern Hingabe. Alte Schutzpanzer lösen sich langsam, und eine weiche Stärke tritt an ihre Stelle. Folge heute der Liebe, die dein Herz spricht, und vertraue, dass sie deine Sprache ist." },
  { id: 45, name: "Die Heilerin", category: "Mensch", symbol: "healer", image: "Die Heilerin mit Händen aus Mondlicht", pastEcho: "Du hast einmal jemandem geholfen, indem du einfach geblieben bist", presentTouch: "Etwas in dir heilt durch reine Anwesenheit", pathEssence: "den Weg der bezeugenden Präsenz, der berührenden Aufmerksamkeit, der wandelnden Stille", futureMove: "Du wirst heilen, ohne zu wissen, was du genau tust. Deine Anwesenheit reicht", meaning: "Sie kennt die Wunden. Ihre eigenen und die der anderen.", message: "Du heilst, indem du Zeuge wirst. Deine Präsenz ist die Medizin.", dailyReading: "Die Heilerin erscheint heute als jene, die durch Anwesenheit wandelt, und richtet deinen Blick auf die Heilkraft deiner reinen Gegenwart. Etwas in deinem Umfeld braucht heute keine Lösung, sondern dich. Alte Vorstellung, immer etwas tun zu müssen, löst sich langsam, und Sein wird zur Medizin. Folge heute dem Sitzen statt dem Rennen, denn deine Präsenz heilt." },
  { id: 46, name: "Die Weise", category: "Mensch", symbol: "sage", image: "Die Weise im Kreis ihrer Bücher und Knochen", pastEcho: "Eine innere Stimme hat dir einmal Recht gegeben, als alle Welt widersprach", presentTouch: "Etwas in dir weiß bereits, was es noch nicht aussprechen kann", pathEssence: "den Weg der inneren Wahrheit, der schweigenden Klarheit, der unbeirrbaren Gewissheit", futureMove: "Die Antwort flüstert dir schon zu. Du musst nur die Lautstärke der Welt senken", meaning: "Die Hüterin der inneren Wahrheit.", message: "Du weißt mehr, als du glaubst. Die Antwort flüstert.", dailyReading: "Die Weise erscheint heute als Hüterin der inneren Wahrheit und richtet deinen Blick auf das, was du längst weißt, aber noch nicht ausgesprochen hast. Etwas in dir flüstert seit Tagen, und es trägt die Antwort, die du außen suchst. Alte Abhängigkeit von fremden Meinungen löst sich langsam, und deine eigene Stimme wird klarer. Folge heute der inneren Antwort, denn sie war immer bei dir." },
  { id: 47, name: "Die Kriegerin", category: "Mensch", symbol: "warrior", image: "Die Kriegerin im Eisen, doch nicht aus Hass", pastEcho: "Ein Kampf, den du einmal geführt hast, war ein Akt der Liebe", presentTouch: "Etwas in dir ist bereit aufzustehen, ohne sich zu verhärten", pathEssence: "den Weg des heiligen Streits, der schützenden Klinge, der ungebeugten Treue", futureMove: "Du wirst kämpfen. Aber nicht aus Wut, sondern aus Wahrheit", meaning: "Sie kämpft aus Liebe zu dem, was sie schützt.", message: "Es gibt Dinge, für die du kämpfen musst. Stehe auf.", dailyReading: "Die Kriegerin erscheint heute als heilige Kämpferin und richtet deinen Blick auf das, wofür es sich zu stehen lohnt. Etwas in deinem Leben verlangt nicht Anpassung, sondern Klarheit. Alte Furcht vor Konflikt löst sich langsam, und du erinnerst dich an die Kraft, die du tragen kannst. Folge heute dem Impuls, dich aufzurichten, denn er kommt aus Liebe, nicht aus Wut." },
  { id: 48, name: "Die Träumerin", category: "Mensch", symbol: "dreamer", image: "Die Träumerin, deren Augen in andere Welten blicken", pastEcho: "Ein Traum, den du verteidigt hast, ist heute deine Wirklichkeit", presentTouch: "Etwas in dir sieht eine Welt, die noch nicht ist", pathEssence: "den Weg der visionären Kraft, der gegen-realistischen Treue, der weichen Hartnäckigkeit", futureMove: "Was du heute träumst, träumt in einigen Jahren jemand anderes für selbstverständlich", meaning: "Sie sieht, was werden kann.", message: "Verteidige deine Träume. Realität ist gestriger Traum, den jemand zu träumen wagte.", dailyReading: "Die Träumerin erscheint heute als Hüterin des noch nicht Sichtbaren und richtet deinen Blick auf die Vision, die noch keiner teilt. Etwas in dir sieht eine Welt, die in der Wirklichkeit fehlt. Alte Scham, zu groß zu träumen, löst sich langsam, und du verteidigst dein inneres Bild. Folge heute dem Traum, den du schon zurückgewiesen hast, denn er kommt zurück." },
  { id: 49, name: "Die Schöpferin", category: "Mensch", symbol: "creator", image: "Die Schöpferin mit Lehm zwischen den Fingern", pastEcho: "Du hast einmal etwas erschaffen, ohne dich bereit zu fühlen, und es trug", presentTouch: "Etwas in dir möchte Form bekommen, jetzt, nicht später", pathEssence: "den Weg des schöpferischen Flusses, der ungezögerten Hand, des werdenden Werks", futureMove: "Warte nicht, bis du dich bereit fühlst. Beginne, und das Werk wird dich tragen", meaning: "Aus ihren Händen kommt Neues in die Welt.", message: "Warte niemals, bis du dich bereit fühlst. Erschaffe jetzt.", dailyReading: "Die Schöpferin erscheint heute als jene, die aus Lehm und Atem etwas formt, und richtet deinen Blick auf das, was in deinen Händen warten will. Etwas in dir möchte gemacht werden, jetzt, nicht wenn du dich bereit fühlst. Alte Sorge um den richtigen Zeitpunkt löst sich langsam, und das Werk findet seine Form. Folge heute der Hand, die schon weiß, was sie tun möchte." },
  { id: 50, name: "Die Rebellin", category: "Mensch", symbol: "rebel", image: "Die Rebellin, die niemals die Knie beugt", pastEcho: "Ein Nein, das du einmal gesagt hast, hat dich zu dir zurückgebracht", presentTouch: "Etwas in dir weigert sich, sich noch einmal klein zu machen", pathEssence: "den Weg der wilden Authentizität, der unbeugsamen Haltung, des heimkehrenden Selbst", futureMove: "Deine Wildheit findet ihren Platz. Sie war immer da. Sie wird gesehen", meaning: "Sie weigert sich, sich klein zu machen.", message: "Höre auf, dich anzupassen. Deine Wildheit ist deine Heimat.", dailyReading: "Die Rebellin erscheint heute als jene, die niemals kleiner wird, und richtet deinen Blick auf die Anpassungen, die dich gekostet haben. Etwas in deiner Umgebung möchte dich wieder in alte Maße zwingen, aber du passt nicht mehr hinein. Alte Bereitschaft, dich zurechtzubiegen, löst sich langsam, und deine Wildheit findet ihren Stand. Folge heute dem Nein, das in dir aufsteigt, denn es ist deine Heimat." },
  { id: 51, name: "Die Pilgerin", category: "Mensch", symbol: "pilgrim", image: "Die Pilgerin mit Staub des langen Weges an den Füßen", pastEcho: "Ein Weg, den du einmal gegangen bist, war wichtiger als das Ziel", presentTouch: "Etwas in dir vertraut dem Gehen mehr als dem Ankommen", pathEssence: "den Weg der heiligen Reise, des selbsterkennenden Gehens, der wachsenden Geduld", futureMove: "Du wirst ankommen, aber nicht so, wie du dachtest. Es wird schöner sein", meaning: "Sie ist auf einer Reise, deren Ziel sie selbst ist.", message: "Der Weg ist das Ziel. Vertraue dem Weg.", dailyReading: "Die Pilgerin erscheint heute als Hüterin des Weges und richtet deinen Blick darauf, dass das Gehen wichtiger ist als das Ankommen. Etwas in deinem Leben verlangt nicht das Endziel, sondern den nächsten Schritt. Alte Ungeduld nach Ergebnissen löst sich langsam, und der Weg selbst wird zur Antwort. Folge heute der Bewegung, ohne zu wissen, wohin sie führt." },
  { id: 52, name: "Die Erbin", category: "Mensch", symbol: "heiress", image: "Die Erbin im Mantel ihrer Ahninnen", pastEcho: "Frauen vor dir haben einmal geträumt, und dieser Traum war deiner", presentTouch: "Etwas in dir trägt das Wissen jener, die nie selbst sprechen konnten", pathEssence: "den Weg der ahnen getragenen Macht, der weitergegebenen Weisheit, der erfüllten Linie", futureMove: "Du bist die Antwort auf die Gebete deiner Großmütter. Sie sehen dich", meaning: "Sie trägt das Wissen ihrer Ahninnen in den Knochen.", message: "Du bist die Antwort auf die Gebete deiner Großmütter.", dailyReading: "Die Erbin erscheint heute als Trägerin alter Linien und richtet deinen Blick auf das, was schon vor dir in deinem Blut war. Etwas in dir trägt die Träume deiner Vormütter, und du lebst, was sie nicht durften. Alte Frage nach deinem Wert löst sich langsam, denn deine Ahninnen kennen dich. Folge heute dem Wissen, dass du nicht aus dem Nichts kommst, sondern aus einem alten Plan." },
  { id: 53, name: "Der Grüne Komet", category: "Mysterium", symbol: "comet", image: "Der Grüne Komet, dessen Bahn durch dein Feld zieht", pastEcho: "Etwas Unerwartetes hat dich einmal an einen Ort gebracht, den keine Planung kannte", presentTouch: "Seine Bahn berührt etwas in dir, das lange geschlafen hat", pathEssence: "den Weg der seltenen Botschaft, des kosmischen Zeichens, der nicht geplanten Begegnung", futureMove: "Etwas Seltenes nähert sich dir. Halte deine Augen offen für das, was anders aussieht", meaning: "Ein seltener Bote aus den Tiefen des Kosmos. Sein smaragdgrünes Leuchten erscheint nur jenen, die bereit sind, das Unerwartete zu empfangen.", message: "Etwas Seltenes nähert sich dir. Halte deine Augen offen für die Zeichen, die anders aussehen als gewohnt.", dailyReading: "Der Grüne Komet erscheint heute als seltener Bote aus den Tiefen des Kosmos und richtet deinen Blick auf etwas, das nicht hierhin passt und doch gemeint ist. Etwas in deinem Leben nähert sich, das du nicht kommen sehen wirst und das dich tief berühren wird. Alte Erwartungen, wie Geschenke aussehen müssen, lösen sich langsam, und du bleibst offen für das Unerwartete. Folge heute den Zeichen, die anders aussehen als die anderen, denn sie tragen deinen Namen." }
];

const COLORS = {
  silver: "#c8c4d4", silverLight: "#e8e4f0", silverDark: "#8a8499",
  violet: "#5d3a7a", violetDeep: "#2d1a3d", blueDeep: "#0f1235",
  blueMid: "#1a1b4b", purple: "#3a1f5d", black: "#08060f", accent: "#9b7fb8"
};

const Crescent = ({ cx, cy, size = 8, opacity = 1 }) => (
  <path d={`M ${cx} ${cy-size} A ${size} ${size} 0 0 1 ${cx} ${cy+size} A ${size*0.65} ${size} 0 0 0 ${cx} ${cy-size}`} fill={COLORS.silverLight} opacity={opacity}/>
);

const Stars = ({ count = 5 }) => {
  const positions = [[20, 25], [80, 25], [15, 75], [85, 75], [25, 50], [75, 50], [50, 15], [50, 85]];
  return (
    <g opacity="0.7">
      {positions.slice(0, count).map((pos, i) => (
        <path key={i} d={`M ${pos[0]} ${pos[1]-1.5} L ${pos[0]+0.5} ${pos[1]-0.5} L ${pos[0]+1.5} ${pos[1]} L ${pos[0]+0.5} ${pos[1]+0.5} L ${pos[0]} ${pos[1]+1.5} L ${pos[0]-0.5} ${pos[1]+0.5} L ${pos[0]-1.5} ${pos[1]} L ${pos[0]-0.5} ${pos[1]-0.5} Z`} fill={COLORS.silverLight}/>
      ))}
    </g>
  );
};

const OuterArc = () => (
  <g opacity="0.5">
    <circle cx="50" cy="50" r="46" stroke={COLORS.silver} strokeWidth="0.3" fill="none" strokeDasharray="1,3"/>
    <circle cx="50" cy="50" r="44" stroke={COLORS.silver} strokeWidth="0.2" fill="none" opacity="0.5"/>
  </g>
);

const SymbolSVG = ({ type, size = 120 }) => {
  const s = COLORS.silver, sL = COLORS.silverLight, v = COLORS.violet, acc = COLORS.accent;
  const props = { width: size, height: size, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" };
  switch(type) {
    case "bow": return (<svg {...props}><OuterArc/><circle cx="50" cy="35" r="12" fill={sL} opacity="0.9"/><path d="M 25 55 Q 50 75 75 55" stroke={s} strokeWidth="0.8" fill="none"/><line x1="50" y1="55" x2="50" y2="82" stroke={s} strokeWidth="0.6"/><Stars count={6}/></svg>);
    case "pomegranate": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={20} size={6}/><circle cx="50" cy="58" r="20" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.2"/><circle cx="44" cy="54" r="1.5" fill={sL}/><circle cx="50" cy="52" r="1.5" fill={sL}/><circle cx="56" cy="54" r="1.5" fill={sL}/><circle cx="50" cy="68" r="1.5" fill={sL}/><Stars count={4}/></svg>);
    case "pomegranate_sym": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={18} size={6}/><circle cx="50" cy="55" r="22" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.2"/><circle cx="50" cy="48" r="1.5" fill={sL}/><circle cx="50" cy="65" r="1.5" fill={sL}/><Stars count={3}/></svg>);
    case "night": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={50} size={12}/><Stars count={6}/></svg>);
    case "key": return (<svg {...props}><OuterArc/><circle cx="50" cy="55" r="11" stroke={s} strokeWidth="0.6" fill="none"/><line x1="50" y1="66" x2="50" y2="86" stroke={s} strokeWidth="0.7"/><line x1="46" y1="76" x2="50" y2="76" stroke={s} strokeWidth="0.7"/><line x1="46" y1="80" x2="50" y2="80" stroke={s} strokeWidth="0.7"/><Stars count={4}/></svg>);
    case "key_symbol": return (<svg {...props}><OuterArc/><circle cx="35" cy="55" r="14" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.2"/><line x1="49" y1="55" x2="85" y2="55" stroke={s} strokeWidth="0.8"/><line x1="78" y1="55" x2="78" y2="65" stroke={s} strokeWidth="0.7"/><Stars count={4}/></svg>);
    case "moon": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="18" fill={sL} opacity="0.95"/><Stars count={6}/></svg>);
    case "serpent": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={22} size={9}/><path d="M 25 50 Q 50 35 75 50 Q 50 65 25 50" stroke={s} strokeWidth="0.7" fill="none"/><Stars count={4}/></svg>);
    case "serpent_sym": return (<svg {...props}><OuterArc/><path d="M 50 22 Q 25 35 50 50 Q 75 65 50 78" stroke={s} strokeWidth="0.8" fill="none"/><Stars count={4}/></svg>);
    case "raven": return (<svg {...props}><OuterArc/><circle cx="50" cy="35" r="18" fill={sL} opacity="0.85"/><path d="M 30 65 Q 50 60 70 65 Q 65 72 50 70 Q 35 72 30 65 Z" fill={COLORS.black}/><Stars count={4}/></svg>);
    case "crow": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={22} size={7}/><path d="M 18 55 Q 30 45 50 50 Q 70 45 82 55 L 70 60 Q 50 64 30 60 Z" stroke={s} strokeWidth="0.6" fill={COLORS.black} fillOpacity="0.7"/><Stars count={5}/></svg>);
    case "star": return (<svg {...props}><OuterArc/><path d="M 50 20 L 53 47 L 80 50 L 53 53 L 50 80 L 47 53 L 20 50 L 47 47 Z" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.2"/><circle cx="50" cy="50" r="3" fill={sL}/><Stars count={4}/></svg>);
    case "skull": return (<svg {...props}><OuterArc/><circle cx="50" cy="35" r="14" fill={COLORS.black} stroke={s} strokeWidth="0.6"/><line x1="50" y1="55" x2="50" y2="82" stroke={s} strokeWidth="0.8"/><Stars count={5}/></svg>);
    case "stag": return (<svg {...props}><OuterArc/><path d="M 30 50 Q 25 40 20 32" stroke={s} strokeWidth="0.6" fill="none"/><path d="M 70 50 Q 75 40 80 32" stroke={s} strokeWidth="0.6" fill="none"/><circle cx="50" cy="55" r="16" fill={sL} opacity="0.9"/><Stars count={4}/></svg>);
    case "flame": return (<svg {...props}><OuterArc/><path d="M 50 26 Q 38 40 44 56 Q 32 64 38 78 Q 50 64 50 84 Q 62 64 62 78 Q 68 64 56 56 Q 62 40 50 26 Z" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.3"/><Stars count={4}/></svg>);
    case "torch": return (<svg {...props}><OuterArc/><path d="M 50 28 Q 38 42 44 56 Q 32 64 38 76 Q 50 64 50 80 Q 62 64 62 76 Q 68 64 56 56 Q 62 42 50 28 Z" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.3"/><line x1="50" y1="84" x2="50" y2="92" stroke={s} strokeWidth="1"/><Stars count={5}/></svg>);
    case "falcon": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={25} size={8}/><path d="M 50 50 L 53 60 L 60 60 L 54 65 L 56 73 L 50 68 L 44 73 L 46 65 L 40 60 L 47 60 Z" stroke={s} strokeWidth="0.5" fill={sL} fillOpacity="0.3"/><Stars count={6}/></svg>);
    case "arrow": return (<svg {...props}><OuterArc/><line x1="28" y1="50" x2="78" y2="50" stroke={s} strokeWidth="0.8"/><path d="M 68 44 L 80 50 L 68 56" stroke={s} strokeWidth="0.8" fill="none"/><Stars count={5}/></svg>);
    case "bow_silver": return (<svg {...props}><OuterArc/><path d="M 30 18 Q 75 50 30 82" strokeWidth="1" stroke={s} fill="none"/><line x1="55" y1="50" x2="80" y2="50" stroke={s} strokeWidth="0.7"/><Stars count={5}/></svg>);
    case "chalice": return (<svg {...props}><OuterArc/><path d="M 32 32 Q 32 56 50 60 Q 68 56 68 32 Z" stroke={s} strokeWidth="0.7" fill={COLORS.violetDeep} fillOpacity="0.4"/><line x1="50" y1="60" x2="50" y2="80" stroke={s} strokeWidth="0.6"/><line x1="36" y1="80" x2="64" y2="80" stroke={s} strokeWidth="0.8"/><Stars count={4}/></svg>);
    case "thorns": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="16" fill={v} fillOpacity="0.2"/><Crescent cx={50} cy={50} size={9}/><Stars count={4}/></svg>);
    case "veil": return (<svg {...props}><OuterArc/><path d="M 25 30 Q 50 38 75 30 L 75 80 Q 50 70 25 80 Z" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.25"/><Stars count={4}/></svg>);
    case "mirror": return (<svg {...props}><OuterArc/><ellipse cx="50" cy="44" rx="18" ry="22" stroke={s} strokeWidth="0.7" fill={COLORS.violetDeep} fillOpacity="0.5"/><line x1="50" y1="66" x2="50" y2="84" stroke={s} strokeWidth="0.8"/><Stars count={4}/></svg>);
    case "blood_moon": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="22" fill="#4a1838" opacity="0.6"/><circle cx="50" cy="50" r="22" stroke={s} strokeWidth="0.6" fill="none"/><Stars count={5}/></svg>);
    case "wolf": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={32} size={14}/><circle cx="35" cy="68" r="4" fill={sL} opacity="0.7"/><circle cx="65" cy="68" r="4" fill={sL} opacity="0.7"/><circle cx="50" cy="78" r="4" fill={sL} opacity="0.7"/><Stars count={4}/></svg>);
    case "doe": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="18" fill={sL} opacity="0.9"/><Stars count={5}/></svg>);
    case "owl": return (<svg {...props}><OuterArc/><circle cx="35" cy="45" r="10" fill={sL} opacity="0.9"/><circle cx="65" cy="45" r="10" fill={sL} opacity="0.9"/><circle cx="35" cy="45" r="6" fill={COLORS.black}/><circle cx="65" cy="45" r="6" fill={COLORS.black}/><Stars count={3}/></svg>);
    case "panther": return (<svg {...props}><OuterArc/><circle cx="50" cy="55" r="28" fill={COLORS.black} opacity="0.7"/><ellipse cx="40" cy="48" rx="4" ry="2.5" fill={sL} opacity="0.9"/><ellipse cx="60" cy="48" rx="4" ry="2.5" fill={sL} opacity="0.9"/><Stars count={5}/></svg>);
    case "moth": return (<svg {...props}><OuterArc/><ellipse cx="34" cy="55" rx="14" ry="18" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.3"/><ellipse cx="66" cy="55" rx="14" ry="18" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.3"/><Stars count={3}/></svg>);
    case "spider": return (<svg {...props}><OuterArc/><circle cx="50" cy="55" r="3" fill={COLORS.black}/><line x1="50" y1="29" x2="50" y2="81" stroke={s} strokeWidth="0.3" opacity="0.5"/><line x1="24" y1="55" x2="76" y2="55" stroke={s} strokeWidth="0.3" opacity="0.5"/><Stars count={3}/></svg>);
    case "underworld": return (<svg {...props}><OuterArc/><path d="M 30 22 Q 50 18 70 22 L 70 80 L 30 80 Z" stroke={s} strokeWidth="0.6" fill={COLORS.black} fillOpacity="0.6"/><Crescent cx={50} cy={55} size={7}/><Stars count={4}/></svg>);
    case "hunt": return (<svg {...props}><OuterArc/><circle cx="65" cy="32" r="10" fill={sL} opacity="0.95"/><path d="M 15 75 L 35 35 L 50 55 L 65 30 L 85 75 Z" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.2"/><Stars count={5}/></svg>);
    case "awakening": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="7" fill={sL} opacity="0.95"/><circle cx="50" cy="50" r="3.5" fill={COLORS.black}/><Stars count={4}/></svg>);
    case "threshold": return (<svg {...props}><OuterArc/><line x1="30" y1="30" x2="30" y2="82" stroke={s} strokeWidth="0.8"/><line x1="70" y1="30" x2="70" y2="82" stroke={s} strokeWidth="0.8"/><path d="M 30 30 Q 50 24 70 30" stroke={s} strokeWidth="0.8" fill="none"/><Stars count={4}/></svg>);
    case "transformation": return (<svg {...props}><OuterArc/><path d="M 50 38 Q 30 42 28 55 Q 30 68 50 65 Q 70 68 72 55 Q 70 42 50 38" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.3"/><Stars count={4}/></svg>);
    case "sisterhood": return (<svg {...props}><OuterArc/><circle cx="50" cy="40" r="14" fill={sL} opacity="0.95"/><Stars count={4}/></svg>);
    case "shadow": return (<svg {...props}><OuterArc/><circle cx="42" cy="50" r="22" fill={COLORS.black} opacity="0.85"/><circle cx="58" cy="50" r="22" fill={sL} opacity="0.7"/><Stars count={5}/></svg>);
    case "rebirth": return (<svg {...props}><OuterArc/><path d="M 50 80 Q 28 72 28 50 Q 28 28 50 28 Q 72 28 72 50 Q 72 60 65 60" stroke={s} strokeWidth="0.7" fill="none"/><circle cx="50" cy="55" r="4" fill={sL}/><Stars count={4}/></svg>);
    case "wolf_moon": return (<svg {...props}><OuterArc/><circle cx="50" cy="40" r="22" fill={sL} opacity="0.95"/><path d="M 38 88 L 45 64 L 50 56 L 55 64 L 62 88 Z" fill={COLORS.black}/><Stars count={4}/></svg>);
    case "blue_moon": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="24" fill="#8aa8d8" opacity="0.7"/><Stars count={5}/></svg>);
    case "harvest_moon": return (<svg {...props}><OuterArc/><circle cx="50" cy="45" r="24" fill={acc} opacity="0.5"/><Stars count={3}/></svg>);
    case "black_moon": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="24" fill={COLORS.black} stroke={s} strokeWidth="0.7"/><Stars count={5}/></svg>);
    case "mother": return (<svg {...props}><OuterArc/><circle cx="50" cy="42" r="10" stroke={s} strokeWidth="0.6" fill={sL} opacity="0.9"/><circle cx="50" cy="62" r="6" stroke={s} strokeWidth="0.5" fill={sL} opacity="0.8"/><Stars count={5}/></svg>);
    case "lover": return (<svg {...props}><OuterArc/><path d="M 50 50 C 50 38 30 38 30 50 C 30 62 50 70 50 70" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.3"/><path d="M 50 50 C 50 38 70 38 70 50 C 70 62 50 70 50 70" stroke={s} strokeWidth="0.7" fill={v} fillOpacity="0.3"/><Stars count={4}/></svg>);
    case "healer": return (<svg {...props}><OuterArc/><circle cx="50" cy="55" r="14" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.25"/><Crescent cx={50} cy={55} size={6}/><Stars count={3}/></svg>);
    case "sage": return (<svg {...props}><OuterArc/><circle cx="50" cy="55" r="6" fill={sL} opacity="0.95"/><circle cx="50" cy="55" r="3" fill={COLORS.black}/><Stars count={4}/></svg>);
    case "warrior": return (<svg {...props}><OuterArc/><path d="M 30 40 L 30 60 Q 30 72 50 78 Q 70 72 70 60 L 70 40 Z" stroke={s} strokeWidth="0.6" fill={v} fillOpacity="0.25"/><line x1="50" y1="32" x2="50" y2="78" stroke={s} strokeWidth="0.8"/><Stars count={4}/></svg>);
    case "dreamer": return (<svg {...props}><OuterArc/><Crescent cx={50} cy={32} size={11}/><Stars count={5}/></svg>);
    case "creator": return (<svg {...props}><OuterArc/><circle cx="50" cy="55" r="6" stroke={s} strokeWidth="0.5" fill={v} fillOpacity="0.3"/><circle cx="50" cy="55" r="2" fill={sL}/><Stars count={3}/></svg>);
    case "rebel": return (<svg {...props}><OuterArc/><path d="M 50 38 L 44 52 L 52 52 L 46 72 L 56 56 L 48 56 L 54 38 Z" stroke={s} strokeWidth="0.5" fill={sL} fillOpacity="0.6"/><Stars count={4}/></svg>);
    case "pilgrim": return (<svg {...props}><OuterArc/><circle cx="50" cy="32" r="12" fill={sL} opacity="0.95"/><line x1="15" y1="55" x2="85" y2="55" stroke={s} strokeWidth="0.4" opacity="0.6"/><Stars count={5}/></svg>);
    case "heiress": return (<svg {...props}><OuterArc/><circle cx="50" cy="50" r="9" fill={sL} opacity="0.9"/><Stars count={3}/></svg>);
    case "comet": return (
      <svg {...props}>
        <OuterArc/>
        <defs>
          <radialGradient id="cometHead" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#e8fff0" stopOpacity="1"/>
            <stop offset="40%" stopColor="#7fffa8" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#2d8a52" stopOpacity="0.3"/>
          </radialGradient>
          <linearGradient id="cometTail" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7fffa8" stopOpacity="0.95"/>
            <stop offset="50%" stopColor="#7fffa8" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#7fffa8" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M 78 22 Q 60 35 45 50 Q 30 65 20 80 L 25 82 Q 42 70 55 55 Q 68 40 80 25 Z" fill="url(#cometTail)" opacity="0.85"/>
        <circle cx="78" cy="22" r="9" fill="url(#cometHead)"/>
        <circle cx="78" cy="22" r="4" fill="#e8fff0"/>
        <Stars count={4}/>
      </svg>
    );
    default: return (<svg {...props}><OuterArc/><Crescent cx={50} cy={50} size={10}/><Stars count={4}/></svg>);
  }
};

const bgStyle = { background: 'radial-gradient(ellipse at top, #5d3a7a 0%, #3a1f5d 25%, #0f1235 60%, #08060f 100%)' };

const sharedStyles = `
  @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
  @keyframes mysticalGlow {
    0%, 100% { text-shadow: 0 0 30px rgba(200, 196, 212, 0.5), 0 0 60px rgba(93, 58, 122, 0.6); }
    50% { text-shadow: 0 0 50px rgba(232, 228, 240, 0.7), 0 0 80px rgba(155, 127, 184, 0.8); }
  }
  @keyframes moonAura { 0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.15); } }
  @keyframes starAppear0 { 0%, 100% { opacity: 0.15; transform: scale(0.5); } 20% { opacity: 1; transform: scale(1.8); } 40% { opacity: 0.3; transform: scale(0.8); } }
  @keyframes starAppear1 { 0%, 100% { opacity: 0.4; transform: scale(1); } 35% { opacity: 1; transform: scale(2); } 70% { opacity: 0.2; transform: scale(0.6); } }
  @keyframes starAppear2 { 0%, 100% { opacity: 0.6; transform: scale(0.9); } 25% { opacity: 0.1; transform: scale(0.4); } 55% { opacity: 1; transform: scale(1.5); } 80% { opacity: 0.5; transform: scale(1); } }
  @keyframes starAppear3 { 0%, 100% { opacity: 0.3; transform: scale(0.7); } 15% { opacity: 0.9; transform: scale(1.4); } 45% { opacity: 0.2; transform: scale(0.5); } 75% { opacity: 1; transform: scale(1.8); } }
  @keyframes starAppear4 { 0%, 100% { opacity: 0.5; transform: scale(1); } 30% { opacity: 1; transform: scale(2.2); } 60% { opacity: 0.2; transform: scale(0.5); } 85% { opacity: 0.8; transform: scale(1.5); } }
  @keyframes starAppear5 { 0% { opacity: 0.25; transform: scale(0.8); } 22% { opacity: 0.7; transform: scale(1.3); } 44% { opacity: 0.15; transform: scale(0.5); } 66% { opacity: 1; transform: scale(1.9); } 88% { opacity: 0.4; transform: scale(1); } 100% { opacity: 0.25; transform: scale(0.8); } }
  @keyframes starAppear6 { 0%, 100% { opacity: 0.4; transform: scale(0.9); } 10% { opacity: 1; transform: scale(1.6); } 30% { opacity: 0.2; transform: scale(0.6); } 50% { opacity: 0.8; transform: scale(1.3); } 70% { opacity: 0.3; transform: scale(0.7); } 90% { opacity: 0.9; transform: scale(1.5); } }
  @keyframes starAppear7 { 0%, 100% { opacity: 0.3; transform: scale(0.6); } 40% { opacity: 1; transform: scale(2); } 55% { opacity: 0.5; transform: scale(1); } 80% { opacity: 0.15; transform: scale(0.5); } }
  @keyframes shootStar {
    0% { opacity: 0; transform: translate(0, 0) rotate(var(--angle)) scaleX(0.3); }
    10% { opacity: 1; transform: translate(calc(var(--dx) * 0.1), calc(var(--dy) * 0.1)) rotate(var(--angle)) scaleX(1); }
    90% { opacity: 1; transform: translate(calc(var(--dx) * 0.9), calc(var(--dy) * 0.9)) rotate(var(--angle)) scaleX(1); }
    100% { opacity: 0; transform: translate(var(--dx), var(--dy)) rotate(var(--angle)) scaleX(0.3); }
  }
  @keyframes shuffleLeft { 0% { transform: translate(0, 0) rotate(0deg); z-index: 1; } 20% { transform: translate(-90px, -20px) rotate(-15deg); z-index: 5; } 40% { transform: translate(-60px, 30px) rotate(8deg); z-index: 2; } 60% { transform: translate(-30px, -10px) rotate(-5deg); z-index: 4; } 80% { transform: translate(-10px, 15px) rotate(3deg); z-index: 3; } 100% { transform: translate(0, 0) rotate(0deg); z-index: 1; } }
  @keyframes shuffleRight { 0% { transform: translate(0, 0) rotate(0deg); z-index: 1; } 20% { transform: translate(90px, 20px) rotate(15deg); z-index: 5; } 40% { transform: translate(60px, -30px) rotate(-8deg); z-index: 2; } 60% { transform: translate(30px, 10px) rotate(5deg); z-index: 4; } 80% { transform: translate(10px, -15px) rotate(-3deg); z-index: 3; } 100% { transform: translate(0, 0) rotate(0deg); z-index: 1; } }
  @keyframes shuffleUp { 0% { transform: translate(0, 0) rotate(0deg); z-index: 2; } 25% { transform: translate(40px, -50px) rotate(20deg); z-index: 6; } 50% { transform: translate(-40px, -30px) rotate(-12deg); z-index: 3; } 75% { transform: translate(20px, -20px) rotate(8deg); z-index: 5; } 100% { transform: translate(0, 0) rotate(0deg); z-index: 2; } }
  @keyframes shuffleDown { 0% { transform: translate(0, 0) rotate(0deg); z-index: 2; } 25% { transform: translate(-40px, 50px) rotate(-20deg); z-index: 6; } 50% { transform: translate(40px, 30px) rotate(12deg); z-index: 3; } 75% { transform: translate(-20px, 20px) rotate(-8deg); z-index: 5; } 100% { transform: translate(0, 0) rotate(0deg); z-index: 2; } }
  @keyframes shuffleCenter { 0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); z-index: 3; } 50% { transform: translate(0, 0) rotate(360deg) scale(0.95); z-index: 4; } }
  @keyframes auraGlow { 0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.3); } }
  @keyframes orbitParticle { from { transform: rotate(0deg) translateX(120px) rotate(0deg); } to { transform: rotate(360deg) translateX(120px) rotate(-360deg); } }
  @keyframes flipIn { from { transform: rotateY(180deg); opacity: 0; } to { transform: rotateY(0deg); opacity: 1; } }
  @keyframes twinkleDot { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.9; } }
  .card-front { background: linear-gradient(180deg, #2d1a3d 0%, #1a1b4b 50%, #2d1a3d 100%); border: 1px solid rgba(200, 196, 212, 0.6); box-shadow: 0 0 40px rgba(93, 58, 122, 0.4), inset 0 0 30px #0f1235; }
  .h-mystical { font-family: 'Cormorant Garamond', serif; font-weight: 300; letter-spacing: 0.4em; }
  .h-italic { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-style: italic; }
  .card-name { font-family: 'Cinzel', serif; font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase; }
  .body-text { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 400; }
  .label-text { font-family: 'Cormorant Garamond', serif; font-weight: 400; letter-spacing: 0.35em; }

  @media (max-width: 640px) {
    .artemis-title { font-size: 52px !important; }
    .artemis-house { font-size: 16px !important; letter-spacing: 0.3em !important; }
    .artemis-divider-text { font-size: 10px !important; }
    .artemis-welcome { font-size: 17px !important; }
    .artemis-subtitle { font-size: 15px !important; }
    .artemis-prose { font-size: 15px !important; }
    .artemis-section-title { font-size: 28px !important; }
    .artemis-page { padding: 32px 16px !important; }
    .artemis-relationship-row { gap: 24px !important; }
    .artemis-cross-grid { gap: 8px !important; }
    .artemis-cross-card { transform: scale(0.78); transform-origin: center; margin: -16px !important; }
  }
  @media (max-width: 380px) {
    .artemis-title { font-size: 44px !important; }
    .artemis-cross-card { transform: scale(0.62); margin: -28px !important; }
  }
`;

const StarsBg = () => {
  const stars = React.useMemo(() => [...Array(240)].map((_, i) => ({
    size: Math.random() * 2.5 + 0.4,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 5 + Math.random() * 8,
    delay: Math.random() * 12,
    animIndex: i % 8
  })), []);
  return (
    <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: s.size + 'px', height: s.size + 'px',
          borderRadius: '50%',
          background: COLORS.silverLight,
          top: s.top + '%', left: s.left + '%',
          boxShadow: '0 0 ' + (s.size * 3) + 'px ' + COLORS.silverLight,
          animation: `starAppear${s.animIndex} ${s.duration}s infinite ease-in-out`,
          animationDelay: s.delay + 's',
          opacity: 0.5
        }}/>
      ))}
    </div>
  );
};

const AnimatedMoon = ({ size = 80 }) => {
  const [progress, setProgress] = useState(0);
  const cycleDuration = 60000;

  useEffect(() => {
    let rafId;
    let startTime = performance.now();
    const tick = (now) => {
      const elapsed = (now - startTime) % cycleDuration;
      setProgress(elapsed / cycleDuration);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const t = progress;
  const u = Math.cos(t * Math.PI * 2);
  const waning = t < 0.5;
  const r = 28;
  const cx = 50, cy = 50;
  const ellipseRx = r * Math.abs(u);
  const gibbous = u > 0;
  const maskId = 'moonmask-' + Math.floor(progress * 10000);
  const rectX = waning ? cx : cx - r;
  const ellipseColor = gibbous ? 'white' : 'black';

  // fullness: 0 bei Neumond, 1 bei Vollmond - sanfter Übergang
  const fullness = (1 - u) / 2;
  // Glow-Werte skalieren von "ruhig" (Neumond) zu "strahlend" (Vollmond)
  const innerBlur = 18 + fullness * 30; // 18 bis 48
  const innerOpacity = 0.45 + fullness * 0.5; // 0.45 bis 0.95
  const outerBlur = 36 + fullness * 50; // 36 bis 86
  const outerOpacity = 0.5 + fullness * 0.45; // 0.5 bis 0.95
  // Zusätzlicher dritter Schein nur bei nahezu Vollmond
  const extraGlow = fullness > 0.7 ? `drop-shadow(0 0 ${60 + (fullness - 0.7) * 80}px rgba(232, 228, 240, ${(fullness - 0.7) * 2.5}))` : '';
  const moonFilter = `drop-shadow(0 0 ${innerBlur}px rgba(232, 228, 240, ${innerOpacity})) drop-shadow(0 0 ${outerBlur}px rgba(155, 127, 184, ${outerOpacity})) ${extraGlow}`.trim();
  // Halo-Stop-Opacities ebenfalls anheben bei Vollmond
  const haloInner = 0.4 + fullness * 0.35; // 0.4 bis 0.75
  const haloMid = 0.18 + fullness * 0.22; // 0.18 bis 0.4
  // Halo-Radius leicht vergrößern
  const haloR = 48 + fullness * 4;

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{filter: moonFilter, overflow: 'visible'}}>
        <defs>
          <radialGradient id="moonHalo3" cx="50%" cy="50%">
            <stop offset="0%" stopColor={COLORS.accent} stopOpacity={haloInner}/>
            <stop offset="60%" stopColor={COLORS.violet} stopOpacity={haloMid}/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <mask id={maskId}>
            <circle cx={cx} cy={cy} r={r} fill="white"/>
            <rect x={rectX} y={cy - r} width={r} height={r * 2} fill="black"/>
            <ellipse cx={cx} cy={cy} rx={ellipseRx} ry={r} fill={ellipseColor}/>
          </mask>
        </defs>
        <circle cx="50" cy="50" r={haloR} fill="url(#moonHalo3)"/>
        <circle cx={cx} cy={cy} r={r} fill="#3a1f5d" opacity="0.85"/>
        <circle cx={cx} cy={cy} r={r} fill={COLORS.silverLight} mask={`url(#${maskId})`}/>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={COLORS.silver} strokeWidth="0.4" opacity="0.35"/>
      </svg>
    </div>
  );
};

const MoonAuraGlow = () => (
  <div style={{
    position: 'absolute', top: '0', left: '50%',
    width: '500px', height: '500px',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(155, 127, 184, 0.25) 0%, rgba(93, 58, 122, 0.15) 30%, transparent 65%)',
    borderRadius: '50%',
    animation: 'moonAura 6s ease-in-out infinite',
    transform: 'translate(-50%, -50%)',
    zIndex: 1
  }}/>
);

function ShootingStars() {
  const [shots, setShots] = useState([]);

  useEffect(() => {
    let counter = 0;
    const spawn = () => {
      counter++;
      const isComet = counter % 5 === 0;
      const side = Math.floor(Math.random() * 4);
      let startX, startY, dx, dy;
      const distance = isComet ? 1400 + Math.random() * 300 : 220 + Math.random() * 180;
      const angleVariance = (Math.random() - 0.5) * 30;
      switch(side) {
        case 0:
          startX = isComet ? -5 : Math.random() * 30;
          startY = isComet ? Math.random() * 20 : Math.random() * 25;
          dx = distance; dy = distance * 0.55; break;
        case 1:
          startX = isComet ? 105 : 70 + Math.random() * 30;
          startY = isComet ? Math.random() * 20 : Math.random() * 25;
          dx = -distance; dy = distance * 0.55; break;
        case 2:
          startX = isComet ? -5 : Math.random() * 15;
          startY = 20 + Math.random() * 40;
          dx = isComet ? distance : distance * 1.1;
          dy = distance * 0.3; break;
        case 3:
          startX = isComet ? 105 : 85 + Math.random() * 15;
          startY = 20 + Math.random() * 40;
          dx = isComet ? -distance : -distance * 1.1;
          dy = distance * 0.3; break;
      }
      const angle = Math.atan2(dy, dx) * 180 / Math.PI + angleVariance;
      const id = Date.now() + Math.random();
      const duration = isComet ? 6000 : 1800 + Math.random() * 800;
      setShots(s => [...s, { id, startX, startY, dx, dy, angle, isComet, duration }]);
      setTimeout(() => setShots(s => s.filter(x => x.id !== id)), duration + 200);
    };

    const initial = setTimeout(spawn, 4000);
    const interval = setInterval(spawn, 28000 + Math.random() * 6000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  return (
    <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden'}}>
      {shots.map(s => {
        const trailColor = s.isComet ? '#7fffa8' : COLORS.silverLight;
        const glowColor = s.isComet ? 'rgba(127, 255, 168, 0.9)' : 'rgba(232, 228, 240, 0.9)';
        const trailWidth = s.isComet ? 110 : 70;
        const trailHeight = s.isComet ? 2.5 : 1.8;
        return (
          <div key={s.id} style={{
            position: 'absolute',
            top: s.startY + '%', left: s.startX + '%',
            width: trailWidth + 'px', height: trailHeight + 'px',
            '--dx': s.dx + 'px', '--dy': s.dy + 'px', '--angle': s.angle + 'deg',
            animation: `shootStar ${s.duration}ms ease-out forwards`,
            transformOrigin: '0% 50%', pointerEvents: 'none'
          }}>
            <div style={{
              width: '100%', height: '100%',
              background: `linear-gradient(to right, transparent 0%, ${glowColor} 70%, ${trailColor} 100%)`,
              borderRadius: '999px',
              boxShadow: s.isComet
                ? `0 0 12px ${glowColor}, 0 0 24px rgba(127, 255, 168, 0.6), 0 0 40px rgba(127, 255, 168, 0.3)`
                : `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`
            }}/>
            <div style={{
              position: 'absolute', right: 0, top: '50%',
              width: s.isComet ? '8px' : '5px',
              height: s.isComet ? '8px' : '5px',
              marginTop: s.isComet ? '-4px' : '-2.5px',
              borderRadius: '50%', background: trailColor,
              boxShadow: s.isComet
                ? `0 0 14px ${glowColor}, 0 0 28px rgba(127, 255, 168, 0.7), 0 0 50px rgba(127, 255, 168, 0.4)`
                : `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`
            }}/>
          </div>
        );
      })}
    </div>
  );
}

const CardBackArt = () => {
  const ink = "#e8e4f0";
  return (
    <svg viewBox="0 0 200 280" style={{width: '100%', height: '100%'}} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="lavenderBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4c5e8"/>
          <stop offset="30%" stopColor="#c8b5dc"/>
          <stop offset="70%" stopColor="#b8a5cc"/>
          <stop offset="100%" stopColor="#a895c0"/>
        </linearGradient>
      </defs>
      <rect width="200" height="280" fill="url(#lavenderBg)"/>
      <text x="100" y="110" textAnchor="middle" fill={ink} style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', fontStyle: 'italic'}}>the</text>
      <text x="100" y="128" textAnchor="middle" fill={ink} style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '9px', letterSpacing: '0.35em'}}>HOUSE OF</text>
      <text x="100" y="158" textAnchor="middle" fill={ink} style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', letterSpacing: '0.12em'}}>ARTEMIS</text>
      <text x="100" y="184" textAnchor="middle" fill={ink} style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', letterSpacing: '0.12em', fontStyle: 'italic'}}>Oracle</text>
      <text x="100" y="234" textAnchor="middle" fill={ink} style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '10px', fontStyle: 'italic'}}>the moon knows what you seek</text>
    </svg>
  );
};

const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const cardTone = {
  "Artemis": "Unabhängigkeit", "Persephone": "Dualität", "Nyx": "tiefes Mysterium",
  "Hekate": "Übergang", "Selene": "stille Reflexion", "Lilith": "rebellische Kraft",
  "Morrigan": "Souveränität", "Inanna": "Transformation", "Kali": "Befreiung",
  "Diana": "Schutz", "Brigid": "schöpferisches Feuer", "Freya": "Vereinigung",
  "Der Silberbogen": "klare Absicht", "Der Pfeil": "Handlung", "Der Kelch": "Empfangen",
  "Krone aus Dornen": "Schmerz als Macht", "Der Schleier": "Geheimnis", "Der Spiegel": "Selbsterkenntnis",
  "Der Schlüssel": "Zugang", "Die Fackel": "Führung", "Der Granatapfel": "bewusste Wahl",
  "Der Blutmond": "Erwachen", "Die Wölfin": "Zugehörigkeit", "Die Hirschkuh": "wachsame Zurückhaltung",
  "Die Eule": "stille Weisheit", "Die Rabin": "prophetische Zeichen", "Die Schlange": "Häutung",
  "Der Panther": "präzise Stärke", "Die Motte": "gefährliche Sehnsucht", "Die Spinne": "Schicksalsweberei",
  "Die Unterwelt": "Schattenarbeit", "Die Jagd": "aktives Verfolgen", "Das Erwachen": "Klarheit",
  "Die Schwelle": "Übergangsraum", "Die Wandlung": "Metamorphose", "Schwesternschaft": "weibliche Verbundenheit",
  "Die Schatten": "Integration", "Die Wiedergeburt": "Neubeginn", "Wolfsmond": "innere Einkehr",
  "Blauer Mond": "seltene Gelegenheit", "Erntemond": "Dankbarkeit", "Schwarzer Mond": "tiefe Intention",
  "Die Mutter": "nährende Fülle", "Die Liebende": "offene Hingabe", "Die Heilerin": "transformierende Präsenz",
  "Die Weise": "innere Wahrheit", "Die Kriegerin": "heiliger Kampf", "Die Träumerin": "visionäre Kraft",
  "Die Schöpferin": "schöpferischer Fluss", "Die Rebellin": "wilde Authentizität",
  "Die Pilgerin": "heilige Reise", "Die Erbin": "ahnen getragene Macht",
  "Der Grüne Komet": "seltene Botschaft"
};

// Year Oracle: only available during the "Rauhnächte" (sacred nights between the years)
// Window: December 25 through January 6 (inclusive)
const isYearOracleAvailable = () => {
  const now = new Date();
  const m = now.getMonth(); // 0-based
  const d = now.getDate();
  if (m === 11 && d >= 25) return true;
  if (m === 0 && d <= 6) return true;
  return false;
};

const daysUntilNextYearOracle = () => {
  const now = new Date();
  const year = now.getFullYear();
  const dec25ThisYear = new Date(year, 11, 25, 0, 0, 0);
  const target = now < dec25ThisYear ? dec25ThisYear : new Date(year + 1, 11, 25, 0, 0, 0);
  const ms = target - now;
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
};

const generateYearSynthesis = (drawn, userName) => {
  if (!drawn || drawn.length !== 12) return null;
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  // Group cards into quarters for the seasonal narrative
  const winter = [drawn[0], drawn[1]]; // Jan, Feb
  const spring = [drawn[2], drawn[3], drawn[4]]; // März, April, Mai
  const summer = [drawn[5], drawn[6], drawn[7]]; // Juni, Juli, August
  const autumn = [drawn[8], drawn[9], drawn[10]]; // Sept, Okt, Nov
  const yearEnd = [drawn[11]]; // Dezember

  // Detect overall themes
  const hasShadow = drawn.some(c => ["Die Schatten", "Die Unterwelt", "Schwarzer Mond", "Nyx", "Hekate", "Kali", "Lilith"].includes(c.name));
  const hasTransformation = drawn.some(c => ["Die Wandlung", "Die Wiedergeburt", "Das Erwachen", "Die Schlange", "Persephone", "Inanna"].includes(c.name));
  const hasAction = drawn.some(c => ["Der Pfeil", "Die Jagd", "Artemis", "Der Silberbogen", "Morrigan"].includes(c.name));
  const hasLove = drawn.some(c => ["Die Liebende", "Freya", "Der Kelch"].includes(c.name));
  const hasCreation = drawn.some(c => ["Die Schöpferin", "Brigid", "Die Träumerin"].includes(c.name));
  const hasComet = drawn.some(c => c.name === "Der Grüne Komet");

  // Year theme card: the most "powerful" or thematic card
  const themeCard = drawn[5] || drawn[0]; // Juni als Sommerhöhe
  const themeTone = cardTone[themeCard.name] || "ein heimliches Thema";

  let yearPromise;
  if (hasComet) yearPromise = "Dieses Jahr trägt ein seltenes Geschenk in sich. Der Grüne Komet erscheint in deiner Jahreslegung, und das bedeutet etwas. Es wird ein Ereignis geben, eine Begegnung oder einen Moment, den du nicht kommen siehst und der dich tief berührt. Halte deine Augen offen für das Unerwartete.";
  else if (hasTransformation && hasShadow) yearPromise = "Dieses Jahr wird ein Jahr der echten Verwandlung. Es wird nicht immer bequem sein, denn du wirst durch dunkle Räume gehen müssen, um zu deinem neuen Selbst zu finden. Doch genau diese Reise wird dich am meisten lehren. Am Ende des Jahres wirst du jemand anderes sein, freier und wahrer.";
  else if (hasCreation && hasAction) yearPromise = "Dieses Jahr will durch dich erschaffen werden. Etwas in dir drängt zur Verwirklichung, ein Werk, eine Vision, ein Beitrag, den nur du leisten kannst. Wenn du jetzt beginnst und am Werk dranbleibst, wird das kommende Jahr eines der schöpferischen Ernten.";
  else if (hasLove) yearPromise = "Dieses Jahr trägt Liebe in vielen Formen zu dir. Verbindungen werden tiefer, Begegnungen wahrer. Achte auf das, was zwischen dir und anderen entsteht, denn dort liegt eines der zentralen Geschenke dieses Jahres. Halte dein Herz offen.";
  else if (hasAction) yearPromise = "Dieses Jahr ruft dich zur Bewegung. Es ist kein Jahr zum Warten, sondern zum Wagen. Was du jetzt beginnst, wird dich tragen. Vertraue der Spannung, die du in dir spürst, sie ist Wegweiser, kein Hindernis.";
  else if (hasTransformation) yearPromise = "Dieses Jahr ist ein Jahr der Metamorphose. Du wirst spüren, wie sich etwas in dir wandelt, manchmal leise, manchmal mit Wucht. Lass es geschehen. Das, was du am Ende des Jahres bist, wirst du jetzt noch nicht ganz erkennen, aber es ist gut.";
  else yearPromise = "Dieses Jahr trägt eine eigene Qualität, die sich erst langsam offenbart. Es ist kein Jahr für vorschnelle Schlüsse, sondern für aufmerksames Lauschen. Was sich zeigen will, zeigt sich, wenn du still genug bist.";

  const opening = `${userName ? userName + ', dein' : 'Dein'} kommendes Jahr beginnt nicht mit einem leeren Blatt, sondern mit einem geschriebenen Pfad, den du erst im Gehen erkennst. Zwölf Karten haben sich für dich gefunden, eine für jeden Monat, und zusammen erzählen sie die Geschichte eines Jahres, das schon jetzt in Bewegung ist.`;

  const winterText = `Du beginnst das Jahr im Januar mit ${winter[0].name}, einer Karte, die ${cardTone[winter[0].name] || 'eine eigene Qualität'} in sich trägt. ${winter[0].message} Im Februar folgt ${winter[1].name} und vertieft diese Energie. ${winter[1].message} Die ersten zwei Monate sind dein Wintergrund, eine Zeit, in der du nach innen lauschst und das Saatkorn für das gesamte Jahr legst. Hetze nicht, das, was hier wurzelt, trägt später Frucht.`;

  const springText = `Im März öffnet sich der Frühling mit ${spring[0].name}. ${spring[0].message} Im April begleitet dich ${spring[1].name}. ${spring[1].message} Und im Mai erscheint ${spring[2].name}. ${spring[2].message} Diese drei Monate sind die Zeit des Aufbruchs. Was du im Winter empfangen hast, will jetzt in Bewegung kommen. Sei mutig, aber auch geduldig mit dem, was Zeit zum Wachsen braucht.`;

  const summerText = `Mit dem Juni betrittst du die Mitte deines Jahres, getragen von ${summer[0].name}. ${summer[0].message} Das Herz des Sommers gehört ${summer[1].name} im Juli. ${summer[1].message} Und der August schenkt dir ${summer[2].name}. ${summer[2].message} Der Sommer ist deine Reifezeit, der Höhepunkt deiner Kraft. Was du jetzt erlebst, sind keine zufälligen Momente, sondern die Ernte deiner ersten Jahreshälfte. Lebe sie bewusst.`;

  const autumnText = `Im September wird es ruhiger mit ${autumn[0].name}. ${autumn[0].message} Der Oktober trägt ${autumn[1].name}. ${autumn[1].message} Und im November kommt ${autumn[2].name} zu dir. ${autumn[2].message} Der Herbst ist die Zeit der Ehrlichkeit. Was hat sich bewährt? Was darf gehen? Diese drei Monate werden dich lehren, was wirklich zu dir gehört und was du loslassen darfst.`;

  const yearEndText = `Und im Dezember, an der Schwelle zum nächsten Jahr, leuchtet ${yearEnd[0].name}. ${yearEnd[0].message} So endet dein Jahr und beginnt das nächste. Was dieser Dezember dir bringt, ist sowohl Abschluss als auch erstes Flüstern dessen, was danach kommt.`;

  const themeIntro = `Wenn du auf das ganze Jahr blickst, zieht sich ein roter Faden hindurch, und er heißt ${themeTone}. Das ist das eigentliche Thema deines Jahres, der unsichtbare Bogen, der alle zwölf Monate miteinander verbindet. Es ist das, woran du wachsen darfst.`;

  const closing = `${yearPromise} Bewahre diese Auslegung. Schreib dir den Anfang jeder Jahreszeit auf und schau am Ende des Jahres zurück. Du wirst erkennen, dass die Karten gewusst haben, was du erst leben musstest.`;

  const paragraphs = [opening, winterText, springText, summerText, autumnText, yearEndText, themeIntro, closing];

  return { paragraphs, months };
};

const generateThreeSynthesis = (drawn) => {
  if (!drawn || drawn.length !== 3) return null;
  const [past, present, future] = drawn;
  const pastTone = cardTone[past.name] || "eine Energie";
  const presentTone = cardTone[present.name] || "eine Kraft";
  const futureTone = cardTone[future.name] || "ein Weg";

  const hasShadow = drawn.some(c => ["Die Schatten", "Die Unterwelt", "Schwarzer Mond", "Nyx", "Hekate", "Kali", "Lilith"].includes(c.name));
  const hasTransformation = drawn.some(c => ["Die Wandlung", "Die Wiedergeburt", "Das Erwachen", "Die Schlange", "Persephone", "Inanna"].includes(c.name));
  const hasAction = drawn.some(c => ["Der Pfeil", "Die Jagd", "Artemis", "Der Silberbogen", "Morrigan"].includes(c.name));
  const hasReceiving = drawn.some(c => ["Der Kelch", "Selene", "Die Hirschkuh", "Der Schleier", "Die Eule"].includes(c.name));

  let closingNote;
  if (hasShadow && hasTransformation) closingNote = "Was dich gerade unbequem berührt, ist nicht zufällig. Es ist der Stoff, aus dem deine Wandlung entsteht.";
  else if (hasAction && hasReceiving) closingNote = "Wisse, wann du den Bogen spannst und wann du den Kelch hältst. Beide Bewegungen gehören zu dir.";
  else if (hasAction) closingNote = "Diese Karten rufen dich zur Bewegung. Vertraue der Spannung, die du in dir spürst.";
  else if (hasReceiving) closingNote = "Du musst nicht alles selbst stemmen. Öffne dich für das, was dir entgegenkommt.";
  else if (hasTransformation) closingNote = "Eine Metamorphose hat in dir schon begonnen. Lass dich auflösen, wo das Alte nicht mehr trägt.";
  else if (hasShadow) closingNote = "Dein Weg führt durch dunkle Räume. Trage eine Fackel, keine Furcht.";
  else closingNote = "Höre auf die feinen Töne zwischen den Karten. Manchmal flüstert das Schicksal.";

  const paragraphs = [
    `Deine Geschichte beginnt mit ${past.name} in deiner Vergangenheit. ${pastTone.charAt(0).toUpperCase() + pastTone.slice(1)} war das, was dich geprägt hat, was dich genau hierher gebracht hat. ${past.message} Diese Energie hat ihre Aufgabe erfüllt, sie trägt dich heute wie ein stiller Grund, auch wenn du sie nicht mehr aktiv leben musst.`,
    `Aus dieser Geschichte heraus stehst du jetzt in deiner Gegenwart, und sie wird getragen von ${present.name}. ${presentTone.charAt(0).toUpperCase() + presentTone.slice(1)} ist das Thema, um das sich gerade alles bei dir dreht. ${present.message} Dies ist dein Hier und Jetzt, der Ort, an dem du wirklich wirken kannst. Die Vergangenheit ist nicht zufällig zu diesem Punkt gewachsen, sie hat dich vorbereitet auf genau diese Frage.`,
    `Und am Horizont zeigt sich bereits ${future.name}, deine Zukunft. ${futureTone.charAt(0).toUpperCase() + futureTone.slice(1)} ist das, wohin sich die Energie entfalten will, wenn du deinem Weg treu bleibst. ${future.message} Diese Karte ist keine Vorhersage, sondern ein Versprechen. Wenn du der Frage deiner Gegenwart folgst, wenn du nicht ausweichst, wirst du genau dort ankommen, wo etwas Neues auf dich wartet.`,
    closingNote
  ];

  return paragraphs;
};

const generateRelationshipSynthesis = (drawn) => {
  if (!drawn || drawn.length !== 4) return null;
  const [me, other, connection, future] = drawn;

  const meTone = cardTone[me.name] || "eine eigene Qualität";
  const otherTone = cardTone[other.name] || "eine andere Qualität";
  const connTone = cardTone[connection.name] || "eine besondere Energie";
  const futureTone = cardTone[future.name] || "ein Weg";

  const hasShadow = drawn.some(c => ["Die Schatten", "Die Unterwelt", "Schwarzer Mond", "Nyx", "Hekate", "Kali", "Lilith"].includes(c.name));
  const hasTransformation = drawn.some(c => ["Die Wandlung", "Die Wiedergeburt", "Das Erwachen", "Die Schlange", "Persephone", "Inanna"].includes(c.name));
  const hasLove = drawn.some(c => ["Die Liebende", "Freya", "Der Kelch"].includes(c.name));
  const hasAction = drawn.some(c => ["Der Pfeil", "Die Jagd", "Artemis", "Der Silberbogen", "Morrigan"].includes(c.name));

  let closingNote;
  if (hasShadow && hasTransformation) closingNote = "Was zwischen euch gerade unbequem ist, ist nicht zufällig. Es ist der Stoff, aus dem eure Wandlung entsteht. Lass die schwierigen Momente nicht aus, sie tragen mehr Wahrheit als die leichten.";
  else if (hasLove && hasAction) closingNote = "Eure Verbindung will gleichzeitig zart und mutig sein. Liebe braucht hier auch Klarheit. Sage, was gesagt werden muss, und halte dabei dein Herz offen.";
  else if (hasLove) closingNote = "Eure Verbindung ist mit Liebe getragen. Halte sie zart, sie verdient deine Aufmerksamkeit. Was zwischen euch wächst, will gepflegt werden.";
  else if (hasShadow) closingNote = "Eure Beziehung berührt dunkle Räume. Das ist nicht falsch. Manche Verbindungen sind dazu da, dich an Orte zu führen, die du allein nicht betreten würdest.";
  else if (hasTransformation) closingNote = "Diese Verbindung verwandelt euch beide. Lass es geschehen, auch wenn du nicht weißt, wer du am Ende dieser Verwandlung sein wirst.";
  else if (hasAction) closingNote = "Eure Verbindung ruft euch zur Bewegung. Wartet nicht auf den perfekten Moment, er kommt nicht. Macht den nächsten Schritt.";
  else closingNote = "Eure Verbindung trägt eine eigene Logik. Höre genauer hin, was zwischen den Worten liegt. Manchmal weiß das Schweigen mehr als die Sprache.";

  const paragraphs = [
    `Du trittst dieser Beziehung mit ${me.name} entgegen, einer Karte, die ${meTone} in sich trägt. ${me.message} Diese Karte zeigt, wer du in dieser Verbindung wirst, welchen Raum du einnimmst, welche Energie du mitbringst. Frage dich ehrlich, ob du in dieser Beziehung näher zu dir kommst oder weiter von dir weg.`,
    `Dir gegenüber steht ${other.name} und bringt ${otherTone} mit. ${other.message} Verstehe diese Karte als Einladung, das andere Wesen klarer zu sehen, ohne deine Wünsche darüberzulegen. Die andere Person ist nicht das, was du in sie hineinprojizierst, sondern genau das, was diese Karte zeigt.`,
    `Zwischen euch beiden lebt ${connection.name}, die Karte eurer Verbindung. ${connTone.charAt(0).toUpperCase() + connTone.slice(1)} ist das, was ihr gemeinsam erschafft, jenseits dessen, was ihr in Worte fasst. ${connection.message} Eure Verbindung ist mehr als die Summe eurer beider Wesen. ${me.name} und ${other.name} treffen aufeinander und bilden einen dritten Raum, der weder dir noch der anderen Person allein gehört, sondern aus euch beiden entsteht.`,
    `Wohin sich eure Verbindung bewegt, zeigt ${future.name}. ${futureTone.charAt(0).toUpperCase() + futureTone.slice(1)} ist die Richtung, in die das, was zwischen euch jetzt angelegt ist, sich entfalten will. ${future.message} Verstehe das als Einladung, nicht als Vorhersage. Die Zukunft eurer Verbindung hängt davon ab, wie ihr jetzt miteinander seid.`,
    closingNote
  ];

  return paragraphs;
};

// Cross synthesis - atmosphärisch, bildhaft, mit offenen Fragen
const buildCrossStory = (cards) => {
  if (!cards || cards.length !== 5) return null;
  // Reihenfolge: above=Zukunft, left=Weg links, right=Weg rechts, below=Vergangenheit, center=Gegenwart
  const [above, left, right, below, center] = cards;
  const future = above, pathLeft = left, pathRight = right, past = below, present = center;

  // Helfer-Fallbacks für ältere Karten ohne neue Felder
  const img = (c) => c.image || c.name;
  const echo = (c) => c.pastEcho || `${cardTone[c.name] || 'eine eigene Qualität'} war einmal ein Schlüssel für dich`;
  const touch = (c) => c.presentTouch || `Etwas in dir bewegt sich, das ${cardTone[c.name] || 'noch keinen Namen'} trägt`;
  const essence = (c) => c.pathEssence || `den Weg, den ${c.name} verkörpert`;
  const move = (c) => c.futureMove || `${c.name} bewegt sich auf dich zu`;

  // Frage zur Gegenwart - abhängig vom Karten-Charakter
  const presentQuestion = (c) => {
    if (["Die Schatten", "Die Unterwelt", "Schwarzer Mond", "Nyx", "Hekate", "Kali", "Lilith"].includes(c.name))
      return "Was in dir möchte gesehen werden, ohne dass du es zurechtbiegst?";
    if (["Die Wandlung", "Die Wiedergeburt", "Das Erwachen", "Die Schlange", "Persephone", "Inanna"].includes(c.name))
      return "Welcher Teil von dir ist bereit zu gehen, und welcher will geboren werden?";
    if (["Der Pfeil", "Die Jagd", "Artemis", "Der Silberbogen", "Morrigan", "Die Kriegerin"].includes(c.name))
      return "Wofür spannst du längst den Bogen, ohne ihn loszulassen?";
    if (["Der Kelch", "Selene", "Die Hirschkuh", "Der Schleier", "Die Eule"].includes(c.name))
      return "Was möchte zu dir kommen, sobald du aufhörst, es zu jagen?";
    if (["Die Liebende", "Freya"].includes(c.name))
      return "Wo darf dein Herz heute weicher werden, ohne sich zu verlieren?";
    if (["Die Schöpferin", "Brigid", "Die Träumerin", "Die Mutter"].includes(c.name))
      return "Was möchte durch dich in die Welt kommen?";
    if (c.name === "Der Grüne Komet")
      return "Welche Wahrheit ruft nach dir, sobald alles um dich herum still wird?";
    return "Welche Wahrheit ruft nach dir, sobald alles um dich herum still wird?";
  };

  // Frage zu den Wegen - abhängig von der Karten-Kombination
  const pathQuestion = (l, r) => {
    const hasShadow = (c) => ["Die Schatten", "Die Unterwelt", "Schwarzer Mond", "Nyx", "Hekate", "Kali", "Lilith"].includes(c.name);
    const hasReceiving = (c) => ["Der Kelch", "Selene", "Die Hirschkuh", "Der Schleier", "Die Eule"].includes(c.name);
    const hasAction = (c) => ["Der Pfeil", "Die Jagd", "Artemis", "Der Silberbogen", "Morrigan", "Die Kriegerin"].includes(c.name);

    if (hasShadow(l) || hasShadow(r))
      return "Welcher Weg trägt deinen Atem, und welcher kostet ihn?";
    if (hasAction(l) && hasReceiving(r) || hasAction(r) && hasReceiving(l))
      return "Welcher Weg verlangt deine Bewegung, und welcher deine Hingabe?";
    if (hasReceiving(l) && hasReceiving(r))
      return "Welcher Weg klingt nach dir, wenn du sehr leise hinhörst?";
    return "Welche Entscheidung fühlt sich nach Rückkehr zu dir selbst an?";
  };

  // Variation in den Eröffnungen
  const openings = [
    "Die Karten öffnen heute einen Raum zwischen Erinnerung und Schicksal. Jeder Blick auf sie trägt eine Frage in sich, die längst unter deiner Oberfläche gewartet hat.",
    "Fünf Karten haben sich für dich versammelt, und sie liegen nicht zufällig. Jede trägt ein Stück deiner Geschichte und ein Stück dessen, was noch werden will.",
    "Was die Karten zeigen, ist nicht das, was geschehen wird, sondern das, was bereits in dir lebt. Diese Auslegung ist eine Einladung, hinzuhören."
  ];
  const opening = openings[Math.floor(Math.random() * openings.length)];

  // Variation im Schluss
  const closings = [
    "Zwischen den Karten liegt eine Botschaft, die sich erst zeigt, wenn du länger hinsiehst. Nichts drängt dich. Doch etwas in dir hat längst begonnen, sich zu erinnern.",
    "Die Karten reden nicht in Anweisungen, sondern in Spiegeln. Was du in ihnen erkennst, war schon vorher in dir. Sie tragen es nur ans Licht.",
    "Diese Auslegung will nicht entschieden, sondern bewohnt werden. Bleib eine Weile in ihr, und beobachte, welches Bild dich nicht mehr loslässt.",
    "Zwischen den Karten flüstert ein Wissen, das deine Sprache noch nicht ganz erreicht hat. Lass ihm Zeit. Es kommt."
  ];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  const paragraphs = [
    opening,

    `${img(past)} liegt hinter dir und trägt das Licht einer vergangenen Zeit. Was dort gereift ist, wirkt weiter in deinen Entscheidungen, in deinem Blick, in dem stillen Wissen, das du durch Erfahrung gewonnen hast. ${echo(past)}. Heute zeigt sich, welche Wege dich geformt haben und welche Spuren noch immer in deinem Inneren leuchten.`,

    `Im Zentrum deiner Gegenwart erscheint ${img(present)}. ${touch(present)}. ${present.message} Hier liegt dein Augenblick.`,

    presentQuestion(present),

    `Links erhebt sich ${img(pathLeft)}. Dort öffnet sich der erste Weg, ${essence(pathLeft)}. ${pathLeft.message}`,

    `Rechts erscheint ${img(pathRight)}. Dort öffnet sich der zweite Weg, ${essence(pathRight)}. ${pathRight.message}`,

    pathQuestion(pathLeft, pathRight),

    `Am Horizont steigt ${img(future)} auf. Deine Zukunft bewegt sich bereits auf dich zu. ${move(future)}. Diese Karte trägt das Versprechen eines Übergangs.`,

    closing
  ];

  return paragraphs;
};

function CardDisplay({ card, size = 'md', label }) {
  const w = size === 'lg' ? 220 : size === 'sm' ? 110 : 160;
  const h = size === 'lg' ? 330 : size === 'sm' ? 165 : 240;
  const sym = size === 'lg' ? 150 : size === 'sm' ? 75 : 110;
  const nameSize = size === 'lg' ? 12 : size === 'sm' ? 8 : 10;
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'flipIn 0.8s ease-out'}}>
      {label && <p className="label-text" style={{fontSize: '9px', marginBottom: '6px', color: COLORS.silver, opacity: 0.7}}>{label}</p>}
      <div className="card-front" style={{
        width: w + 'px', height: h + 'px',
        borderRadius: '4px', padding: '12px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <p className="label-text" style={{fontSize: '7px', color: COLORS.silver, opacity: 0.55}}>{card.category}</p>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <SymbolSVG type={card.symbol} size={sym}/>
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{height: '1px', width: '30px', marginBottom: '6px', background: COLORS.silver, opacity: 0.4}}/>
          <h3 className="card-name" style={{fontSize: nameSize + 'px', textAlign: 'center', color: COLORS.silverLight, lineHeight: 1.2}}>{card.name}</h3>
        </div>
      </div>
    </div>
  );
}

function ShuffleAnimation({ message }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', paddingBottom: '60px'}}>
      <div style={{position: 'relative', width: '320px', height: '320px'}}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155, 127, 184, 0.4) 0%, rgba(93, 58, 122, 0.2) 40%, transparent 70%)',
          animation: 'auraGlow 3s ease-in-out infinite', pointerEvents: 'none'
        }}/>
        <div style={{position: 'absolute', top: '50%', left: '50%', width: 0, height: 0}}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '3px', height: '3px', borderRadius: '50%',
              background: COLORS.silverLight,
              boxShadow: '0 0 8px ' + COLORS.silverLight,
              animation: 'orbitParticle ' + (4 + i * 0.3) + 's linear infinite',
              animationDelay: (i * -0.5) + 's', opacity: 0.7
            }}/>
          ))}
        </div>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '140px', height: '210px'}}>
          {[
            {anim: 'shuffleLeft', delay: '0s'},
            {anim: 'shuffleRight', delay: '0.2s'},
            {anim: 'shuffleUp', delay: '0.4s'},
            {anim: 'shuffleDown', delay: '0.6s'},
            {anim: 'shuffleCenter', delay: '0.1s'},
            {anim: 'shuffleLeft', delay: '0.8s'},
            {anim: 'shuffleRight', delay: '1s'}
          ].map((c, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '140px', height: '210px',
              borderRadius: '4px', overflow: 'hidden',
              border: '1px solid rgba(232, 228, 240, 0.6)',
              boxShadow: '0 0 30px rgba(200, 180, 220, 0.4)',
              animation: `${c.anim} 2.8s ease-in-out infinite`,
              animationDelay: c.delay
            }}><CardBackArt/></div>
          ))}
        </div>
      </div>
      <p className="body-text" style={{fontStyle: 'italic', fontSize: '20px', marginTop: '48px', color: COLORS.silverLight}}>{message}</p>
      <div style={{display: 'flex', gap: '8px', marginTop: '16px', opacity: 0.6}}>
        {[0, 0.3, 0.6].map((d, i) => (
          <div key={i} style={{width: '4px', height: '4px', borderRadius: '50%', background: COLORS.silverLight, animation: 'twinkleDot 1s infinite', animationDelay: d + 's'}}/>
        ))}
      </div>
    </div>
  );
}

function AuthScreen({ onLogin }) {
  const [name, setName] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const submit = () => {
    if (!name.trim()) { setError('Bitte gib deinen Namen ein.'); return; }
    if (!accepted) { setError('Bitte stimme den Nutzungsbedingungen zu.'); return; }
    onLogin({ name: name.trim() });
  };

  return (
    <div style={{minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', ...bgStyle}}>
      <StarsBg/>
      <style>{sharedStyles}</style>
      <div className="artemis-page" style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '640px', margin: '0 auto', padding: '64px 24px 48px'}}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <div style={{position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '32px'}}>
            <MoonAuraGlow/>
            <div style={{position: 'relative', zIndex: 2}}>
              <AnimatedMoon size={80}/>
            </div>
          </div>
          <h1 className="h-mystical artemis-house" style={{fontSize: '20px', color: COLORS.silverLight, marginBottom: '8px', animation: 'mysticalGlow 4s ease-in-out infinite'}}>HOUSE OF</h1>
          <h1 className="h-italic artemis-title" style={{fontSize: '72px', color: COLORS.silverLight, animation: 'mysticalGlow 4s ease-in-out infinite', lineHeight: 1, marginBottom: '20px'}}>Artemis</h1>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '36px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, ' + COLORS.silver + ')'}}/>
            <p className="label-text artemis-divider-text" style={{fontSize: '11px', color: COLORS.silver, textTransform: 'uppercase'}}>Oracle Deck</p>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, ' + COLORS.silver + ')'}}/>
          </div>
          <p className="body-text artemis-prose" style={{fontStyle: 'italic', fontSize: '17px', color: COLORS.silverLight, opacity: 0.85, lineHeight: 1.6, marginBottom: '32px'}}>
            Bevor du den heiligen Hain betrittst,<br/>nenne der Göttin deinen Namen.
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '440px', margin: '0 auto'}}>
          <input
            type="text"
            placeholder="Dein Name..."
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') submit(); }}
            style={{
              width: '100%',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '17px',
              background: 'rgba(15, 18, 53, 0.4)',
              border: '1px solid rgba(200, 196, 212, 0.3)',
              color: COLORS.silverLight,
              padding: '16px 18px', outline: 'none', boxSizing: 'border-box',
              borderRadius: '2px'
            }}
          />

          <label style={{display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', padding: '6px 0'}}>
            <div onClick={() => setAccepted(!accepted)} style={{flexShrink: 0, marginTop: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid ' + (accepted ? 'rgba(200, 196, 212, 0.8)' : 'rgba(200, 196, 212, 0.35)'), background: accepted ? 'rgba(93, 58, 122, 0.4)' : 'rgba(15, 18, 53, 0.4)'}}>
              {accepted && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M 2 6 L 5 9 L 10 3" stroke={COLORS.silverLight} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>}
            </div>
            <span className="body-text" style={{fontSize: '14px', fontStyle: 'italic', color: COLORS.silverLight, opacity: 0.85, lineHeight: 1.5}}>
              Ich verstehe, dass dieses Orakel der Selbstreflexion dient und stimme zu.
            </span>
          </label>

          {error && <p className="body-text" style={{fontStyle: 'italic', fontSize: '14px', textAlign: 'center', color: '#d4a4b8'}}>{error}</p>}

          <button onClick={submit} className="card-name" style={{
            fontSize: '14px', padding: '18px', marginTop: '6px',
            color: COLORS.silverLight,
            background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.7), rgba(26, 27, 75, 0.7))',
            border: '1px solid rgba(200, 196, 212, 0.4)',
            cursor: 'pointer', borderRadius: '2px'
          }}>
            Den Hain betreten
          </button>
        </div>

        <div style={{textAlign: 'center', marginTop: '56px', marginBottom: '40px'}}>
          <p className="label-text" style={{fontSize: '11px', color: COLORS.silver, opacity: 0.55}}>53 KARTEN · 9 MYSTERIEN</p>
        </div>

        <div style={{marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0.55}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M 5 1 A 4 4 0 0 1 5 9 A 2.5 4 0 0 0 5 1" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
          </div>
          <p className="h-italic" style={{fontSize: '16px', color: COLORS.silverLight}}>sheAwakens</p>
          <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.7}}>© {new Date().getFullYear()} · ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
}

const CrossIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M 10 2 L 10 18 M 2 10 L 18 10" stroke={COLORS.silverLight} strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="10" cy="10" r="1.2" fill={COLORS.silverLight}/>
  </svg>
);

const HeartIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M 10 16 C 10 16 3 12 3 7.5 C 3 5 5 3.5 7 3.5 C 8.5 3.5 10 4.5 10 6 C 10 4.5 11.5 3.5 13 3.5 C 15 3.5 17 5 17 7.5 C 17 12 10 16 10 16 Z" stroke={COLORS.silverLight} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
  </svg>
);

const SunIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3.5" stroke={COLORS.silverLight} strokeWidth="1.2" fill="none"/>
    <g stroke={COLORS.silverLight} strokeWidth="1" strokeLinecap="round">
      <line x1="10" y1="2" x2="10" y2="4"/>
      <line x1="10" y1="16" x2="10" y2="18"/>
      <line x1="2" y1="10" x2="4" y2="10"/>
      <line x1="16" y1="10" x2="18" y2="10"/>
      <line x1="4.5" y1="4.5" x2="6" y2="6"/>
      <line x1="14" y1="14" x2="15.5" y2="15.5"/>
      <line x1="15.5" y1="4.5" x2="14" y2="6"/>
      <line x1="6" y1="14" x2="4.5" y2="15.5"/>
    </g>
  </svg>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('home');
  const [drawn, setDrawn] = useState([]);
  const [shuffling, setShuffling] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@300;400&display=swap';
    document.head.appendChild(link);

    // Keyframes & shared styles direkt in den Head injizieren - wirkt zuverlässig
    // auch in veröffentlichten Artefakten, wo <style> im Body manchmal ignoriert wird.
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-artemis', 'animations');
    styleEl.textContent = sharedStyles;
    document.head.appendChild(styleEl);

    return () => {
      try { document.head.removeChild(link); } catch(e) {}
      try { document.head.removeChild(styleEl); } catch(e) {}
    };
  }, []);

  const draw = (count, targetMode) => {
    setShuffling(true);
    setDrawn([]);
    setMode(targetMode);
    setTimeout(() => {
      setDrawn(shuffleArray(cards).slice(0, count));
      setShuffling(false);
    }, 2800);
  };

  const reset = () => { setDrawn([]); setShuffling(false); setMode('home'); };

  if (!user) return <AuthScreen onLogin={setUser}/>;

  const yearAvailable = isYearOracleAvailable();
  const yearCountdown = daysUntilNextYearOracle();

  const options = [
    {key: 'daily', count: 1, title: 'Tagesorakel', icon: Moon, disabled: false,
     description: 'Für Momente, in denen du eine einzige Botschaft für deinen Tag empfangen möchtest. Diese Karte richtet deinen Blick auf die Energie, die dich heute begleitet.'},
    {key: 'three', count: 3, title: 'Drei Karten Legung', icon: Sparkles, disabled: false,
     description: 'Für Fragen rund um Vergangenheit, Gegenwart und den nächsten Schritt. Diese Legung öffnet Zusammenhänge und zeigt, was sich gerade durch dein Leben bewegt.'},
    {key: 'relationship', count: 4, title: 'Beziehungsorakel', icon: null, disabled: false, customIcon: 'heart',
     description: 'Für Verbindungen zwischen zwei Menschen. Gefühle, Sehnsucht, Distanz, Begegnung und unausgesprochene Wahrheiten treten hier stärker hervor.'},
    {key: 'cross', count: 5, title: 'Das Heilige Kreuz', icon: null, disabled: false, customIcon: 'cross',
     description: 'Für Zeiten großer Entscheidungen, innerer Wendepunkte und tiefer Fragen. Diese Legung führt dich durch verborgene Ebenen deiner Situation und zeigt, was unter der Oberfläche wirkt.'},
    {key: 'year', count: 12, title: 'Jahresorakel', icon: null, disabled: !yearAvailable, customIcon: 'sun', suffix: yearAvailable ? null : `in ${yearCountdown} ${yearCountdown === 1 ? 'Tag' : 'Tagen'}`,
     description: 'Für einen Blick auf die kommenden Monate und die größeren Bewegungen deines Weges. Jede Karte öffnet ein neues Kapitel deiner Reise.'},
    {key: 'journal', count: 0, title: 'Orakel Journal', icon: BookOpen, disabled: true, suffix: 'bald'}
  ];

  const renderHome = () => (
    <div className="artemis-page" style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '640px', margin: '0 auto', padding: '64px 24px 48px'}}>
      <div style={{textAlign: 'center', marginBottom: '56px', position: 'relative'}}>
        <div style={{position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
          <MoonAuraGlow/>
          <div style={{position: 'relative', zIndex: 2}}>
            <AnimatedMoon size={72}/>
          </div>
        </div>
        <h1 className="h-mystical artemis-house" style={{fontSize: '20px', color: COLORS.silverLight, marginBottom: '8px', animation: 'mysticalGlow 4s ease-in-out infinite'}}>HOUSE OF</h1>
        <h1 className="h-italic artemis-title" style={{fontSize: '72px', color: COLORS.silverLight, animation: 'mysticalGlow 4s ease-in-out infinite', lineHeight: 1, marginBottom: '20px'}}>Artemis</h1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '40px'}}>
          <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, ' + COLORS.silver + ')'}}/>
          <p className="label-text artemis-divider-text" style={{fontSize: '11px', color: COLORS.silver, textTransform: 'uppercase'}}>Oracle Deck</p>
          <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, ' + COLORS.silver + ')'}}/>
        </div>
        <p className="body-text artemis-welcome" style={{fontStyle: 'italic', fontSize: '20px', color: COLORS.silverLight, opacity: 0.95, marginBottom: '6px'}}>Willkommen, {user.name}.</p>
        <p className="body-text artemis-subtitle" style={{fontStyle: 'italic', fontSize: '18px', color: COLORS.silverLight, opacity: 0.85}}>Die Göttinnen, Wesen und Mysterien erwarten dich.</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        {options.map(opt => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.key}
              onClick={() => { if (!opt.disabled) draw(opt.count, opt.key); }}
              disabled={opt.disabled}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'stretch',
                gap: '10px',
                padding: '22px 24px',
                background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.55), rgba(26, 27, 75, 0.55))',
                border: '1px solid rgba(200, 196, 212, 0.28)',
                color: COLORS.silverLight,
                cursor: opt.disabled ? 'default' : 'pointer',
                opacity: opt.disabled ? 0.45 : 1,
                borderRadius: '2px',
                textAlign: 'left'
              }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                {opt.customIcon === 'cross' ? <CrossIcon size={18}/> : opt.customIcon === 'heart' ? <HeartIcon size={18}/> : opt.customIcon === 'sun' ? <SunIcon size={18}/> : (Icon && <Icon size={18} style={{opacity: 0.9}}/>)}
                <span className="card-name" style={{fontSize: '14px'}}>{opt.title}</span>
                {opt.suffix && <span className="body-text" style={{fontStyle: 'italic', fontSize: '12px', color: COLORS.silver, opacity: 0.6, marginLeft: '4px'}}>· {opt.suffix}</span>}
              </div>
              {opt.description && (
                <p className="body-text" style={{
                  fontStyle: 'italic', fontSize: '14px', lineHeight: 1.55,
                  color: COLORS.silverLight, opacity: 0.7,
                  margin: 0, paddingLeft: '30px'
                }}>{opt.description}</p>
              )}
            </button>
          );
        })}
      </div>

      <div style={{textAlign: 'center', marginTop: '56px', marginBottom: '40px'}}>
        <p className="label-text" style={{fontSize: '11px', color: COLORS.silver, opacity: 0.55}}>53 KARTEN · 9 MYSTERIEN</p>
      </div>

      <div style={{textAlign: 'center', marginTop: '64px'}}>
        <button onClick={() => setUser(null)} className="body-text" style={{
          background: 'none', border: 'none',
          fontStyle: 'italic', fontSize: '14px',
          color: COLORS.silverLight, opacity: 0.7,
          cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px'
        }}>
          Den Hain verlassen
        </button>
      </div>

      <div style={{marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0.55}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M 5 1 A 4 4 0 0 1 5 9 A 2.5 4 0 0 0 5 1" fill={COLORS.silverLight}/></svg>
          <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
        </div>
        <p className="h-italic" style={{fontSize: '16px', color: COLORS.silverLight}}>sheAwakens</p>
        <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.7}}>© {new Date().getFullYear()} · ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );

  const Shell = ({ title, children }) => {
    const currentOption = options.find(o => o.key === mode);
    const drawAgain = () => { if (currentOption && !currentOption.disabled) draw(currentOption.count, currentOption.key); };
    return (
      <div className="artemis-page" style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '860px', margin: '0 auto', padding: '48px 24px'}}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 className="h-italic artemis-section-title" style={{fontSize: '36px', color: COLORS.silverLight, animation: 'mysticalGlow 4s ease-in-out infinite'}}>{title}</h2>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, ' + COLORS.silver + ')'}}/>
            <svg width="8" height="8" viewBox="0 0 8 8"><path d="M 4 0 L 5 3 L 8 4 L 5 5 L 4 8 L 3 5 L 0 4 L 3 3 Z" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, ' + COLORS.silver + ')'}}/>
          </div>
        </div>
        {children}
        <div style={{marginTop: '48px', marginBottom: '24px', display: 'flex', justifyContent: 'center'}}>
          <button onClick={drawAgain} className="label-text" style={{
            fontSize: '11px', padding: '12px 24px',
            color: COLORS.silverLight,
            background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.9), rgba(26, 27, 75, 0.9))',
            border: '1px solid rgba(200, 196, 212, 0.35)',
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
            borderRadius: '2px'
          }}>
            <RotateCcw size={14}/> Neue Legung
          </button>
        </div>
        <div style={{marginBottom: '64px', textAlign: 'center'}}>
          <button onClick={reset} className="body-text" style={{
            background: 'none', border: 'none',
            fontStyle: 'italic', fontSize: '14px',
            color: COLORS.silverLight, opacity: 0.7,
            cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px'
          }}>
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    );
  };

  const renderDaily = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message="Die Göttin wählt deine Karte..."/>;
    const c = drawn[0];
    // Fallback auf meaning + message, falls eine ältere Karte kein dailyReading hat
    const text = c.dailyReading || `${c.meaning} ${c.message}`;
    return (
      <Shell title="Tagesorakel">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
          <CardDisplay card={c} size="lg"/>
          <div style={{maxWidth: '600px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
              <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
              <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
              <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
            </div>
            <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>Die Auslegung</h3>
            <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>Was dich heute trägt</p>
            <p className="body-text" style={{fontStyle: 'italic', fontSize: '17px', lineHeight: 1.85, color: COLORS.silverLight, opacity: 0.95}}>{text}</p>
          </div>
        </div>
      </Shell>
    );
  };

  const renderThree = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message="Drei Karten finden zu dir..."/>;
    const storyParagraphs = generateThreeSynthesis(drawn);
    const labels = ['Vergangenheit', 'Gegenwart', 'Zukunft'];
    return (
      <Shell title="Drei Karten Legung">
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '48px'}}>
          {drawn.map((c, i) => <CardDisplay key={c.id} card={c} label={labels[i]}/>)}
        </div>
        <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
            <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
          </div>
          <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>Die Auslegung</h3>
          <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>Deine Geschichte durch die drei Karten</p>
          {storyParagraphs && storyParagraphs.map((para, i) => (
            <p key={i} className="body-text" style={{
              fontStyle: 'italic', fontSize: '17px', lineHeight: 1.85,
              color: COLORS.silverLight, opacity: 0.95,
              marginBottom: i < storyParagraphs.length - 1 ? '20px' : 0
            }}>{para}</p>
          ))}
        </div>
      </Shell>
    );
  };

  const renderRelationship = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message="Eure Verbindung wird sichtbar..."/>;
    const storyParagraphs = generateRelationshipSynthesis(drawn);
    const [me, other, connection, future] = drawn;
    return (
      <Shell title="Beziehungsorakel">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', marginBottom: '48px'}}>
          <div className="artemis-relationship-row" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '120px', flexWrap: 'wrap'}}>
            <CardDisplay card={me} label="Du"/>
            <CardDisplay card={other} label="Sie oder Er"/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            <CardDisplay card={connection} label="Eure Verbindung"/>
            <CardDisplay card={future} label="Eure Zukunft"/>
          </div>
        </div>
        <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
            <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
          </div>
          <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>Die Auslegung</h3>
          <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>Eure Geschichte durch die vier Karten</p>
          {storyParagraphs && storyParagraphs.map((para, i) => (
            <p key={i} className="body-text" style={{
              fontStyle: 'italic', fontSize: '17px', lineHeight: 1.85,
              color: COLORS.silverLight, opacity: 0.95,
              marginBottom: i < storyParagraphs.length - 1 ? '20px' : 0
            }}>{para}</p>
          ))}
        </div>
      </Shell>
    );
  };

  const renderCross = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message="Das Kreuz formt sich..."/>;
    const [above, left, right, below, center] = drawn;
    const storyParagraphs = buildCrossStory(drawn);
    return (
      <Shell title="Das Heilige Kreuz">
        <div className="artemis-cross-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)', justifyContent: 'center', gap: '12px', marginBottom: '48px'}}>
          <div/><div className="artemis-cross-card"><CardDisplay card={above} size="sm" label="Zukunft"/></div><div/>
          <div className="artemis-cross-card"><CardDisplay card={left} size="sm" label="Weg links"/></div>
          <div className="artemis-cross-card"><CardDisplay card={center} size="sm" label="Gegenwart"/></div>
          <div className="artemis-cross-card"><CardDisplay card={right} size="sm" label="Weg rechts"/></div>
          <div/><div className="artemis-cross-card"><CardDisplay card={below} size="sm" label="Vergangenheit"/></div><div/>
        </div>
        <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
            <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
          </div>
          <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>Die Auslegung</h3>
          <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>Deine Geschichte durch die fünf Karten</p>
          {storyParagraphs && storyParagraphs.map((para, i) => {
            // Fragen visuell als Pause hervorheben: kurz und endet mit ?
            const isQuestion = para.trim().endsWith('?') && para.length < 120;
            if (isQuestion) {
              return (
                <p key={i} className="h-italic" style={{
                  fontSize: '17px', lineHeight: 1.6,
                  color: COLORS.silverLight, opacity: 1,
                  textAlign: 'center',
                  marginTop: '12px', marginBottom: '28px',
                  paddingLeft: '20px', paddingRight: '20px'
                }}>{para}</p>
              );
            }
            return (
              <p key={i} className="body-text" style={{
                fontStyle: 'italic', fontSize: '17px', lineHeight: 1.85,
                color: COLORS.silverLight, opacity: 0.95,
                marginBottom: i < storyParagraphs.length - 1 ? '20px' : 0
              }}>{para}</p>
            );
          })}
        </div>
      </Shell>
    );
  };

  const renderYear = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message="Dein Jahr offenbart sich..."/>;
    const synth = generateYearSynthesis(drawn, user.name);
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    return (
      <Shell title="Jahresorakel">
        <p className="body-text" style={{textAlign: 'center', fontStyle: 'italic', fontSize: '16px', color: COLORS.silverLight, opacity: 0.75, marginBottom: '40px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
          Zwölf Karten für zwölf Monate. Eine Schau auf dein kommendes Jahr.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', marginBottom: '56px', maxWidth: '900px', margin: '0 auto 56px'}}>
          {drawn.map((c, i) => (
            <div key={c.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <CardDisplay card={c} size="sm" label={months[i]}/>
            </div>
          ))}
        </div>
        {synth && (
          <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
              <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
              <SunIcon size={20}/>
              <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
            </div>
            <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>Dein Jahr</h3>
            <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>Der Bogen durch alle zwölf Monate</p>
            {synth.paragraphs.map((para, i) => (
              <p key={i} className="body-text" style={{
                fontStyle: 'italic', fontSize: '17px', lineHeight: 1.85,
                color: COLORS.silverLight, opacity: 0.95,
                marginBottom: i < synth.paragraphs.length - 1 ? '20px' : 0
              }}>{para}</p>
            ))}
          </div>
        )}
      </Shell>
    );
  };

  return (
    <div style={{minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', ...bgStyle}}>
      <StarsBg/>
      <ShootingStars/>
      <style>{sharedStyles}</style>
      {mode === 'home' && renderHome()}
      {mode === 'daily' && renderDaily()}
      {mode === 'three' && renderThree()}
      {mode === 'relationship' && renderRelationship()}
      {mode === 'cross' && renderCross()}
      {mode === 'year' && renderYear()}
    </div>
  );
}