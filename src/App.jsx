import React, { useState, useEffect } from 'react';
import { Moon, Sparkles, BookOpen, RotateCcw } from 'lucide-react';

const cardsDE = [
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

const cardsEN = [
  { id: 1, name: "Artemis", category: "Goddess", symbol: "bow",
    image: "Artemis with her drawn bow in the silver wood",
    pastEcho: "Independence was once your shelter and your tongue",
    presentTouch: "Something in you knows only one path, and it is yours",
    pathEssence: "the way of your own trail, of untamed clarity, of solitary truth",
    futureMove: "Something free is waiting for you, beyond what others expect",
    meaning: "The Huntress, keeper of the wilderness and of young women. She stands for independence, self-rule, and the wild, untamed force within you.",
    message: "Trust your instinct. You are already whole. Walk your own path, even when it feels lonely.",
    dailyReading: "Artemis arrives today as keeper of your wildness and turns your gaze toward what belongs to you alone. Something around you only reveals its true face once you stop measuring yourself by others and trust your own instinct. Old needs for approval are slowly loosening their hold and making room for a clarity that has lived in your bones all along. Follow the path today that only knows you, for that is where Artemis finds you." },

  { id: 2, name: "Persephone", category: "Goddess", symbol: "pomegranate",
    image: "Persephone with the pomegranate in her hand",
    pastEcho: "The duality of light and shadow once shaped you",
    presentTouch: "Something between worlds in you is asking to be acknowledged",
    pathEssence: "the way of depth, of transformation, of return from what is hidden",
    futureMove: "A crown is waiting for you, but it will be forged in the dark",
    meaning: "Queen of the Underworld and Goddess of Spring. She embodies the duality between light and shadow.",
    message: "You walk between worlds. Your shadows are your allies, your crown. Embrace both halves of yourself.",
    dailyReading: "Persephone arrives today as Queen between light and shadow and turns your gaze toward what you have not yet allowed to come together inside you. Something in your world is showing both sides at once today, the sweet and the bitter, and both belong. Old efforts to appear only as one half are slowly loosening, and something in you becomes whole. Follow today what feels true, even if it is not only bright." },

  { id: 3, name: "Nyx", category: "Goddess", symbol: "night",
    image: "Nyx, wrapped in a cloak of stars",
    pastEcho: "Night once taught you more than any day",
    presentTouch: "Something ancient in you speaks the moment the world goes still",
    pathEssence: "the way of mystery, of silent wisdom, of dark knowing",
    futureMove: "Something you cannot put into words is slowly coming within reach",
    meaning: "Primordial Goddess of the Night, mother of the powers of fate. She is the mystery that goes before all things.",
    message: "Your deepest wisdom lives in the dark. Listen to what the night whispers to you.",
    dailyReading: "Nyx arrives today as Primordial Goddess of the Night and turns your gaze toward what you can only hear in deep stillness. Something in you has been whispering for days, but you will only catch it at dusk. Old loud voices lose their weight, and a quiet knowing slowly rises from within. Follow today the hunch that comes the moment you dim the lights." },

  { id: 4, name: "Hekate", category: "Goddess", symbol: "key",
    image: "Hekate at the crossroads with her torch",
    pastEcho: "A passage in your life once brought you to sacred ground",
    presentTouch: "A crossroads inside you is waiting for your attention",
    pathEssence: "the way of the threshold, of magic, of conscious choice",
    futureMove: "The torch in your hand burns for a reason. It is making itself known",
    meaning: "Goddess of magic, crossroads, and thresholds. Keeper of the keys to the three worlds.",
    message: "You stand at a crossroads. The torch in your hand burns for a reason. It shows you the way.",
    dailyReading: "Hekate arrives today as keeper of the thresholds and turns your gaze toward a crossroads you have long sensed. Something around you is asking for a decision that will not come from outside but from within you. Old indecision is slowly loosening, and the torch in your hand finds its direction. Follow today the path that calls you to the threshold, for that is exactly where Hekate has been waiting for you." },

  { id: 5, name: "Selene", category: "Goddess", symbol: "moon",
    image: "Selene on her silver chariot across the night sky",
    pastEcho: "Quiet reflection was once your greatest strength",
    presentTouch: "Something in you wishes to mirror rather than to shine",
    pathEssence: "the way of soft luminance, of receiving attention",
    futureMove: "A gentle light is rising, and you do not have to chase it",
    meaning: "The personified Moon Goddess. She draws her silver chariot across the night sky.",
    message: "You are allowed to shine softly, like the moon. It is enough to reflect what is true.",
    dailyReading: "Selene arrives today as the quiet Moon Goddess and turns your gaze toward the power of reflection. Something in your world is not asking for your radiance but for your soft mirroring of what is true. Old striving to be seen is slowly loosening, and another kind of presence is rising in you. Follow today the gentle light that is enough." },

  { id: 6, name: "Lilith", category: "Goddess", symbol: "serpent",
    image: "Lilith with the serpent rising at her side",
    pastEcho: "A no you once said is still carrying you today",
    presentTouch: "Something unbent in you is asking for its full size",
    pathEssence: "the way of raw truth, of untamed power, of the non-negotiable self",
    futureMove: "Something in you is rising upright, and it cannot be talked down again",
    meaning: "The first woman who refused to bow. She is the untamed force, the raw truth.",
    message: "Say no. With your whole chest. You were created to live at your full height.",
    dailyReading: "Lilith arrives today as the unbent one and turns your gaze toward what you have made small for too long. Something around you has earned a no that you should have spoken long ago. Old adjustments are slowly loosening their hold, and your true size begins to stretch out again. Follow today the impulse that draws you upright, even when it feels uncomfortable." },

  { id: 7, name: "Morrigan", category: "Goddess", symbol: "raven",
    image: "The Morrigan with ravens above the battlefield",
    pastEcho: "Sovereignty once found you through a fight",
    presentTouch: "Something in you knows the difference between a battle and a war",
    pathEssence: "the way of sovereignty, of sacred conflict, of non-negotiable dignity",
    futureMove: "Something in you stops explaining and begins to reign",
    meaning: "Celtic Goddess of war, fate, and sovereignty.",
    message: "There is a battle you must fight. With yourself. Your sovereignty remains non-negotiable.",
    dailyReading: "Morrigan arrives today as Goddess of fate and turns your gaze toward a battle that will not be fought outside, but within you. Something in your world is challenging your sovereignty, and it remains non-negotiable. Old attempts to justify yourself are slowly loosening, and a royal stillness takes their place. Follow today the knowing that you owe no explanation to anyone who refuses to see you." },

  { id: 8, name: "Inanna", category: "Goddess", symbol: "star",
    image: "Inanna at the seven gates of the Underworld",
    pastEcho: "You once left something behind that saved you",
    presentTouch: "Something in you is descending, and it knows why",
    pathEssence: "the way of descent, of shedding, of royal return",
    futureMove: "You will rise again, but not as the one you were",
    meaning: "Sumerian Queen of Heaven who descended into the Underworld and returned transformed.",
    message: "You are passing through seven gates. At each, you leave something behind. Trust the descent.",
    dailyReading: "Inanna arrives today as Queen of the descent and turns your gaze toward what you must let fall in order to go on. Something in your world is asking for a piece of jewellery you would rather keep. Old identities are slowly loosening at one gate after another, and you sink deeper into your true self. Follow today the descent, for at the lowest point your crowning is waiting." },

  { id: 9, name: "Kali", category: "Goddess", symbol: "skull",
    image: "Kali dancing, her blade in the moonlight",
    pastEcho: "An old illusion once died inside you",
    presentTouch: "Something in you is ready to lift its sword against what is false",
    pathEssence: "the way of liberation, of cleansing destruction, of sacred clarity",
    futureMove: "Something will fall, and that is good. What remains is true",
    meaning: "Hindu Goddess of destruction and liberation. She dances on the death of old illusions.",
    message: "Something must die so that you may live. Let it go. The storm cleanses what is allowed to remain.",
    dailyReading: "Kali arrives today as sacred destroyer and turns your gaze toward what is finally allowed to die. Something in your life is asking for an ending you have long sensed but not yet spoken. Old illusions are slowly loosening beneath her blade, and what remains is true. Follow today the storm inside you, for it cleanses what is allowed to remain." },

  { id: 10, name: "Diana", category: "Goddess", symbol: "stag",
    image: "Diana with the doe and the crescent moon at her brow",
    pastEcho: "You once kept something sacred in you when no one else could see it",
    presentTouch: "Something in you senses what needs protecting",
    pathEssence: "the way of the keeper, of watchful stillness, of the sacred boundary",
    futureMove: "You become the guardian of what you love most",
    meaning: "Roman Goddess of the moon and the hunt, protector of women.",
    message: "Protect what is sacred. Especially in yourself. You are your own guardian.",
    dailyReading: "Diana arrives today as keeper of the sacred and turns your gaze toward what deserves your protection. Something around you is touching a hallowed place in you that is not open to everyone. Old readiness to be available to all is slowly loosening, and you begin to be your own guardian. Follow today the instinct that shows you where your boundary lies." },

  { id: 11, name: "Brigid", category: "Goddess", symbol: "flame",
    image: "Brigid with fire in her hands",
    pastEcho: "A flame once kindled something new in you",
    presentTouch: "Something in you wants to heal, to write, to forge",
    pathEssence: "the way of creation, of devotion, of inner burning",
    futureMove: "What wishes to be made through you is asking for room. Your power is seeking a form",
    meaning: "Celtic Goddess of fire, healing, and poetry.",
    message: "Kindle your flame again. What you create is sacred.",
    dailyReading: "Brigid arrives today as Goddess of the sacred fire and turns your gaze toward what wants to come into being through you. Something inside you has been burning for days, and it is asking for a form to be poured into. Old doubts about your creative power are slowly loosening, and your hands find their way back to their work. Follow today the spark you have not yet taken seriously." },

  { id: 12, name: "Freya", category: "Goddess", symbol: "falcon",
    image: "Freya on her falcon chariot, her heart wide open",
    pastEcho: "Love and strength in you were once not opposites",
    presentTouch: "Something in you wants to be tender and deadly at once",
    pathEssence: "the way of union, of open defence, of undivided love",
    futureMove: "Something beloved is drawing near, and it knows your name",
    meaning: "Norse Goddess of love, beauty, and war.",
    message: "Love and war are one. You are allowed to be open-hearted and lethal at the same time.",
    dailyReading: "Freya arrives today as Goddess of love and war and turns your gaze toward the unity of what you have been keeping apart. Something in your world is asking you to be open-hearted and clear at the same time, without splitting yourself in two. Old ideas that love must be soft and strength must be hard are slowly loosening. Follow today the courage to be both, for that is how you were always meant." },

  { id: 13, name: "The Silver Bow", category: "Symbol", symbol: "bow_silver",
    image: "The silver bow, drawn between stillness and arrow",
    pastEcho: "An intention you once spoke clearly is still carrying you",
    presentTouch: "Something in you holds the tension without releasing",
    pathEssence: "the way of pure intention, of focused will, of precise letting go",
    futureMove: "The arrow finds its mark. You do not have to steer everything",
    meaning: "A tool of precision and intent. Tension, focus, and the release.",
    message: "Aim clearly. Only draw what you are also willing to release. Your intent is your sharpest weapon.",
    dailyReading: "The Silver Bow arrives today as a tool of pure intent and turns your gaze toward what you truly want. Something in your world is asking for your full focus, nothing more and nothing less. Old scattered efforts are slowly loosening, and a single clear arrow finds its tension in you. Follow today the mark you see clearly, and only draw what you are willing to release." },

  { id: 14, name: "The Arrow", category: "Symbol", symbol: "arrow",
    image: "The arrow in flight, no longer hesitating",
    pastEcho: "A movement you once dared has never turned back",
    presentTouch: "Something in you already knows where",
    pathEssence: "the way of pure direction, of resolved motion, of unstoppable flight",
    futureMove: "It is time to fly. You will feel it in your gut",
    meaning: "Pure direction. The arrow does not hesitate, does not question, does not doubt.",
    message: "Stop overthinking. It is time to fly. You already know where.",
    dailyReading: "The Arrow arrives today as pure direction and turns your gaze toward what you are already ready for. Something in your life does not need more reflection, but motion. Old layers of doubt are slowly loosening, and a clear line becomes visible. Follow today the first impulse that does not hesitate, for it knows where it wants to go." },

  { id: 15, name: "The Chalice", category: "Symbol", symbol: "chalice",
    image: "The chalice, overflowing with liquid moonlight",
    pastEcho: "Receiving once nourished you when giving emptied you",
    presentTouch: "Something in you wants to be filled, without begging",
    pathEssence: "the way of receiving, of sacred openness, of flowing surrender",
    futureMove: "Your chalice will be filled, overfilled, more than you would have granted yourself",
    meaning: "A vessel of receptivity and of the sacred feminine.",
    message: "You are allowed to receive. Let yourself be filled. Your chalice deserves to overflow.",
    dailyReading: "The Chalice arrives today as a sacred vessel and turns your gaze toward your own openness. Something in your world wants to come to you, but it can only do so if you stop carrying everything yourself. Old striving, where you only gave, is slowly loosening, and your hands open upward. Follow today what comes toward you, and let yourself be filled until it overflows." },

  { id: 16, name: "Crown of Thorns", category: "Symbol", symbol: "thorns",
    image: "The crown of thorns that turns wounds into dignity",
    pastEcho: "A wound in you once made you sacred",
    presentTouch: "Something in you wears a diadem that others cannot see",
    pathEssence: "the way of the wound walked through, of dignity shining through, of crowned pain",
    futureMove: "What hurt you becomes a wellspring others drink from",
    meaning: "A symbol for those who have grown into their power through suffering.",
    message: "Your scars are your diadem. What wounded you also crowned you.",
    dailyReading: "The Crown of Thorns arrives today as a symbol of pain transformed and turns your gaze toward what was shaped in you through wounding. Something in your story today is not a wound but a diadem. Old shame about past breaks is slowly loosening, and a quiet dignity takes its place. Follow today the knowing that your scars are part of your crowning." },

  { id: 17, name: "The Veil", category: "Symbol", symbol: "veil",
    image: "The veil that parts one world from another",
    pastEcho: "You once kept something hidden that protected you",
    presentTouch: "Something in you knows that not everything must be spoken",
    pathEssence: "the way of the hidden, of guarded mysteries, of silent power",
    futureMove: "Something withdraws so that something more valuable can rise to the surface",
    meaning: "The membrane between the worlds. What is veiled remains hidden.",
    message: "Some things are allowed to stay hidden. The hidden has its own power.",
    dailyReading: "The Veil arrives today as a membrane between worlds and turns your gaze toward what does not need to come into the light. Something around you wants to be spoken, but it carries more power when it stays hidden. Old duty to disclose everything is slowly loosening, and the mystery finds its way back to its own force. Follow today the impulse to keep some things to yourself." },

  { id: 18, name: "The Mirror", category: "Symbol", symbol: "mirror",
    image: "The mirror in which you meet yourself",
    pastEcho: "An honest look at yourself once changed everything",
    presentTouch: "Something in you wishes to be seen, above all by you",
    pathEssence: "the way of self-knowing, of unavoidable truth, of inner meeting",
    futureMove: "You will see what you have long avoided. And that is good",
    meaning: "A tool of truth and of self-knowledge.",
    message: "Look. Truly look. What triggers you is a door to yourself.",
    dailyReading: "The Mirror arrives today as a tool of truth and turns your gaze toward what you have not yet wanted to see in yourself. Something around you is provoking you, and that is precisely an open door to yourself. Old avoidance is slowly loosening, and an honest seeing becomes possible. Follow today the reaction that pulls at you most, for it leads you home." },

  { id: 19, name: "The Key", category: "Symbol", symbol: "key_symbol",
    image: "The key resting in your hand for a long time",
    pastEcho: "You once opened a door you still walk through today",
    presentTouch: "Something in you already holds the key to what comes next",
    pathEssence: "the way of conscious access, of willing opening, of the decisive turning",
    futureMove: "A door opens, but only when you realise you are the one carrying the key",
    meaning: "Access to what is closed.",
    message: "You already hold the key. The question is whether you can, or whether you will.",
    dailyReading: "The Key arrives today as access to what is closed and turns your gaze toward what you could have opened long ago. Something in your life is waiting for a conscious decision only you can make. Old questions of whether are slowly loosening, and the question of when becomes clearer. Follow today the hand that has been holding the key for a while now." },

  { id: 20, name: "The Torch", category: "Symbol", symbol: "torch",
    image: "The torch that lights only the next step",
    pastEcho: "You once shone for others without burning yourself out",
    presentTouch: "Something in you knows the way, even when you cannot see it whole",
    pathEssence: "the way of inner guidance, of the light you carry yourself, of trusted darkness",
    futureMove: "You will light the way for others, and you will not be extinguished",
    meaning: "Light in the darkness, carried by those who lead.",
    message: "You are shining. See that you preserve yourself.",
    dailyReading: "The Torch arrives today as light in the darkness and turns your gaze toward the next step, not the whole road. Something around you is not asking for your overview but for your presence in the here and now. Old worry about the whole is slowly loosening, and you begin to see only what you can illuminate. Follow today the small circle of light that is enough." },

  { id: 21, name: "The Pomegranate", category: "Symbol", symbol: "pomegranate_sym",
    image: "The pomegranate whose seeds bind you",
    pastEcho: "A conscious choice once bound you to a place you do not regret",
    presentTouch: "Something in you is examining more carefully what it takes in",
    pathEssence: "the way of conscious receiving, of chosen binding, of sacred commitment",
    futureMove: "You will taste, and it will become part of you",
    meaning: "Fruit of the Underworld and of fertility.",
    message: "What you eat becomes part of you. Choose with awareness.",
    dailyReading: "The Pomegranate arrives today as fruit of conscious choice and turns your gaze toward what you are taking in right now. Something around you wants to become part of you, but you may decide whether you partake. Old habits of joining in automatically are slowly loosening, and you begin to choose what you let inside you. Follow today this awareness, for you become what you eat." },

  { id: 22, name: "The Blood Moon", category: "Rare Moon", symbol: "blood_moon",
    image: "The Blood Moon, hanging heavy in the sky",
    pastEcho: "An upheaval in you once changed everything you held certain",
    presentTouch: "Your blood already knows what your mind has not yet admitted",
    pathEssence: "the way of ancient magic, of cosmic upheaval, of cellular truth",
    futureMove: "Something is rearranging itself, deep beneath everything visible. Old voices lose their weight. A new call grows stronger",
    meaning: "A rare cosmic moment. A sign of upheaval and ancient magic.",
    message: "Something great is shifting in you. Your blood knows it before your mind.",
    dailyReading: "The Blood Moon arrives today as a rare cosmic moment and turns your gaze toward a deep shift inside you. Something in your cells already knows what your mind has not yet spoken aloud. Old identities are slowly loosening beneath its heavy light, and something ancient is being woken. Follow today the hunch that does not come from your head, but from your belly." },

  { id: 23, name: "The She-Wolf", category: "Being", symbol: "wolf",
    image: "The she-wolf, her breath left behind in the snow",
    pastEcho: "A pack once carried you when you could no longer stand alone",
    presentTouch: "Something in you is seeking those who speak your language",
    pathEssence: "the way of belonging, of faithful bond, of the shared howl",
    futureMove: "Your pack will find you. You will know them by their eyes",
    meaning: "The leader of the pack, loyal and lethal.",
    message: "Find your pack. The few who speak your language.",
    dailyReading: "The She-Wolf arrives today as leader of the pack and turns your gaze toward the few who truly speak your language. Something in your circle today is showing who belongs to your pack and who merely stands nearby. Old efforts to reach everyone are slowly loosening, and you turn toward those who answer. Follow today the howl rising in you, for it calls your own." },

  { id: 24, name: "The Doe", category: "Being", symbol: "doe",
    image: "The doe, motionless between the trees",
    pastEcho: "A watchfulness once kept you from trusting wrongly",
    presentTouch: "Something in you listens more carefully before it moves",
    pathEssence: "the way of watchful stillness, of sensing pause, of conscious caution",
    futureMove: "The right movement comes at the right time. You will know it",
    meaning: "A reserve that is strength.",
    message: "Your reserve is a sign of strength. Be watchful and trusting at once.",
    dailyReading: "The Doe arrives today as teacher of watchful stillness and turns your gaze toward the strength of holding back. Something around you wants to be decided quickly, but your reserve carries truth in it. Old fear of seeming indecisive is slowly loosening, and you see that listening is also an act. Follow today the inner standing still, for it protects you." },

  { id: 25, name: "The Owl", category: "Being", symbol: "owl",
    image: "The owl whose eyes pierce the night",
    pastEcho: "Quiet observation once showed you truths that others overlooked",
    presentTouch: "Something in you listens more than it speaks",
    pathEssence: "the way of nocturnal wisdom, of seeing stillness, of waking silence",
    futureMove: "A realisation rises slowly in you, without effort",
    meaning: "Keeper of nocturnal wisdom.",
    message: "Listen more than you speak. Observe.",
    dailyReading: "The Owl arrives today as keeper of hidden truths and turns your gaze toward what lies between the words. Something around you only shows its true face in stillness, far from distraction and quick answers. Old thoughts are slowly loosening inside you and making room for a deeper realisation that has long been waiting. Follow today the feeling that keeps returning, for that is where your message begins." },

  { id: 26, name: "The Raven", category: "Being", symbol: "crow",
    image: "The raven on the branch between the worlds",
    pastEcho: "A foreboding once proved truer than all logic",
    presentTouch: "Something in you reads the signs others cannot see",
    pathEssence: "the way of prophetic seeing, of read signs, of trusted foreboding",
    futureMove: "A message reaches you, and you will already know it when it comes",
    meaning: "Messenger between the worlds.",
    message: "Notice the signs. They are everywhere. Trust your forebodings.",
    dailyReading: "The Raven arrives today as messenger between the worlds and turns your gaze toward the signs that lie everywhere. Something around you today is not a coincidence but an answer you have already asked for. Old scepticism toward forebodings is slowly loosening, and your inner reading becomes clearer. Follow today the first hint, for it does not come from nowhere." },

  { id: 27, name: "The Serpent", category: "Being", symbol: "serpent_sym",
    image: "The serpent leaving her old skin behind",
    pastEcho: "A shedding once freed you, even though it hurt",
    presentTouch: "Something old in you is becoming translucent and slipping away",
    pathEssence: "the way of shedding, of returning renewal, of the released self",
    futureMove: "What no longer fits falls from you, without your needing to grasp it",
    meaning: "A symbol of shedding and rebirth.",
    message: "Shed your skin. Let the old identity fall.",
    dailyReading: "The Serpent arrives today as a symbol of shedding and turns your gaze toward what you have long since outgrown. Something in you is carrying an identity that has grown old and wishes to slip away. Old self-images are slowly loosening and falling away like translucent skin. Follow today the urge to renew yourself, and keep nothing out of mere habit." },

  { id: 28, name: "The Panther", category: "Being", symbol: "panther",
    image: "The panther, silent in the moon-shadow",
    pastEcho: "A quiet strength in you once carried you to your goal, without fanfare",
    presentTouch: "Something in you knows when stillness is more effective than words",
    pathEssence: "the way of depth, of dignity, of soundless resolve",
    futureMove: "You will be there before others notice",
    meaning: "A quiet power that lives in the shadows.",
    message: "You are allowed to be silent and still powerful.",
    dailyReading: "The Panther arrives today as a quiet force in the shadows and turns your gaze toward the power of being soft-spoken. Something around you today is showing that loud is not strong, and silent is not weak. Old ideas that you must show yourself in order to be effective are slowly loosening. Follow today the inner path of the panther, who arrives before others notice." },

  { id: 29, name: "The Moth", category: "Being", symbol: "moth",
    image: "The moth that flies to the flame",
    pastEcho: "A longing once burned you, and yet you do not regret it",
    presentTouch: "Something in you is testing which light you truly follow",
    pathEssence: "the way of dangerous longing, of clear desire, of bright choice",
    futureMove: "You will know whether the light you follow is your own or someone else's",
    meaning: "A creature that flies to the light, even when it burns her.",
    message: "Ask yourself which light you are following. Is it yours or someone else's?",
    dailyReading: "The Moth arrives today as a creature of dangerous longing and turns your gaze toward the light you are following. Something in your life is asking for an honest answer as to whether what draws you truly belongs to you. Old foreign desires are slowly loosening, and your own longings become clearer. Follow today only the light that comes from within yourself." },

  { id: 30, name: "The Spider", category: "Being", symbol: "spider",
    image: "The spider weaving the threads of fate",
    pastEcho: "You once knotted something that still carries you today",
    presentTouch: "Something in you is weaving, without your noticing",
    pathEssence: "the way of the weaver, of shaped reality, of conscious knotting",
    futureMove: "Your web becomes visible, and it is more beautiful than you thought",
    meaning: "Weaver of fate.",
    message: "You weave your own fate. Every thought is a thread.",
    dailyReading: "The Spider arrives today as weaver of fate and turns your gaze toward the threads you yourself are knotting. Something in your thoughts today is weaving your reality, whether you wish it or not. Old stories you tell yourself are slowly loosening, and you become the conscious weaver. Follow today what you wish to create, for every thought is a thread." },

  { id: 31, name: "The Underworld", category: "Mystery", symbol: "underworld",
    image: "The Underworld with its still waters",
    pastEcho: "You once descended and returned with something true",
    presentTouch: "Something in you is asking you to descend once more",
    pathEssence: "the way of descent, of dark meeting, of the truth that lies beneath the surface",
    futureMove: "What you find there has always been yours, you have only forgotten",
    meaning: "The place where everything repressed lives.",
    message: "Descend. What you fear holds the answer.",
    dailyReading: "The Underworld arrives today as the place of the repressed and turns your gaze toward what you did not want to see. Something in you holds an answer you will only find by going deeper. Old avoidance of what is hard is slowly loosening, and a sacred descent begins. Follow today the fear that shows you the way, for it guards what is essential." },

  { id: 32, name: "The Hunt", category: "Mystery", symbol: "hunt",
    image: "The hunt, opening before sunrise",
    pastEcho: "You once pursued something and made it your own",
    presentTouch: "Something in you stops waiting and begins to move",
    pathEssence: "the way of sacred pursuit, of active grasping, of clear claim",
    futureMove: "Some things only come to you when you go and get them. You know what it is",
    meaning: "The sacred pursuit of what belongs to you.",
    message: "Stop waiting. Some things you have to claim.",
    dailyReading: "The Hunt arrives today as sacred pursuit and turns your gaze toward what is not coming to you but toward which you must move yourself. Something in your life is no longer waiting for you to be ready. Old patience that has turned into stillness is slowly loosening, and movement becomes possible. Follow today the track that belongs to you, and claim what is yours." },

  { id: 33, name: "The Awakening", category: "Mystery", symbol: "awakening",
    image: "The awakening, a light through closed eyelids",
    pastEcho: "You once saw something you can no longer un-see",
    presentTouch: "Something in you is opening, and it hurts beautifully",
    pathEssence: "the way of open eyes, of unavoidable clarity, of sacred pain",
    futureMove: "You will see. It will hurt and it will be sacred",
    meaning: "The moment when the eyes open.",
    message: "You see now. It hurts and it is sacred.",
    dailyReading: "The Awakening arrives today as the moment of open eyes and turns your gaze toward a truth no longer possible to overlook. Something around you becomes clear today, and you cannot roll it back into the not-knowing of before. Old comfort of not knowing is slowly loosening, and a sacred clarity opens up. Follow today the seeing, even when it hurts, for it is sacred." },

  { id: 34, name: "The Threshold", category: "Mystery", symbol: "threshold",
    image: "The threshold, neither within nor without",
    pastEcho: "A passage in you once changed you without your noticing it at once",
    presentTouch: "Something in you stands between the rooms and waits",
    pathEssence: "the way of the in-between, of sacred pause, of slow becoming",
    futureMove: "You will cross the threshold, not by hurrying, but by being granted leave",
    meaning: "The sacred space between what has been and what is yet to come.",
    message: "You are in between. Take your time.",
    dailyReading: "The Threshold arrives today as sacred in-between and turns your gaze toward what is neither past nor future. Something in you stands between the rooms and needs no haste. Old pressing for answers is slowly loosening, and the in-between is granted its own value. Follow today no direction, but remain still and breathe in the passage." },

  { id: 35, name: "The Transformation", category: "Mystery", symbol: "transformation",
    image: "The transformation, woven from ash and breath",
    pastEcho: "A metamorphosis once cast you into a new form",
    presentTouch: "Something in you is turning fluid and searching for its new shape",
    pathEssence: "the way of dissolution, of alchemical ripening, of trusted transformation",
    futureMove: "What you are becoming, you do not yet know. But your cells already know",
    meaning: "The alchemical transformation.",
    message: "What is moving in you right now is metamorphosis. Let yourself dissolve.",
    dailyReading: "The Transformation arrives today as an alchemical process and turns your gaze toward what is dissolving in you right now. Something inside you is changing its state and does not yet know its new form. Old firmness is slowly loosening, and you become fluid enough to be remade. Follow today no answer, but stay in the process that is reshaping you." },

  { id: 36, name: "Sisterhood", category: "Mystery", symbol: "sisterhood",
    image: "Sisterhood, a circle of women beneath the moon",
    pastEcho: "Women once carried you when you could no longer stand",
    presentTouch: "Something in you wishes to be held without having to explain itself",
    pathEssence: "the way of feminine connection, of shared breath, of the sacred circle",
    futureMove: "You will find your pack of women. They know who you are",
    meaning: "A sacred circle of women who hold each other.",
    message: "You need your sisters. Seek them. Hold them.",
    dailyReading: "Sisterhood arrives today as a sacred circle and turns your gaze toward the women you need and who need you. Something in your world is reminding you that you are not meant to live for yourself alone. Old notions of solitary making are slowly loosening, and you seek, hold, are held. Follow today the call for your sisters, for they are already waiting." },

  { id: 37, name: "The Shadows", category: "Mystery", symbol: "shadow",
    image: "The shadows that walk with you",
    pastEcho: "Something you rejected was always a part of your power",
    presentTouch: "Something in you wishes to be brought home",
    pathEssence: "the way of integration, of uncomfortable reconciliation, of the homecoming self",
    futureMove: "What you did not want to see becomes a doorstep. You walk across it",
    meaning: "Everything you have rejected in yourself.",
    message: "Turn around. Look it in the face. Take it home.",
    dailyReading: "The Shadows arrive today as the disowned part of your power and turn your gaze toward what you have rejected in yourself. Something in you that you wanted to be rid of has always been a source of your strength. Old severance from parts of your self is slowly loosening, and you take home what belongs to you. Follow today the shadow that bothers you most, and give it a seat inside you." },

  { id: 38, name: "The Rebirth", category: "Mystery", symbol: "rebirth",
    image: "The rebirth from the feathers of the phoenix",
    pastEcho: "Something in you once died so that you could live",
    presentTouch: "Something in you is rising from the ashes",
    pathEssence: "the way of new beginning, of mourning celebration, of second birth",
    futureMove: "A new version of you is rising. Mourn the old briefly. Celebrate it long",
    meaning: "The rising from the ashes.",
    message: "You are new. Mourn the old version, and then celebrate.",
    dailyReading: "The Rebirth arrives today as a rising from the ashes and turns your gaze toward what you have become after an ending. Something in you is new, and perhaps you have not yet quite noticed it yourself. Old grief for what has passed is slowly loosening and making room for a quiet celebration. Follow today the new breath in you, and take it as your own." },

  { id: 39, name: "Wolf Moon", category: "Rare Moon", symbol: "wolf_moon",
    image: "The Wolf Moon high above the winter forest",
    pastEcho: "A winter once taught you what stillness is for",
    presentTouch: "Something in you is gathering strength without showing it yet",
    pathEssence: "the way of inner retreat, of the cold that gathers, of the hidden howl",
    futureMove: "Your howl becomes a language. Others will answer",
    meaning: "The first full moon of the year.",
    message: "Listen to your howl. Winter is for gathering your strength.",
    dailyReading: "The Wolf Moon arrives today as the first full moon of the year and turns your gaze toward the power of gathering. Something inside you is asking you not to bloom now, but to root. Old urgency for visibility is slowly loosening, and winter becomes an ally. Follow today the howl rising in you, for it calls your own." },

  { id: 40, name: "Blue Moon", category: "Rare Moon", symbol: "blue_moon",
    image: "The Blue Moon, once only in a single breath",
    pastEcho: "A rare chance once brought you to a place you do not forget",
    presentTouch: "Something in you senses that this moment is one of a kind",
    pathEssence: "the way of the rare chance, of conscious manifestation, of the magical window",
    futureMove: "What you set now will be magnified. Time is on your side",
    meaning: "A second full moon within a month. A magical window.",
    message: "This opportunity is rare. What you manifest now is amplified.",
    dailyReading: "The Blue Moon arrives today as a rare magical window and turns your gaze toward what you wish to manifest now. Something in time itself carries more weight today than it usually does. Old scepticism about making things real is slowly loosening, and your intent finds its echo. Follow today what you truly want, for the moment is listening." },

  { id: 41, name: "Harvest Moon", category: "Rare Moon", symbol: "harvest_moon",
    image: "The Harvest Moon, heavy and golden over the ripened fields",
    pastEcho: "Gratitude was once a key for you",
    presentTouch: "Something in you wishes to harvest what it has long tended",
    pathEssence: "the way of the ripe fruit, of honoured effort, of golden recognition",
    futureMove: "You will see what you have created. It is more than you think",
    meaning: "The full moon close to the autumn equinox.",
    message: "See what you have created. Honour it.",
    dailyReading: "The Harvest Moon arrives today as a full moon of recognition and turns your gaze toward what you have created without honouring it. Something in your life has ripened, and it is asking to be seen by you. Old habit of always aiming for the next thing is slowly loosening, and you stay with what is. Follow today the gratitude for what has come to be, for it is nourishment." },

  { id: 42, name: "Black Moon", category: "Rare Moon", symbol: "black_moon",
    image: "The Black Moon, a door into the hidden",
    pastEcho: "You once had your greatest clarity in deepest darkness",
    presentTouch: "Something in you knows its true longing, beyond all noise",
    pathEssence: "the way of deep intention, of bottomless clarity, of undiluted wanting",
    futureMove: "What you truly want becomes visible the moment all lights go out",
    meaning: "A second new moon in a month. The deepest darkness.",
    message: "In this darkness you have absolute clarity. What do you truly want?",
    dailyReading: "The Black Moon arrives today as the deepest darkness and turns your gaze toward the clarity that only arises in complete stillness. Something in you knows its true longing the moment all noise is gone. Old blending with foreign desires is slowly loosening, and you hear yourself again. Follow today no outer light, for your own is becoming visible." },

  { id: 43, name: "The Mother", category: "Human", symbol: "mother",
    image: "The Mother who carries her own children within her",
    pastEcho: "You once nourished without asking where you took it from",
    presentTouch: "Something in you wishes to become mother to itself",
    pathEssence: "the way of nourishing fullness, of holding hands, of creative patience",
    futureMove: "The love you are seeking begins in you. It is already waiting there",
    meaning: "The creative force that nourishes, holds, and protects.",
    message: "Become a mother to yourself. The love you are seeking begins with you.",
    dailyReading: "The Mother arrives today as nourishing force and turns your gaze toward what you can give yourself. Something in you is seeking a love that will not come from outside but from within. Old expectation of others is slowly loosening, and you become the mother of your own longing. Follow today the gesture you needed as a child, and give it to yourself." },

  { id: 44, name: "The Lover", category: "Human", symbol: "lover",
    image: "The Lover whose heart stays unlocked",
    pastEcho: "An open devotion once brought you to a place where you did not lose yourself",
    presentTouch: "Something in you has stopped barricading itself",
    pathEssence: "the way of undivided devotion, of the open heart, of love that does not turn away",
    futureMove: "Love comes not as reward, but as recognition",
    meaning: "The open, self-giving soul.",
    message: "Love is the language of your soul. Keep your heart open.",
    dailyReading: "The Lover arrives today as an open soul and turns your gaze toward the courage of not closing your heart. Something in your world today is not asking for caution, but for devotion. Old armour is slowly loosening, and a soft strength takes its place. Follow today the love your heart speaks, and trust that it is your language." },

  { id: 45, name: "The Healer", category: "Human", symbol: "healer",
    image: "The Healer with hands of moonlight",
    pastEcho: "You once helped someone simply by staying",
    presentTouch: "Something in you heals through pure presence",
    pathEssence: "the way of witnessing presence, of touching attention, of changing stillness",
    futureMove: "You will heal without knowing exactly what you are doing. Your presence is enough",
    meaning: "She who knows the wounds. Her own and others'.",
    message: "You heal by becoming a witness. Your presence is the medicine.",
    dailyReading: "The Healer arrives today as one who transforms through her presence and turns your gaze toward the healing force of your pure being-there. Something around you today needs not a solution, but you. Old notions that you must always do something are slowly loosening, and being becomes the medicine. Follow today the sitting rather than the running, for your presence heals." },

  { id: 46, name: "The Wise One", category: "Human", symbol: "sage",
    image: "The Wise One amid her books and bones",
    pastEcho: "An inner voice once proved you right when all the world disagreed",
    presentTouch: "Something in you already knows what it cannot yet speak",
    pathEssence: "the way of inner truth, of silent clarity, of unshaken certainty",
    futureMove: "The answer is already whispering to you. You only need to turn down the volume of the world",
    meaning: "The keeper of inner truth.",
    message: "You know more than you believe. The answer whispers.",
    dailyReading: "The Wise One arrives today as keeper of inner truth and turns your gaze toward what you have long known but not yet spoken aloud. Something in you has been whispering for days, and it carries the answer you are seeking outside. Old dependence on foreign opinions is slowly loosening, and your own voice becomes clearer. Follow today the inner answer, for it has always been with you." },

  { id: 47, name: "The Warrior", category: "Human", symbol: "warrior",
    image: "The Warrior in her iron, yet not out of hatred",
    pastEcho: "A fight you once led was an act of love",
    presentTouch: "Something in you is ready to rise without hardening",
    pathEssence: "the way of sacred conflict, of the protecting blade, of unbent loyalty",
    futureMove: "You will fight. But not from rage, from truth",
    meaning: "She fights out of love for what she protects.",
    message: "There are things you must fight for. Stand up.",
    dailyReading: "The Warrior arrives today as sacred fighter and turns your gaze toward what is worth standing for. Something in your life is asking not for adjustment, but for clarity. Old fear of conflict is slowly loosening, and you remember the strength you can carry. Follow today the impulse to draw yourself up, for it comes from love, not anger." },

  { id: 48, name: "The Dreamer", category: "Human", symbol: "dreamer",
    image: "The Dreamer whose eyes look into other worlds",
    pastEcho: "A dream you defended is now your reality",
    presentTouch: "Something in you sees a world that is not yet",
    pathEssence: "the way of visionary force, of fidelity against the real, of soft persistence",
    futureMove: "What you dream today, someone else will dream as obvious in a few years",
    meaning: "She sees what may come to be.",
    message: "Defend your dreams. Reality is yesterday's dream that someone dared to dream.",
    dailyReading: "The Dreamer arrives today as keeper of the not-yet-visible and turns your gaze toward the vision no one else shares. Something in you sees a world that is missing in reality. Old shame about dreaming too big is slowly loosening, and you defend your inner picture. Follow today the dream you have already turned away, for it is returning." },

  { id: 49, name: "The Creator", category: "Human", symbol: "creator",
    image: "The Creator with clay between her fingers",
    pastEcho: "You once made something without feeling ready, and it carried",
    presentTouch: "Something in you wishes to take form, now, not later",
    pathEssence: "the way of the creative flow, of the unhesitating hand, of the work in becoming",
    futureMove: "Do not wait until you feel ready. Begin, and the work will carry you",
    meaning: "From her hands, new things come into the world.",
    message: "Never wait until you feel ready. Create now.",
    dailyReading: "The Creator arrives today as one who shapes from clay and breath and turns your gaze toward what is waiting in your hands. Something in you wishes to be made, now, not when you feel ready. Old worry about the right moment is slowly loosening, and the work finds its form. Follow today the hand that already knows what it wishes to do." },

  { id: 50, name: "The Rebel", category: "Human", symbol: "rebel",
    image: "The Rebel who never bends the knee",
    pastEcho: "A no you once said brought you back to yourself",
    presentTouch: "Something in you refuses to make itself small once more",
    pathEssence: "the way of wild authenticity, of the unbent stance, of the homecoming self",
    futureMove: "Your wildness will find its place. It was always there. It will be seen",
    meaning: "She refuses to make herself small.",
    message: "Stop adjusting. Your wildness is your home.",
    dailyReading: "The Rebel arrives today as one who never becomes smaller and turns your gaze toward the adjustments that have cost you. Something around you wants to force you back into old dimensions, but you no longer fit inside them. Old willingness to bend yourself is slowly loosening, and your wildness finds its footing. Follow today the no rising in you, for it is your home." },

  { id: 51, name: "The Pilgrim", category: "Human", symbol: "pilgrim",
    image: "The Pilgrim with the dust of the long road on her feet",
    pastEcho: "A path you once walked was more important than the destination",
    presentTouch: "Something in you trusts the walking more than the arriving",
    pathEssence: "the way of the sacred journey, of self-knowing walking, of growing patience",
    futureMove: "You will arrive, but not the way you thought. It will be more beautiful",
    meaning: "She is on a journey whose destination is herself.",
    message: "The way is the goal. Trust the way.",
    dailyReading: "The Pilgrim arrives today as keeper of the way and turns your gaze to the truth that walking is more important than arriving. Something in your life is not asking for the final goal, but for the next step. Old impatience for results is slowly loosening, and the way itself becomes the answer. Follow today the movement, without knowing where it leads." },

  { id: 52, name: "The Inheritor", category: "Human", symbol: "heiress",
    image: "The Inheritor in the cloak of her foremothers",
    pastEcho: "Women before you once dreamed, and that dream was yours",
    presentTouch: "Something in you carries the knowing of those who could never speak it themselves",
    pathEssence: "the way of ancestor-borne power, of inherited wisdom, of the fulfilled lineage",
    futureMove: "You are the answer to your grandmothers' prayers. They see you",
    meaning: "She carries the knowledge of her foremothers in her bones.",
    message: "You are the answer to your grandmothers' prayers.",
    dailyReading: "The Inheritor arrives today as bearer of old lineages and turns your gaze toward what was in your blood long before you. Something in you carries the dreams of your foremothers, and you live what they were not allowed to. Old questions of your worth are slowly loosening, for your foremothers know you. Follow today the knowing that you do not come from nothing, but from an old plan." },

  { id: 53, name: "The Green Comet", category: "Mystery", symbol: "comet",
    image: "The Green Comet whose path crosses your field",
    pastEcho: "Something unexpected once brought you to a place no plan had known",
    presentTouch: "Its passing touches something in you that has long slept",
    pathEssence: "the way of the rare message, of the cosmic sign, of the unplanned meeting",
    futureMove: "Something rare is drawing near. Keep your eyes open for what looks different",
    meaning: "A rare messenger from the depths of the cosmos. Its emerald glow only shows itself to those ready to receive the unexpected.",
    message: "Something rare is drawing near. Keep your eyes open for signs that look different from the usual.",
    dailyReading: "The Green Comet arrives today as a rare messenger from the depths of the cosmos and turns your gaze toward something that does not belong here and yet is meant. Something in your life is approaching that you will not see coming and that will touch you deeply. Old expectations of how gifts must look are slowly loosening, and you stay open to the unexpected. Follow today the signs that look different from the others, for they carry your name." }
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
  *, *::before, *::after { box-sizing: border-box; }
  button { font-family: inherit; }
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
  @keyframes wishFade {
    0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    10% { opacity: 1; transform: translateX(-50%) translateY(0); }
    85% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  }
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

function ShootingStars({ onShootingStar, onComet }) {
  const [shots, setShots] = useState([]);

  useEffect(() => {
    // Eine Sternschnuppe oder einen Kometen erzeugen
    const spawn = (isComet) => {
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
      // Eltern informieren, damit sie ggf. einen Wunsch-Hinweis zeigen können
      if (isComet) {
        if (typeof onComet === 'function') onComet();
      } else {
        if (typeof onShootingStar === 'function') onShootingStar();
      }
    };

    // Sternschnuppen: erste nach ~30 Sek, dann zwischen 4 und 6 Minuten variieren
    let shootTimer;
    const scheduleShoot = (initialDelay) => {
      shootTimer = setTimeout(() => {
        spawn(false);
        scheduleShoot(240000 + Math.random() * 120000); // 4-6 Minuten
      }, initialDelay);
    };
    scheduleShoot(30000); // erste Sternschnuppe nach 30 Sekunden

    // Komet: erste nach ~3 Min, dann zwischen 12 und 18 Minuten
    let cometTimer;
    const scheduleComet = (initialDelay) => {
      cometTimer = setTimeout(() => {
        spawn(true);
        scheduleComet(720000 + Math.random() * 360000); // 12-18 Minuten
      }, initialDelay);
    };
    scheduleComet(180000); // erster Komet nach 3 Minuten

    return () => {
      clearTimeout(shootTimer);
      clearTimeout(cometTimer);
    };
  }, [onShootingStar, onComet]);

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

const cardToneDE = {
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

const cardToneEN = {
  "Artemis": "independence", "Persephone": "duality", "Nyx": "deep mystery",
  "Hekate": "passage", "Selene": "quiet reflection", "Lilith": "rebellious power",
  "Morrigan": "sovereignty", "Inanna": "transformation", "Kali": "liberation",
  "Diana": "protection", "Brigid": "creative fire", "Freya": "union",
  "The Silver Bow": "clear intent", "The Arrow": "action", "The Chalice": "receiving",
  "Crown of Thorns": "pain made power", "The Veil": "mystery", "The Mirror": "self-knowing",
  "The Key": "access", "The Torch": "guidance", "The Pomegranate": "conscious choice",
  "The Blood Moon": "awakening", "The She-Wolf": "belonging", "The Doe": "watchful reserve",
  "The Owl": "silent wisdom", "The Raven": "prophetic signs", "The Serpent": "shedding",
  "The Panther": "precise strength", "The Moth": "dangerous longing", "The Spider": "fate-weaving",
  "The Underworld": "shadow work", "The Hunt": "active pursuit", "The Awakening": "clarity",
  "The Threshold": "the in-between", "The Transformation": "metamorphosis", "Sisterhood": "feminine kinship",
  "The Shadows": "integration", "The Rebirth": "new beginning", "Wolf Moon": "inner retreat",
  "Blue Moon": "rare opportunity", "Harvest Moon": "gratitude", "Black Moon": "deep intent",
  "The Mother": "nourishing fullness", "The Lover": "open devotion", "The Healer": "transforming presence",
  "The Wise One": "inner truth", "The Warrior": "sacred fight", "The Dreamer": "visionary force",
  "The Creator": "creative flow", "The Rebel": "wild authenticity",
  "The Pilgrim": "sacred journey", "The Inheritor": "ancestor-borne power",
  "The Green Comet": "rare message"
};

// Sprach-Helper: gibt das passende Karten- und Ton-Set zurück
const getCards = (lang) => lang === 'en' ? cardsEN : cardsDE;
const getCardTone = (lang) => lang === 'en' ? cardToneEN : cardToneDE;

// Sprach-Detection: speichert die Wahl der Nutzerin
const LANG_KEY = 'artemis-oracle-lang-v1';

const detectInitialLang = () => {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'de' || saved === 'en') return saved;
  } catch(e) {}
  try {
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('de')) return 'de';
    return 'en';
  } catch(e) {}
  return 'de';
};

const saveLang = (lang) => {
  try { localStorage.setItem(LANG_KEY, lang); } catch(e) {}
};

// UI-Übersetzungen
const T = {
  de: {
    // AuthScreen
    houseOf: 'HOUSE OF',
    oracleDeck: 'Oracle Deck',
    nameInvite: 'Bevor du den heiligen Hain betrittst,',
    nameInvite2: 'nenne der Göttin deinen Namen.',
    namePlaceholder: 'Dein Name...',
    consent: 'Ich verstehe, dass dieses Orakel der Selbstreflexion dient und stimme zu.',
    consentMissing: 'Bitte stimme den Nutzungsbedingungen zu.',
    nameMissing: 'Bitte gib deinen Namen ein.',
    enterGrove: 'Den Hain betreten',
    leaveGrove: 'Den Hain verlassen',
    deckSubtitle: '53 KARTEN · 9 MYSTERIEN',
    rights: 'ALL RIGHTS RESERVED',
    // Home
    welcome: 'Willkommen',
    homeSubtitle: 'Die Göttinnen, Wesen und Mysterien erwarten dich.',
    backToOverview: 'Zurück zur Übersicht',
    newReading: 'Neue Legung',
    soon: 'bald',
    inDays: (n) => `in ${n} ${n === 1 ? 'Tag' : 'Tagen'}`,
    // Options
    optDailyTitle: 'Tagesorakel',
    optDailyDesc: 'Für Momente, in denen du eine einzige Botschaft für deinen Tag empfangen möchtest. Diese Karte richtet deinen Blick auf die Energie, die dich heute begleitet.',
    optThreeTitle: 'Drei Karten Legung',
    optThreeDesc: 'Für Fragen rund um Vergangenheit, Gegenwart und den nächsten Schritt. Diese Legung öffnet Zusammenhänge und zeigt, was sich gerade durch dein Leben bewegt.',
    optRelTitle: 'Beziehungsorakel',
    optRelDesc: 'Für Verbindungen zwischen zwei Menschen. Gefühle, Sehnsucht, Distanz, Begegnung und unausgesprochene Wahrheiten treten hier stärker hervor.',
    optCrossTitle: 'Das Heilige Kreuz',
    optCrossDesc: 'Für Zeiten großer Entscheidungen, innerer Wendepunkte und tiefer Fragen. Diese Legung führt dich durch verborgene Ebenen deiner Situation und zeigt, was unter der Oberfläche wirkt.',
    optYearTitle: 'Jahresorakel',
    optYearDesc: 'Für einen Blick auf die kommenden Monate und die größeren Bewegungen deines Weges. Jede Karte öffnet ein neues Kapitel deiner Reise.',
    optJournalTitle: 'Orakel Journal',
    optJournalDesc: 'Hier ruhen alle Karten, die du dir bewahrt hast. Eine stille Sammlung deiner Wege, die du immer wieder besuchen darfst.',
    optJournalDesc: 'Ein stiller Raum für die Karten, die dich berührt haben. Jede Legung darfst du hier bewahren, mit eigenen Worten, jederzeit zugänglich auf diesem Gerät.',
    // Shuffle messages
    shuffleDaily: 'Die Göttin wählt deine Karte...',
    shuffleThree: 'Drei Karten finden zu dir...',
    shuffleRel: 'Eure Verbindung wird sichtbar...',
    shuffleCross: 'Das Kreuz formt sich...',
    shuffleYear: 'Dein Jahr offenbart sich...',
    // Card-screen labels
    labelMeaning: 'BEDEUTUNG',
    labelMessage: 'BOTSCHAFT',
    labelTodayCarries: 'Was dich heute trägt',
    labelInterpretation: 'Die Auslegung',
    labelThreeSub: 'Deine Geschichte durch die drei Karten',
    labelFourSub: 'Eure Geschichte durch die vier Karten',
    labelFiveSub: 'Deine Geschichte durch die fünf Karten',
    labelYour: 'Dein Jahr',
    labelYearSub: 'Der Bogen durch alle zwölf Monate',
    yearIntro: 'Zwölf Karten für zwölf Monate. Eine Schau auf dein kommendes Jahr.',
    // Position labels
    posPast: 'Vergangenheit',
    posPresent: 'Gegenwart',
    posFuture: 'Zukunft',
    posMe: 'Du',
    posOther: 'Sie oder Er',
    posConnection: 'Eure Verbindung',
    posCommonFuture: 'Eure Zukunft',
    posCrossFuture: 'Zukunft',
    posCrossLeft: 'Weg links',
    posCrossRight: 'Weg rechts',
    posCrossPast: 'Vergangenheit',
    posCrossPresent: 'Gegenwart',
    // Months
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    // Wish messages
    wishShooting: 'Hast du die Sternschnuppe gesehen? Dann wünsche dir etwas.',
    wishComet: 'Ein Grüner Komet zog vorüber. Etwas Seltenes berührt dich gerade.',
    // Journal
    saveToJournal: 'Im Journal bewahren',
    savedToJournal: 'Im Journal bewahrt',
    journalEmpty: 'Dein Journal ist noch leer. Wenn du eine Legung bewahren möchtest, klicke nach dem Ziehen auf das Herz.',
    journalDelete: 'Löschen',
    journalExport: 'Exportieren',
    confirmDelete: 'Diese Notiz wirklich löschen?',
    confirmClear: 'Wirklich alle Einträge löschen? Das kann nicht rückgängig gemacht werden.',
    clearAll: 'Alles löschen',
    entries: 'Einträge',
    entry: 'Eintrag',
    essence: 'DIE ESSENZ',
    // Categories (for filtering display)
    catGoddess: 'Göttin',
    catSymbol: 'Symbol',
    catBeing: 'Wesen',
    catMystery: 'Mysterium',
    catRareMoon: 'Seltener Mond',
    catHuman: 'Mensch'
  },
  en: {
    houseOf: 'HOUSE OF',
    oracleDeck: 'Oracle Deck',
    nameInvite: 'Before you enter the sacred grove,',
    nameInvite2: 'speak your name to the Goddess.',
    namePlaceholder: 'Your name...',
    consent: 'I understand that this oracle serves self-reflection, and I agree.',
    consentMissing: 'Please agree to the terms first.',
    nameMissing: 'Please enter your name.',
    enterGrove: 'Enter the Grove',
    leaveGrove: 'Leave the Grove',
    deckSubtitle: '53 CARDS · 9 MYSTERIES',
    rights: 'ALL RIGHTS RESERVED',
    welcome: 'Welcome',
    homeSubtitle: 'The Goddesses, beings, and mysteries are waiting for you.',
    backToOverview: 'Back to the overview',
    newReading: 'Draw again',
    soon: 'soon',
    inDays: (n) => `in ${n} ${n === 1 ? 'day' : 'days'}`,
    optDailyTitle: 'Daily Oracle',
    optDailyDesc: 'For moments when you wish to receive a single message for your day. This card turns your gaze toward the energy walking with you today.',
    optThreeTitle: 'Three-Card Reading',
    optThreeDesc: 'For questions about past, present, and the next step. This reading opens connections and shows what is moving through your life right now.',
    optRelTitle: 'Relationship Oracle',
    optRelDesc: 'For the bond between two people. Feelings, longing, distance, meeting, and unspoken truths come more clearly to the surface here.',
    optCrossTitle: 'The Sacred Cross',
    optCrossDesc: 'For times of great decision, inner turning points, and deep questions. This reading takes you through hidden layers of your situation and shows what is at work beneath the surface.',
    optYearTitle: 'Year Oracle',
    optYearDesc: 'For a view of the coming months and the larger movements of your path. Each card opens a new chapter of your journey.',
    optJournalTitle: 'Oracle Journal',
    optJournalDesc: 'Here rest all the cards you have kept. A quiet collection of your ways, to return to whenever you wish.',
    optJournalDesc: 'A quiet place for the cards that have touched you. Each reading you may keep here, in your own words, available at any time on this device.',
    shuffleDaily: 'The Goddess is choosing your card...',
    shuffleThree: 'Three cards are finding their way to you...',
    shuffleRel: 'Your bond is becoming visible...',
    shuffleCross: 'The cross is taking shape...',
    shuffleYear: 'Your year is revealing itself...',
    labelMeaning: 'MEANING',
    labelMessage: 'MESSAGE',
    labelTodayCarries: 'What is carrying you today',
    labelInterpretation: 'The Reading',
    labelThreeSub: 'Your story through the three cards',
    labelFourSub: 'Your story through the four cards',
    labelFiveSub: 'Your story through the five cards',
    labelYour: 'Your year',
    labelYearSub: 'The arc through all twelve months',
    yearIntro: 'Twelve cards for twelve months. A look at your year to come.',
    posPast: 'Past',
    posPresent: 'Present',
    posFuture: 'Future',
    posMe: 'You',
    posOther: 'She or He',
    posConnection: 'Your bond',
    posCommonFuture: 'Your future',
    posCrossFuture: 'Future',
    posCrossLeft: 'Path on the left',
    posCrossRight: 'Path on the right',
    posCrossPast: 'Past',
    posCrossPresent: 'Present',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    wishShooting: 'Did you see the shooting star? Then make a wish.',
    wishComet: 'A Green Comet passed by. Something rare is touching you right now.',
    saveToJournal: 'Keep in your journal',
    savedToJournal: 'Kept in your journal',
    journalEmpty: 'Your journal is still empty. To keep a reading, tap the heart after you have drawn.',
    journalDelete: 'Delete',
    journalExport: 'Export',
    confirmDelete: 'Really delete this entry?',
    confirmClear: 'Really clear all entries? This cannot be undone.',
    clearAll: 'Clear all',
    entries: 'entries',
    entry: 'entry',
    essence: 'THE ESSENCE',
    catGoddess: 'Goddess',
    catSymbol: 'Symbol',
    catBeing: 'Being',
    catMystery: 'Mystery',
    catRareMoon: 'Rare Moon',
    catHuman: 'Human'
  }
};

const t = (lang, key, ...args) => {
  const val = (T[lang] && T[lang][key]) || (T.de && T.de[key]) || key;
  return typeof val === 'function' ? val(...args) : val;
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

// generateYearSynthesis wird weiter unten definiert (braucht themeCards)



// Thema-Karten Mapping für beide Sprachen (für Theme-Detection)
const themeCards = {
  shadow: { de: ["Die Schatten", "Die Unterwelt", "Schwarzer Mond", "Nyx", "Hekate", "Kali", "Lilith"],
            en: ["The Shadows", "The Underworld", "Black Moon", "Nyx", "Hekate", "Kali", "Lilith"] },
  transformation: { de: ["Die Wandlung", "Die Wiedergeburt", "Das Erwachen", "Die Schlange", "Persephone", "Inanna"],
                    en: ["The Transformation", "The Rebirth", "The Awakening", "The Serpent", "Persephone", "Inanna"] },
  action: { de: ["Der Pfeil", "Die Jagd", "Artemis", "Der Silberbogen", "Morrigan"],
            en: ["The Arrow", "The Hunt", "Artemis", "The Silver Bow", "Morrigan"] },
  receiving: { de: ["Der Kelch", "Selene", "Die Hirschkuh", "Der Schleier", "Die Eule"],
               en: ["The Chalice", "Selene", "The Doe", "The Veil", "The Owl"] },
  love: { de: ["Die Liebende", "Freya", "Der Kelch"],
          en: ["The Lover", "Freya", "The Chalice"] },
  creation: { de: ["Die Schöpferin", "Brigid", "Die Träumerin"],
              en: ["The Creator", "Brigid", "The Dreamer"] },
  comet: { de: ["Der Grüne Komet"], en: ["The Green Comet"] }
};

const hasTheme = (drawn, themeKey, lang) => {
  const list = themeCards[themeKey] && themeCards[themeKey][lang] || [];
  return drawn.some(c => list.includes(c.name));
};

const generateYearSynthesis = (drawn, userName, lang = 'de') => {
  if (!drawn || drawn.length !== 12) return null;
  const tone = getCardTone(lang);
  const months = (T[lang] && T[lang].months) || T.de.months;

  const winter = [drawn[0], drawn[1]];
  const spring = [drawn[2], drawn[3], drawn[4]];
  const summer = [drawn[5], drawn[6], drawn[7]];
  const autumn = [drawn[8], drawn[9], drawn[10]];
  const yearEnd = [drawn[11]];

  const hasShadow = hasTheme(drawn, 'shadow', lang);
  const hasTransformation = hasTheme(drawn, 'transformation', lang);
  const hasAction = hasTheme(drawn, 'action', lang);
  const hasLove = hasTheme(drawn, 'love', lang);
  const hasCreation = hasTheme(drawn, 'creation', lang);
  const hasComet = hasTheme(drawn, 'comet', lang);

  const themeCard = drawn[5] || drawn[0];

  if (lang === 'en') {
    const themeTone = tone[themeCard.name] || "a hidden theme";
    let yearPromise;
    if (hasComet) yearPromise = "This year carries a rare gift in it. The Green Comet has appeared in your year reading, and that means something. There will be an event, a meeting, or a moment you do not see coming and that will touch you deeply. Keep your eyes open for the unexpected.";
    else if (hasTransformation && hasShadow) yearPromise = "This will be a year of true transformation. It will not always be comfortable, for you will have to walk through dark rooms to find your way to your new self. But this very journey will teach you the most. At the end of the year, you will be someone else, freer and truer.";
    else if (hasCreation && hasAction) yearPromise = "This year wishes to be made through you. Something in you is pressing toward realisation, a work, a vision, a contribution only you can give. If you begin now and stay with the work, the coming year will be one of creative harvests.";
    else if (hasLove) yearPromise = "This year carries love to you in many forms. Bonds will deepen, meetings will become more true. Notice what arises between you and others, for there lies one of the central gifts of this year. Keep your heart open.";
    else if (hasAction) yearPromise = "This year is calling you to move. It is not a year for waiting, but for daring. What you begin now will carry you. Trust the tension you feel inside; it is signpost, not obstacle.";
    else if (hasTransformation) yearPromise = "This is a year of metamorphosis. You will feel something in you changing, sometimes quietly, sometimes with great force. Let it happen. What you will be at the end of the year you cannot yet quite recognise, but it is good.";
    else yearPromise = "This year carries a quality of its own that will only slowly reveal itself. It is not a year for quick conclusions, but for attentive listening. What wishes to show itself will show itself when you are quiet enough.";

    const opening = `${userName ? userName + ', your' : 'Your'} year to come does not begin with an empty page, but with a written path that you will only recognise as you walk it. Twelve cards have found their way to you, one for each month, and together they tell the story of a year already in motion.`;

    const winterText = `You begin the year in January with ${winter[0].name}, a card that carries ${tone[winter[0].name] || 'a quality of its own'} in it. ${winter[0].message} In February, ${winter[1].name} follows and deepens this energy. ${winter[1].message} The first two months are your winter ground, a time of listening inward and laying the seed for the whole year. Do not rush; what takes root here bears fruit later.`;

    const springText = `In March, spring opens with ${spring[0].name}. ${spring[0].message} In April, ${spring[1].name} walks with you. ${spring[1].message} And in May, ${spring[2].name} appears. ${spring[2].message} These three months are the time of stirring. What you received in winter now wishes to come into motion. Be brave, but also patient with what needs time to grow.`;

    const summerText = `With June, you enter the middle of your year, carried by ${summer[0].name}. ${summer[0].message} The heart of summer belongs to ${summer[1].name} in July. ${summer[1].message} And August gifts you ${summer[2].name}. ${summer[2].message} Summer is your ripening time, the height of your power. What you are living through now are not random moments, but the harvest of your first half of the year. Live them with awareness.`;

    const autumnText = `In September it grows quieter with ${autumn[0].name}. ${autumn[0].message} October carries ${autumn[1].name}. ${autumn[1].message} And in November, ${autumn[2].name} comes to you. ${autumn[2].message} Autumn is the time of honesty. What has proven itself? What is allowed to go? These three months will teach you what truly belongs to you and what you may release.`;

    const yearEndText = `And in December, on the threshold to the next year, ${yearEnd[0].name} shines. ${yearEnd[0].message} So your year ends and the next begins. What this December brings you is both closing and first whisper of what comes after.`;

    const themeIntro = `If you look at the whole year, a single thread runs through it, and its name is ${themeTone}. That is the true theme of your year, the invisible arc that connects all twelve months. It is what you are allowed to grow at.`;

    const closing = `${yearPromise} Keep this reading. Write down the beginning of each season and look back at the end of the year. You will see that the cards already knew what you still had to live.`;

    const paragraphs = [opening, winterText, springText, summerText, autumnText, yearEndText, themeIntro, closing];
    return { paragraphs, months };
  }

  // German
  const themeTone = tone[themeCard.name] || "ein heimliches Thema";
  let yearPromise;
  if (hasComet) yearPromise = "Dieses Jahr trägt ein seltenes Geschenk in sich. Der Grüne Komet erscheint in deiner Jahreslegung, und das bedeutet etwas. Es wird ein Ereignis geben, eine Begegnung oder einen Moment, den du nicht kommen siehst und der dich tief berührt. Halte deine Augen offen für das Unerwartete.";
  else if (hasTransformation && hasShadow) yearPromise = "Dieses Jahr wird ein Jahr der echten Verwandlung. Es wird nicht immer bequem sein, denn du wirst durch dunkle Räume gehen müssen, um zu deinem neuen Selbst zu finden. Doch genau diese Reise wird dich am meisten lehren. Am Ende des Jahres wirst du jemand anderes sein, freier und wahrer.";
  else if (hasCreation && hasAction) yearPromise = "Dieses Jahr will durch dich erschaffen werden. Etwas in dir drängt zur Verwirklichung, ein Werk, eine Vision, ein Beitrag, den nur du leisten kannst. Wenn du jetzt beginnst und am Werk dranbleibst, wird das kommende Jahr eines der schöpferischen Ernten.";
  else if (hasLove) yearPromise = "Dieses Jahr trägt Liebe in vielen Formen zu dir. Verbindungen werden tiefer, Begegnungen wahrer. Achte auf das, was zwischen dir und anderen entsteht, denn dort liegt eines der zentralen Geschenke dieses Jahres. Halte dein Herz offen.";
  else if (hasAction) yearPromise = "Dieses Jahr ruft dich zur Bewegung. Es ist kein Jahr zum Warten, sondern zum Wagen. Was du jetzt beginnst, wird dich tragen. Vertraue der Spannung, die du in dir spürst, sie ist Wegweiser, kein Hindernis.";
  else if (hasTransformation) yearPromise = "Dieses Jahr ist ein Jahr der Metamorphose. Du wirst spüren, wie sich etwas in dir wandelt, manchmal leise, manchmal mit Wucht. Lass es geschehen. Das, was du am Ende des Jahres bist, wirst du jetzt noch nicht ganz erkennen, aber es ist gut.";
  else yearPromise = "Dieses Jahr trägt eine eigene Qualität, die sich erst langsam offenbart. Es ist kein Jahr für vorschnelle Schlüsse, sondern für aufmerksames Lauschen. Was sich zeigen will, zeigt sich, wenn du still genug bist.";

  const opening = `${userName ? userName + ', dein' : 'Dein'} kommendes Jahr beginnt nicht mit einem leeren Blatt, sondern mit einem geschriebenen Pfad, den du erst im Gehen erkennst. Zwölf Karten haben sich für dich gefunden, eine für jeden Monat, und zusammen erzählen sie die Geschichte eines Jahres, das schon jetzt in Bewegung ist.`;

  const winterText = `Du beginnst das Jahr im Januar mit ${winter[0].name}, einer Karte, die ${tone[winter[0].name] || 'eine eigene Qualität'} in sich trägt. ${winter[0].message} Im Februar folgt ${winter[1].name} und vertieft diese Energie. ${winter[1].message} Die ersten zwei Monate sind dein Wintergrund, eine Zeit, in der du nach innen lauschst und das Saatkorn für das gesamte Jahr legst. Hetze nicht, das, was hier wurzelt, trägt später Frucht.`;

  const springText = `Im März öffnet sich der Frühling mit ${spring[0].name}. ${spring[0].message} Im April begleitet dich ${spring[1].name}. ${spring[1].message} Und im Mai erscheint ${spring[2].name}. ${spring[2].message} Diese drei Monate sind die Zeit des Aufbruchs. Was du im Winter empfangen hast, will jetzt in Bewegung kommen. Sei mutig, aber auch geduldig mit dem, was Zeit zum Wachsen braucht.`;

  const summerText = `Mit dem Juni betrittst du die Mitte deines Jahres, getragen von ${summer[0].name}. ${summer[0].message} Das Herz des Sommers gehört ${summer[1].name} im Juli. ${summer[1].message} Und der August schenkt dir ${summer[2].name}. ${summer[2].message} Der Sommer ist deine Reifezeit, der Höhepunkt deiner Kraft. Was du jetzt erlebst, sind keine zufälligen Momente, sondern die Ernte deiner ersten Jahreshälfte. Lebe sie bewusst.`;

  const autumnText = `Im September wird es ruhiger mit ${autumn[0].name}. ${autumn[0].message} Der Oktober trägt ${autumn[1].name}. ${autumn[1].message} Und im November kommt ${autumn[2].name} zu dir. ${autumn[2].message} Der Herbst ist die Zeit der Ehrlichkeit. Was hat sich bewährt? Was darf gehen? Diese drei Monate werden dich lehren, was wirklich zu dir gehört und was du loslassen darfst.`;

  const yearEndText = `Und im Dezember, an der Schwelle zum nächsten Jahr, leuchtet ${yearEnd[0].name}. ${yearEnd[0].message} So endet dein Jahr und beginnt das nächste. Was dieser Dezember dir bringt, ist sowohl Abschluss als auch erstes Flüstern dessen, was danach kommt.`;

  const themeIntro = `Wenn du auf das ganze Jahr blickst, zieht sich ein roter Faden hindurch, und er heißt ${themeTone}. Das ist das eigentliche Thema deines Jahres, der unsichtbare Bogen, der alle zwölf Monate miteinander verbindet. Es ist das, woran du wachsen darfst.`;

  const closing = `${yearPromise} Bewahre diese Auslegung. Schreib dir den Anfang jeder Jahreszeit auf und schau am Ende des Jahres zurück. Du wirst erkennen, dass die Karten gewusst haben, was du erst leben musstest.`;

  const paragraphs = [opening, winterText, springText, summerText, autumnText, yearEndText, themeIntro, closing];
  return { paragraphs, months };
};

const generateThreeSynthesis = (drawn, lang = 'de') => {
  if (!drawn || drawn.length !== 3) return null;
  const [past, present, future] = drawn;
  const tone = getCardTone(lang);
  const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

  const hasShadow = hasTheme(drawn, 'shadow', lang);
  const hasTransformation = hasTheme(drawn, 'transformation', lang);
  const hasAction = hasTheme(drawn, 'action', lang);
  const hasReceiving = hasTheme(drawn, 'receiving', lang);

  if (lang === 'en') {
    const pastTone = tone[past.name] || "an energy";
    const presentTone = tone[present.name] || "a force";
    const futureTone = tone[future.name] || "a way";
    let closingNote;
    if (hasShadow && hasTransformation) closingNote = "What is touching you uncomfortably right now is no accident. It is the very fabric from which your transformation will be made.";
    else if (hasAction && hasReceiving) closingNote = "Know when to draw the bow and when to hold the chalice. Both movements belong to you.";
    else if (hasAction) closingNote = "These cards are calling you to move. Trust the tension you feel inside.";
    else if (hasReceiving) closingNote = "You do not have to carry everything yourself. Open to what is coming toward you.";
    else if (hasTransformation) closingNote = "A metamorphosis has already begun in you. Let yourself dissolve where the old no longer holds.";
    else if (hasShadow) closingNote = "Your way leads through dark rooms. Carry a torch, not fear.";
    else closingNote = "Listen for the fine notes between the cards. Sometimes fate whispers.";

    return [
      `Your story begins with ${past.name} in your past. ${cap(pastTone)} was what shaped you, what brought you to exactly this place. ${past.message} This energy has done its work; it carries you today like a quiet ground, even though you no longer need to live it actively.`,
      `Out of that story, you now stand in your present, held by ${present.name}. ${cap(presentTone)} is the theme around which everything turns for you right now. ${present.message} This is your here and now, the place where you can truly act. The past did not grow toward this point by chance; it prepared you for exactly this question.`,
      `And on the horizon, ${future.name} is already showing itself, your future. ${cap(futureTone)} is where this energy wishes to unfold, if you stay true to your way. ${future.message} This card is not a prediction, but a promise. If you follow the question of your present, if you do not turn aside, you will arrive exactly where something new is waiting for you.`,
      closingNote
    ];
  }

  // German (default)
  const pastTone = tone[past.name] || "eine Energie";
  const presentTone = tone[present.name] || "eine Kraft";
  const futureTone = tone[future.name] || "ein Weg";
  let closingNote;
  if (hasShadow && hasTransformation) closingNote = "Was dich gerade unbequem berührt, ist nicht zufällig. Es ist der Stoff, aus dem deine Wandlung entsteht.";
  else if (hasAction && hasReceiving) closingNote = "Wisse, wann du den Bogen spannst und wann du den Kelch hältst. Beide Bewegungen gehören zu dir.";
  else if (hasAction) closingNote = "Diese Karten rufen dich zur Bewegung. Vertraue der Spannung, die du in dir spürst.";
  else if (hasReceiving) closingNote = "Du musst nicht alles selbst stemmen. Öffne dich für das, was dir entgegenkommt.";
  else if (hasTransformation) closingNote = "Eine Metamorphose hat in dir schon begonnen. Lass dich auflösen, wo das Alte nicht mehr trägt.";
  else if (hasShadow) closingNote = "Dein Weg führt durch dunkle Räume. Trage eine Fackel, keine Furcht.";
  else closingNote = "Höre auf die feinen Töne zwischen den Karten. Manchmal flüstert das Schicksal.";

  return [
    `Deine Geschichte beginnt mit ${past.name} in deiner Vergangenheit. ${cap(pastTone)} war das, was dich geprägt hat, was dich genau hierher gebracht hat. ${past.message} Diese Energie hat ihre Aufgabe erfüllt, sie trägt dich heute wie ein stiller Grund, auch wenn du sie nicht mehr aktiv leben musst.`,
    `Aus dieser Geschichte heraus stehst du jetzt in deiner Gegenwart, und sie wird getragen von ${present.name}. ${cap(presentTone)} ist das Thema, um das sich gerade alles bei dir dreht. ${present.message} Dies ist dein Hier und Jetzt, der Ort, an dem du wirklich wirken kannst. Die Vergangenheit ist nicht zufällig zu diesem Punkt gewachsen, sie hat dich vorbereitet auf genau diese Frage.`,
    `Und am Horizont zeigt sich bereits ${future.name}, deine Zukunft. ${cap(futureTone)} ist das, wohin sich die Energie entfalten will, wenn du deinem Weg treu bleibst. ${future.message} Diese Karte ist keine Vorhersage, sondern ein Versprechen. Wenn du der Frage deiner Gegenwart folgst, wenn du nicht ausweichst, wirst du genau dort ankommen, wo etwas Neues auf dich wartet.`,
    closingNote
  ];
};

const generateRelationshipSynthesis = (drawn, lang = 'de') => {
  if (!drawn || drawn.length !== 4) return null;
  const [me, other, connection, future] = drawn;
  const tone = getCardTone(lang);
  const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

  const hasShadow = hasTheme(drawn, 'shadow', lang);
  const hasTransformation = hasTheme(drawn, 'transformation', lang);
  const hasLove = hasTheme(drawn, 'love', lang);
  const hasAction = hasTheme(drawn, 'action', lang);

  if (lang === 'en') {
    const meTone = tone[me.name] || "a quality of its own";
    const otherTone = tone[other.name] || "another quality";
    const connTone = tone[connection.name] || "a particular energy";
    const futureTone = tone[future.name] || "a way";

    let closingNote;
    if (hasShadow && hasTransformation) closingNote = "What is uncomfortable between you right now is no accident. It is the very fabric from which your transformation will be made. Do not skip the difficult moments — they carry more truth than the easy ones.";
    else if (hasLove && hasAction) closingNote = "Your bond wants to be tender and courageous at once. Love here needs clarity too. Say what must be said, and keep your heart open as you do.";
    else if (hasLove) closingNote = "Your bond is carried by love. Hold it tenderly, it deserves your attention. What is growing between you wishes to be tended.";
    else if (hasShadow) closingNote = "Your bond touches dark rooms. That is not wrong. Some connections exist to take you to places you would not enter alone.";
    else if (hasTransformation) closingNote = "This bond is transforming both of you. Let it happen, even if you do not know who you will be at the end of this changing.";
    else if (hasAction) closingNote = "Your bond is calling you both to move. Do not wait for the perfect moment, it is not coming. Take the next step.";
    else closingNote = "Your bond carries a logic of its own. Listen more carefully to what lies between the words. Sometimes silence knows more than speech.";

    return [
      `You step into this bond as ${me.name}, a card that carries ${meTone} in it. ${me.message} This card shows who you become in this connection, what space you take, what energy you bring. Ask yourself honestly whether this bond brings you closer to yourself or further away.`,
      `Across from you stands ${other.name}, bringing ${otherTone}. ${other.message} Take this card as an invitation to see the other being more clearly, without laying your wishes on top. The other person is not what you project, but exactly what this card shows.`,
      `Between the two of you lives ${connection.name}, the card of your bond. ${cap(connTone)} is what you create together, beyond what you put into words. ${connection.message} Your bond is more than the sum of you two. ${me.name} and ${other.name} meet and form a third space that belongs neither to you nor to the other alone, but is born from both of you.`,
      `Where your bond is moving toward is shown by ${future.name}. ${cap(futureTone)} is the direction in which what is now between you wishes to unfold. ${future.message} Take this as an invitation, not a forecast. The future of your bond depends on how you are with each other now.`,
      closingNote
    ];
  }

  // German
  const meTone = tone[me.name] || "eine eigene Qualität";
  const otherTone = tone[other.name] || "eine andere Qualität";
  const connTone = tone[connection.name] || "eine besondere Energie";
  const futureTone = tone[future.name] || "ein Weg";

  let closingNote;
  if (hasShadow && hasTransformation) closingNote = "Was zwischen euch gerade unbequem ist, ist nicht zufällig. Es ist der Stoff, aus dem eure Wandlung entsteht. Lass die schwierigen Momente nicht aus, sie tragen mehr Wahrheit als die leichten.";
  else if (hasLove && hasAction) closingNote = "Eure Verbindung will gleichzeitig zart und mutig sein. Liebe braucht hier auch Klarheit. Sage, was gesagt werden muss, und halte dabei dein Herz offen.";
  else if (hasLove) closingNote = "Eure Verbindung ist mit Liebe getragen. Halte sie zart, sie verdient deine Aufmerksamkeit. Was zwischen euch wächst, will gepflegt werden.";
  else if (hasShadow) closingNote = "Eure Beziehung berührt dunkle Räume. Das ist nicht falsch. Manche Verbindungen sind dazu da, dich an Orte zu führen, die du allein nicht betreten würdest.";
  else if (hasTransformation) closingNote = "Diese Verbindung verwandelt euch beide. Lass es geschehen, auch wenn du nicht weißt, wer du am Ende dieser Verwandlung sein wirst.";
  else if (hasAction) closingNote = "Eure Verbindung ruft euch zur Bewegung. Wartet nicht auf den perfekten Moment, er kommt nicht. Macht den nächsten Schritt.";
  else closingNote = "Eure Verbindung trägt eine eigene Logik. Höre genauer hin, was zwischen den Worten liegt. Manchmal weiß das Schweigen mehr als die Sprache.";

  return [
    `Du trittst dieser Beziehung mit ${me.name} entgegen, einer Karte, die ${meTone} in sich trägt. ${me.message} Diese Karte zeigt, wer du in dieser Verbindung wirst, welchen Raum du einnimmst, welche Energie du mitbringst. Frage dich ehrlich, ob du in dieser Beziehung näher zu dir kommst oder weiter von dir weg.`,
    `Dir gegenüber steht ${other.name} und bringt ${otherTone} mit. ${other.message} Verstehe diese Karte als Einladung, das andere Wesen klarer zu sehen, ohne deine Wünsche darüberzulegen. Die andere Person ist nicht das, was du in sie hineinprojizierst, sondern genau das, was diese Karte zeigt.`,
    `Zwischen euch beiden lebt ${connection.name}, die Karte eurer Verbindung. ${cap(connTone)} ist das, was ihr gemeinsam erschafft, jenseits dessen, was ihr in Worte fasst. ${connection.message} Eure Verbindung ist mehr als die Summe eurer beider Wesen. ${me.name} und ${other.name} treffen aufeinander und bilden einen dritten Raum, der weder dir noch der anderen Person allein gehört, sondern aus euch beiden entsteht.`,
    `Wohin sich eure Verbindung bewegt, zeigt ${future.name}. ${cap(futureTone)} ist die Richtung, in die das, was zwischen euch jetzt angelegt ist, sich entfalten will. ${future.message} Verstehe das als Einladung, nicht als Vorhersage. Die Zukunft eurer Verbindung hängt davon ab, wie ihr jetzt miteinander seid.`,
    closingNote
  ];
};

// Cross synthesis - atmosphärisch, bildhaft, mit offenen Fragen
const buildCrossStory = (cards, lang = 'de') => {
  if (!cards || cards.length !== 5) return null;
  // Reihenfolge: above=Zukunft, left=Weg links, right=Weg rechts, below=Vergangenheit, center=Gegenwart
  const [above, left, right, below, center] = cards;
  const future = above, pathLeft = left, pathRight = right, past = below, present = center;
  const tone = getCardTone(lang);

  // Karten-Listen je Sprache für Frage-Logik
  const shadowList = themeCards.shadow[lang] || [];
  const transformList = themeCards.transformation[lang] || [];
  const actionList = themeCards.action[lang] || [];
  const receivingList = themeCards.receiving[lang] || [];
  const loveList = themeCards.love[lang] || [];
  const creationList = themeCards.creation[lang] || [];
  const cometList = themeCards.comet[lang] || [];
  // Warrior + Mother extra für Path-Fragen
  const warriorName = lang === 'en' ? 'The Warrior' : 'Die Kriegerin';
  const motherName = lang === 'en' ? 'The Mother' : 'Die Mutter';

  if (lang === 'en') {
    const img = (c) => c.image || c.name;
    const echo = (c) => c.pastEcho || `${tone[c.name] || 'a quality of its own'} was once a key for you`;
    const touch = (c) => c.presentTouch || `Something in you is stirring that carries ${tone[c.name] || 'no name yet'}`;
    const essence = (c) => c.pathEssence || `the way that ${c.name} embodies`;
    const move = (c) => c.futureMove || `${c.name} is moving toward you`;

    const presentQuestion = (c) => {
      if (shadowList.includes(c.name))
        return "What in you wishes to be seen, without you bending it into shape?";
      if (transformList.includes(c.name))
        return "Which part of you is ready to go, and which wants to be born?";
      if ([...actionList, warriorName].includes(c.name))
        return "What have you long been drawing the bow for, without releasing it?";
      if (receivingList.includes(c.name))
        return "What wishes to come to you the moment you stop chasing it?";
      if (loveList.filter(n => n !== 'The Chalice').includes(c.name))
        return "Where may your heart soften today, without losing itself?";
      if ([...creationList, motherName].includes(c.name))
        return "What wishes to come into the world through you?";
      if (cometList.includes(c.name))
        return "Which truth is calling you, the moment everything around you goes still?";
      return "Which truth is calling you, the moment everything around you goes still?";
    };

    const pathQuestion = (l, r) => {
      const isShadow = (c) => shadowList.includes(c.name);
      const isReceiving = (c) => receivingList.includes(c.name);
      const isAction = (c) => [...actionList, warriorName].includes(c.name);

      if (isShadow(l) || isShadow(r))
        return "Which way carries your breath, and which costs it?";
      if ((isAction(l) && isReceiving(r)) || (isAction(r) && isReceiving(l)))
        return "Which way calls for your motion, and which for your surrender?";
      if (isReceiving(l) && isReceiving(r))
        return "Which way sounds like you, when you listen very softly?";
      return "Which decision feels like a return to yourself?";
    };

    const openings = [
      "The cards open today a space between memory and fate. Every glance carries a question that has long been waiting beneath your surface.",
      "Five cards have gathered for you, and they do not lie at random. Each carries a piece of your story and a piece of what still wishes to become.",
      "What the cards show is not what will happen, but what is already living in you. This reading is an invitation to listen."
    ];
    const opening = openings[Math.floor(Math.random() * openings.length)];

    const closings = [
      "Between the cards lies a message that only shows itself when you look longer. Nothing presses you. Yet something in you has already begun to remember.",
      "The cards do not speak in instructions, but in mirrors. What you recognise in them was already in you before. They only carry it into the light.",
      "This reading is not to be decided, but inhabited. Stay in it for a while, and notice which image will not let you go.",
      "Between the cards there whispers a knowing that your language has not yet quite reached. Give it time. It is coming."
    ];
    const closing = closings[Math.floor(Math.random() * closings.length)];

    return [
      opening,
      `${img(past)} lies behind you and carries the light of a time gone by. What ripened there is still at work in your choices, in your gaze, in the quiet knowing you have gained through experience. ${echo(past)}. Today it becomes visible which ways have shaped you, and which traces still glow inside you.`,
      `In the centre of your present, ${img(present)} appears. ${touch(present)}. ${present.message} Here is your moment.`,
      presentQuestion(present),
      `To the left rises ${img(pathLeft)}. There the first way opens, ${essence(pathLeft)}. ${pathLeft.message}`,
      `To the right appears ${img(pathRight)}. There the second way opens, ${essence(pathRight)}. ${pathRight.message}`,
      pathQuestion(pathLeft, pathRight),
      `On the horizon, ${img(future)} is rising. Your future is already moving toward you. ${move(future)}. This card carries the promise of a passage.`,
      closing
    ];
  }

  // German
  const img = (c) => c.image || c.name;
  const echo = (c) => c.pastEcho || `${tone[c.name] || 'eine eigene Qualität'} war einmal ein Schlüssel für dich`;
  const touch = (c) => c.presentTouch || `Etwas in dir bewegt sich, das ${tone[c.name] || 'noch keinen Namen'} trägt`;
  const essence = (c) => c.pathEssence || `den Weg, den ${c.name} verkörpert`;
  const move = (c) => c.futureMove || `${c.name} bewegt sich auf dich zu`;

  const presentQuestion = (c) => {
    if (shadowList.includes(c.name))
      return "Was in dir möchte gesehen werden, ohne dass du es zurechtbiegst?";
    if (transformList.includes(c.name))
      return "Welcher Teil von dir ist bereit zu gehen, und welcher will geboren werden?";
    if ([...actionList, warriorName].includes(c.name))
      return "Wofür spannst du längst den Bogen, ohne ihn loszulassen?";
    if (receivingList.includes(c.name))
      return "Was möchte zu dir kommen, sobald du aufhörst, es zu jagen?";
    if (loveList.filter(n => n !== 'Der Kelch').includes(c.name))
      return "Wo darf dein Herz heute weicher werden, ohne sich zu verlieren?";
    if ([...creationList, motherName].includes(c.name))
      return "Was möchte durch dich in die Welt kommen?";
    return "Welche Wahrheit ruft nach dir, sobald alles um dich herum still wird?";
  };

  const pathQuestion = (l, r) => {
    const isShadow = (c) => shadowList.includes(c.name);
    const isReceiving = (c) => receivingList.includes(c.name);
    const isAction = (c) => [...actionList, warriorName].includes(c.name);

    if (isShadow(l) || isShadow(r))
      return "Welcher Weg trägt deinen Atem, und welcher kostet ihn?";
    if ((isAction(l) && isReceiving(r)) || (isAction(r) && isReceiving(l)))
      return "Welcher Weg verlangt deine Bewegung, und welcher deine Hingabe?";
    if (isReceiving(l) && isReceiving(r))
      return "Welcher Weg klingt nach dir, wenn du sehr leise hinhörst?";
    return "Welche Entscheidung fühlt sich nach Rückkehr zu dir selbst an?";
  };

  const openings = [
    "Die Karten öffnen heute einen Raum zwischen Erinnerung und Schicksal. Jeder Blick auf sie trägt eine Frage in sich, die längst unter deiner Oberfläche gewartet hat.",
    "Fünf Karten haben sich für dich versammelt, und sie liegen nicht zufällig. Jede trägt ein Stück deiner Geschichte und ein Stück dessen, was noch werden will.",
    "Was die Karten zeigen, ist nicht das, was geschehen wird, sondern das, was bereits in dir lebt. Diese Auslegung ist eine Einladung, hinzuhören."
  ];
  const opening = openings[Math.floor(Math.random() * openings.length)];

  const closings = [
    "Zwischen den Karten liegt eine Botschaft, die sich erst zeigt, wenn du länger hinsiehst. Nichts drängt dich. Doch etwas in dir hat längst begonnen, sich zu erinnern.",
    "Die Karten reden nicht in Anweisungen, sondern in Spiegeln. Was du in ihnen erkennst, war schon vorher in dir. Sie tragen es nur ans Licht.",
    "Diese Auslegung will nicht entschieden, sondern bewohnt werden. Bleib eine Weile in ihr, und beobachte, welches Bild dich nicht mehr loslässt.",
    "Zwischen den Karten flüstert ein Wissen, das deine Sprache noch nicht ganz erreicht hat. Lass ihm Zeit. Es kommt."
  ];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  return [
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

// Sprach-Umschalter oben rechts, dezent wie ein Wasserzeichen.
// Wird auf jedem Bildschirm über allem gelegt.
function LangSwitch({ lang, setLang }) {
  const buttonStyle = (active) => ({
    background: 'transparent',
    border: 'none',
    color: COLORS.silverLight,
    padding: '4px 6px',
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontSize: '13px',
    letterSpacing: '0.25em',
    cursor: active ? 'default' : 'pointer',
    opacity: active ? 0.95 : 0.4,
    textShadow: active ? '0 0 12px rgba(232, 228, 240, 0.45)' : 'none',
    transition: 'opacity 0.4s ease, text-shadow 0.4s ease',
    outline: 'none'
  });
  return (
    <div style={{
      position: 'fixed', top: '18px', right: '20px',
      zIndex: 100,
      display: 'flex', alignItems: 'center',
      pointerEvents: 'auto'
    }}>
      <button
        onClick={() => setLang('de')}
        style={buttonStyle(lang === 'de')}
        onMouseEnter={e => { if (lang !== 'de') e.currentTarget.style.opacity = 0.75; }}
        onMouseLeave={e => { if (lang !== 'de') e.currentTarget.style.opacity = 0.4; }}
      >de</button>
      <span style={{
        color: COLORS.silverLight,
        opacity: 0.3,
        fontSize: '11px',
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic'
      }}>·</span>
      <button
        onClick={() => setLang('en')}
        style={buttonStyle(lang === 'en')}
        onMouseEnter={e => { if (lang !== 'en') e.currentTarget.style.opacity = 0.75; }}
        onMouseLeave={e => { if (lang !== 'en') e.currentTarget.style.opacity = 0.4; }}
      >en</button>
    </div>
  );
}

function AuthScreen({ onLogin, lang, setLang }) {
  const [name, setName] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const submit = () => {
    if (!name.trim()) { setError(t(lang, 'nameMissing')); return; }
    if (!accepted) { setError(t(lang, 'consentMissing')); return; }
    onLogin({ name: name.trim() });
  };

  return (
    <div style={{minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', ...bgStyle}}>
      <StarsBg/>
      <LangSwitch lang={lang} setLang={setLang}/>
      <style>{sharedStyles}</style>
      <div className="artemis-page" style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '640px', margin: '0 auto', padding: '64px 24px 48px'}}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <div style={{position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '32px'}}>
            <MoonAuraGlow/>
            <div style={{position: 'relative', zIndex: 2}}>
              <AnimatedMoon size={80}/>
            </div>
          </div>
          <h1 className="h-mystical artemis-house" style={{fontSize: '20px', color: COLORS.silverLight, marginBottom: '-12px', lineHeight: 1, animation: 'mysticalGlow 4s ease-in-out infinite'}}>{t(lang, 'houseOf')}</h1>
          <h1 className="h-italic artemis-title" style={{fontSize: '72px', color: COLORS.silverLight, animation: 'mysticalGlow 4s ease-in-out infinite', lineHeight: 1, marginBottom: '20px'}}>Artemis</h1>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '36px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, ' + COLORS.silver + ')'}}/>
            <p className="label-text artemis-divider-text" style={{fontSize: '11px', color: COLORS.silver, textTransform: 'uppercase'}}>{t(lang, 'oracleDeck')}</p>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, ' + COLORS.silver + ')'}}/>
          </div>
          <p className="body-text artemis-prose" style={{fontStyle: 'italic', fontSize: '17px', color: COLORS.silverLight, opacity: 0.85, lineHeight: 1.6, marginBottom: '32px'}}>
            {t(lang, 'nameInvite')}<br/>{t(lang, 'nameInvite2')}
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '440px', margin: '0 auto'}}>
          <input
            type="text"
            placeholder={t(lang, 'namePlaceholder')}
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
              {t(lang, 'consent')}
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
            {t(lang, 'enterGrove')}
          </button>
        </div>

        <div style={{textAlign: 'center', marginTop: '56px', marginBottom: '40px'}}>
          <p className="label-text" style={{fontSize: '11px', color: COLORS.silver, opacity: 0.55}}>{t(lang, 'deckSubtitle')}</p>
        </div>

        <div style={{marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0.55}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M 5 1 A 4 4 0 0 1 5 9 A 2.5 4 0 0 0 5 1" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
          </div>
          <p className="h-italic" style={{fontSize: '16px', color: COLORS.silverLight}}>sheAwakens</p>
          <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.7}}>© {new Date().getFullYear()} · {t(lang, 'rights')}</p>
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

// Journal: Helfer fuer localStorage
const JOURNAL_KEY = 'artemis-oracle-journal-v1';
const USER_KEY = 'artemis-oracle-user-v1';

const loadUser = () => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.name === 'string' && parsed.name.trim()) return parsed;
    return null;
  } catch(e) { return null; }
};

const saveUser = (u) => {
  try { localStorage.setItem(USER_KEY, JSON.stringify(u)); } catch(e) {}
};

const clearUser = () => {
  try { localStorage.removeItem(USER_KEY); } catch(e) {}
};
const loadJournal = () => {
  try {
    const raw = localStorage.getItem(JOURNAL_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) { return []; }
};
const saveJournal = (entries) => {
  try { localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries)); } catch(e) {}
};

export default function App() {
  const [user, setUserState] = useState(() => loadUser());

  // Wrapper: speichert oder löscht den Nutzer beim Setzen automatisch
  const setUser = React.useCallback((u) => {
    if (u) saveUser(u);
    else clearUser();
    setUserState(u);
  }, []);

  const [mode, setMode] = useState('home');
  const [drawn, setDrawn] = useState([]);
  const [shuffling, setShuffling] = useState(false);

  // Sprache: DE oder EN. Wird in localStorage gespeichert und bei Start automatisch
  // an der Systemsprache der Nutzerin ausgerichtet, falls noch keine Wahl gespeichert ist.
  const [lang, setLangState] = useState(() => detectInitialLang());
  const setLang = React.useCallback((newLang) => {
    saveLang(newLang);
    setLangState(newLang);
  }, []);

  // Journal-Zustand
  const [journal, setJournal] = useState([]);
  const [journalSaved, setJournalSaved] = useState(false); // Hinweis "im Journal bewahrt"
  const [journalNote, setJournalNote] = useState('');
  const [showNoteField, setShowNoteField] = useState(false);

  // Wunsch-Hinweis: wird angezeigt, wenn eine Sternschnuppe oder Komet vorbeizieht
  const [wishMessage, setWishMessage] = useState(null);

  const handleShootingStar = React.useCallback(() => {
    // Hinweis verzögert anzeigen, damit die Sternschnuppe vorher sichtbar war
    setTimeout(() => {
      setWishMessage({
        id: Date.now(),
        type: 'shooting',
        text: t(lang, 'wishShooting')
      });
    }, 600);
  }, [lang]);

  const handleComet = React.useCallback(() => {
    setTimeout(() => {
      setWishMessage({
        id: Date.now(),
        type: 'comet',
        text: t(lang, 'wishComet')
      });
    }, 1500); // Komet ist länger unterwegs, später Hinweis
  }, [lang]);

  // Wunsch-Hinweis nach 9 Sekunden automatisch ausblenden
  useEffect(() => {
    if (!wishMessage) return;
    const timer = setTimeout(() => setWishMessage(null), 9000);
    return () => clearTimeout(timer);
  }, [wishMessage]);

  // Journal beim Start aus localStorage laden
  useEffect(() => {
    setJournal(loadJournal());
  }, []);

  // Reset des "gespeichert"-Hinweises und Notiz, wenn neue Karten gezogen werden
  useEffect(() => {
    setJournalSaved(false);
    setJournalNote('');
    setShowNoteField(false);
  }, [drawn, mode]);

  // Aktuelle Auslegung im Journal speichern
  // Erzeugt eine kurze 3-4-Zeilen-Zusammenfassung der aktuellen Legung
  // Wird beim Speichern ins Journal mit aufgenommen, damit der Eintrag später noch Kontext trägt.
  const buildJournalSummary = () => {
    if (!drawn || drawn.length === 0) return '';
    const tone = getCardTone(lang);
    const modeLabelsDE = {
      daily: 'Tagesorakel', three: 'Drei Karten Legung',
      relationship: 'Beziehungsorakel', cross: 'Das Heilige Kreuz', year: 'Jahresorakel'
    };
    const modeLabelsEN = {
      daily: 'Daily Oracle', three: 'Three-Card Reading',
      relationship: 'Relationship Oracle', cross: 'The Sacred Cross', year: 'Year Oracle'
    };
    const label = (lang === 'en' ? modeLabelsEN : modeLabelsDE)[mode] || (lang === 'en' ? 'Reading' : 'Legung');

    if (mode === 'daily') {
      const c = drawn[0];
      const toneStr = tone[c.name] || (lang === 'en' ? 'a quality of its own' : 'eine eigene Qualität');
      if (lang === 'en') return `${label} · ${c.name}. ${c.name} brings ${toneStr} into your field today. ${c.message}`;
      return `${label} · ${c.name}. ${c.name} bringt heute ${toneStr} in dein Feld. ${c.message}`;
    }

    if (mode === 'three') {
      const [past, present, future] = drawn;
      const presentTone = tone[present.name] || (lang === 'en' ? 'a force of its own' : 'eine eigene Kraft');
      if (lang === 'en') return `${label} · ${past.name} · ${present.name} · ${future.name}. From ${past.name} you come, in the present ${present.name} is at work with ${presentTone}, and on the horizon ${future.name} opens. ${present.message}`;
      return `${label} · ${past.name} · ${present.name} · ${future.name}. Aus ${past.name} kommst du, in der Gegenwart wirkt ${present.name} mit ${presentTone}, und am Horizont öffnet sich ${future.name}. ${present.message}`;
    }

    if (mode === 'relationship') {
      const [me, other, connection, future] = drawn;
      const connTone = tone[connection.name] || (lang === 'en' ? 'an energy of its own' : 'eine eigene Energie');
      if (lang === 'en') return `${label} · You: ${me.name} · She/He: ${other.name} · Bond: ${connection.name} · Future: ${future.name}. Between you lives ${connTone}. ${connection.message}`;
      return `${label} · Du: ${me.name} · Sie/Er: ${other.name} · Verbindung: ${connection.name} · Zukunft: ${future.name}. Zwischen euch lebt ${connTone}. ${connection.message}`;
    }

    if (mode === 'cross') {
      const [above, left, right, below, center] = drawn;
      const presentTone = tone[center.name] || (lang === 'en' ? 'a theme of its own' : 'ein eigenes Thema');
      if (lang === 'en') return `${label} · Present: ${center.name} (${presentTone}). From ${below.name} you come, before you two ways open: ${left.name} or ${right.name}. On the horizon, ${above.name} awaits. ${center.message}`;
      return `${label} · Gegenwart: ${center.name} (${presentTone}). Aus ${below.name} kommst du, vor dir öffnen sich zwei Wege: ${left.name} oder ${right.name}. Am Horizont wartet ${above.name}. ${center.message}`;
    }

    if (mode === 'year') {
      const monthsDE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
      const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const months = lang === 'en' ? monthsEN : monthsDE;
      const cardLine = drawn.map((c, i) => `${months[i]}: ${c.name}`).join(' · ');
      const themeCard = drawn[5] || drawn[0];
      const themeTone = tone[themeCard.name] || (lang === 'en' ? 'a hidden theme' : 'ein heimliches Thema');
      if (lang === 'en') return `${label}. ${cardLine}. Thread through the year: ${themeTone}.`;
      return `${label}. ${cardLine}. Roter Faden des Jahres: ${themeTone}.`;
    }

    return `${label} · ${drawn.map(c => c.name).join(' · ')}.`;
  };

  const saveToJournal = (note) => {
    if (!drawn || drawn.length === 0) return;
    const entry = {
      id: Date.now() + '-' + Math.random().toString(36).slice(2, 7),
      date: new Date().toISOString(),
      mode,
      lang, // Sprache merken, in der die Legung gezogen wurde
      cards: drawn.map(c => ({ id: c.id, name: c.name, category: c.category, symbol: c.symbol, message: c.message })),
      summary: buildJournalSummary(),
      note: (note || '').trim()
    };
    const updated = [entry, ...journal];
    setJournal(updated);
    saveJournal(updated);
    setJournalSaved(true);
    setShowNoteField(false);
  };

  // Einzelnen Eintrag aus dem Journal entfernen
  const deleteJournalEntry = (id) => {
    const updated = journal.filter(e => e.id !== id);
    setJournal(updated);
    saveJournal(updated);
  };

  // Gesamtes Journal als JSON-Datei exportieren
  const exportJournal = () => {
    const blob = new Blob([JSON.stringify({ exported: new Date().toISOString(), user: user?.name || null, entries: journal }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `artemis-journal-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

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
      setDrawn(shuffleArray(getCards(lang)).slice(0, count));
      setShuffling(false);
    }, 2800);
  };

  const reset = () => { setDrawn([]); setShuffling(false); setMode('home'); };

  if (!user) return <AuthScreen onLogin={setUser} lang={lang} setLang={setLang}/>;

  const yearAvailable = isYearOracleAvailable();
  const yearCountdown = daysUntilNextYearOracle();

  const options = [
    {key: 'daily', count: 1, title: t(lang, 'optDailyTitle'), icon: Moon, disabled: false,
     description: t(lang, 'optDailyDesc')},
    {key: 'three', count: 3, title: t(lang, 'optThreeTitle'), icon: Sparkles, disabled: false,
     description: t(lang, 'optThreeDesc')},
    {key: 'relationship', count: 4, title: t(lang, 'optRelTitle'), icon: null, disabled: false, customIcon: 'heart',
     description: t(lang, 'optRelDesc')},
    {key: 'cross', count: 5, title: t(lang, 'optCrossTitle'), icon: null, disabled: false, customIcon: 'cross',
     description: t(lang, 'optCrossDesc')},
    {key: 'year', count: 12, title: t(lang, 'optYearTitle'), icon: null, disabled: !yearAvailable, customIcon: 'sun', suffix: yearAvailable ? null : t(lang, 'inDays', yearCountdown),
     description: t(lang, 'optYearDesc')},
    {key: 'journal', count: 0, title: t(lang, 'optJournalTitle'), icon: BookOpen, disabled: false,
     description: t(lang, 'optJournalDesc')}
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
        <h1 className="h-mystical artemis-house" style={{fontSize: '20px', color: COLORS.silverLight, marginBottom: '-12px', lineHeight: 1, animation: 'mysticalGlow 4s ease-in-out infinite'}}>{t(lang, 'houseOf')}</h1>
        <h1 className="h-italic artemis-title" style={{fontSize: '72px', color: COLORS.silverLight, animation: 'mysticalGlow 4s ease-in-out infinite', lineHeight: 1, marginBottom: '20px'}}>Artemis</h1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '40px'}}>
          <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, ' + COLORS.silver + ')'}}/>
          <p className="label-text artemis-divider-text" style={{fontSize: '11px', color: COLORS.silver, textTransform: 'uppercase'}}>{t(lang, 'oracleDeck')}</p>
          <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, ' + COLORS.silver + ')'}}/>
        </div>
        <p className="body-text artemis-welcome" style={{fontStyle: 'italic', fontSize: '20px', color: COLORS.silverLight, opacity: 0.95, marginBottom: '6px'}}>{t(lang, 'welcome')}, {user.name}.</p>
        <p className="body-text artemis-subtitle" style={{fontStyle: 'italic', fontSize: '18px', color: COLORS.silverLight, opacity: 0.85}}>{t(lang, 'homeSubtitle')}</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        {options.map(opt => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.key}
              onClick={() => {
                if (opt.disabled) return;
                if (opt.key === 'journal') {
                  setDrawn([]);
                  setShuffling(false);
                  setMode('journal');
                } else {
                  draw(opt.count, opt.key);
                }
              }}
              disabled={opt.disabled}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'stretch',
                gap: '10px',
                padding: '22px 24px',
                width: '100%', boxSizing: 'border-box',
                background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.55), rgba(26, 27, 75, 0.55))',
                border: '1px solid rgba(200, 196, 212, 0.28)',
                color: COLORS.silverLight,
                cursor: opt.disabled ? 'default' : 'pointer',
                opacity: opt.disabled ? 0.45 : 1,
                borderRadius: '2px',
                textAlign: 'left',
                font: 'inherit'
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
        <p className="label-text" style={{fontSize: '11px', color: COLORS.silver, opacity: 0.55}}>{t(lang, 'deckSubtitle')}</p>
      </div>

      <div style={{textAlign: 'center', marginTop: '64px'}}>
        <button onClick={() => setUser(null)} className="body-text" style={{
          background: 'none', border: 'none',
          fontStyle: 'italic', fontSize: '14px',
          color: COLORS.silverLight, opacity: 0.7,
          cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px'
        }}>
          {t(lang, 'leaveGrove')}
        </button>
      </div>

      <div style={{marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0.55}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M 5 1 A 4 4 0 0 1 5 9 A 2.5 4 0 0 0 5 1" fill={COLORS.silverLight}/></svg>
          <div style={{height: '1px', width: '28px', background: COLORS.silver}}/>
        </div>
        <p className="h-italic" style={{fontSize: '16px', color: COLORS.silverLight}}>sheAwakens</p>
        <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.7}}>© {new Date().getFullYear()} · {t(lang, 'rights')}</p>
      </div>
    </div>
  );

  const Shell = ({ title, children }) => {
    const currentOption = options.find(o => o.key === mode);
    const drawAgain = () => { if (currentOption && !currentOption.disabled) draw(currentOption.count, currentOption.key); };
    const canSaveToJournal = drawn && drawn.length > 0 && mode !== 'journal';
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

        {canSaveToJournal && (
          <div style={{marginTop: '48px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto'}}>
            {/* Herz-Klick speichert direkt ohne Notiz-Feld */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
              <button
                onClick={() => {
                  if (journalSaved) return; // schon gespeichert
                  saveToJournal('');
                }}
                aria-label={journalSaved ? t(lang, 'savedToJournal') : t(lang, 'saveToJournal')}
                style={{
                  background: 'none', border: 'none',
                  cursor: journalSaved ? 'default' : 'pointer',
                  padding: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={e => { if (!journalSaved) e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{
                  filter: journalSaved ? `drop-shadow(0 0 8px ${COLORS.accent}) drop-shadow(0 0 14px rgba(155, 127, 184, 0.6))` : 'none',
                  transition: 'filter 0.3s ease'
                }}>
                  <path d="M 12 20 C 12 20 3.5 14.5 3.5 8.5 C 3.5 5.8 5.7 4 8 4 C 10 4 12 5.5 12 7.5 C 12 5.5 14 4 16 4 C 18.3 4 20.5 5.8 20.5 8.5 C 20.5 14.5 12 20 12 20 Z"
                    stroke={COLORS.silverLight}
                    strokeWidth="1.3"
                    fill={journalSaved ? COLORS.accent : 'none'}
                    strokeLinejoin="round"
                    style={{transition: 'fill 0.3s ease'}}
                  />
                </svg>
              </button>
              <span className="body-text" style={{
                fontStyle: 'italic',
                fontSize: '15px',
                color: COLORS.silverLight,
                opacity: journalSaved ? 0.95 : 0.75,
                letterSpacing: '0.02em',
                userSelect: 'none'
              }}>
                {journalSaved ? (lang === 'en' ? 'kept' : 'bewahrt') : (lang === 'en' ? 'keep' : 'merken')}
              </span>
            </div>
          </div>
        )}

        <div style={{marginTop: '48px', marginBottom: '24px', display: 'flex', justifyContent: 'center'}}>
          <button onClick={drawAgain} className="label-text" style={{
            fontSize: '11px', padding: '12px 24px',
            color: COLORS.silverLight,
            background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.9), rgba(26, 27, 75, 0.9))',
            border: '1px solid rgba(200, 196, 212, 0.35)',
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
            borderRadius: '2px'
          }}>
            <RotateCcw size={14}/> {t(lang, 'newReading')}
          </button>
        </div>
        <div style={{marginBottom: '64px', textAlign: 'center'}}>
          <button onClick={reset} className="body-text" style={{
            background: 'none', border: 'none',
            fontStyle: 'italic', fontSize: '14px',
            color: COLORS.silverLight, opacity: 0.7,
            cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px'
          }}>
            {t(lang, 'backToOverview')}
          </button>
        </div>
      </div>
    );
  };

  const renderDaily = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message={t(lang, 'shuffleDaily')}/>;
    const c = drawn[0];
    // Fallback auf meaning + message, falls eine ältere Karte kein dailyReading hat
    const text = c.dailyReading || `${c.meaning} ${c.message}`;
    return (
      <Shell title={t(lang, 'optDailyTitle')}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
          <CardDisplay card={c} size="lg"/>
          <div style={{maxWidth: '600px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
              <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
              <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
              <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
            </div>
            <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>{t(lang, 'labelInterpretation')}</h3>
            <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>{t(lang, 'labelTodayCarries')}</p>
            <p className="body-text" style={{fontStyle: 'italic', fontSize: '17px', lineHeight: 1.85, color: COLORS.silverLight, opacity: 0.95}}>{text}</p>
          </div>
        </div>
      </Shell>
    );
  };

  const renderThree = () => {
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message={t(lang, 'shuffleThree')}/>;
    const storyParagraphs = generateThreeSynthesis(drawn, lang);
    const labels = [t(lang, 'posPast'), t(lang, 'posPresent'), t(lang, 'posFuture')];
    return (
      <Shell title={t(lang, 'optThreeTitle')}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '48px'}}>
          {drawn.map((c, i) => <CardDisplay key={c.id} card={c} label={labels[i]}/>)}
        </div>
        <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
            <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
          </div>
          <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>{t(lang, 'labelInterpretation')}</h3>
          <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>{t(lang, 'labelThreeSub')}</p>
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
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message={t(lang, 'shuffleRel')}/>;
    const storyParagraphs = generateRelationshipSynthesis(drawn, lang);
    const [me, other, connection, future] = drawn;
    return (
      <Shell title={t(lang, 'optRelTitle')}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', marginBottom: '48px'}}>
          <div className="artemis-relationship-row" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '120px', flexWrap: 'wrap'}}>
            <CardDisplay card={me} label={t(lang, 'posMe')}/>
            <CardDisplay card={other} label={t(lang, 'posOther')}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            <CardDisplay card={connection} label={t(lang, 'posConnection')}/>
            <CardDisplay card={future} label={t(lang, 'posCommonFuture')}/>
          </div>
        </div>
        <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
            <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
          </div>
          <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>{t(lang, 'labelInterpretation')}</h3>
          <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>{t(lang, 'labelFourSub')}</p>
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
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message={t(lang, 'shuffleCross')}/>;
    const [above, left, right, below, center] = drawn;
    const storyParagraphs = buildCrossStory(drawn, lang);
    return (
      <Shell title={t(lang, 'optCrossTitle')}>
        <div className="artemis-cross-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)', justifyContent: 'center', gap: '12px', marginBottom: '48px'}}>
          <div/><div className="artemis-cross-card"><CardDisplay card={above} size="sm" label={t(lang, 'posCrossFuture')}/></div><div/>
          <div className="artemis-cross-card"><CardDisplay card={left} size="sm" label={t(lang, 'posCrossLeft')}/></div>
          <div className="artemis-cross-card"><CardDisplay card={center} size="sm" label={t(lang, 'posCrossPresent')}/></div>
          <div className="artemis-cross-card"><CardDisplay card={right} size="sm" label={t(lang, 'posCrossRight')}/></div>
          <div/><div className="artemis-cross-card"><CardDisplay card={below} size="sm" label={t(lang, 'posCrossPast')}/></div><div/>
        </div>
        <div style={{maxWidth: '640px', margin: '0 auto', padding: '40px 32px', background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.5), rgba(15, 18, 53, 0.7), rgba(45, 26, 61, 0.5))', border: '1px solid rgba(200, 196, 212, 0.3)', boxShadow: '0 0 30px rgba(93, 58, 122, 0.3), inset 0 0 20px rgba(15, 18, 53, 0.4)', borderRadius: '2px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, rgba(200, 196, 212, 0.5))'}}/>
            <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke={COLORS.silver} strokeWidth="0.5"/><path d="M 12 6 A 6 6 0 0 1 12 18 A 4 6 0 0 0 12 6" fill={COLORS.silverLight}/></svg>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, rgba(200, 196, 212, 0.5))'}}/>
          </div>
          <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>{t(lang, 'labelInterpretation')}</h3>
          <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>{t(lang, 'labelFiveSub')}</p>
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
    if (shuffling || drawn.length === 0) return <ShuffleAnimation message={t(lang, 'shuffleYear')}/>;
    const synth = generateYearSynthesis(drawn, user.name, lang);
    const months = T[lang] ? T[lang].months : T.de.months;
    return (
      <Shell title={t(lang, 'optYearTitle')}>
        <p className="body-text" style={{textAlign: 'center', fontStyle: 'italic', fontSize: '16px', color: COLORS.silverLight, opacity: 0.75, marginBottom: '40px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
          {t(lang, 'yearIntro')}
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
            <h3 className="card-name" style={{fontSize: '14px', textAlign: 'center', color: COLORS.silverLight, marginBottom: '6px'}}>{t(lang, 'labelYour')}</h3>
            <p className="label-text" style={{fontSize: '10px', textAlign: 'center', color: COLORS.silver, opacity: 0.6, marginBottom: '32px'}}>{t(lang, 'labelYearSub')}</p>
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

  const renderJournal = () => {
    const modeLabelsDE = {
      daily: 'Tagesorakel', three: 'Drei Karten Legung',
      relationship: 'Beziehungsorakel', cross: 'Das Heilige Kreuz', year: 'Jahresorakel'
    };
    const modeLabelsEN = {
      daily: 'Daily Oracle', three: 'Three-Card Reading',
      relationship: 'Relationship Oracle', cross: 'The Sacred Cross', year: 'Year Oracle'
    };
    // Für Anzeige nutzen wir die Sprache des Eintrags, damit alte Einträge in ihrer
    // Originalsprache angezeigt werden. Fallback ist die aktuelle UI-Sprache.
    const labelFor = (entry) => {
      const entryLang = entry.lang || 'de';
      const labels = entryLang === 'en' ? modeLabelsEN : modeLabelsDE;
      return labels[entry.mode] || entry.mode || '';
    };

    const formatDate = (iso) => {
      try {
        const d = new Date(iso);
        const locale = lang === 'en' ? 'en-GB' : 'de-DE';
        return d.toLocaleDateString(locale, { day: '2-digit', month: 'long', year: 'numeric' }) + ' · ' + d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
      } catch(e) { return iso; }
    };

    // UI-Mikrotexte je Sprache
    const journalIntro = lang === 'en'
      ? 'Here rest the cards that have touched you. Your entries stay on this device.'
      : 'Hier ruhen die Karten, die dich berührt haben. Deine Einträge bleiben auf diesem Gerät.';
    const emptyHint = lang === 'en'
      ? 'Draw a card and keep it here, if it speaks to you.'
      : 'Ziehe eine Karte und bewahre sie hier, wenn sie dich anspricht.';
    const exportLabel = lang === 'en' ? 'EXPORT JOURNAL' : 'JOURNAL EXPORTIEREN';
    const removeWord = lang === 'en' ? 'remove' : 'entfernen';
    const removeConfirm = lang === 'en' ? 'Really remove this entry?' : 'Diesen Eintrag wirklich entfernen?';
    const essenceLabel = lang === 'en' ? 'THE ESSENCE' : 'DIE ESSENZ';
    const yourNoteLabel = lang === 'en' ? 'YOUR NOTE' : 'DEINE NOTIZ';

    return (
      <div className="artemis-page" style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '720px', margin: '0 auto', padding: '48px 24px'}}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 className="h-italic artemis-section-title" style={{fontSize: '36px', color: COLORS.silverLight, animation: 'mysticalGlow 4s ease-in-out infinite'}}>{t(lang, 'optJournalTitle')}</h2>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px'}}>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, ' + COLORS.silver + ')'}}/>
            <BookOpen size={14} color={COLORS.silverLight}/>
            <div style={{height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, ' + COLORS.silver + ')'}}/>
          </div>
          <p className="body-text" style={{fontStyle: 'italic', fontSize: '15px', color: COLORS.silverLight, opacity: 0.75, marginTop: '20px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6}}>
            {journalIntro}
          </p>
        </div>

        {journal.length === 0 ? (
          <div style={{textAlign: 'center', padding: '60px 24px', border: '1px solid rgba(200, 196, 212, 0.2)', borderRadius: '2px', background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.3), rgba(15, 18, 53, 0.4))'}}>
            <p className="body-text" style={{fontStyle: 'italic', fontSize: '17px', color: COLORS.silverLight, opacity: 0.8, lineHeight: 1.7, marginBottom: '8px'}}>
              {lang === 'en' ? 'Your journal is still empty.' : 'Dein Journal ist noch leer.'}
            </p>
            <p className="body-text" style={{fontStyle: 'italic', fontSize: '15px', color: COLORS.silverLight, opacity: 0.6, lineHeight: 1.6}}>
              {emptyHint}
            </p>
          </div>
        ) : (
          <>
            <div style={{display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap'}}>
              <button onClick={exportJournal} className="label-text" style={{
                fontSize: '10px', padding: '10px 20px',
                color: COLORS.silverLight,
                background: 'linear-gradient(135deg, rgba(45, 26, 61, 0.9), rgba(26, 27, 75, 0.9))',
                border: '1px solid rgba(200, 196, 212, 0.35)',
                cursor: 'pointer', borderRadius: '2px'
              }}>{exportLabel}</button>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              {journal.map(entry => (
                <div key={entry.id} style={{
                  padding: '24px 24px 20px',
                  background: 'linear-gradient(135deg, rgba(58, 31, 93, 0.4), rgba(15, 18, 53, 0.55), rgba(45, 26, 61, 0.4))',
                  border: '1px solid rgba(200, 196, 212, 0.25)',
                  borderRadius: '2px',
                  boxShadow: '0 0 20px rgba(93, 58, 122, 0.2)'
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', flexWrap: 'wrap'}}>
                    <div>
                      <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.65, marginBottom: '4px'}}>{labelFor(entry).toUpperCase()}</p>
                      <p className="body-text" style={{fontStyle: 'italic', fontSize: '13px', color: COLORS.silverLight, opacity: 0.75, margin: 0}}>{formatDate(entry.date)}</p>
                    </div>
                    <button onClick={() => { if (window.confirm(removeConfirm)) deleteJournalEntry(entry.id); }} className="body-text" style={{
                      background: 'none', border: 'none',
                      fontStyle: 'italic', fontSize: '12px',
                      color: COLORS.silverLight, opacity: 0.55,
                      cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px',
                      padding: 0
                    }}>{removeWord}</button>
                  </div>

                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: (entry.summary || entry.note) ? '16px' : 0}}>
                    {entry.cards.map((c, i) => (
                      <div key={i} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '6px 12px',
                        border: '1px solid rgba(200, 196, 212, 0.3)',
                        borderRadius: '999px',
                        background: 'rgba(15, 18, 53, 0.4)'
                      }}>
                        <span className="card-name" style={{fontSize: '10px', color: COLORS.silverLight}}>{c.name}</span>
                      </div>
                    ))}
                  </div>

                  {entry.summary && (
                    <div style={{marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(200, 196, 212, 0.15)'}}>
                      <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.6, marginBottom: '8px'}}>{essenceLabel}</p>
                      <p className="body-text" style={{fontStyle: 'italic', fontSize: '15px', lineHeight: 1.65, color: COLORS.silverLight, opacity: 0.88, margin: 0}}>{entry.summary}</p>
                    </div>
                  )}

                  {entry.note && (
                    <div style={{marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(200, 196, 212, 0.15)'}}>
                      <p className="label-text" style={{fontSize: '9px', color: COLORS.silver, opacity: 0.6, marginBottom: '8px'}}>{yourNoteLabel}</p>
                      <p className="body-text" style={{fontStyle: 'italic', fontSize: '16px', lineHeight: 1.7, color: COLORS.silverLight, opacity: 0.95, whiteSpace: 'pre-wrap', margin: 0}}>{entry.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div style={{marginTop: '56px', textAlign: 'center'}}>
          <button onClick={reset} className="body-text" style={{
            background: 'none', border: 'none',
            fontStyle: 'italic', fontSize: '14px',
            color: COLORS.silverLight, opacity: 0.7,
            cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px'
          }}>
            {t(lang, 'backToOverview')}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', ...bgStyle}}>
      <StarsBg/>
      <ShootingStars onShootingStar={handleShootingStar} onComet={handleComet}/>
      <LangSwitch lang={lang} setLang={setLang}/>
      <style>{sharedStyles}</style>
      {mode === 'home' && renderHome()}
      {mode === 'daily' && renderDaily()}
      {mode === 'three' && renderThree()}
      {mode === 'relationship' && renderRelationship()}
      {mode === 'cross' && renderCross()}
      {mode === 'year' && renderYear()}
      {mode === 'journal' && renderJournal()}

      {/* Wunsch-Hinweis: schwebt sanft am unteren Rand ein */}
      {wishMessage && (
        <div
          key={wishMessage.id}
          style={{
            position: 'fixed',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            maxWidth: '420px',
            width: 'calc(100% - 32px)',
            pointerEvents: 'none',
            animation: 'wishFade 9s ease-in-out forwards'
          }}
        >
          <div style={{
            padding: '16px 22px',
            background: wishMessage.type === 'comet'
              ? 'linear-gradient(135deg, rgba(45, 90, 60, 0.85), rgba(20, 40, 30, 0.9))'
              : 'linear-gradient(135deg, rgba(45, 26, 61, 0.92), rgba(15, 18, 53, 0.95))',
            border: '1px solid ' + (wishMessage.type === 'comet' ? 'rgba(127, 255, 168, 0.5)' : 'rgba(232, 228, 240, 0.35)'),
            borderRadius: '2px',
            boxShadow: wishMessage.type === 'comet'
              ? '0 0 30px rgba(127, 255, 168, 0.3), 0 0 60px rgba(127, 255, 168, 0.15)'
              : '0 0 30px rgba(232, 228, 240, 0.18), 0 0 60px rgba(155, 127, 184, 0.2)',
            textAlign: 'center'
          }}>
            <p className="body-text" style={{
              fontStyle: 'italic',
              fontSize: '15px',
              lineHeight: 1.5,
              color: wishMessage.type === 'comet' ? '#d4ffe2' : COLORS.silverLight,
              margin: 0
            }}>
              {wishMessage.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}