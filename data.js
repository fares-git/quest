let defaultData =
  [
  {
    "topic": "Java Core et Bases",
    "questions": [
      {
        "question": "Quelle est votre compréhension des interfaces fonctionnelles en Java ?",
        "textResponse": "Une interface fonctionnelle a une seule méthode abstraite (SAM). Depuis Java 8, elle supporte les lambdas et références de méthodes, rendant le code concis. Exemple : `Runnable`, `Comparator`. L'annotation `@FunctionalInterface` est optionnelle. Utile pour les streams et la programmation fonctionnelle.",
        "keyWords": ["interface fonctionnelle", "SAM", "lambda", "Java 8", "Runnable", "Stream"]
      },
      {
        "question": "Quelle est la différence entre equals() et == ?",
        "textResponse": "`==` compare les références mémoire, vérifiant si deux objets sont identiques. `equals()` compare le contenu, selon l'implémentation. Exemple : pour `String`, `equals()` compare les caractères. Redéfinir `equals()` avec `hashCode()` est crucial pour les collections comme `HashMap`.",
        "keyWords": ["equals()", "==", "référence", "contenu", "hashCode()", "HashMap"]
      },
      {
        "question": "Qu'est-ce qu'un garbage collector en Java ?",
        "textResponse": "Le garbage collector (GC) libère la mémoire des objets non référencés dans le heap. Il utilise des algorithmes comme mark-and-sweep. Géré par la JVM, il évite les fuites mémoire mais peut nécessiter un réglage pour optimiser les performances.",
        "keyWords": ["garbage collector", "JVM", "heap", "mark-and-sweep"]
      },
      {
        "question": "Les Types de Garbage Collector ?",
        "textResponse": "Les GC incluent : **Serial GC** (monothread, applications simples), **Parallel GC** (multicœur, haut débit), **CMS** (faible latence), et **G1** (équilibre débit/latence). Chaque type est adapté à des besoins spécifiques, comme la latence ou les gros tas.",
        "keyWords": ["Serial GC", "Parallel GC", "CMS", "G1", "débit", "latence"]
      },
      {
        "question": "Qu'est-ce qu'un thread en Java ?",
        "textResponse": "Un thread est une unité d'exécution pour des tâches parallèles. Créé via `Thread` ou `Runnable`, il partage la mémoire, nécessitant une synchronisation (`synchronized`) pour éviter les conflits. Utile pour le multitâche, comme les serveurs web.",
        "keyWords": ["thread", "Runnable", "Thread", "synchronisation", "concurrence"]
      },
      {
        "question": "Qu'est-ce qu'un constructeur en Java ?",
        "textResponse": "Un constructeur initialise un objet lors de sa création. Il a le même nom que la classe, sans type de retour. Peut être surchargé avec des paramètres. Exemple : `public MyClass(int x) { this.x = x; }`. Un constructeur par défaut est généré si aucun n'est défini.",
        "keyWords": ["constructeur", "initialisation", "surcharge", "par défaut"]
      },
      {
        "question": "Quelle est la différence entre la surcharge (overloading) et la superposition (overriding) de méthodes ?",
        "textResponse": "**Overloading** : même nom de méthode, signatures différentes, résolu à la compilation. **Overriding** : redéfinition d'une méthode de super-classe dans une sous-classe, résolu à l'exécution. `@Override` garantit une redéfinition correcte. Lié au polymorphisme.",
        "keyWords": ["overloading", "overriding", "@Override", "polymorphisme", "compilation", "exécution"]
      },
      {
        "question": "C'est quoi le mot clé static ?",
        "textResponse": "`static` indique qu'un membre (variable, méthode) appartient à la classe, pas à une instance. Accessible sans objet, partagé par tous les objets. Exemple : `Math.PI`. Ne peut pas accéder aux membres non statiques directement.",
        "keyWords": ["static", "classe", "instance", "partagé", "Math"]
      },
      {
        "question": "Qu'est-ce qu'un bloc statique en Java ?",
        "textResponse": "Un bloc statique est un bloc de code `static {}` exécuté une fois lors du chargement de la classe. Utilisé pour initialiser des variables statiques ou configurer des ressources partagées, comme une connexion à une base de données.",
        "keyWords": ["bloc statique", "initialisation", "chargement classe", "ressources"]
      },
      {
        "question": "Quelle est la différence entre les méthodes statiques et non statiques ?",
        "textResponse": "Une méthode **statique** appartient à la classe, appelée sans instance, accède seulement aux membres statiques. Une méthode **non statique** appartient à un objet, accède à tous les membres. Exemple : `Math.abs()` (statique) vs `toString()` (non statique).",
        "keyWords": ["statique", "non statique", "classe", "instance"]
      },
      {
        "question": "Qu'est-ce qu'un Package en Java ?",
        "textResponse": "Un package organise les classes et interfaces dans un espace de noms. Évite les conflits de noms et gère l'accès via `public`, `protected`. Exemple : `java.util`. Déclaré avec `package` et importé avec `import`.",
        "keyWords": ["package", "espace de noms", "import", "organisation"]
      },
      {
        "question": "Quelle est la différence entre String et StringBuilder ?",
        "textResponse": "`String` est immuable, chaque modification crée un nouvel objet. `StringBuilder` est mutable, modifie directement le contenu, plus rapide pour les concatenations. `String` est thread-safe, `StringBuilder` non. Utilisé pour les manipulations fréquentes.",
        "keyWords": ["String", "StringBuilder", "immuable", "mutable", "thread-safe"]
      },
      {
        "question": "Quelle est la différence entre les classes StringBuilder et StringBuffer en Java ?",
        "textResponse": "`StringBuilder` est mutable, rapide, mais non thread-safe. `StringBuffer` est mutable, thread-safe via synchronisation, mais plus lent. Utilisez `StringBuilder` pour monothread, `StringBuffer` pour multithreading.",
        "keyWords": ["StringBuilder", "StringBuffer", "mutable", "thread-safe", "synchronisation"]
      },
      {
        "question": "Quelle est la différence entre les classes String, StringBuilder et StringBuffer en Java ?",
        "textResponse": "`String` : immuable, thread-safe, coûteux pour modifications. `StringBuilder` : mutable, rapide, non thread-safe. `StringBuffer` : mutable, thread-safe, plus lent. Utilisez `String` pour constantes, `StringBuilder` pour monothread, `StringBuffer` pour multithreading.",
        "keyWords": ["String", "StringBuilder", "StringBuffer", "immuable", "mutable", "thread-safe"]
      },
      {
        "question": "Qu'est-ce que le mot-clé volatile ?",
        "textResponse": "`volatile` garantit que la valeur d'une variable est lue/écrite depuis la mémoire principale, assurant la visibilité entre threads. Ne garantit pas l'atomicité. Exemple : `volatile int counter`. Utile pour des variables partagées simples.",
        "keyWords": ["volatile", "visibilité", "multithreading", "mémoire principale"]
      },
      {
        "question": "Qu'est-ce que le mot-clé synchronized en Java ?",
        "textResponse": "`synchronized` contrôle l'accès concurrent à un bloc ou une méthode. Garantit qu'un seul thread exécute la section à la fois, évitant les conditions de course. Exemple : `synchronized void increment() {}`. Utilisé pour la thread-safety.",
        "keyWords": ["synchronized", "thread-safe", "condition de course", "multithreading"]
      },
      {
        "question": "Qu'est-ce qu’une méthode synchronisée (thread-safe) en Java ?",
        "textResponse": "Une méthode synchronisée utilise `synchronized` pour limiter l'accès à un seul thread à la fois. Garantit la thread-safety, évitant les conflits. Exemple : `public synchronized void update()`. Peut réduire les performances si surutilisée.",
        "keyWords": ["synchronized", "thread-safe", "multithreading", "verrou"]
      },
      {
        "question": "Qu'est-ce qu'un bloc try-catch en Java ?",
        "textResponse": "Un bloc `try-catch` gère les exceptions. Le code risqué est dans `try`, les erreurs capturées dans `catch`. Exemple : `try { int x = 1/0; } catch (ArithmeticException e) {}`. `finally` exécute du code quoi qu'il arrive.",
        "keyWords": ["try-catch", "exception", "finally", "gestion d'erreurs"]
      },
      {
        "question": "Quelle est la différence entre les exceptions vérifiées (checked exceptions) et non vérifiées (unchecked exceptions) en Java ?",
        "textResponse": "**Checked** : dérivent de `Exception`, doivent être gérées (`try-catch`) ou déclarées (`throws`). Exemple : `IOException`. **Unchecked** : dérivent de `RuntimeException`, non vérifiées à la compilation. Exemple : `NullPointerException`. Utilisées pour erreurs récupérables vs erreurs de programmation.",
        "keyWords": ["checked", "unchecked", "Exception", "RuntimeException", "throws"]
      },
      {
        "question": "Quelle est la différence entre un constructeur et une méthode en Java ?",
        "textResponse": "Un **constructeur** initialise un objet, même nom que la classe, sans type de retour. Une **méthode** définit un comportement, a un type de retour (ou `void`). Exemple : `MyClass() {}` (constructeur) vs `void doSomething() {}` (méthode).",
        "keyWords": ["constructeur", "méthode", "initialisation", "comportement"]
      },
      {
        "question": "Qu’est-ce que le mot abstract ?",
        "textResponse": "`abstract` déclare une classe ou méthode abstraite. Une classe abstraite ne peut être instanciée. Une méthode abstraite n'a pas d'implémentation, doit être redéfinie. Exemple : `abstract void run()`. Utile pour l'abstraction et polymorphisme.",
        "keyWords": ["abstract", "classe abstraite", "méthode abstraite", "polymorphisme"]
      },
      {
        "question": "Qu’est-ce qu’une classe abstraite ?",
        "textResponse": "Une classe abstraite, déclarée avec `abstract`, ne peut être instanciée. Contient des méthodes abstraites ou concrètes. Sert de base pour les sous-classes. Exemple : `abstract class Animal { abstract void sound(); }`. Utile pour partager du code.",
        "keyWords": ["classe abstraite", "abstract", "héritage", "méthode abstraite"]
      },
      {
        "question": "Quelle est la différence entre une classe abstraite et une interface ?",
        "textResponse": "Une **classe abstraite** peut avoir des méthodes concrètes, des champs, un seul héritage. Une **interface** n'a que des méthodes abstraites (ou par défaut), constantes, multi-implémentation possible. Exemple : étendre `Animal` et implémenter `Movable`.",
        "keyWords": ["classe abstraite", "interface", "héritage", "implémentation", "méthode par défaut"]
      },
      {
        "question": "Qu’est-ce que l’héritage en Java ?",
        "textResponse": "L'héritage permet à une classe d'hériter des attributs et méthodes d'une super-classe via `extends`. Favorise la réutilisation et le polymorphisme. Exemple : `class Dog extends Animal`. Java ne supporte pas l'héritage multiple pour les classes.",
        "keyWords": ["héritage", "extends", "polymorphisme", "réutilisation"]
      },
      {
        "question": "Qu’est-ce que le polymorphisme en Java ?",
        "textResponse": "Le polymorphisme permet de traiter des objets de sous-classes comme leur super-classe. **Statique** (overloading) : résolu à la compilation. **Dynamique** (overriding) : résolu à l'exécution. Exemple : `Animal a = new Dog(); a.sound()`. Essentiel pour la flexibilité.",
        "keyWords": ["polymorphisme", "overloading", "overriding", "dynamique"]
      },
      {
        "question": "Qu’est-ce que l'encapsulation en Java ?",
        "textResponse": "L'encapsulation masque les données avec `private` et fournit un accès via getters/setters. Protège l'état interne et garantit un contrôle des modifications. Exemple : `private int age; public int getAge() { return age; }`. Améliore sécurité et maintenabilité.",
        "keyWords": ["encapsulation", "private", "getters", "setters", "sécurité"]
      },
      {
        "question": "Qu'est-ce qu'un objet immuable ?",
        "textResponse": "Un objet immuable ne peut être modifié après création. Exemple : `String`. Thread-safe, évite les effets de bord. Créé avec `final` et sans setters. Utile pour les clés de `HashMap` ou les constantes.",
        "keyWords": ["immuable", "String", "thread-safe", "final", "HashMap"]
      },
      {
        "question": "Comment créer une classe immuable ?",
        "textResponse": "1) Classe `final`. 2) Champs `private` et `final`. 3) Pas de setters, seulement getters. 4) Initialisation via constructeur. 5) Copies défensives pour objets mutables. Exemple : `final class MyClass { private final int x; public MyClass(int x) { this.x = x; } }`.",
        "keyWords": ["immuable", "final", "private", "getters", "copie défensive"]
      },
      {
        "question": "Quelle est la différence entre les mots-clés this et super en Java ?",
        "textResponse": "`this` fait référence à l'instance courante, accède à ses membres ou constructeurs. `super` accède à la super-classe (méthodes, constructeurs). Exemple : `this.x` vs `super.method()`. Utile pour gérer l'héritage et éviter les ambiguïtés.",
        "keyWords": ["this", "super", "instance", "super-classe", "héritage"]
      },
      {
        "question": "Quel est le rôle du mot-clé override en Java ?",
        "textResponse": "`@Override` indique qu'une méthode redéfinit une méthode de super-classe ou interface. Vérifie la signature au compilateur, évitant les erreurs. Exemple : `@Override public String toString()`. Améliore la lisibilité et maintenance.",
        "keyWords": ["@Override", "redéfinition", "signature", "super-classe", "interface"]
      },
      {
        "question": "Quelles sont les familles/catégories d’exceptions en Java ?",
        "textResponse": "**Checked** : dérivent de `Exception`, gérées via `try-catch` ou `throws` (ex. `IOException`). **Unchecked** : dérivent de `RuntimeException`, non vérifiées (ex. `NullPointerException`). **Error** : problèmes graves (ex. `OutOfMemoryError`).",
        "keyWords": ["checked", "unchecked", "Exception", "RuntimeException", "Error"]
      },
      {
        "question": "A quoi sert « Final » ? Où ne peut-on pas mettre le mot clé « final » ?",
        "textResponse": "`final` rend une variable, méthode ou classe immuable. Variable : une seule assignation. Méthode : pas de redéfinition. Classe : pas d'héritage. Exemple : `final int x = 10`. Ne s'applique pas aux méthodes abstraites ni interfaces.",
        "keyWords": ["final", "immuable", "variable", "méthode", "classe"]
      },
      {
        "question": "Qu’est-ce qu’une Queue en java ?",
        "textResponse": "`Queue` est une interface FIFO (First In, First Out). Ajout via `offer`, retrait via `poll`. Exemple : `LinkedList`, `PriorityQueue`. Utile pour tâches ou files d'attente. `BlockingQueue` est thread-safe pour multithreading.",
        "keyWords": ["Queue", "FIFO", "offer", "poll", "BlockingQueue", "thread-safe"]
      },
      {
        "question": "Comment tu sais sur quelle version de Java tu développes ?",
        "textResponse": "J'utilise `java -version` ou `javac -version` dans un terminal. Dans Maven, je vérifie `java.version` dans `pom.xml`. En code, `System.getProperty('java.version')`. Cela garantit la compatibilité avec le projet.",
        "keyWords": ["java -version", "pom.xml", "java.version", "compatibilité"]
      },
      {
        "question": "Comment tu sais que tu es en Java 8 ?",
        "textResponse": "`java -version` affiche '1.8'. Dans Maven, `java.version` dans `pom.xml` indique 8. En code, `System.getProperty('java.version')` retourne '1.8'. Les lambdas ou streams dans le code confirment Java 8.",
        "keyWords": ["Java 8", "java -version", "pom.xml", "lambdas", "streams"]
      },
      {
        "question": "Est-ce que tu as déjà manipulé les stream ?",
        "textResponse": "Oui, les streams (Java 8) traitent les collections fonctionnellement. Exemple : `list.stream().filter(x -> x > 5).collect(Collectors.toList())`. Permet `filter`, `map`, `collect`. Rapide, lisible, supporte `parallelStream` pour parallélisme.",
        "keyWords": ["Stream", "Java 8", "filter", "map", "collect", "parallelStream"]
      },
      {
        "question": "Peux-tu me donner les nouveautés de Java 8 que tu manipules au quotidien ?",
        "textResponse": "J'utilise les lambdas, l'API Stream (`filter`, `map`), les méthodes par défaut dans les interfaces, et `Optional` pour éviter les `NullPointerException`. Exemple : `list.stream().map(String::toUpperCase)`. Simplifie le code et améliore la lisibilité.",
        "keyWords": ["Java 8", "lambda", "Stream", "Optional", "méthode par défaut"]
      },
      {
        "question": "Est-ce que tu as déjà manipulé les expressions Lambda ? les références de méthodes ?",
        "textResponse": "Oui, les lambdas simplifient le code, comme `list.forEach(x -> System.out.println(x))`. Les références de méthodes sont encore plus concises : `list.forEach(System.out::println)`. Utiles avec streams et interfaces fonctionnelles.",
        "keyWords": ["lambda", "référence de méthode", "Stream", "forEach"]
      },
      {
        "question": "C’est quoi les nouveautés de Java 11 ?",
        "textResponse": "Java 11 (LTS) inclut l'API HTTP Client, `var` pour inférence de type, nouvelles méthodes `String` (`isBlank`, `lines`), et le GC Epsilon. J'utilise `var` et HTTP Client pour un code plus simple et des requêtes réseau modernes.",
        "keyWords": ["Java 11", "HTTP Client", "var", "String", "Epsilon"]
      },
      {
        "question": "C’est quoi la différence entre LIST et SET en java ?",
        "textResponse": "`List` (ex. `ArrayList`) : ordonnée, permet doublons, accès par index. `Set` (ex. `HashSet`) : pas de doublons, pas d'ordre (sauf `TreeSet`). Utilisez `List` pour séquences, `Set` pour ensembles uniques.",
        "keyWords": ["List", "Set", "doublons", "ordre", "ArrayList", "HashSet"]
      },
      {
        "question": "Comment tu peux comparer deux objets ?",
        "textResponse": "J'utilise `equals()` pour comparer le contenu, `==` pour les références. Pour trier, j'implémente `Comparable` (`compareTo`) ou un `Comparator`. Exemple : `Person` avec `equals()` sur `name` et `compareTo` sur `age`.",
        "keyWords": ["equals()", "==", "Comparable", "Comparator", "compareTo"]
      },
      {
        "question": "Comment tu créais la méthode EQUALS ?",
        "textResponse": "1) Vérifie `==` pour même objet. 2) Vérifie `null` et `instanceof`. 3) Cast et compare les champs. Exemple : `public boolean equals(Object obj) { if (this == obj) return true; if (!(obj instanceof MyClass)) return false; MyClass other = (MyClass) obj; return this.x == other.x; }`. Redéfinir `hashCode()`.",
        "keyWords": ["equals()", "instanceof", "hashCode()", "comparaison"]
      },
      {
        "question": "Est-ce que tu as déjà manipulé les dates dans Java 8 ? Comment tu fais ?",
        "textResponse": "Oui, avec `java.time`. Exemple : `LocalDate.now()` pour la date courante, `LocalDate.of(2023, 10, 1)` pour une date spécifique, `plusDays(5)` pour manipuler. Formatage via `DateTimeFormatter`. Thread-safe et clair.",
        "keyWords": ["java.time", "LocalDate", "DateTimeFormatter", "thread-safe"]
      },
      {
        "question": "Peux-tu m’expliquer le principe de l’héritage multiple en Java ?",
        "textResponse": "Java interdit l'héritage multiple pour les classes (éviter le problème du diamant). Une classe peut implémenter plusieurs interfaces, simulant l'héritage multiple. Exemple : `class MyClass implements Movable, Serializable`. Les méthodes par défaut des interfaces ajoutent du comportement.",
        "keyWords": ["héritage multiple", "interfaces", "problème du diamant", "méthode par défaut"]
      },
      {
        "question": "Sur quelle version de Java tu as déjà travaillé ? Est-ce que tu connais les nouveautés au-delà de Java 7 et 8 ?",
        "textResponse": "J'ai travaillé sur Java 8, 11, 17. Java 11 : HTTP Client, `var`. Java 17 : records, pattern matching pour `switch`. J'utilise `var` et records pour un code concis, en vérifiant la compatibilité projet.",
        "keyWords": ["Java 8", "Java 11", "Java 17", "HTTP Client", "var", "records"]
      },
      {
        "question": "Est-ce que les Records et les Streams dans Java te parlent ?",
        "textResponse": "**Records** (Java 14+) : classes immuables simplifiées, avec getters automatiques. Exemple : `record Person(String name, int age)`. **Streams** (Java 8) : traitement fonctionnel des collections (`filter`, `map`). Exemple : `list.stream().filter(x -> x > 10)`.",
        "keyWords": ["records", "streams", "Java 8", "Java 14", "immuable", "filter"]
      },
      {
        "question": "Expliquez la différence entre final, finally et finalize.",
        "textResponse": "`final` : rend variable, méthode, classe immuable. `finally` : bloc exécuté après `try-catch`, souvent pour libérer des ressources. `finalize()` : méthode appelée par le GC avant destruction, déconseillée. Exemple : `finally` pour fermer un fichier.",
        "keyWords": ["final", "finally", "finalize", "immuable", "try-catch", "GC"]
      },
      {
        "question": "Comment fonctionne le ramasse-miettes (Garbage Collection) en Java ?",
        "textResponse": "Le GC libère la mémoire des objets non référencés dans le heap via mark-and-sweep. Divise le heap en Young et Old Generation. Automatise la gestion mémoire, mais peut nécessiter un réglage pour éviter les pauses.",
        "keyWords": ["garbage collector", "mark-and-sweep", "heap", "Young Generation"]
      },
      {
        "question": "Qu'est-ce que la programmation multithread et comment fonctionne-t-elle en Java ?",
        "textResponse": "Le multithreading exécute plusieurs tâches en parallèle via des threads. En Java, créé avec `Thread` ou `Runnable`, démarré par `start()`. Nécessite `synchronized` ou `Lock` pour éviter les conflits. Exemple : `ExecutorService` pour gérer les threads.",
        "keyWords": ["multithreading", "Thread", "Runnable", "synchronized", "ExecutorService"]
      },
      {
        "question": "Expliquez la différence entre HashMap, TreeMap, et LinkedHashMap.",
        "textResponse": "`HashMap` : pas d'ordre, O(1) pour accès. `TreeMap` : clés triées, O(log n). `LinkedHashMap` : conserve l'ordre d'insertion, proche de `HashMap` en performance. Utilisez `HashMap` pour vitesse, `TreeMap` pour tri, `LinkedHashMap` pour ordre.",
        "keyWords": ["HashMap", "TreeMap", "LinkedHashMap", "ordre", "O(1)", "O(log n)"]
      },
      {
        "question": "Que se passe-t-il si deux objets ont le même hashCode dans une HashMap ?",
        "textResponse": "Même `hashCode()` : objets dans le même bucket. `HashMap` utilise `equals()` pour vérifier l'égalité. Stockés en liste chaînée (ou arbre depuis Java 8). Un bon `hashCode()` minimise les collisions pour de meilleures performances.",
        "keyWords": ["HashMap", "hashCode()", "equals()", "bucket", "collision"]
      },
      {
        "question": "Pourquoi HashMap n’est pas thread-safe ? Alternatives ?",
        "textResponse": "`HashMap` n'est pas synchronisé, risquant des corruptions en multithreading. Alternatives : `ConcurrentHashMap` (verrous segmentés, performant) ou `Collections.synchronizedMap()` (verrou global, moins efficace). Utilisez selon les besoins de concurrence.",
        "keyWords": ["HashMap", "thread-safe", "ConcurrentHashMap", "synchronizedMap"]
      },
      {
        "question": "Complexité de ArrayList vs HashSet ?",
        "textResponse": "`ArrayList` : accès O(1), recherche O(n), insertion/suppression O(n). `HashSet` : opérations O(1) en moyenne via hachage, pas d'ordre. Utilisez `ArrayList` pour accès séquentiel, `HashSet` pour recherches rapides sans doublons.",
        "keyWords": ["ArrayList", "HashSet", "O(1)", "O(n)", "hachage"]
      },
      {
        "question": "Pourquoi String est-elle immuable en Java ?",
        "textResponse": "`String` est immuable pour sécurité, thread-safety, et optimisation (string pool). Modifications créent un nouvel objet. Utile pour clés de `HashMap`. Utilisez `StringBuilder` pour manipulations fréquentes.",
        "keyWords": ["String", "immuable", "thread-safe", "string pool", "HashMap"]
      },
      {
        "question": "Comment créer un singleton en Java ?",
        "textResponse": "1) Constructeur `private`. 2) Instance statique unique. 3) Méthode `public static` pour accès. Exemple : `private static final Singleton instance = new Singleton();`. Pour multithreading, utiliser double-checked locking ou classe interne.",
        "keyWords": ["singleton", "private", "statique", "multithreading"]
      },
      {
        "question": "Expliquer les concepts de synchronized et de volatile.",
        "textResponse": "`synchronized` : verrouille méthode/bloc pour un seul thread, évite conflits. `volatile` : garantit visibilité des variables entre threads, pas l'atomicité. Exemple : `volatile int x` pour lectures, `synchronized` pour modifications complexes.",
        "keyWords": ["synchronized", "volatile", "visibilité", "atomicité"]
      },
      {
        "question": "Quelle est la différence entre un bloc try-catch et un bloc try-with-resources ?",
        "textResponse": "`try-catch` gère les exceptions. `try-with-resources` (Java 7) ferme automatiquement les ressources (`AutoCloseable`). Exemple : `try (FileInputStream fis = new FileInputStream('file')) {}`. Simplifie et évite les oublis.",
        "keyWords": ["try-catch", "try-with-resources", "AutoCloseable", "fermeture"]
      },
      {
        "question": "Qu'est-ce qu'un Callable et en quoi est-il différent de Runnable ?",
        "textResponse": "`Callable` : méthode `call()` retourne une valeur, peut lever une exception. `Runnable` : méthode `run()`, sans retour ni exception. Utilisez `Callable` avec `ExecutorService` pour tâches avec résultats. Exemple : `Callable<Integer> task = () -> 42`.",
        "keyWords": ["Callable", "Runnable", "call()", "run()", "ExecutorService"]
      },
      {
        "question": "Quelle est la différence entre ArrayList et LinkedList ?",
        "textResponse": "`ArrayList` : tableau dynamique, accès O(1), insertion/suppression O(n). `LinkedList` : liste chaînée, insertion/suppression O(1), accès O(n). Utilisez `ArrayList` pour accès rapides, `LinkedList` pour modifications fréquentes.",
        "keyWords": ["ArrayList", "LinkedList", "O(1)", "O(n)", "tableau", "liste chaînée"]
      },
      {
        "question": "Expliquez le fonctionnement du hashCode() et equals() en Java.",
        "textResponse": "`hashCode()` : retourne un entier pour placer les objets dans `HashMap`. `equals()` : compare le contenu. Contrat : si `a.equals(b)`, alors `a.hashCode() == b.hashCode()`. Redéfinir ensemble pour cohérence dans les collections.",
        "keyWords": ["hashCode()", "equals()", "HashMap", "contrat"]
      },
      {
        "question": "Quelle est la différence entre une classe Thread et l'interface Runnable ?",
        "textResponse": "`Thread` : classe pour créer un thread, limite l'héritage. `Runnable` : interface avec `run()`, plus flexible. Exemple : `new Thread(() -> System.out.println('Run')).start()`. Préférez `Runnable` pour réutilisation.",
        "keyWords": ["Thread", "Runnable", "run()", "flexibilité"]
      },
      {
        "question": "Comment fonctionne le ConcurrentHashMap ?",
        "textResponse": "`ConcurrentHashMap` : thread-safe, divise les données en segments avec verrous indépendants. Permet des opérations concurrentes (`put`, `get`) sans verrou global. Idéal pour multithreading performant.",
        "keyWords": ["ConcurrentHashMap", "thread-safe", "segments", "concurrence"]
      },
      {
        "question": "Quelle est la différence entre un constructeur par défaut et un constructeur avec paramètres ?",
        "textResponse": "Constructeur **par défaut** : généré par Java, sans paramètres, valeurs par défaut. Constructeur **avec paramètres** : initialise avec des valeurs spécifiques. Exemple : `public MyClass(int x)`. Choix selon besoins d'initialisation.",
        "keyWords": ["constructeur", "par défaut", "paramètres", "initialisation"]
      },
      {
        "question": "Que se passe-t-il si la méthode main() n'est pas static ?",
        "textResponse": "Si `main()` n'est pas `static`, la JVM ne peut l'exécuter sans instance, causant une erreur (`NoSuchMethodError`). La signature correcte est `public static void main(String[] args)`.",
        "keyWords": ["main()", "static", "JVM", "NoSuchMethodError"]
      },
      {
        "question": "Comment implémenter une énumération (enum) en Java ?",
        "textResponse": "`enum` définit des constantes. Exemple : `enum Day { MONDAY, TUESDAY }`. Peut inclure champs, méthodes. Thread-safe, immuable. Utile pour statuts ou valeurs fixes.",
        "keyWords": ["enum", "constantes", "thread-safe", "immuable"]
      },
      {
        "question": "Qu'est-ce que la réflexion en Java ?",
        "textResponse": "La réflexion inspecte/manipule classes, méthodes, champs à l'exécution via `Class`, `Method`. Exemple : `Class.forName('MyClass')`. Utilisée dans Spring, mais prudence pour performance et lisibilité.",
        "keyWords": ["réflexion", "Class", "Method", "Spring", "exécution"]
      },
      {
        "question": "Quelle est la différence entre une HashSet et une TreeSet ?",
        "textResponse": "`HashSet` : pas d'ordre, O(1) pour opérations via hachage. `TreeSet` : éléments triés, O(log n). Utilisez `HashSet` pour vitesse, `TreeSet` pour ordre (naturel ou `Comparator`).",
        "keyWords": ["HashSet", "TreeSet", "O(1)", "O(log n)", "ordre"]
      },
      {
        "question": "Comment fonctionne une PriorityQueue ?",
        "textResponse": "`PriorityQueue` ordonne les éléments (naturel ou `Comparator`). Retrait via `poll` donne l'élément prioritaire. Exemple : `pq.offer(5); pq.poll()`. Basée sur un tas binaire, O(log n). Utile pour planification.",
        "keyWords": ["PriorityQueue", "ordre", "tas binaire", "O(log n)"]
      },
      {
        "question": "Qu'est-ce qu'une WeakHashMap et dans quel cas est-elle utilisée ?",
        "textResponse": "`WeakHashMap` : clés avec références faibles, supprimées par le GC si non référencées ailleurs. Utile pour caches temporaires, évitant fuites mémoire. Exemple : cache de métadonnées.",
        "keyWords": ["WeakHashMap", "référence faible", "cache", "garbage collector"]
      },
      {
        "question": "Expliquez la différence entre un Iterator et un ListIterator.",
        "textResponse": "`Iterator` : parcourt une collection (`List`, `Set`), unidirectionnel, avec `remove()`. `ListIterator` : spécifique à `List`, bidirectionnel, permet `add()`, `set()`. Utile pour modifier des listes en parcours.",
        "keyWords": ["Iterator", "ListIterator", "bidirectionnel", "remove()", "add()"]
      },
      {
        "question": "Quelle est la différence entre Collection, List et Set ?",
        "textResponse": "`Collection` : interface racine. `List` : ordonnée, doublons, accès par index (`ArrayList`). `Set` : pas de doublons, pas d'ordre sauf `TreeSet`. Utilisez `List` pour séquences, `Set` pour unicité.",
        "keyWords": ["Collection", "List", "Set", "doublons", "ordre"]
      },
      {
        "question": "Comment implémenter un tri personnalisé dans une List en utilisant Comparator ?",
        "textResponse": "Utilisez `list.sort(Comparator)` ou `Collections.sort(list, Comparator)`. Exemple : `list.sort((p1, p2) -> p1.getAge() - p2.getAge())` pour trier par âge. `Comparator.comparing()` simplifie depuis Java 8.",
        "keyWords": ["Comparator", "sort", "Collections", "Java 8", "comparing"]
      },
      {
        "question": "Qu'est-ce qu'un NavigableMap et comment s'utilise-t-il ?",
        "textResponse": "`NavigableMap` : map triée avec navigation (`ceilingEntry`, `floorKey`). Exemple : `TreeMap tm; tm.ceilingKey(5)` trouve la clé ≥ 5. Utile pour recherches d'intervalles ou données ordonnées.",
        "keyWords": ["NavigableMap", "TreeMap", "navigation", "ordre"]
      },
      {
        "question": "Comment rendre une collection synchronisée en Java ?",
        "textResponse": "Utilisez `Collections.synchronizedList(new ArrayList<>())` ou `synchronizedMap()`. Thread-safe, mais itérations nécessitent un verrou manuel : `synchronized(list) {}`. Préférez `ConcurrentHashMap` pour performances.",
        "keyWords": ["synchronizedList", "synchronizedMap", "thread-safe", "ConcurrentHashMap"]
      },
      {
        "question": "Comment fonctionne la méthode removeIf() dans les collections ?",
        "textResponse": "`removeIf(Predicate)` supprime les éléments satisfaisant un prédicat. Exemple : `list.removeIf(x -> x < 5)`. Java 8, simplifie la suppression conditionnelle. Thread-safe si collection l'est.",
        "keyWords": ["removeIf", "Predicate", "Java 8", "thread-safe"]
      },
      {
        "question": "Expliquez l'interface Spliterator.",
        "textResponse": "`Spliterator` (Java 8) parcourt et divise les données pour parallélisme. Méthodes : `tryAdvance` (séquentiel), `trySplit` (division). Utilisé par `parallelStream`. Plus flexible qu'`Iterator`.",
        "keyWords": ["Spliterator", "Java 8", "parallélisme", "tryAdvance", "trySplit"]
      },
      {
        "question": "Comment diagnostiquer une fuite mémoire en Java ? Quels outils recommandez-vous ?",
        "textResponse": "Analyse via VisualVM, JProfiler, ou Eclipse MAT pour heap dumps. Vérifiez collections non nettoyées, références statiques. Solution : libérer ressources, utiliser `WeakReference`. Exemple : vider un `HashMap` statique.",
        "keyWords": ["fuite mémoire", "VisualVM", "JProfiler", "Eclipse MAT", "WeakReference"]
      },
      {
        "question": "Que se passe-t-il lors d’un OutOfMemoryError ?",
        "textResponse": "`OutOfMemoryError` : plus de mémoire dans le heap. Causes : fuites mémoire, heap trop petit. Analyse avec Eclipse MAT. Solutions : augmenter `-Xmx`, corriger fuites, optimiser algorithmes.",
        "keyWords": ["OutOfMemoryError", "heap", "fuite mémoire", "Eclipse MAT", "-Xmx"]
      },
      {
        "question": "Quelle est la différence entre la heap et la stack dans la JVM ?",
        "textResponse": "**Heap** : stocke objets, partagé entre threads, géré par GC. **Stack** : variables locales, références, par thread. Exemple : `String s = new String('test')` met `s` dans stack, objet dans heap.",
        "keyWords": ["heap", "stack", "JVM", "garbage collector", "variables locales"]
      },
      {
        "question": "Qu'est-ce qu'un Optional en Java 8+ et pourquoi l’utiliser ?",
        "textResponse": "`Optional` encapsule une valeur potentiellement `null`. Exemple : `Optional.ofNullable(value)`. Évite `NullPointerException` avec `isPresent()`, `orElse()`. Rend le code clair et sécurisé pour les valeurs absentes.",
        "keyWords": ["Optional", "Java 8", "NullPointerException", "isPresent", "orElse"]
      },
      {
        "question": "Immuable vs Mutable",
        "textResponse": "**Immuable** : non modifiable après création (ex. `String`), thread-safe. **Mutable** : modifiable (ex. `StringBuilder`), performant mais prudence en multithreading. Utile pour clés ou manipulations fréquentes.",
        "keyWords": ["immuable", "mutable", "String", "StringBuilder", "thread-safe"]
      },
      {
        "question": "Comment éviter les effets de bord dans une méthode Java ?",
        "textResponse": "Rendre les méthodes pures, utiliser objets immuables, retourner copies défensives (`Collections.unmodifiableList`). Exemple : créer nouvelle `List` plutôt que modifier paramètre. Améliore prévisibilité et testabilité.",
        "keyWords": ["effets de bord", "méthode pure", "immuable", "copie défensive"]
      },
      {
        "question": "Quelle est la différence entre une interface fonctionnelle et une classe anonyme ?",
        "textResponse": "**Interface fonctionnelle** : une méthode abstraite, utilisable avec lambdas (ex. `Runnable r = () -> {}`). **Classe anonyme** : implémentation inline, verbeuse. Lambdas plus concises, adaptées à Java 8.",
        "keyWords": ["interface fonctionnelle", "classe anonyme", "lambda", "Java 8"]
      },
      {
        "question": "Quelle est votre approche pour écrire du code testable et maintenable ?",
        "textResponse": "Suivre SOLID, méthodes courtes, injection de dépendances (Spring). Éviter effets de bord, utiliser immuables. Tests avec JUnit, Mockito. Organiser en packages logiques, documenter les complexités.",
        "keyWords": ["testable", "maintenable", "SOLID", "JUnit", "Mockito"]
      },
      {
        "question": "Que signifie le principe SOLID et comment l’appliquez-vous au quotidien ?",
        "textResponse": "SOLID : **S**ingle Responsibility, **O**pen/Closed, **L**iskov Substitution, **I**nterface Segregation, **D**ependency Inversion. J'écris des classes focalisées, utilise interfaces pour extensibilité, et injecte dépendances via Spring pour modularité.",
        "keyWords": ["SOLID", "Single Responsibility", "Open/Closed", "Liskov", "Dependency Inversion"]
      },
      {
        "question": "Quelles sont les nouveautés clés de Java 11 que vous utilisez au quotidien ?",
        "textResponse": "Java 11 : API HTTP Client pour requêtes réseau, `var` pour inférence de type, méthodes `String` (`isBlank`, `lines`). Utilise `var` pour lisibilité, HTTP Client pour appels API modernes.",
        "keyWords": ["Java 11", "HTTP Client", "var", "String"]
      },
      {
        "question": "Différence entre Array et ArrayList ?",
        "textResponse": "**Array** : taille fixe, accès O(1), non redimensionnable. **ArrayList** : dynamique, méthodes comme `add()`, légèrement plus lent. Utilisez arrays pour tailles fixes, `ArrayList` pour flexibilité.",
        "keyWords": ["array", "ArrayList", "taille fixe", "dynamique", "O(1)"]
      },
      {
        "question": "Peut-on mettre Final devant une méthode ? Si c’est mis devant une classe qu’est-ce que cela fait ?",
        "textResponse": "Oui, `final` sur une méthode empêche sa redéfinition. Sur une classe, empêche l'héritage. Exemple : `final class MyClass`. Pas applicable aux méthodes abstraites ou interfaces.",
        "keyWords": ["final", "méthode", "classe", "héritage"]
      },
      {
        "question": "Différentes opérations dans un Stream ?",
        "textResponse": "**Intermédiaires** : `filter`, `map`, `sorted`. **Terminales** : `collect`, `forEach`, `reduce`. Exemple : `stream.filter(x -> x > 5).collect(Collectors.toList())`. Permet traitement fonctionnel.",
        "keyWords": ["Stream", "filter", "map", "collect", "terminal", "intermédiaire"]
      },
      {
        "question": "Quelle interface implémente l'opération Stream filter ?",
        "textResponse": "`filter` utilise `Predicate<T>`, avec méthode `test(T t)` retournant un booléen. Exemple : `x -> x > 5`. Simplifie le filtrage via lambdas dans les streams.",
        "keyWords": ["Stream", "filter", "Predicate", "lambda"]
      },
      {
        "question": "En java List: comment éliminer les doublons",
        "textResponse": "Convertir en `Set` : `new HashSet<>(list)`. Ou via stream : `list.stream().distinct().collect(Collectors.toList())`. `Set` est plus rapide pour grandes listes.",
        "keyWords": ["List", "Set", "distinct", "stream", "doublons"]
      },
      {
        "question": "Comment ordonner les elements",
        "textResponse": "Utiliser `Collections.sort(list)` pour tri naturel ou `list.sort(Comparator)` pour tri personnalisé. Exemple : `list.sort((a, b) -> a.compareTo(b))`. Ou stream : `list.stream().sorted()`.",
        "keyWords": ["sort", "Comparator", "Collections", "stream"]
      },
      {
        "question": "Expliquer Hashcode/Equals",
        "textResponse": "`hashCode()` : entier pour placer dans `HashMap`. `equals()` : compare contenu. Contrat : si `a.equals(b)`, alors `a.hashCode() == b.hashCode()`. Redéfinir ensemble pour collections.",
        "keyWords": ["hashCode()", "equals()", "HashMap", "contrat"]
      },
      {
        "question": "Default methode java 8",
        "textResponse": "Méthodes par défaut : implémentation dans interfaces (Java 8). Exemple : `default void doSomething() {}`. Permet d'ajouter du comportement sans casser les implémentations existantes.",
        "keyWords": ["méthode par défaut", "Java 8", "interface"]
      },
      {
        "question": "Quelle est la version actuelle de java",
        "textResponse": "En septembre 2025, Java 23 est la dernière version, Java 17 est LTS. Vérifiez compatibilité projet avant adoption. Java 17 est courant en production.",
        "keyWords": ["Java 23", "Java 17", "LTS", "compatibilité"]
      },
      {
        "question": "Cause d'un OutOfMemory , analyse et solution",
        "textResponse": "Causes : fuites mémoire, heap trop petit. Analyse : heap dumps avec Eclipse MAT. Solutions : augmenter `-Xmx`, corriger fuites (ex. vider collections), optimiser algorithmes.",
        "keyWords": ["OutOfMemoryError", "heap", "fuite mémoire", "Eclipse MAT", "-Xmx"]
      },
      {
        "question": "Citer différentes implem de GC",
        "textResponse": "**Serial GC** : monothread. **Parallel GC** : haut débit. **CMS** : faible latence. **G1** : équilibre débit/latence. Java 17 utilise G1 par défaut. ZGC pour cas avancés.",
        "keyWords": ["Serial GC", "Parallel GC", "CMS", "G1", "ZGC"]
      },
      {
        "question": "Injection via constructeur vs attribut",
        "textResponse": "**Constructeur** : injecte dépendances à l'initialisation, garantit immutabilité, clair pour tests. **Attribut** : via `@Autowired`, plus flexible mais peut compliquer tests. Préférez constructeur pour code robuste.",
        "keyWords": ["injection", "constructeur", "attribut", "@Autowired", "tests"]
      }
    ]
  },
   {
    "topic": "Spring Framework",
    "questions": [
      {
        "question": "Quelle est la différence entre @Component, @Service et @Repository ?",
        "textResponse": "`@Component` : annotation générique pour un bean Spring. `@Service` : indique une logique métier, spécialisation de `@Component`. `@Repository` : pour la couche de persistance, gère automatiquement les exceptions JDBC. Toutes créent des beans, mais `@Service` et `@Repository` ajoutent une sémantique claire.",
        "keyWords": ["@Component", "@Service", "@Repository", "bean", "persistance", "logique métier"]
      },
      {
        "question": "Comment fonctionne l'injection de dépendances dans Spring ?",
        "textResponse": "L'injection de dépendances (DI) permet à Spring de fournir automatiquement les dépendances via le conteneur IoC. Utilise `@Autowired` sur constructeur, setter ou champ. Préférer l'injection par constructeur pour testabilité et immutabilité. Exemple : `@Autowired MyService service`.",
        "keyWords": ["injection de dépendances", "@Autowired", "IoC", "constructeur", "testabilité"]
      },
      {
        "question": "Qu'est-ce que l'inversion de contrôle (IoC) dans Spring ?",
        "textResponse": "L'IoC délègue la gestion des objets au conteneur Spring, qui crée et configure les beans. Le code ne crée pas directement les dépendances, mais les reçoit via DI. Simplifie la gestion et améliore la modularité. Exemple : ApplicationContext gère les beans.",
        "keyWords": ["IoC", "conteneur", "bean", "DI", "ApplicationContext"]
      },
      {
        "question": "Comment gérer les transactions dans Spring ?",
        "textResponse": "Utiliser `@Transactional` sur une méthode ou classe pour gérer les transactions. Spring ouvre/ferme la transaction automatiquement via un gestionnaire comme `DataSourceTransactionManager`. Configurez la propagation et l'isolation si besoin. Exemple : `@Transactional public void saveData()`.",
        "keyWords": ["@Transactional", "transaction", "gestionnaire", "propagation", "isolation"]
      },
      {
        "question": "Quelle est la différence entre @Transactional et le gestionnaire de transaction par défaut ?",
        "textResponse": "`@Transactional` est une annotation déclarant une transaction, gérée par un gestionnaire comme `DataSourceTransactionManager` (par défaut pour JDBC/JPA). Le gestionnaire exécute les opérations (commit, rollback). `@Transactional` définit le comportement, le gestionnaire l'implémente.",
        "keyWords": ["@Transactional", "gestionnaire", "commit", "rollback", "JPA"]
      },
      {
        "question": "Qu'est-ce qu'un Bean dans Spring ?",
        "textResponse": "Un bean est un objet géré par le conteneur IoC de Spring. Créé via `@Component`, `@Bean` ou XML, il est instancié, configuré et injecté automatiquement. Exemple : `@Component class MyBean`. Supporte des scopes comme singleton ou prototype.",
        "keyWords": ["bean", "IoC", "@Component", "@Bean", "scope"]
      },
      {
        "question": "Comment fonctionne le contexte d'application Spring ?",
        "textResponse": "L'`ApplicationContext` est le conteneur IoC qui gère les beans. Il charge les configurations (Java, XML), instancie les beans, résout les dépendances via DI et gère leur cycle de vie. Exemple : `ClassPathXmlApplicationContext` pour charger un fichier XML.",
        "keyWords": ["ApplicationContext", "IoC", "bean", "DI", "cycle de vie"]
      },
      {
        "question": "Quelle est la différence entre BeanFactory et ApplicationContext ?",
        "textResponse": "`BeanFactory` : conteneur de base, crée des beans à la demande (lazy). `ApplicationContext` : étend `BeanFactory`, ajoute gestion des événements, i18n, et chargement proactif des beans. Préférer `ApplicationContext` pour applications complexes.",
        "keyWords": ["BeanFactory", "ApplicationContext", "lazy", "événements", "i18n"]
      },
      {
        "question": "Comment configurer Spring avec JavaConfig ?",
        "textResponse": "Utiliser `@Configuration` pour une classe Java définissant des beans avec `@Bean`. Exemple : `@Configuration class AppConfig { @Bean public MyService service() { return new MyService(); } }`. Remplace XML, plus type-safe et lisible.",
        "keyWords": ["@Configuration", "@Bean", "JavaConfig", "type-safe"]
      },
      {
        "question": "Qu'est-ce qu'une transaction propagée en Spring ?",
        "textResponse": "La propagation dans `@Transactional` définit le comportement d'une transaction. Exemples : `REQUIRED` (utilise ou crée une transaction), `NESTED` (sous-transaction), `NEVER` (pas de transaction). Configure via `@Transactional(propagation = Propagation.REQUIRED)`.",
        "keyWords": ["@Transactional", "propagation", "REQUIRED", "NESTED", "NEVER"]
      },
      {
        "question": "Comment fonctionne le @RestController en Spring Boot ?",
        "textResponse": "`@RestController` combine `@Controller` et `@ResponseBody`. Gère les requêtes HTTP et retourne directement les données (JSON, XML) sans vue. Exemple : `@RestController @GetMapping('/data') public String getData()`. Idéal pour APIs REST.",
        "keyWords": ["@RestController", "@ResponseBody", "REST", "JSON", "@GetMapping"]
      },
      {
        "question": "Comment utiliser le client HTTP en Java pour appeler une API externe ?",
        "textResponse": "Depuis Java 11, utiliser `HttpClient`. Exemple : `HttpClient client = HttpClient.newHttpClient(); HttpRequest request = HttpRequest.newBuilder().uri(URI.create('url')).build(); client.send(request, BodyHandlers.ofString())`. En Spring, `RestTemplate` ou `WebClient` sont courants.",
        "keyWords": ["HttpClient", "RestTemplate", "WebClient", "API externe", "Java 11"]
      },
      {
        "question": "Expliquez le fonctionnement de l’injection de dépendances dans Spring.",
        "textResponse": "Spring injecte automatiquement les dépendances via le conteneur IoC, avec `@Autowired` sur constructeur, setter ou champ. Préférer constructeur pour testabilité. Exemple : `@Autowired private MyService service`. Simplifie la gestion des dépendances.",
        "keyWords": ["DI", "@Autowired", "IoC", "constructeur", "testabilité"]
      },
      {
        "question": "Comment sécuriser une API REST avec Spring Boot et JWT ?",
        "textResponse": "Configurer Spring Security avec un filtre JWT. Générer un token JWT à l'authentification, valider via `JwtTokenProvider`. Ajouter `@EnableWebSecurity` et un filtre `JwtAuthenticationFilter`. Exemple : protéger les endpoints avec `@PreAuthorize`.",
        "keyWords": ["Spring Security", "JWT", "JwtAuthenticationFilter", "@PreAuthorize"]
      },
      {
        "question": "Comment gérez-vous la configuration multi-environnement dans Spring Boot (dev, test, prod) ?",
        "textResponse": "Utiliser des fichiers `application-{profile}.properties` (ex. `application-dev.properties`). Activer avec `spring.profiles.active=dev` dans `application.properties` ou via argument JVM. Permet des configs spécifiques par environnement.",
        "keyWords": ["profiles", "application.properties", "multi-environnement", "spring.profiles.active"]
      },
      {
        "question": "Comment organisez-vous les couches dans une application Spring bien structurée ?",
        "textResponse": "Structure en couches : **Controller** (gère requêtes HTTP), **Service** (logique métier), **Repository** (accès aux données). Exemple : `@RestController` appelle `@Service`, qui utilise `@Repository`. Favorise modularité et testabilité.",
        "keyWords": ["Controller", "Service", "Repository", "modularité", "testabilité"]
      },
      {
        "question": "Comment exposez-vous une API REST avec Spring Boot ?",
        "textResponse": "Créer une classe avec `@RestController`. Définir des endpoints avec `@GetMapping`, `@PostMapping`, etc. Exemple : `@RestController @RequestMapping('/api') class MyController { @GetMapping('/data') public String getData() { return 'data'; } }`.",
        "keyWords": ["@RestController", "@GetMapping", "API REST", "@RequestMapping"]
      },
      {
        "question": "Comment gérez-vous la validation des entrées utilisateur (@Valid, @Validated) dans une API REST ?",
        "textResponse": "Utiliser `@Valid` sur un DTO dans un `@RestController` pour valider les entrées avec annotations comme `@NotNull`, `@Size`. Activer avec `@Validated` au niveau classe pour validation avancée. Exemple : `@Valid @RequestBody MyDto dto`.",
        "keyWords": ["@Valid", "@Validated", "@NotNull", "DTO", "validation"]
      },
      {
        "question": "Comment mettez-vous en place l’authentification par JWT dans une API Spring Boot ?",
        "textResponse": "Configurer Spring Security avec un filtre JWT. Créer un `JwtTokenProvider` pour générer/vérifier les tokens. Ajouter `JwtAuthenticationFilter` pour valider les requêtes. Protéger les endpoints avec `@PreAuthorize` ou rôles.",
        "keyWords": ["JWT", "Spring Security", "JwtAuthenticationFilter", "@PreAuthorize"]
      },
      {
        "question": "Quelles sont les bonnes pratiques pour sécuriser une API exposée publiquement ?",
        "textResponse": "Utiliser HTTPS, JWT ou OAuth2 pour authentification. Valider/sanitizer les entrées. Limiter les accès avec `@PreAuthorize`. Activer CORS sélectivement. Logger les tentatives suspectes. Éviter d'exposer des données sensibles dans les réponses.",
        "keyWords": ["HTTPS", "JWT", "@PreAuthorize", "CORS", "validation"]
      },
      {
        "question": "Comment écrivez-vous une requête personnalisée avec @Query dans un repository Spring Data ?",
        "textResponse": "Utiliser `@Query` dans une interface `@Repository`. Exemple : `@Query('SELECT u FROM User u WHERE u.name = ?1') List<User> findByName(String name);`. Supporte JPQL ou SQL natif avec `nativeQuery = true`.",
        "keyWords": ["@Query", "@Repository", "JPQL", "SQL natif"]
      },
      {
        "question": "Quelles stratégies utilisez-vous pour optimiser les performances de requêtes en JPA ?",
        "textResponse": "Utiliser des requêtes spécifiques avec `@Query`. Activer le fetch lazy pour associations. Indexer les colonnes fréquemment filtrées. Utiliser pagination (`Pageable`). Cacher les résultats avec `@Cacheable` si pertinent.",
        "keyWords": ["JPA", "@Query", "fetch lazy", "pagination", "@Cacheable"]
      },
      {
        "question": "Comment gérez-vous les transactions en Spring (@Transactional) ? Et les cas de rollback partiel ?",
        "textResponse": "`@Transactional` gère les transactions automatiquement. Configurez `rollbackOn` pour exceptions spécifiques. Pour rollback partiel, utiliser `NESTED` ou méthodes séparées avec `@Transactional`. Exemple : `@Transactional(rollbackOn = MyException.class)`.",
        "keyWords": ["@Transactional", "rollback", "NESTED", "rollbackOn"]
      },
      {
        "question": "Comment structurez-vous un projet Spring Boot en microservices ?",
        "textResponse": "Chaque microservice a un module avec `@RestController`, `@Service`, `@Repository`. Utiliser Eureka pour découverte de services, Spring Cloud pour communication. Séparer les responsabilités par domaine. Docker pour déploiement.",
        "keyWords": ["microservices", "Eureka", "Spring Cloud", "Docker"]
      },
      {
        "question": "Comment gérez-vous la résilience dans un microservice ?",
        "textResponse": "Utiliser Resilience4j ou Spring Cloud Circuit Breaker pour gérer les pannes. Implémenter des patterns comme circuit breaker, retry, ou fallback. Exemple : `@CircuitBreaker(name = 'myService', fallbackMethod = 'fallback')`. Surveiller avec Actuator.",
        "keyWords": ["Resilience4j", "circuit breaker", "retry", "fallback", "Actuator"]
      },
      {
        "question": "Comment gérez-vous les erreurs dans un microservice Spring Boot exposant des API REST ?",
        "textResponse": "Utiliser `@ControllerAdvice` avec `@ExceptionHandler` pour capturer les exceptions. Retourner des réponses standardisées (ex. JSON avec code d'erreur). Exemple : `@ExceptionHandler(MyException.class) ResponseEntity<ErrorResponse> handleError()`. Logger les erreurs.",
        "keyWords": ["@ControllerAdvice", "@ExceptionHandler", "erreur", "ResponseEntity"]
      },
      {
        "question": "Quelle approche utilisez-vous pour sécuriser vos APIs REST (auth/authz) ?",
        "textResponse": "Configurer Spring Security avec JWT ou OAuth2 pour authentification. Utiliser `@PreAuthorize` pour autorisation basée sur rôles. Valider les entrées avec `@Valid`. Activer HTTPS et limiter les accès via CORS.",
        "keyWords": ["Spring Security", "JWT", "@PreAuthorize", "HTTPS", "CORS"]
      },
      {
        "question": "C’est quoi l’injection des dépendances ?",
        "textResponse": "L'injection de dépendances fournit automatiquement les objets nécessaires via le conteneur IoC. Utilise `@Autowired` (constructeur préféré). Exemple : `@Autowired MyService service`. Réduit le couplage et facilite les tests.",
        "keyWords": ["DI", "@Autowired", "IoC", "couplage", "testabilité"]
      },
      {
        "question": "C’est quoi la meilleure pratique pour gérer les transactions avec la base de données dans Spring ?",
        "textResponse": "Utiliser `@Transactional` au niveau service, pas repository. Spécifier `propagation` et `isolation` si besoin. Préférer rollback explicite avec `rollbackOn`. Tester les scénarios de rollback pour cohérence.",
        "keyWords": ["@Transactional", "service", "rollbackOn", "propagation", "isolation"]
      },
      {
        "question": "Est-ce que tu peux me parler des projets Spring que tu as déjà utilisé ? Exemple: SpringData, ...",
        "textResponse": "J’ai utilisé **Spring Data** pour JPA (`@Repository`, `@Query`), **Spring Boot** pour APIs REST, **Spring Security** pour JWT/OAuth2, et **Spring Cloud** pour microservices (Eureka, Config). Simplifient persistance, sécurité et scalabilité.",
        "keyWords": ["Spring Data", "Spring Boot", "Spring Security", "Spring Cloud", "JPA"]
      },
      {
        "question": "Pour toi c’est quoi la différence Spring et Spring Boot ?",
        "textResponse": "**Spring** : framework pour DI, IoC, et modularité, nécessite configuration manuelle. **Spring Boot** : extension avec configuration automatique, starters, et serveur embarqué. Spring Boot simplifie le développement rapide d’applications.",
        "keyWords": ["Spring", "Spring Boot", "DI", "configuration automatique", "starters"]
      },
      {
        "question": "Quelle version de Spring Boot tu as déjà utilisé ?",
        "textResponse": "J’ai utilisé Spring Boot 2.x et 3.x. La 3.x supporte Java 17+ et améliore les performances, la configuration, et l’intégration avec les nouvelles fonctionnalités comme les records. Vérifier compatibilité avant migration.",
        "keyWords": ["Spring Boot", "2.x", "3.x", "Java 17", "compatibilité"]
      },
      {
        "question": "Est-ce que tu pourrais me citer les annotations que tu as le plus utilisées sur Spring Boot ? Peux-tu définir leur utilité ?",
        "textResponse": "`@RestController` : définit un contrôleur REST. `@Autowired` : injecte des dépendances. `@Service` : logique métier. `@Repository` : accès données. `@GetMapping`/`@PostMapping` : mappe requêtes HTTP. `@Transactional` : gère transactions. Simplifient développement et lisibilité.",
        "keyWords": ["@RestController", "@Autowired", "@Service", "@Repository", "@GetMapping", "@Transactional"]
      },
      {
        "question": "Comment crée-t-on un projet de Spring Boot ?",
        "textResponse": "Utiliser Spring Initializr (web ou IDE). Sélectionner dépendances (ex. Web, JPA), Java 17+, et Maven/Gradle. Générer le projet, importer dans IDE. Configurer `application.properties` et coder dans `@SpringBootApplication`.",
        "keyWords": ["Spring Initializr", "@SpringBootApplication", "dépendances", "Maven"]
      },
      {
        "question": "Pourquoi utilise-t-on Spring Boot ?",
        "textResponse": "Spring Boot simplifie Spring avec configuration automatique, starters pour dépendances, serveur embarqué (Tomcat), et support natif pour REST, JPA, Security. Accélère le développement et réduit le code boilerplate.",
        "keyWords": ["Spring Boot", "configuration automatique", "starters", "serveur embarqué"]
      },
      {
        "question": "Comment gère-t-on les annotations dans Spring ?",
        "textResponse": "Les annotations comme `@Component`, `@Autowired`, `@GetMapping` sont scannées par Spring au démarrage pour configurer les beans, DI, et mappings. Définir dans les classes ou méthodes, Spring les traite via reflection dans l’`ApplicationContext`.",
        "keyWords": ["annotations", "@Component", "@Autowired", "ApplicationContext"]
      },
      {
        "question": "Annotations sur la couche repository ?",
        "textResponse": "`@Repository` : marque un bean pour persistance, gère exceptions. `@Query` : requêtes personnalisées JPQL/SQL. `@Transactional` : gère transactions. Exemple : `@Repository interface UserRepo extends JpaRepository<User, Long>`.",
        "keyWords": ["@Repository", "@Query", "@Transactional", "JPA"]
      },
      {
        "question": "Différence entre 2 interfaces qui tendent vers JPA Repository",
        "textResponse": "`JpaRepository` : étend `CrudRepository`, ajoute méthodes JPA comme `findAll`, `flush`. `CrudRepository` : opérations CRUD de base (`save`, `findById`). Choisir `JpaRepository` pour fonctionnalités JPA avancées, sinon `CrudRepository`.",
        "keyWords": ["JpaRepository", "CrudRepository", "CRUD", "JPA"]
      },
      {
        "question": "Quelles annotations sur la couche repository ?",
        "textResponse": "`@Repository` : déclare un bean de persistance. `@Query` : requêtes personnalisées. `@Transactional` : transactions. `@Modifying` : pour requêtes de mise à jour. Exemple : `@Query('UPDATE User u SET u.name = ?1')`.",
        "keyWords": ["@Repository", "@Query", "@Transactional", "@Modifying"]
      },
      {
        "question": "@Controller vs @RestController",
        "textResponse": "`@Controller` : pour MVC, retourne des vues (ex. Thymeleaf). `@RestController` : combine `@Controller` et `@ResponseBody`, retourne JSON/XML pour APIs REST. Utilisez `@RestController` pour APIs, `@Controller` pour web classique.",
        "keyWords": ["@Controller", "@RestController", "@ResponseBody", "REST", "MVC"]
      },
      {
        "question": "Possible REST avec @Controller ?",
        "textResponse": "Oui, avec `@Controller` et `@ResponseBody` sur méthodes ou classe pour retourner JSON/XML. `@RestController` est plus simple car il inclut `@ResponseBody`. Exemple : `@Controller @ResponseBody @GetMapping('/data')`.",
        "keyWords": ["@Controller", "@ResponseBody", "@RestController", "REST"]
      },
      {
        "question": "Les avantages Spring Boot",
        "textResponse": "Configuration automatique, starters pour dépendances, serveur embarqué, intégration facile avec JPA, Security, REST. Réduit boilerplate, accélère développement, simplifie déploiement (ex. JAR exécutable).",
        "keyWords": ["Spring Boot", "configuration automatique", "starters", "serveur embarqué"]
      },
      {
        "question": "C quoi Starters Spring Boot",
        "textResponse": "Les starters sont des dépendances prédéfinies (ex. `spring-boot-starter-web`, `spring-boot-starter-data-jpa`). Simplifient l’ajout de modules, incluent dépendances nécessaires automatiquement. Exemple : `spring-boot-starter-web` pour REST.",
        "keyWords": ["starters", "dépendances", "spring-boot-starter-web", "JPA"]
      },
      {
        "question": "C quoi Spring WebFlux",
        "textResponse": "Spring WebFlux est un framework réactif pour applications non bloquantes. Utilise Reactor (`Mono`, `Flux`) pour traiter flux asynchrones. Idéal pour haute concurrence, comme streaming ou APIs réactives. Alternative à Spring MVC.",
        "keyWords": ["WebFlux", "réactif", "Mono", "Flux", "asynchrone"]
      },
      {
        "question": "Comment on déclare un endpoint avec Spring ?",
        "textResponse": "Utiliser `@RestController` et `@GetMapping`, `@PostMapping`, etc. Exemple : `@RestController @RequestMapping('/api') class MyController { @GetMapping('/data') String getData() { return 'data'; } }`. Définit un endpoint REST.",
        "keyWords": ["@RestController", "@GetMapping", "endpoint", "REST"]
      },
      {
        "question": "Le contrôleur appelle quelle couche ?",
        "textResponse": "Le contrôleur (`@RestController`) appelle la couche **Service** pour la logique métier. Le service appelle la couche **Repository** pour les données. Exemple : `@RestController` -> `@Service` -> `@Repository`.",
        "keyWords": ["@RestController", "@Service", "@Repository", "couche"]
      },
      {
        "question": "Comment optimiser une requête qui prend du temps ?",
        "textResponse": "Utiliser `@Query` pour requêtes spécifiques. Activer fetch lazy. Indexer colonnes en base. Utiliser pagination (`Pageable`). Cacher résultats avec `@Cacheable`. Profiler avec outils comme JProfiler pour identifier goulots.",
        "keyWords": ["@Query", "fetch lazy", "pagination", "@Cacheable", "JProfiler"]
      },
      {
        "question": "Si tu devais faire des appel GET sur d’autres services comment tu utiliserais REST ?",
        "textResponse": "Utiliser `RestTemplate` pour appels synchrones : `restTemplate.getForObject(url, String.class)`. Ou `WebClient` (WebFlux) pour appels asynchrones : `webClient.get().uri(url).retrieve().bodyToMono(String.class)`. Préférer `WebClient` pour réactivité.",
        "keyWords": ["RestTemplate", "WebClient", "REST", "asynchrone"]
      },
      {
        "question": "Est-ce que tu as déjà de l’asynchrone ?",
        "textResponse": "Oui, avec `@Async` dans Spring pour méthodes asynchrones, nécessitant `@EnableAsync`. Utiliser `CompletableFuture` ou `WebClient` pour appels non bloquants. Exemple : `@Async CompletableFuture<String> process()`. Améliore performance.",
        "keyWords": ["@Async", "CompletableFuture", "WebClient", "asynchrone"]
      },
      {
        "question": "Est-ce que les classes Flux et Mono te parlent ?",
        "textResponse": "`Mono` : flux réactif avec 0 ou 1 élément. `Flux` : flux avec plusieurs éléments. Utilisés dans Spring WebFlux pour programmation réactive. Exemple : `Mono<String> mono = webClient.get().retrieve().bodyToMono(String.class)`.",
        "keyWords": ["Mono", "Flux", "WebFlux", "réactif"]
      }
    ]
  },{
  "topic": "Concurrence et Multithreading",
  "questions": [
    {
      "question": "Quelle est la différence entre wait() et sleep() ?",
      "textResponse": "`wait()` : libère le verrou et met le thread en attente jusqu'à `notify()`. Utilisé avec `synchronized`. `sleep()` : suspend le thread sans libérer le verrou, pour un temps défini. Exemple : `wait()` pour coordination, `sleep()` pour pause simple.",
      "keyWords": ["wait()", "sleep()", "synchronized", "notify()", "thread"]
    },
    {
      "question": "Comment fonctionne l'interface ExecutorService ?",
      "textResponse": "`ExecutorService` gère un pool de threads pour exécuter des tâches (`Runnable`, `Callable`). Méthodes : `submit()`, `shutdown()`. Exemple : `ExecutorService es = Executors.newFixedThreadPool(4)`. Simplifie la gestion de threads concurrents.",
      "keyWords": ["ExecutorService", "thread pool", "submit()", "Runnable", "Callable"]
    },
    {
      "question": "Qu'est-ce que la classe CountDownLatch ?",
      "textResponse": "`CountDownLatch` synchronise les threads : un thread attend que d'autres terminent via `countDown()`. Exemple : `CountDownLatch latch = new CountDownLatch(3); latch.await()`. Utile pour coordonner des tâches parallèles.",
      "keyWords": ["CountDownLatch", "synchronisation", "countDown()", "await()"]
    },
    {
      "question": "Comment fonctionne la classe CyclicBarrier ?",
      "textResponse": "`CyclicBarrier` permet à plusieurs threads d'attendre un point commun avant de continuer. Réutilisable, contrairement à `CountDownLatch`. Exemple : `CyclicBarrier barrier = new CyclicBarrier(3);`. Utile pour étapes synchronisées.",
      "keyWords": ["CyclicBarrier", "synchronisation", "réutilisable"]
    },
    {
      "question": "Qu'est-ce qu'un Future en Java ?",
      "textResponse": "`Future` représente le résultat d'une tâche asynchrone via `ExecutorService`. Méthodes : `get()` (bloquant), `isDone()`. Exemple : `Future<Integer> future = es.submit(callable)`. Utile pour récupérer des résultats asynchrones.",
      "keyWords": ["Future", "asynchrone", "ExecutorService", "get()"]
    },
    {
      "question": "Quelle est la différence entre ReentrantLock et synchronized ?",
      "textResponse": "`synchronized` : verrou implicite, simple, mais moins flexible. `ReentrantLock` : verrou explicite, offre `tryLock()`, interruptions, et conditions. Exemple : `ReentrantLock lock = new ReentrantLock(); lock.lock()`. Préférer pour cas complexes.",
      "keyWords": ["ReentrantLock", "synchronized", "verrou", "tryLock()"]
    },
    {
      "question": "Qu'est-ce qu'un Semaphore ?",
      "textResponse": "`Semaphore` contrôle l'accès à une ressource partagée avec un nombre limité de permis. Exemple : `Semaphore sem = new Semaphore(3); sem.acquire()`. Utile pour limiter la concurrence, comme connexions DB.",
      "keyWords": ["Semaphore", "permis", "acquire()", "concurrence"]
    },
    {
      "question": "Comment fonctionne un BlockingQueue ?",
      "textResponse": "`BlockingQueue` est une file thread-safe avec blocage sur `put()` (si pleine) et `take()` (si vide). Exemple : `BlockingQueue q = new ArrayBlockingQueue(10)`. Utile pour producteurs-consommateurs.",
      "keyWords": ["BlockingQueue", "thread-safe", "put()", "take()"]
    },
    {
      "question": "Expliquez l'atomicité en programmation concurrente",
      "textResponse": "L'atomicité garantit qu'une opération est indivisible, sans interférences. Exemple : `AtomicInteger` avec `incrementAndGet()`. Évite conditions de course sans verrou explicite. Utile pour compteurs partagés.",
      "keyWords": ["atomicité", "AtomicInteger", "condition de course"]
    },
    {
      "question": "Qu'est-ce que le ThreadLocal en Java ?",
      "textResponse": "`ThreadLocal` stocke des données spécifiques à un thread, non partagées. Exemple : `ThreadLocal<Integer> tl = ThreadLocal.withInitial(() -> 0)`. Utile pour contexte utilisateur ou connexions DB par thread.",
      "keyWords": ["ThreadLocal", "thread-specific", "contexte"]
    },
    {
      "question": "Expliquez le fonctionnement d’un ThreadPoolExecutor. Pourquoi et comment le configurer manuellement ?",
      "textResponse": "`ThreadPoolExecutor` gère un pool de threads avec taille minimale/maximale, file d'attente. Configurer : `corePoolSize` (threads actifs), `maxPoolSize` (max threads), `workQueue` (ex. `LinkedBlockingQueue`). Exemple : `new ThreadPoolExecutor(2, 4, 60, SECONDS, new LinkedBlockingQueue())`. Configurer pour optimiser ressources et éviter saturation.",
      "keyWords": ["ThreadPoolExecutor", "corePoolSize", "maxPoolSize", "workQueue"]
    },
    {
      "question": "Comment fonctionne CompletableFuture et dans quels cas l’utiliser ?",
      "textResponse": "`CompletableFuture` gère des tâches asynchrones avec callbacks (`thenApply`, `thenAccept`). Exemple : `CompletableFuture.supplyAsync(() -> compute()).thenApply(result -> process(result))`. Utile pour pipelines asynchrones, appels API, tâches parallèles.",
      "keyWords": ["CompletableFuture", "asynchrone", "thenApply", "pipeline"]
    }
  ]
},
  {
    "topic": "Java 8+ Features",
    "questions": [
      {
        "question": "Expliquez les expressions lambda et les références de méthode.",
        "textResponse": "Lambdas : syntaxe concise pour interfaces fonctionnelles, ex. `x -> x * 2`. Références de méthode : encore plus court, ex. `String::toUpperCase`. Utilisées avec streams, `forEach`. Simplifient code fonctionnel.",
        "keyWords": ["lambda", "référence de méthode", "interface fonctionnelle", "Stream"]
      },
      {
        "question": "Qu'est-ce que l'API Stream et comment l'utilise-t-on ?",
        "textResponse": "`Stream` traite les collections fonctionnellement. Opérations : `filter`, `map`, `collect`. Exemple : `list.stream().filter(x -> x > 5).collect(Collectors.toList())`. Supporte parallélisme via `parallelStream`.",
        "keyWords": ["Stream", "filter", "map", "collect", "parallelStream"]
      },
      {
        "question": "Comment fonctionne l'interface Optional ?",
        "textResponse": "`Optional` encapsule une valeur potentiellement `null`. Méthodes : `isPresent()`, `orElse()`. Exemple : `Optional.ofNullable(value).orElse('default')`. Évite `NullPointerException`, rend code clair.",
        "keyWords": ["Optional", "null", "isPresent()", "orElse()"]
      },
      {
        "question": "Quelle est la différence entre map() et flatMap() dans les Streams ?",
        "textResponse": "`map()` transforme chaque élément en un autre (1:1). `flatMap()` aplatit les collections imbriquées (1:N). Exemple : `list.stream().flatMap(l -> l.stream())` pour liste de listes. Utiliser `flatMap` pour structures complexes.",
        "keyWords": ["map()", "flatMap()", "Stream", "aplatir"]
      },
      {
        "question": "Comment utiliser la méthode collect() dans les Streams ?",
        "textResponse": "`collect()` termine un stream, agrège les résultats. Exemple : `list.stream().filter(x -> x > 5).collect(Collectors.toList())`. Supporte `toSet()`, `joining()`, `groupingBy()`. Utile pour résultats structurés.",
        "keyWords": ["collect()", "Stream", "Collectors", "toList()", "groupingBy()"]
      },
      {
        "question": "Qu'est-ce qu'une méthode par défaut dans une interface ?",
        "textResponse": "Méthode par défaut (Java 8) : implémentation dans une interface. Exemple : `default void doSomething() {}`. Permet d'ajouter du comportement sans casser les implémentations existantes.",
        "keyWords": ["méthode par défaut", "Java 8", "interface"]
      },
      {
        "question": "Comment fonctionne l'interface Functional ?",
        "textResponse": "Interface fonctionnelle : une méthode abstraite (SAM). Exemple : `Function<T, R>`, `Predicate<T>`. Utilisée avec lambdas ou références de méthode. Exemple : `Function<String, Integer> f = String::length`. Utile pour streams.",
        "keyWords": ["interface fonctionnelle", "SAM", "lambda", "Function"]
      },
      {
        "question": "Qu'est-ce que l'API CompletableFuture ?",
        "textResponse": "`CompletableFuture` gère des tâches asynchrones avec callbacks (`thenApply`, `thenCompose`). Exemple : `CompletableFuture.supplyAsync(() -> compute()).thenApply(r -> r * 2)`. Utile pour appels API, tâches parallèles.",
        "keyWords": ["CompletableFuture", "asynchrone", "thenApply", "thenCompose"]
      },
      {
        "question": "Expliquez les parallelStream() en Java.",
        "textResponse": "`parallelStream()` exécute les opérations de stream en parallèle via un pool de threads (`ForkJoinPool`). Exemple : `list.parallelStream().filter(x -> x > 5)`. Utile pour grandes données, mais attention aux effets de bord.",
        "keyWords": ["parallelStream", "ForkJoinPool", "parallèle", "effets de bord"]
      },
      {
        "question": "Comment fonctionne l'API Time introduite avec Java 8 ?",
        "textResponse": "`java.time` gère dates et heures. Classes : `LocalDate`, `LocalTime`, `LocalDateTime`. Exemple : `LocalDate.now().plusDays(5)`. Thread-safe, formatage via `DateTimeFormatter`. Remplace `Date` et `Calendar`.",
        "keyWords": ["java.time", "LocalDate", "DateTimeFormatter", "thread-safe"]
      },
      {
        "question": "Différence entre Java 8 et 11 ?",
        "textResponse": "Java 8 : lambdas, streams, `Optional`. Java 11 (LTS) : `var`, HTTP Client, nouvelles méthodes `String` (`isBlank`), GC Epsilon. Java 11 supporte mieux les conteneurs et supprime Java EE/Applets.",
        "keyWords": ["Java 8", "Java 11", "lambdas", "var", "HTTP Client"]
      }
    ]
  },
  {
    "topic": "Hibernate / JPA",
    "questions": [
      {
        "question": "Quelle est la différence entre get() et load() dans Hibernate ?",
        "textResponse": "`get()` : charge immédiatement l'entité, retourne `null` si absente. `load()` : charge paresseusement, retourne un proxy, peut lever `LazyInitializationException`. Exemple : `session.get(User.class, id)`. Utiliser `get()` pour accès direct.",
        "keyWords": ["get()", "load()", "proxy", "LazyInitializationException"]
      },
      {
        "question": "Comment configurer le mapping objet-relationnel (ORM) avec JPA ?",
        "textResponse": "Utiliser annotations JPA : `@Entity`, `@Table`, `@Id`, `@Column`. Exemple : `@Entity class User { @Id Long id; }`. Configurer `persistence.xml` ou `application.properties` pour datasource. Spring Data simplifie avec `@Repository`.",
        "keyWords": ["JPA", "@Entity", "@Id", "persistence.xml", "Spring Data"]
      },
      {
        "question": "Qu'est-ce qu'une session Hibernate ?",
        "textResponse": "Une session (`Session`) est une interface Hibernate pour interagir avec la DB (CRUD, transactions). Exemple : `session.save(user)`. Gérée par `SessionFactory`, liée à une connexion DB. Thread-local.",
        "keyWords": ["Session", "Hibernate", "SessionFactory", "CRUD"]
      },
      {
        "question": "Qu'est-ce qu'une entité JPA ?",
        "textResponse": "Une entité JPA (`@Entity`) représente une table DB. Doit avoir un `@Id` et un constructeur sans argument. Exemple : `@Entity class User { @Id Long id; String name; }`. Gérée par l’`EntityManager`.",
        "keyWords": ["@Entity", "@Id", "EntityManager", "table"]
      },
      {
        "question": "Comment fonctionne le @OneToMany et @ManyToOne ?",
        "textResponse": "`@OneToMany` : un objet lié à plusieurs (ex. un utilisateur, plusieurs commandes). `@ManyToOne` : plusieurs objets liés à un (ex. commande liée à un utilisateur). Exemple : `@OneToMany(mappedBy = 'user') List<Orders> orders`.",
        "keyWords": ["@OneToMany", "@ManyToOne", "relation", "mappedBy"]
      },
      {
        "question": "Expliquez la différence entre FetchType.EAGER et FetchType.LAZY.",
        "textResponse": "`EAGER` : charge immédiatement les relations. `LAZY` : charge à la demande, évite surcharge. Exemple : `@ManyToOne(fetch = FetchType.LAZY)`. Préférer `LAZY` pour performance, sauf si accès fréquent.",
        "keyWords": ["FetchType", "EAGER", "LAZY", "performance"]
      },
      {
        "question": "Quelle est la différence entre une relation unidirectionnelle et bidirectionnelle en JPA ?",
        "textResponse": "Unidirectionnelle : une entité référence une autre, pas l’inverse. Bidirectionnelle : les deux entités se référencent (ex. `@OneToMany` avec `mappedBy`). Bidirectionnelle simplifie navigation, mais complexe à gérer.",
        "keyWords": ["unidirectionnelle", "bidirectionnelle", "@OneToMany", "mappedBy"]
      },
      {
        "question": "Qu'est-ce que le cache de second niveau dans Hibernate ?",
        "textResponse": "Cache de second niveau (L2) stocke les entités au niveau `SessionFactory`, partagé entre sessions. Réduit les accès DB. Exemple : activer avec EHCache ou Infinispan. Configurer avec `hibernate.cache.use_second_level_cache`.",
        "keyWords": ["cache L2", "SessionFactory", "EHCache", "Infinispan"]
      },
      {
        "question": "Comment gérer les transactions dans Hibernate ?",
        "textResponse": "Utiliser `Session.beginTransaction()` pour ouvrir, `commit()` ou `rollback()`. Avec Spring, `@Transactional` automatise. Exemple : `@Transactional public void saveUser(User u)`. Configurer isolation/propagation si besoin.",
        "keyWords": ["transaction", "@Transactional", "commit", "rollback"]
      },
      {
        "question": "Comment utiliser les critères Hibernate pour filtrer les données ?",
        "textResponse": "Utiliser `CriteriaBuilder` et `CriteriaQuery`. Exemple : `CriteriaBuilder cb = session.getCriteriaBuilder(); CriteriaQuery<User> query = cb.createQuery(User.class); query.where(cb.equal(root.get('name'), 'John'))`. Flexible pour requêtes dynamiques.",
        "keyWords": ["CriteriaBuilder", "CriteriaQuery", "filtrer", "dynamique"]
      },
      {
        "question": "C’est quoi la différence entre JPA et Hibernate ?",
        "textResponse": "JPA : spécification standard pour ORM (Java EE). Hibernate : implémentation de JPA avec fonctionnalités supplémentaires (ex. cache L2, HQL). JPA est portable, Hibernate plus riche mais lié à son implémentation.",
        "keyWords": ["JPA", "Hibernate", "ORM", "cache L2", "HQL"]
      },
      {
        "question": "Différences frameworks MyBatis/JOOQ/Hibernate",
        "textResponse": "Hibernate : ORM complet, mapping automatique, cache L2. MyBatis : mapping SQL manuel, plus de contrôle, léger. JOOQ : requêtes type-safe, généré à partir du schéma DB. Hibernate pour simplicité, MyBatis/JOOQ pour requêtes complexes.",
        "keyWords": ["Hibernate", "MyBatis", "JOOQ", "ORM", "type-safe"]
      },
      {
        "question": "Est-ce que tu connais les instance repository ?",
        "textResponse": "Oui, dans Spring Data, les repositories (`@Repository`) sont des interfaces comme `JpaRepository` pour CRUD automatique. Exemple : `interface UserRepo extends JpaRepository<User, Long>`. Simplifient l’accès DB avec méthodes dérivées ou `@Query`.",
        "keyWords": ["@Repository", "JpaRepository", "CRUD", "@Query"]
      }
    ]
  },
  {
    "topic": "Design Patterns",
    "questions": [
      {
        "question": "Expliquez le pattern Singleton en Java",
        "textResponse": "Singleton : une seule instance d’une classe. Implémentation : constructeur `private`, instance `static`, méthode `getInstance()`. Exemple : `public static Singleton getInstance() { if (instance == null) instance = new Singleton(); return instance; }`. Thread-safe avec double-checked locking.",
        "keyWords": ["Singleton", "instance unique", "thread-safe", "getInstance()"]
      },
      {
        "question": "Comment implémenter le pattern Factory ?",
        "textResponse": "Factory crée des objets sans exposer la logique d’instanciation. Exemple : `interface Shape { draw(); } class ShapeFactory { Shape getShape(String type) { if (type.equals('circle')) return new Circle(); return new Square(); } }`. Centralise création.",
        "keyWords": ["Factory", "instanciation", "interface", "centralisation"]
      },
      {
        "question": "Qu'est-ce que le pattern Observer et comment s'utilise-t-il ?",
        "textResponse": "Observer : un sujet notifie ses observateurs de changements. Exemple : `java.util.Observable` et `Observer`. Utilisé pour événements, comme UI ou notifications. Spring Event le remplace souvent. Exemple : publier un événement avec `@EventListener`.",
        "keyWords": ["Observer", "notification", "événement", "@EventListener"]
      },
      {
        "question": "Expliquez le pattern Adapter.",
        "textResponse": "Adapter : convertit l’interface d’une classe pour une autre. Exemple : `class OldSystem { void oldMethod(); } class Adapter implements NewSystem { OldSystem old; void newMethod() { old.oldMethod(); } }`. Utile pour compatibilité.",
        "keyWords": ["Adapter", "interface", "compatibilité"]
      },
      {
        "question": "Quelle est la différence entre le pattern Proxy et le pattern Decorator ?",
        "textResponse": "Proxy : contrôle l’accès à un objet (sécurité, lazy). Decorator : ajoute des comportements dynamiquement. Exemple : Proxy pour authentification, Decorator pour ajouter logging. Proxy gère l’objet, Decorator l’enrichit.",
        "keyWords": ["Proxy", "Decorator", "contrôle accès", "comportement"]
      },
      {
        "question": "Qu'est-ce que le pattern Strategy ?",
        "textResponse": "Strategy : définit une famille d’algorithmes interchangeables. Exemple : `interface PaymentStrategy { void pay(); } class CreditCard implements PaymentStrategy`. Permet de changer l’algorithme à l’exécution. Utile pour comportements dynamiques.",
        "keyWords": ["Strategy", "algorithme", "interchangeable"]
      },
      {
        "question": "Comment fonctionne le pattern Builder en Java ?",
        "textResponse": "Builder : construit des objets complexes étape par étape. Exemple : `class Car { private Car(Builder b) {} static class Builder { Car build() { return new Car(this); } } }`. Simplifie création d’objets immutables.",
        "keyWords": ["Builder", "immuable", "construction", "étape"]
      },
      {
        "question": "Qu'est-ce que le pattern Dependency Injection ?",
        "textResponse": "Dependency Injection : fournit les dépendances externement (ex. via constructeur). Spring utilise DI via `@Autowired`. Exemple : `class Service { private Repo repo; Service(Repo repo) { this.repo = repo; } }`. Réduit couplage, facilite tests.",
        "keyWords": ["Dependency Injection", "@Autowired", "couplage", "tests"]
      },
      {
        "question": "Expliquez le pattern Template Method.",
        "textResponse": "Template Method : définit un algorithme dans une méthode abstraite, laissant les sous-classes implémenter les étapes. Exemple : `abstract class Task { void execute() { step1(); step2(); } abstract void step1(); }`. Structure le code commun.",
        "keyWords": ["Template Method", "abstraite", "sous-classe"]
      },
      {
        "question": "Quelle est la différence entre le pattern Command et le pattern Chain of Responsibility ?",
        "textResponse": "Command : encapsule une requête comme un objet (ex. `interface Command { execute(); }`). Chain of Responsibility : passe une requête à une chaîne de handlers. Command pour actions isolées, Chain pour traitements séquentiels.",
        "keyWords": ["Command", "Chain of Responsibility", "requête", "handler"]
      }
    ]
  },
  {
    "topic": "Microservices et Architecture",
    "questions": [
      {
        "question": "Qu'est-ce que Spring Cloud et comment s'utilise-t-il dans les microservices ?",
        "textResponse": "Spring Cloud fournit des outils pour microservices : découverte (Eureka), configuration (Config Server), load balancing (Ribbon). Exemple : `@EnableEurekaClient` pour enregistrer un service. Simplifie scalabilité et résilience.",
        "keyWords": ["Spring Cloud", "Eureka", "Config Server", "microservices"]
      },
      {
        "question": "Expliquez le concept de service discovery avec Eureka.",
        "textResponse": "Eureka : serveur de découverte où les microservices s’enregistrent (`@EnableEurekaClient`). Clients interrogent Eureka pour localiser les services. Exemple : `EurekaClient.getNextServerFromEureka()`. Réduit la configuration statique.",
        "keyWords": ["Eureka", "service discovery", "@EnableEurekaClient"]
      },
      {
        "question": "Qu'est-ce qu'un circuit breaker et comment fonctionne-t-il ?",
        "textResponse": "Circuit breaker : protège contre les pannes en arrêtant les appels à un service défaillant. Exemple : Resilience4j avec `@CircuitBreaker`. États : fermé, ouvert, semi-ouvert. Fournit un fallback pour résilience.",
        "keyWords": ["circuit breaker", "Resilience4j", "@CircuitBreaker", "fallback"]
      },
      {
        "question": "Comment mettre en place la tolérance aux pannes dans une architecture de microservices ?",
        "textResponse": "Utiliser circuit breaker (Resilience4j), retry, timeout, et fallback. Exemple : `@Retry(name = 'service')`. Surveiller avec Actuator. Isoler services via conteneurs (Docker). Tester chaos engineering.",
        "keyWords": ["tolérance aux pannes", "Resilience4j", "@Retry", "Actuator"]
      },
      {
        "question": "Comment fonctionne la communication asynchrone avec Kafka ou RabbitMQ dans les microservices ?",
        "textResponse": "Kafka/RabbitMQ : envoie messages via topics/queues. Exemple : `@KafkaListener` pour consommer, `KafkaTemplate` pour produire. Découple services, supporte haute charge. Configurer via `application.properties`.",
        "keyWords": ["Kafka", "RabbitMQ", "@KafkaListener", "asynchrone"]
      },
      {
        "question": "Quelle est la différence entre une architecture monolithique et une architecture microservices ?",
        "textResponse": "Monolithique : application unique, couplée, déploiement global. Microservices : services indépendants, faible couplage, déploiement séparé. Microservices favorisent scalabilité, mais complexifient la gestion.",
        "keyWords": ["monolithique", "microservices", "couplage", "scalabilité"]
      },
      {
        "question": "Avez-vous déjà utilisé une architecture microservices ? Comment gérez-vous la communication interservices ?",
        "textResponse": "Oui, avec Spring Boot/Cloud. Communication : REST (`RestTemplate`, `WebClient`) pour synchrone, Kafka pour asynchrone. Découverte via Eureka, load balancing avec Ribbon. Sécuriser avec JWT.",
        "keyWords": ["microservices", "REST", "Kafka", "Eureka", "JWT"]
      },
      {
        "question": "Comment savoir si un microservice fonctionne ?",
        "textResponse": "Utiliser Spring Actuator (`/actuator/health`) pour vérifier l’état. Surveiller via Prometheus/Grafana. Tester endpoints avec Postman ou scripts. Logger erreurs avec ELK ou Logstash.",
        "keyWords": ["Actuator", "health", "Prometheus", "Grafana"]
      },
      {
        "question": "Citer des moyens de communiquer entre services",
        "textResponse": "REST (synchrone, `WebClient`), messaging asynchrone (Kafka, RabbitMQ), gRPC pour performance, événements via Spring Cloud Stream. Choisir selon latence, volume, et couplage.",
        "keyWords": ["REST", "Kafka", "RabbitMQ", "gRPC", "Spring Cloud Stream"]
      },
      {
        "question": "Expliquer load balancing",
        "textResponse": "Load balancing répartit les requêtes entre instances d’un service. Exemple : Ribbon ou Spring Cloud LoadBalancer. Configurer via Eureka pour microservices. Améliore disponibilité et performance.",
        "keyWords": ["load balancing", "Ribbon", "Eureka", "disponibilité"]
      },
      {
        "question": "Comment appeler un service depuis un autre composant ?",
        "textResponse": "Utiliser `RestTemplate` ou `WebClient` pour REST. Exemple : `webClient.get().uri('http://service/api').retrieve()`. Avec Eureka, résoudre via `DiscoveryClient`. Sécuriser avec JWT si besoin.",
        "keyWords": ["RestTemplate", "WebClient", "Eureka", "JWT"]
      },
      {
        "question": "Les avantages microservices",
        "textResponse": "Scalabilité indépendante, déploiement séparé, technologies variées, résilience. Exemple : un service peut utiliser Java, un autre Python. Simplifie maintenance, mais complexifie coordination.",
        "keyWords": ["microservices", "scalabilité", "déploiement", "résilience"]
      },
      {
        "question": "Pouvez-vous expliquer les principes du Clean Architecture ou Hexagonal Architecture ?",
        "textResponse": "Clean Architecture : couches concentriques (entités, cas d’usage, interfaces, infrastructure). Hexagonal : ports (interfaces) et adaptateurs (implémentations). Sépare logique métier de l’infrastructure, favorise testabilité et modularité.",
        "keyWords": ["Clean Architecture", "Hexagonal", "ports", "adaptateurs", "testabilité"]
      }
    ]
  },
  {
    "topic": "REST API et Web Services",
    "questions": [
      {
        "question": "Quelle est la différence entre SOAP et REST ?",
        "textResponse": "SOAP : protocole basé sur XML, rigide, avec WSDL. REST : architecture basée sur HTTP, flexible, utilise JSON. REST est plus léger, adapté aux APIs modernes. SOAP pour sécurité/standards stricts.",
        "keyWords": ["SOAP", "REST", "XML", "JSON", "HTTP"]
      },
      {
        "question": "Quels sont les verbes HTTP les plus utilisés ? A quoi servent-ils ?",
        "textResponse": "`GET` : récupérer données. `POST` : créer. `PUT` : mettre à jour (remplace). `PATCH` : mise à jour partielle. `DELETE` : supprimer. Exemple : `GET /users` pour lister utilisateurs.",
        "keyWords": ["GET", "POST", "PUT", "PATCH", "DELETE"]
      },
      {
        "question": "Quelle est la différence entre Put et Patch ?",
        "textResponse": "`PUT` : remplace l’entité entière. `PATCH` : met à jour partiellement. Exemple : `PUT /user/1` remplace tout, `PATCH /user/1` change un champ. `PATCH` plus flexible pour mises à jour ciblées.",
        "keyWords": ["PUT", "PATCH", "mise à jour", "partielle"]
      },
      {
        "question": "Quels sont les paramètres pris dans « Delete » ? Est-ce qu’il peut prendre un « body » ?",
        "textResponse": "`DELETE` prend généralement un ID dans l’URL (ex. `/resource/123`). Peut inclure un body (rare, non standard). Exemple : `DELETE /users/1`. Headers pour auth (JWT).",
        "keyWords": ["DELETE", "ID", "body", "JWT"]
      },
      {
        "question": "Est-ce que tu as fait du REST et du SOAP, si oui, c’est quoi la différence ?",
        "textResponse": "Oui, REST : léger, JSON, HTTP, flexible. SOAP : XML, rigide, standards stricts (WSDL). REST pour APIs modernes, SOAP pour systèmes legacy ou sécurité forte (ex. bancaire).",
        "keyWords": ["REST", "SOAP", "JSON", "XML", "WSDL"]
      },
      {
        "question": "Sur les API, est-ce que tu as déjà implémenté des API REST ? Est-ce que tu utilisais une sécurité et si oui laquelle ?",
        "textResponse": "Oui, avec Spring Boot (`@RestController`). Sécurité : JWT pour authentification, OAuth2 pour autorisation. Exemple : filtre JWT avec Spring Security. HTTPS obligatoire pour appels sécurisés.",
        "keyWords": ["REST", "Spring Boot", "JWT", "OAuth2", "Spring Security"]
      },
      {
        "question": "Les critères de choix pour les API REST ?",
        "textResponse": "Simplicité, stateless, JSON, verbes HTTP standard, URIs claires, versionnage. Exemple : `/v1/users`. Prioriser performance (caching), sécurité (JWT), et documentation (Swagger).",
        "keyWords": ["REST", "stateless", "JSON", "versionnage", "Swagger"]
      },
      {
        "question": "Que doit respecter une API ?",
        "textResponse": "Principes REST : stateless, client-serveur, cacheable, interfaces uniformes. Utiliser verbes HTTP, codes statut (200, 404), URIs descriptives. Sécuriser avec HTTPS, JWT. Documenter avec OpenAPI.",
        "keyWords": ["REST", "stateless", "HTTP", "JWT", "OpenAPI"]
      },
      {
        "question": "Comment sécurise-t-on les appels aux API ?",
        "textResponse": "Utiliser HTTPS, JWT/OAuth2 pour authentification. `@PreAuthorize` pour rôles. Valider entrées avec `@Valid`. Limiter accès via CORS. Logger tentatives suspectes. Éviter exposer données sensibles.",
        "keyWords": ["HTTPS", "JWT", "@PreAuthorize", "CORS", "validation"]
      },
      {
        "question": "Quels sont les principes fondamentaux d’une API RESTful bien conçue ?",
        "textResponse": "Stateless, verbes HTTP standard, URIs hiérarchiques, codes statut, JSON. Exemple : `GET /v1/users/1`. Supporter caching, pagination, versionnage. Documenter avec Swagger/OpenAPI.",
        "keyWords": ["RESTful", "stateless", "HTTP", "pagination", "Swagger"]
      },
      {
        "question": "Peux-tu expliquer le pattern 'Façade' et son utilité dans le contexte des API ?",
        "textResponse": "Façade : simplifie une interface complexe en une seule entrée. Dans APIs, agrège plusieurs appels internes en un endpoint. Exemple : `/api/order` appelle services produit/paiement. Réduit complexité client.",
        "keyWords": ["Façade", "interface", "API", "simplification"]
      },
      {
        "question": "Comment conçois-tu une API scalable et performante pour le Cloud ?",
        "textResponse": "Utiliser microservices, load balancing (Spring Cloud), caching (Redis). Déployer sur conteneurs (Docker, Kubernetes). Optimiser requêtes DB, utiliser `WebClient` pour appels asynchrones. Surveiller avec Prometheus.",
        "keyWords": ["scalable", "microservices", "load balancing", "Docker", "Prometheus"]
      },
      {
        "question": "Quelles sont les bonnes pratiques pour garantir la haute disponibilité d'une API ?",
        "textResponse": "Déployer sur plusieurs instances (Kubernetes), utiliser load balancing, circuit breaker (Resilience4j). Surveiller santé via Actuator. Configurer retry/fallback. Sauvegarder DB en cluster.",
        "keyWords": ["haute disponibilité", "Kubernetes", "circuit breaker", "Actuator"]
      },
      {
        "question": "Quelles sont les bonnes pratiques de sécurité pour exposer des API ?",
        "textResponse": "HTTPS, JWT/OAuth2 pour auth, validation des entrées (`@Valid`), CORS restrictif. Éviter exposer données sensibles. Utiliser rate limiting, logger attaques. Scanner vulnérabilités avec OWASP.",
        "keyWords": ["sécurité", "JWT", "CORS", "rate limiting", "OWASP"]
      },
      {
        "question": "Quelle est la différence entre OAuth2 et OpenID Connect ?",
        "textResponse": "OAuth2 : protocole d’autorisation pour accès API. OpenID Connect : couche sur OAuth2 pour authentification, fournit infos utilisateur (ID token). Exemple : OAuth2 pour API, OpenID pour login SSO.",
        "keyWords": ["OAuth2", "OpenID Connect", "autorisation", "authentification", "SSO"]
      },
      {
        "question": "Comment améliorer l’expérience développeur (DX) avec une API ?",
        "textResponse": "Fournir documentation claire (Swagger/OpenAPI). URIs intuitives, réponses JSON cohérentes. Versionnage clair. Exemples de code, sandbox pour tests. Réponses d’erreur détaillées.",
        "keyWords": ["DX", "Swagger", "OpenAPI", "documentation", "versionnage"]
      },
      {
        "question": "As-tu déjà utilisé Swagger ou OpenAPI ? Quelle est leur utilité ?",
        "textResponse": "Oui, Swagger/OpenAPI documente les APIs REST (endpoints, paramètres, réponses). Exemple : `@SwaggerDefinition` ou `springdoc-openapi`. Génère UI interactive pour tests. Simplifie intégration et maintenance.",
        "keyWords": ["Swagger", "OpenAPI", "documentation", "UI interactive"]
      },
      {
        "question": "Comment intègres-tu les API dans un pipeline CI/CD ?",
        "textResponse": "Utiliser Jenkins/GitHub Actions. Automatiser tests unitaires (JUnit), tests d’API (Postman, RestAssured). Déployer avec Docker/Kubernetes. Valider sécurité avec OWASP ZAP. Monitorer avec Prometheus.",
        "keyWords": ["CI/CD", "Jenkins", "Postman", "Docker", "Prometheus"]
      },
      {
        "question": "Comment gères-tu le versioning des API ?",
        "textResponse": "Versionnage via URL (ex. `/v1/api`) ou headers (`Accept-Version`). Maintenir versions antérieures pour compatibilité. Documenter changements avec Swagger. Déprécier progressivement anciennes versions.",
        "keyWords": ["versionnage", "URL", "headers", "Swagger", "compatibilité"]
      },
      {
        "question": "Comment t’assures-tu de l’interopérabilité des API ?",
        "textResponse": "Suivre standards REST, utiliser JSON. Documenter avec OpenAPI. Tester avec clients variés (Postman, curl). Valider formats via schémas JSON. Supporter CORS pour appels cross-origin.",
        "keyWords": ["interopérabilité", "REST", "OpenAPI", "CORS", "JSON"]
      },
      {
        "question": "Que ferais-tu pour comparer une API d’un éditeur EAM à une API interne ?",
        "textResponse": "Comparer : documentation (OpenAPI), performance (latence, débit), sécurité (authentification), scalabilité. Tester avec Postman. Vérifier conformité aux standards REST et facilité d’intégration.",
        "keyWords": ["EAM", "API interne", "OpenAPI", "sécurité", "performance"]
      },
      {
        "question": "Que connais-tu de l’écosystème AWS utile aux API ?",
        "textResponse": "API Gateway : expose APIs, gère sécurité, throttling. Lambda : exécute code serverless pour endpoints. CloudWatch : monitoring. S3 : stockage données. Cognito : authentification OAuth2/JWT.",
        "keyWords": ["AWS", "API Gateway", "Lambda", "CloudWatch", "Cognito"]
      },
      {
        "question": "Quels indicateurs métier ou techniques monitorer en priorité dans une API ?",
        "textResponse": "Techniques : latence, taux d’erreurs (4xx, 5xx), débit, uptime. Métier : nombre d’appels par endpoint, temps de réponse moyen, conversions (ex. ventes). Utiliser Prometheus/Grafana.",
        "keyWords": ["monitoring", "latence", "erreurs", "Prometheus", "Grafana"]
      },
      {
        "question": "Comment rendre API REST plus rapide ?",
        "textResponse": "Cacher réponses (Redis, `@Cacheable`). Optimiser requêtes DB (index, pagination). Utiliser `WebClient` pour appels asynchrones. Compresser données (Gzip). Répartir charge avec load balancer.",
        "keyWords": ["performance", "caching", "WebClient", "pagination", "load balancer"]
      },
      {
        "question": "Est-ce que tu connais le framework OAuth ?",
        "textResponse": "Oui, OAuth2 : protocole d’autorisation. Rôles : client, serveur d’autorisation, ressource. Flux : code d’autorisation, implicite, client credentials. Intégré via Spring Security OAuth2. Exemple : token JWT pour accès API.",
        "keyWords": ["OAuth2", "autorisation", "JWT", "Spring Security"]
      }
    ]
  },
  {
    "topic": "SQL et Bases de Données",
    "questions": [
      {
        "question": "Quelles sont les différentes jointures qui existent ?",
        "textResponse": "Jointures SQL : INNER JOIN (intersection), LEFT JOIN (toutes lignes gauche + matching droite), RIGHT JOIN (toutes lignes droite + matching gauche), FULL OUTER JOIN (union complète), CROSS JOIN (produit cartésien).",
        "keyWords": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "CROSS JOIN"]
      },
      {
        "question": "Qu’est-ce que les index ? Peut-on avoir un index sur toute la table",
        "textResponse": "Les index accélèrent les recherches en créant une structure (ex. B-tree) sur colonnes. Oui, possible sur toute la table (index composite), mais coûteux en espace et mises à jour. Utiliser pour colonnes fréquemment filtrées.",
        "keyWords": ["index", "B-tree", "composite", "performance"]
      },
      {
        "question": "Différence entre INNER JOIN et OUTER JOIN ?",
        "textResponse": "INNER JOIN : retourne seulement les lignes matching des deux tables. OUTER JOIN : inclut toutes lignes d’une table (LEFT/RIGHT/FULL) et NULL pour non-matching. Exemple : LEFT OUTER JOIN garde toutes gauche.",
        "keyWords": ["INNER JOIN", "OUTER JOIN", "matching", "NULL"]
      },
      {
        "question": "Différence entre une clé primaire et une clé étrangère ?",
        "textResponse": "Clé primaire : identifie uniq uement une ligne, unique/non NULL. Clé étrangère : référence une clé primaire d’une autre table, assure intégrité référentielle. Exemple : `id` primaire dans Users, `user_id` étrangère dans Orders.",
        "keyWords": ["clé primaire", "clé étrangère", "unique", "référentielle"]
      },
      {
        "question": "Les méthodes pour copier des données soit avec du jpa et des entité soit avec des spring batch soit avec le Queuing(RabbitMq, AMQ, Kaffka..)",
        "textResponse": "JPA : `entityManager.persist()` ou `repository.saveAll()`. Spring Batch : jobs pour traitement par lots volumineux. Queuing (Kafka/RabbitMQ) : messages pour transfert asynchrone. Choisir batch pour volume, queuing pour découplage.",
        "keyWords": ["JPA", "Spring Batch", "Kafka", "RabbitMQ", "saveAll()"]
      },
      {
        "question": "Explique L'analyse des requêtes SQL via explain plan",
        "textResponse": "`EXPLAIN` analyse le plan d'exécution d'une requête : coût, index utilisés, type de join. Exemple : `EXPLAIN SELECT * FROM table WHERE id=1`. Aide à optimiser en identifiant scans séquentiels vs index seeks.",
        "keyWords": ["EXPLAIN", "plan d'exécution", "coût", "optimisation"]
      },
      {
        "question": "Comment Optimisation des requetes",
        "textResponse": "Ajouter index sur colonnes filtrées. Utiliser joins efficaces. Limiter résultats (LIMIT/OFFSET). Éviter SELECT *. Analyser avec EXPLAIN. Cacher résultats pour requêtes répétées.",
        "keyWords": ["index", "joins", "EXPLAIN", "LIMIT", "caching"]
      },
      {
        "question": "La Différences entre left et inner join",
        "textResponse": "LEFT JOIN : toutes lignes gauche + matching droite, NULL sinon. INNER JOIN : seulement matching des deux. Exemple : LEFT inclut gauche sans correspondance, INNER non.",
        "keyWords": ["LEFT JOIN", "INNER JOIN", "NULL", "matching"]
      },
      {
        "question": "C quoi Les types de jointures",
        "textResponse": "Types : INNER (matching), LEFT (gauche + matching), RIGHT (droite + matching), FULL (union), CROSS (toutes combinaisons). SELF JOIN : joindre table à elle-même.",
        "keyWords": ["INNER", "LEFT", "RIGHT", "FULL", "CROSS"]
      },
      {
        "question": "Qu’est-ce qu’un index ?",
        "textResponse": "Un index est une structure accélérant les recherches sur colonnes. Types : unique, composite, clustered. Crée avec `CREATE INDEX`. Améliore SELECT, mais ralentit INSERT/UPDATE.",
        "keyWords": ["index", "recherche", "CREATE INDEX", "clustered"]
      },
      {
        "question": "Différence vue et vue matérialisée",
        "textResponse": "Vue : requête virtuelle, recalculée à chaque accès. Vue matérialisée : stockée physiquement, rafraîchie périodiquement. Vue pour simplification, matérialisée pour performance sur grosses données.",
        "keyWords": ["vue", "matérialisée", "virtuelle", "stockée"]
      }
    ]
  },
  {
    "topic": "Testing",
    "questions": [
      {
        "question": "Au niveau du testing, qu'est-ce que tu mettais en place de ton côté ? Est-ce que tu faisais du TDD ?",
        "textResponse": "J'installe JUnit, Mockito pour unitaires, Testcontainers pour intégration. Oui, TDD : écrire tests d’abord, puis code, refactor. Assure qualité et guide design.",
        "keyWords": ["JUnit", "Mockito", "Testcontainers", "TDD"]
      },
      {
        "question": "Concernant les tests, peux-tu me parler des différents types de tests que tu as déjà fait ?",
        "textResponse": "Unitaires (JUnit), intégration (@SpringBootTest), end-to-end (Cucumber), performance (JMeter). Unitaires pour méthodes isolées, intégration pour composants connectés.",
        "keyWords": ["unitaires", "intégration", "end-to-end", "performance"]
      },
      {
        "question": "Est-ce que les tests sont utiles pour toi ?",
        "textResponse": "Oui, détectent bugs tôt, assurent régression, améliorent design. Facilitent refactoring et collaboration. Essentiels pour CI/CD et qualité.",
        "keyWords": ["bugs", "régression", "refactoring", "CI/CD"]
      },
      {
        "question": "Dans tes missions, tu utilises quels outils pour les tests ?",
        "textResponse": "JUnit/Mockito pour unitaires, Testcontainers pour DB mock, Cucumber pour BDD, Postman/RestAssured pour API, SonarQube pour couverture. JMeter pour load testing.",
        "keyWords": ["JUnit", "Mockito", "Testcontainers", "Cucumber", "SonarQube"]
      },
      {
        "question": "C’est quoi la différence entre un TU et TI ? C’est quoi la grosse différence entre les deux ?",
        "textResponse": "TU (Test Unitaire) : teste une unité isolée (méthode). TI (Test Intégration) : teste interaction entre composants (ex. DB, services). Différence : TU rapide/isolé, TI lent/holistique.",
        "keyWords": ["TU", "TI", "isolé", "intégration"]
      },
      {
        "question": "Est-ce que tu as déjà travaillé avec Cucumber ? Quel autre outil de test tu as utilisé ?",
        "textResponse": "Oui, Cucumber pour BDD (Gherkin). Autres : JUnit, Mockito, TestNG, Selenium pour UI, WireMock pour mocks API. Cucumber pour tests lisibles par non-devs.",
        "keyWords": ["Cucumber", "BDD", "Gherkin", "JUnit", "Selenium"]
      },
      {
        "question": "Est-ce que tu as déjà travaillé en TDD ? Si oui en quoi c’est utile ?",
        "textResponse": "Oui, TDD : test rouge, code vert, refactor. Utile pour design émergent, coverage élevé, bugs réduits, code maintenable. Force à penser aux cas limites.",
        "keyWords": ["TDD", "rouge-vert-refactor", "design", "coverage"]
      },
      {
        "question": "Quelle est votre stratégie de tests pour le backend ? Que testez-vous avec JUnit, Mockito, Testcontainers ?",
        "textResponse": "Stratégie : unitaires (JUnit/Mockito) pour services/logique, intégration (Testcontainers) pour DB/interactions. JUnit : assertions, Mockito : mocks, Testcontainers : conteneurs DB temporaires.",
        "keyWords": ["backend", "JUnit", "Mockito", "Testcontainers"]
      },
      {
        "question": "Comment testez-vous un service métier contenant de l’accès base de données, sans dépendre de la vraie BDD ?",
        "textResponse": "Mock repository avec Mockito. Ou utiliser Testcontainers pour DB in-memory (H2) ou conteneur Docker. Exemple : `@MockBean UserRepository repo`. Isoler service de la vraie DB.",
        "keyWords": ["Mockito", "Testcontainers", "@MockBean", "H2"]
      },
      {
        "question": "Comment mettez-vous en place des tests d’intégration avec Spring Boot (@SpringBootTest) ?",
        "textResponse": "@SpringBootTest charge le contexte Spring. Utiliser pour tester interactions. Exemple : `@SpringBootTest class MyTest { @Autowired Service service; @Test void test() { assertEquals(expected, service.method()); } }`.",
        "keyWords": ["@SpringBootTest", "intégration", "@Autowired"]
      },
      {
        "question": "Comment mettez-vous en place une stratégie de tests complète ?",
        "textResponse": "Pyramide : unitaires (80%), intégration (15%), E2E (5%). Couverture >80% via SonarQube. Automatiser dans CI/CD. Utiliser TDD/BDD. Inclure performance/sécurité tests.",
        "keyWords": ["pyramide", "couverture", "CI/CD", "TDD"]
      }
    ]
  },
  {
    "topic": "Outils de Développement et DevOps",
    "questions": [
      {
        "question": "Qu'est-ce que Maven et comment s'utilise-t-il ?",
        "textResponse": "Maven : outil de build/gestion dépendances. Utilise `pom.xml` pour config. Commandes : `mvn clean install`. Gère lifecycle (compile, test, package). Centralise dépendances via repositories.",
        "keyWords": ["Maven", "pom.xml", "build", "dépendances"]
      },
      {
        "question": "Comment configurer une pipeline CI/CD avec Jenkins ?",
        "textResponse": "Créer un job Jenkins avec Jenkinsfile (Groovy). Étapes : checkout Git, build (Maven), tests (JUnit), déploiement (Docker). Utiliser plugins pour Git, Docker. Trigger sur push.",
        "keyWords": ["Jenkins", "Jenkinsfile", "CI/CD", "Maven", "Docker"]
      },
      {
        "question": "Comment dockeriser une application Java ?",
        "textResponse": "Créer Dockerfile : FROM openjdk, COPY jar, ENTRYPOINT java -jar app.jar. Build : `docker build -t app .`. Run : `docker run -p 8080:8080 app`. Utiliser multi-stage pour builds optimisés.",
        "keyWords": ["Dockerfile", "openjdk", "build", "multi-stage"]
      },
      {
        "question": "Qu'est-ce que l'intégration continue ?",
        "textResponse": "CI : automatise build/tests sur chaque commit. Exemple : Jenkins/GitHub Actions exécute tests, construit artifacts. Assure code stable, détecte bugs tôt.",
        "keyWords": ["CI", "build", "tests", "automatisation"]
      },
      {
        "question": "Comment gérer les dépendances dans un projet Java avec Maven ou Gradle ?",
        "textResponse": "Maven : dans `pom.xml` <dependencies>. Gradle : dans `build.gradle` dependencies {}. Résoudre via repositories (Maven Central). Commandes : `mvn dependency:resolve`, `gradle dependencies`.",
        "keyWords": ["Maven", "Gradle", "dépendances", "repositories"]
      },
      {
        "question": "Comment créer des tests unitaires avec JUnit et Mockito ?",
        "textResponse": "@Test pour méthodes, assertEquals pour vérifications. Mockito : @Mock pour objets, when().thenReturn() pour stubs. Exemple : `@Test void test() { when(repo.findById(1)).thenReturn(user); }`.",
        "keyWords": ["JUnit", "Mockito", "@Test", "@Mock", "when()"]
      },
      {
        "question": "Qu'est-ce que SonarQube et comment s'intègre-t-il avec Java ?",
        "textResponse": "SonarQube analyse code pour qualité, bugs, sécurité. Intégration : plugin Maven `sonar:sonar`. Scan `pom.xml`, rapporte métriques. Utilisé dans CI/CD pour gates qualité.",
        "keyWords": ["SonarQube", "analyse", "qualité", "Maven"]
      },
      {
        "question": "Expliquez le fonctionnement de Git et GitFlow.",
        "textResponse": "Git : VCS distribué, commandes : clone, commit, push, branch. GitFlow : workflow avec branches (master, develop, feature, release, hotfix). Feature pour devs, release pour préparation.",
        "keyWords": ["Git", "GitFlow", "branch", "commit", "workflow"]
      },
      {
        "question": "Qu'est-ce qu'un serveur d'applications et comment s'utilise-t-il ?",
        "textResponse": "Serveur d'apps (Tomcat, Jetty) déploie WAR/JAR. Exemple : Tomcat, copier WAR dans webapps. Gère servlets, JSP. Spring Boot embarque Tomcat par défaut.",
        "keyWords": ["serveur d'apps", "Tomcat", "WAR", "déploiement"]
      },
      {
        "question": "Comment monitorer une application Java en production avec des outils comme Prometheus ou Grafana ?",
        "textResponse": "Activer JMX ou Actuator dans Spring. Exporter métriques vers Prometheus. Visualiser avec Grafana dashboards. Surveiller CPU, mémoire, requêtes. Alertes via AlertManager.",
        "keyWords": ["monitoring", "Prometheus", "Grafana", "Actuator"]
      },
      {
        "question": "Sur la partie CI/CD vous utilisez quels outils ? si vous générez des packages, vous le faisiez avec quel outil ?",
        "textResponse": "Outils : Jenkins, GitHub Actions, GitLab CI. Packages : Maven (`mvn package`) ou Gradle pour JAR/WAR. Déploiement : Docker pour images.",
        "keyWords": ["CI/CD", "Jenkins", "Maven", "Docker"]
      },
      {
        "question": "Est-ce que tu as déjà GIT et GITHUB ? Quelle est la différence entre les deux ?",
        "textResponse": "Oui, Git : outil VCS local. GitHub : plateforme hébergeant repos Git, ajoute collaboration (PR, issues). Git local, GitHub distant.",
        "keyWords": ["Git", "GitHub", "VCS", "PR"]
      },
      {
        "question": "Avez-vous déjà mis en place un pipeline CI/CD pour un backend Java ? Avec quels outils ?",
        "textResponse": "Oui, avec Jenkins/GitHub Actions. Étapes : build Maven, tests JUnit, scan SonarQube, déploiement Kubernetes. Outils : Docker pour conteneurs, Helm pour charts.",
        "keyWords": ["CI/CD", "Jenkins", "Maven", "Kubernetes"]
      },
      {
        "question": "Quelle stratégie appliquez-vous pour automatiser les tests backend dans la chaîne DevOps ?",
        "textResponse": "Intégrer tests dans CI : unitaires post-build, intégration post-deploy staging. Utiliser parallel jobs. Coverage minimale 80%. Fail pipeline si tests échouent.",
        "keyWords": ["automatisation", "CI", "coverage", "parallel"]
      },
      {
        "question": "Comment intégrez-vous Jenkins et GitLab CI dans un projet Spring + Angular ?",
        "textResponse": "Jenkins : jobs pour build backend (Maven), frontend (npm). GitLab CI : .gitlab-ci.yml pour stages (build, test, deploy). Intégrer via webhooks. Séparer pipelines par branche.",
        "keyWords": ["Jenkins", "GitLab CI", "build", "webhooks"]
      },
      {
        "question": "Comment utilisez-vous SonarQube efficacement ?",
        "textResponse": "Intégrer dans CI (`sonar:sonar`). Définir quality gates (bugs, vulnérabilités). Analyser code smells, duplications. Bloquer merges si gates fail. Suivre dette technique.",
        "keyWords": ["SonarQube", "quality gates", "CI", "dette technique"]
      },
      {
        "question": "Quelles sont vos bonnes pratiques de monitoring via Dynatrace ?",
        "textResponse": "Installer agent Dynatrace. Surveiller JVM (mémoire, GC), services (latence). Dashboards personnalisés. Alertes AI pour anomalies. Analyser traces pour bottlenecks.",
        "keyWords": ["Dynatrace", "JVM", "alertes", "traces"]
      },
      {
        "question": "Comment intégrez-vous la sécurité dans le pipeline CI/CD ?",
        "textResponse": "Scan vulnérabilités avec OWASP Dependency-Check. Tests sécurité (DAST avec ZAP). Secrets via Vault. Quality gates pour sécurité. Automatiser audits post-build.",
        "keyWords": ["sécurité", "OWASP", "DAST", "Vault"]
      },
      {
        "question": "Comment structurez-vous un Dockerfile pour une application Spring Boot ?",
        "textResponse": "Multi-stage : stage build (Maven), stage run (openjdk). Exemple : `FROM maven:3.8 AS build COPY . . RUN mvn package FROM openjdk:17 COPY --from=build /target/app.jar app.jar ENTRYPOINT ['java', '-jar', 'app.jar']`.",
        "keyWords": ["Dockerfile", "multi-stage", "Maven", "openjdk"]
      },
      {
        "question": "Quels outils utilisez-vous pour monitorer les performances backend en prod ?",
        "textResponse": "Spring Actuator pour métriques, Prometheus pour scraping, Grafana pour dashboards. Dynatrace pour traces, New Relic pour APM. Logs avec ELK (Elasticsearch, Logstash, Kibana).",
        "keyWords": ["Actuator", "Prometheus", "Grafana", "Dynatrace", "ELK"]
      },
      {
        "question": "Comment gérer un problème de mémoire ou de lenteur dans un service Java en prod ?",
        "textResponse": "Analyser heap dumps avec Eclipse MAT. Profiler avec VisualVM. Vérifier GC logs. Optimiser code (ex. éviter fuites). Augmenter heap si besoin (`-Xmx`).",
        "keyWords": ["heap dumps", "VisualVM", "GC logs", "-Xmx"]
      },
      {
        "question": "Comment préparez-vous une application Spring Boot pour le déploiement ?",
        "textResponse": "Configurer profiles (dev/prod) dans `application.properties`. Gérer logs avec Logback. Secrets via environnement. Build JAR avec `mvn package`. Dockeriser pour Kubernetes.",
        "keyWords": ["profiles", "logs", "JAR", "Docker"]
      },
      {
        "question": "Quelle est la différence entre git fetch et git pull ?",
        "textResponse": "`fetch` : récupère commits distants sans merger. `pull` : fetch + merge. Exemple : `git fetch origin` pour vérifier, `git pull` pour updater.",
        "keyWords": ["git fetch", "git pull", "merge"]
      },
      {
        "question": "Que fait la commande git stash ?",
        "textResponse": "`git stash` sauvegarde changements non committés, nettoie working directory. `stash apply` restaure. Utile pour switcher branches sans commit.",
        "keyWords": ["git stash", "sauvegarde", "apply"]
      },
      {
        "question": "Comment gérer un conflit de fusion (merge conflict) ?",
        "textResponse": "Lors de merge, éditer fichiers conflictuels (marqués <<<<<<). Résoudre manuellement, puis `git add` et `git commit`. Utiliser outils comme VS Code pour aide visuelle.",
        "keyWords": ["merge conflict", "éditer", "git add"]
      },
      {
        "question": "Peux-tu expliquer ce que fait git rebase ?",
        "textResponse": "`git rebase` réapplique commits sur une base différente, lisse l'historique. Exemple : `git rebase main`. Évite merges inutiles, mais réécrit histoire (pas sur shared branches).",
        "keyWords": ["git rebase", "historique", "réappliquer"]
      },
      {
        "question": "Quelle bonne pratique suis-tu pour les messages de commit ?",
        "textResponse": "Messages clairs : sujet en 50 chars, corps descriptif. Utiliser impératif (ex. 'Add feature'). Référencer issues (#123). Garder commits atomiques.",
        "keyWords": ["commit message", "impératif", "atomique", "issues"]
      }
    ]
  },
  {
    "topic": "Angular (Frontend)",
    "questions": [
      {
        "question": "Qu’est-ce que le ChangeDetectionStrategy.OnPush ?",
        "textResponse": "`OnPush` : détecte changements seulement sur inputs ou événements explicites. Améliore performance en évitant checks inutiles. Exemple : `@Component({changeDetection: ChangeDetectionStrategy.OnPush})`.",
        "keyWords": ["OnPush", "change detection", "performance"]
      },
      {
        "question": "Comment fonctionne la gestion d’état avec NgRx ?",
        "textResponse": "NgRx : Redux pour Angular. Actions dispatchées, reducers mettent à jour state, effects gèrent side-effects. Exemple : `store.dispatch(new LoadData())`. Centralise état, prédictible.",
        "keyWords": ["NgRx", "Redux", "actions", "reducers", "effects"]
      },
      {
        "question": "Quelle est la différence entre Subject, BehaviorSubject, et ReplaySubject dans RxJS ?",
        "textResponse": "Subject : multicasts, pas de valeur initiale. BehaviorSubject : valeur initiale, dernier émis aux nouveaux subscribers. ReplaySubject : replay N dernières valeurs. Utiliser Behavior pour état courant.",
        "keyWords": ["Subject", "BehaviorSubject", "ReplaySubject", "RxJS"]
      },
      {
        "question": "Comment sécuriser une application Angular avec JWT ?",
        "textResponse": "Stocker JWT dans localStorage/HttpOnly cookie. Utiliser HttpInterceptor pour ajouter Authorization header. Guard routes avec `CanActivate`. Valider token côté serveur.",
        "keyWords": ["JWT", "HttpInterceptor", "CanActivate", "localStorage"]
      },
      {
        "question": "À quoi sert trackBy dans une boucle *ngFor ?",
        "textResponse": "`trackBy` optimise le rendu en suivant items par clé unique (ex. ID). Évite recréation DOM inutile. Exemple : `*ngFor='let item of items; trackBy: trackById'`. Améliore performance pour listes dynamiques.",
        "keyWords": ["trackBy", "*ngFor", "performance", "DOM"]
      },
      {
        "question": "Qu'est-ce qu’un Observable ?",
        "textResponse": "Observable : flux de données asynchrone, push-based. Subscribe pour recevoir valeurs. Exemple : `http.get(url).subscribe(data => {})`. Gère events, HTTP, timers.",
        "keyWords": ["Observable", "asynchrone", "subscribe"]
      },
      {
        "question": "Différence entre une Promise et un Observable",
        "textResponse": "Promise : valeur unique asynchrone, non annulable. Observable : multiples valeurs, annulable, lazy. Promise pour simple async, Observable pour streams (ex. RxJS).",
        "keyWords": ["Promise", "Observable", "multiple valeurs", "annulable"]
      },
      {
        "question": "Quelle est la signature de la méthode suscribe() (paramètres et objets renvoyés)",
        "textResponse": "`subscribe()` prend observers : next, error, complete. Retourne Subscription pour unsubscribe. Exemple : `obs.subscribe({ next: v => console.log(v), error: e => {}, complete: () => {} })`.",
        "keyWords": ["subscribe()", "next", "error", "complete", "Subscription"]
      },
      {
        "question": "Est-ce que la requête browser est envoyée au serveur si on ne fait pas le subscribe()",
        "textResponse": "Non, les Observables sont lazy : requête HTTP (ex. HttpClient) n’est envoyée qu’au subscribe(). Sans subscribe, rien ne se passe.",
        "keyWords": ["Observable", "lazy", "subscribe()", "HttpClient"]
      },
      {
        "question": "Différence entre let et var.",
        "textResponse": "`var` : portée fonctionnelle, hoisting. `let` : portée bloc, pas de hoisting. Utiliser `let` pour éviter bugs scoping. `const` pour constantes.",
        "keyWords": ["let", "var", "portée bloc", "hoisting"]
      },
      {
        "question": "Qu’est-ce que le callback ?",
        "textResponse": "Callback : fonction passée comme argument, exécutée plus tard. Exemple : `setTimeout(() => {}, 1000)`. Utile pour async, mais peut causer callback hell. Préférer Promises/Observables.",
        "keyWords": ["callback", "asynchrone", "callback hell"]
      },
      {
        "question": "Qu’est-ce que RxJs ?",
        "textResponse": "RxJS : bibliothèque pour programmation réactive avec Observables. Gère flux asynchrones, events. Opérateurs : map, filter, merge. Intégré à Angular pour HTTP, forms.",
        "keyWords": ["RxJS", "réactive", "Observable", "opérateurs"]
      },
      {
        "question": "Cycle de vie des composants ?",
        "textResponse": "Hooks : ngOnChanges (inputs changent), ngOnInit (initialisation), ngDoCheck (détection changements), ngAfterViewInit (vue prête), ngOnDestroy (destruction). Utiliser pour setup/cleanup.",
        "keyWords": ["cycle de vie", "ngOnInit", "ngOnDestroy", "hooks"]
      },
      {
        "question": "Qu’est-ce que le Lazy loading ?",
        "textResponse": "Lazy loading : charge modules à la demande via routes. Exemple : `{ path: 'admin', loadChildren: () => import('./admin.module').then(m => m.AdminModule) }`. Améliore temps de chargement initial.",
        "keyWords": ["lazy loading", "routes", "loadChildren", "performance"]
      },
      {
        "question": "Qu’est-ce que Redux ?",
        "textResponse": "Redux : gestion état centralisé. Store unique, actions, reducers. Dans Angular, NgRx implémente Redux. Exemple : dispatch action pour update state.",
        "keyWords": ["Redux", "état centralisé", "actions", "reducers"]
      },
      {
        "question": "Quelles sont les nouveautés importantes d’Angular 18 ?",
        "textResponse": "Angular 18 : zoneless change detection, dynamic route redirects, enhanced SSR, new form control events, stable deferrable views, Firebase hosting integration. Améliore performance et DX.",
        "keyWords": ["Angular 18", "zoneless", "SSR", "deferrable views"]
      },
      {
        "question": "Comment gérez-vous l’architecture d’un gros projet Angular ?",
        "textResponse": "Modulariser : feature modules, shared module. Gestion état avec NgRx. Lazy loading pour routes. Composants réutilisables. Nx ou Angular CLI pour monorepo. Linter pour cohérence.",
        "keyWords": ["modulariser", "NgRx", "lazy loading", "Nx"]
      },
      {
        "question": "Comment gérez-vous l’état complexe dans Angular ?",
        "textResponse": "Utiliser NgRx/Redux pour état centralisé. Services pour état local. Observables pour réactivité. Exemple : selectors pour queries state. Éviter state dans composants.",
        "keyWords": ["NgRx", "état centralisé", "Observables", "selectors"]
      },
      {
        "question": "Comment testez-vous un composant Angular avec dépendances ?",
        "textResponse": "Utiliser TestBed : configure module, inject dépendances. Mock services avec SpyObj. Exemple : `TestBed.configureTestingModule({ declarations: [Comp], providers: [{provide: Service, useValue: mock}] })`. Assert avec fixture.",
        "keyWords": ["TestBed", "SpyObj", "mock", "fixture"]
      },
      {
        "question": "As-tu déjà travaillé avec ngrx ?",
        "textResponse": "Oui, NgRx pour gestion état : actions, reducers, effects. Exemple : `createReducer(initialState, on(action, (state, {data}) => ({...state, data})))`. Utile pour apps complexes.",
        "keyWords": ["NgRx", "actions", "reducers", "effects"]
      },
      {
        "question": "Côté Frontend : les étapes de consommation web service et afficher contenu",
        "textResponse": "1) Injecter HttpClient. 2) Appeler `http.get(url).subscribe(data => this.data = data)`. 3) Afficher avec `*ngFor` ou bindings. Gérer erreurs avec catchError. Unsubscribe pour éviter leaks.",
        "keyWords": ["HttpClient", "subscribe", "*ngFor", "catchError"]
      },
      {
        "question": "C quoi Intercepteur Angular",
        "textResponse": "Interceptor : modifie requêtes/réponses HTTP (ex. ajouter headers JWT). Implémente `HttpInterceptor`. Exemple : `intercept(req, next) { const authReq = req.clone({headers: req.headers.set('Authorization', token)}); return next.handle(authReq); }`.",
        "keyWords": ["Interceptor", "HttpInterceptor", "headers", "JWT"]
      },
      {
        "question": "Qu'est-ce qu'Angular ?",
        "textResponse": "Angular est un framework front-end open-source développé par Google, basé sur TypeScript, qui permet de créer des applications web dynamiques, modulaires et maintenables grâce à une architecture orientée composants.",
        "keyWords": ["Angular", "framework", "front-end", "TypeScript", "Google", "composants", "applications web", "modulaire", "maintenable"]
      }, {
        "question": "Quelle est la différence entre AngularJS (1.x) et Angular (2 et versions supérieures) ?",
        "textResponse": "AngularJS est basé sur JavaScript et utilise le concept de scope et de contrôleurs, tandis qu’Angular (2+) est basé sur TypeScript, suit une architecture orientée composants, est plus performant et supporte mieux le mobile et les grandes applications.",
        "keyWords": ["AngularJS", "Angular", "TypeScript", "JavaScript", "scope", "contrôleurs", "composants", "performances", "mobile"]
      }, {
        "question": "Qu'est-ce qu'un composant dans Angular ?",
        "textResponse": "Un composant est l’unité de base dans Angular qui combine une logique TypeScript, un template HTML et un style CSS, permettant de construire une interface utilisateur modulaire et réutilisable.",
        "keyWords": ["composant", "Angular", "TypeScript", "HTML", "CSS", "interface utilisateur", "modulaire", "réutilisable"]
      }, {
        "question": "Que signifie 'Two-way data binding' dans Angular ?",
        "textResponse": "Le Two-way data binding est un mécanisme qui synchronise automatiquement les données entre le modèle (component) et la vue (template), de sorte que toute modification d’un côté est immédiatement reflétée de l’autre.",
        "keyWords": ["Two-way data binding", "Angular", "synchronisation", "modèle", "vue", "component", "template"]
      }, {
        "question": "Qu'est-ce qu'un module Angular ?",
        "textResponse": "Un module Angular est une unité organisationnelle qui regroupe des composants, des directives, des pipes et des services, permettant de structurer et charger des fonctionnalités de manière modulaire dans une application.",
        "keyWords": ["module", "Angular", "composants", "directives", "pipes", "services", "organisation", "modulaire"]
      },

      {
        "question": "Qu'est-ce qu'un décorateur en Angular ?",
        "textResponse": "En Angular, un décorateur est une fonction qui permet d'ajouter des métadonnées à une classe, une propriété ou une méthode, afin que le framework puisse les traiter et appliquer certains comportements. Par exemple, @Component définit une classe comme un composant Angular.",
        "keyWords": ["décorateur", "Angular", "métadonnées", "@Component", "classe", "propriété", "méthode"]
      },

      {
        "question": "Qu'est-ce qu'un `@Component` ?",
        "textResponse": "`@Component` est un décorateur Angular qui définit la configuration d’un composant, notamment son sélecteur, son template et ses styles, et permet ainsi à Angular de comprendre comment instancier et afficher ce composant.",
        "keyWords": ["@Component", "décorateur", "Angular", "sélecteur", "template", "styles", "composant"]
      }, {
        "question": "Comment déclarer un composant dans Angular ?",
        "textResponse": "Un composant est déclaré en créant une classe TypeScript annotée avec `@Component`, et en l’ajoutant ensuite dans la section 'declarations' du module Angular correspondant.",
        "keyWords": ["déclarer", "composant", "@Component", "TypeScript", "Angular", "module", "declarations"]
      }, {
        "question": "Que sont les directives en Angular ?",
        "textResponse": "Les directives en Angular sont des classes qui permettent de manipuler le DOM ou d’ajouter des comportements aux éléments du template. Elles complètent et enrichissent les composants.",
        "keyWords": ["directives", "Angular", "DOM", "template", "comportement", "composants"]
      }, {
        "question": "Quelle est la différence entre une directive structurelle et une directive d'attribut ?",
        "textResponse": "Une directive structurelle modifie la structure du DOM (par exemple `*ngIf`, `*ngFor`), tandis qu’une directive d’attribut modifie l’apparence ou le comportement d’un élément existant (par exemple `ngClass`, `ngStyle`).",
        "keyWords": ["directive structurelle", "directive d'attribut", "DOM", "ngIf", "ngFor", "ngClass", "ngStyle"]
      }, {
        "question": "Qu'est-ce qu'un service Angular ?",
        "textResponse": "Un service Angular est une classe qui contient de la logique métier ou des fonctions réutilisables, souvent utilisées pour gérer les données, effectuer des appels HTTP ou partager des informations entre composants.",
        "keyWords": ["service", "Angular", "logique métier", "réutilisable", "données", "HTTP", "partage", "composants"]
      }, {
        "question": "Quelle est la différence entre `ngOnInit` et `constructor` dans un composant ?",
        "textResponse": "Le `constructor` sert à initialiser la classe et injecter des dépendances, tandis que `ngOnInit` est une méthode du cycle de vie Angular appelée après l’initialisation du composant, idéale pour charger des données ou exécuter une logique.",
        "keyWords": ["constructor", "ngOnInit", "cycle de vie", "Angular", "dépendances", "initialisation", "composant"]
      }, {
        "question": "Comment gérer les formulaires dans Angular ?",
        "textResponse": "Les formulaires dans Angular peuvent être gérés via deux approches : les formulaires basés sur le modèle (template-driven) et les formulaires réactifs (reactive forms), offrant respectivement simplicité et flexibilité avec une gestion plus robuste des données.",
        "keyWords": ["formulaires", "Angular", "template-driven", "reactive forms", "saisie", "validation"]
      }, {
        "question": "Quelle est la différence entre un formulaire réactif et un formulaire basé sur le modèle ?",
        "textResponse": "Un formulaire basé sur le modèle utilise le template HTML avec des directives Angular (`ngModel`), tandis qu’un formulaire réactif repose sur une gestion explicite via des objets `FormControl` et `FormGroup` dans le code TypeScript.",
        "keyWords": ["formulaire réactif", "formulaire basé sur le modèle", "ngModel", "FormControl", "FormGroup", "Angular"]
      }, {
        "question": "Comment lier un modèle (binding) dans Angular ?",
        "textResponse": "Le binding dans Angular peut être fait de quatre façons : interpolation `{{ }}`, binding d’attribut `[property]`, binding d’événement `(event)` et binding bidirectionnel `[(ngModel)]`.",
        "keyWords": ["binding", "Angular", "interpolation", "property binding", "event binding", "two-way binding", "ngModel"]
      }, {
        "question": "Que sont les observables dans Angular ?",
        "textResponse": "Les observables dans Angular (via RxJS) sont des flux asynchrones de données qui permettent de gérer des événements, des requêtes HTTP et des valeurs dynamiques, avec des opérateurs puissants pour la transformation et le filtrage.",
        "keyWords": ["observables", "Angular", "RxJS", "flux", "asynchrone", "événements", "HTTP", "opérateurs"]
      }, {
        "question": "Qu'est-ce qu'un `@Input()` et un `@Output()` dans Angular ?",
        "textResponse": "`@Input()` permet de recevoir des données d’un composant parent, tandis que `@Output()` permet d’émettre des événements vers le parent à l’aide d’un EventEmitter.",
        "keyWords": ["@Input", "@Output", "Angular", "parent", "enfant", "EventEmitter", "données", "événements"]
      }, {
        "question": "Qu'est-ce qu'un `ngFor` ?",
        "textResponse": "`ngFor` est une directive structurelle Angular qui permet d’itérer sur une collection et de générer dynamiquement un élément du DOM pour chaque élément de la liste.",
        "keyWords": ["ngFor", "directive structurelle", "Angular", "DOM", "collection", "itération"]
      }, {
        "question": "Comment gérer les événements dans Angular ?",
        "textResponse": "Les événements dans Angular sont gérés avec le binding `(event)`, où un événement du DOM (comme click) est associé à une méthode du composant.",
        "keyWords": ["événements", "Angular", "binding", "event binding", "DOM", "méthode", "click"]
      }, {
        "question": "Qu'est-ce qu'un `ngIf` ?",
        "textResponse": "`ngIf` est une directive structurelle Angular qui ajoute ou supprime un élément du DOM en fonction d’une condition booléenne.",
        "keyWords": ["ngIf", "directive structurelle", "Angular", "DOM", "condition"]
      }, {
        "question": "Comment utiliser la méthode `HttpClient` dans Angular ?",
        "textResponse": "Le service `HttpClient` d’Angular permet de réaliser des requêtes HTTP (GET, POST, PUT, DELETE) de manière asynchrone et retourne des observables pour traiter les réponses.",
        "keyWords": ["HttpClient", "Angular", "HTTP", "GET", "POST", "PUT", "DELETE", "observables", "asynchrone"]
      }, {
        "question": "Qu'est-ce qu'un `Observable` en Angular ?",
        "textResponse": "Un Observable en Angular est un flux de données asynchrone fourni par RxJS qui permet de gérer des événements, des appels HTTP ou des données dynamiques, avec des méthodes pour s'abonner et transformer les valeurs au fil du temps.",
        "keyWords": ["Observable", "Angular", "RxJS", "flux", "données", "asynchrone", "événements", "HTTP", "abonnement", "transformation"]
      }, {
        "question": "Quelle est la différence entre `Promise` et `Observable` ?",
        "textResponse": "Une Promise gère une seule valeur asynchrone résolue ou rejetée une fois, tandis qu’un Observable peut émettre plusieurs valeurs sur le temps, être annulé et offre des opérateurs pour la composition et la transformation des flux.",
        "keyWords": ["Promise", "Observable", "asynchrone", "valeur unique", "plusieurs valeurs", "annulation", "opérateurs", "flux"]
      }, {
        "question": "Qu'est-ce que le `RxJS` et comment est-il utilisé dans Angular ?",
        "textResponse": "RxJS est une bibliothèque pour la programmation réactive avec des observables. Dans Angular, il est utilisé pour gérer les flux asynchrones comme les événements utilisateur, les requêtes HTTP et la communication entre composants.",
        "keyWords": ["RxJS", "Angular", "programmation réactive", "observables", "asynchrone", "événements", "HTTP", "communication"]
      }, {
        "question": "Qu'est-ce qu'un `@Injectable()` ?",
        "textResponse": "`@Injectable()` est un décorateur qui marque une classe comme pouvant être injectée en tant que service dans Angular, permettant à l’injecteur de gérer sa création et sa durée de vie.",
        "keyWords": ["@Injectable", "Angular", "service", "injection", "injecteur", "création", "durée de vie"]
      }, {
        "question": "Qu'est-ce qu'un `router-outlet` ?",
        "textResponse": "`router-outlet` est une directive Angular utilisée dans le template pour indiquer où les composants liés aux routes doivent être affichés dans l’application.",
        "keyWords": ["router-outlet", "Angular", "directive", "template", "routes", "composants", "affichage"]
      }, {
        "question": "Qu'est-ce que le `routing` dans Angular ?",
        "textResponse": "Le routing dans Angular permet de naviguer entre différentes vues ou composants de l’application via des routes définies dans le module de routage, facilitant la création d’applications à pages multiples.",
        "keyWords": ["routing", "Angular", "navigation", "vues", "composants", "routes", "pages multiples"]
      }, {
        "question": "Comment gérer la navigation dans Angular ?",
        "textResponse": "La navigation dans Angular est gérée avec le Router, en utilisant soit `routerLink` dans les templates pour les liens, soit la méthode `navigate()` du Router pour la navigation programmatique.",
        "keyWords": ["navigation", "Angular", "Router", "routerLink", "navigate()", "programmatique", "template"]
      }, {
        "question": "Qu'est-ce que `routerLink` ?",
        "textResponse": "`routerLink` est une directive Angular utilisée dans les templates pour créer des liens vers des routes définies dans le module de routage, permettant de naviguer sans recharger la page.",
        "keyWords": ["routerLink", "Angular", "directive", "template", "routes", "navigation", "SPA"]
      }, {
        "question": "Quelle est la différence entre `path` et `component` dans la configuration du routeur Angular ?",
        "textResponse": "`path` définit l’URL associée à une route tandis que `component` indique le composant Angular qui sera rendu lorsque cette route est activée.",
        "keyWords": ["path", "component", "route", "Angular", "URL", "composant", "rendu"]
      }, {
        "question": "Comment gérer les paramètres de route dans Angular ?",
        "textResponse": "Les paramètres de route sont accessibles via `ActivatedRoute` dans le composant, permettant de récupérer les paramètres statiques, dynamiques ou de requête et de les utiliser dans la logique du composant.",
        "keyWords": ["paramètres", "route", "Angular", "ActivatedRoute", "statique", "dynamique", "requête", "composant"]
      }, {
        "question": "Qu'est-ce qu'un `pipe` dans Angular ?",
        "textResponse": "Un pipe Angular est une fonction qui transforme les valeurs affichées dans le template, comme la mise en forme de dates, de nombres ou de textes, sans modifier les données sources.",
        "keyWords": ["pipe", "Angular", "transformation", "template", "format", "dates", "nombres", "texte"]
      }, {
        "question": "Comment créer un `pipe` personnalisé ?",
        "textResponse": "Pour créer un pipe personnalisé, on définit une classe TypeScript annotée avec `@Pipe` et qui implémente la méthode `transform()`, puis on l’ajoute dans la section 'declarations' du module Angular.",
        "keyWords": ["pipe", "personnalisé", "Angular", "@Pipe", "transform()", "TypeScript", "module", "declarations"]
      }, {
        "question": "Quelle est la différence entre `async` et `await` dans Angular ?",
        "textResponse": "`async` et `await` sont utilisés avec les Promises pour simplifier la gestion asynchrone : `async` marque une fonction qui retourne une Promise et `await` pause l’exécution jusqu’à ce que la Promise soit résolue.",
        "keyWords": ["async", "await", "Angular", "Promise", "asynchrone", "exécution", "résolution"]
      }, {
        "question": "Qu'est-ce que la gestion de la dépendance dans Angular ?",
        "textResponse": "La gestion de la dépendance (Dependency Injection) dans Angular permet d’injecter automatiquement des services ou des classes dans des composants, directives ou pipes, centralisant la création et le partage des instances.",
        "keyWords": ["dependency injection", "Angular", "services", "composants", "directives", "pipes", "injection", "instances"]
      }, {
        "question": "Qu'est-ce qu'un `ngModel` et comment l'utiliser ?",
        "textResponse": "`ngModel` est une directive Angular qui permet le binding bidirectionnel entre un élément du template et une propriété du composant, utilisée principalement dans les formulaires.",
        "keyWords": ["ngModel", "Angular", "binding bidirectionnel", "template", "propriété", "composant", "formulaires"]
      }, {
        "question": "Qu'est-ce qu'un `template-driven form` ?",
        "textResponse": "Un template-driven form est un formulaire Angular où la structure, la validation et le binding sont définis directement dans le template HTML en utilisant des directives comme `ngModel` et `required`.",
        "keyWords": ["template-driven form", "Angular", "formulaire", "template", "ngModel", "validation", "directives"]
      }, {
        "question": "Comment fonctionne la validation dans Angular ?",
        "textResponse": "La validation dans Angular peut être réalisée avec des validateurs intégrés (comme required, minLength) ou personnalisés, appliqués aux formulaires réactifs ou template-driven pour vérifier la validité des données avant soumission.",
        "keyWords": ["validation", "Angular", "validateurs", "formulaires réactifs", "template-driven", "données"]
      }, {
        "question": "Qu'est-ce qu'un `ngClass` ?",
        "textResponse": "`ngClass` est une directive Angular qui permet d’ajouter ou de supprimer dynamiquement des classes CSS à un élément en fonction de conditions ou d’objets dans le composant.",
        "keyWords": ["ngClass", "Angular", "directive", "classes CSS", "dynamique", "conditions", "composant"]
      }, {
        "question": "Qu'est-ce qu'un `ngStyle` ?",
        "textResponse": "`ngStyle` est une directive Angular qui permet de modifier dynamiquement les styles CSS d’un élément en fonction des propriétés du composant.",
        "keyWords": ["ngStyle", "Angular", "directive", "styles CSS", "dynamique", "composant"]
      }, {
        "question": "Qu'est-ce qu'un `formControl` ?",
        "textResponse": "`formControl` est un objet Angular utilisé dans les formulaires réactifs pour gérer l’état et la valeur d’un champ individuel, permettant la validation et l’interaction programmatique avec le formulaire.",
        "keyWords": ["formControl", "Angular", "formulaires réactifs", "valeur", "état", "validation", "programme"]
      }, {
        "question": "Qu'est-ce que le `Lazy Loading` dans Angular ?",
        "textResponse": "Le Lazy Loading dans Angular est une technique qui consiste à charger des modules uniquement lorsqu’ils sont nécessaires, réduisant le temps de chargement initial et optimisant les performances de l’application.",
        "keyWords": ["Lazy Loading", "Angular", "modules", "chargement différé", "performances", "optimisation"]
      }, {
        "question": "Qu'est-ce qu'un `Service Worker` en Angular ?",
        "textResponse": "Un Service Worker est un script qui s’exécute en arrière-plan dans le navigateur et permet de gérer le cache, les notifications push et le fonctionnement hors-ligne dans les applications Angular PWA.",
        "keyWords": ["Service Worker", "Angular", "script", "cache", "notifications push", "hors-ligne", "PWA"]
      }, {
        "question": "Comment gérez-vous la gestion des erreurs dans Angular ?",
        "textResponse": "La gestion des erreurs dans Angular peut se faire via les blocs try-catch, les opérateurs RxJS comme catchError pour les Observables, et les services globaux pour intercepter et centraliser les erreurs dans l’application.",
        "keyWords": ["gestion des erreurs", "Angular", "try-catch", "RxJS", "catchError", "Observables", "service global"]
      }, {
        "question": "Qu'est-ce que `ngSwitch` ?",
        "textResponse": "`ngSwitch` est une directive structurelle Angular utilisée pour afficher un élément parmi plusieurs options en fonction d’une expression, similaire à un switch-case en JavaScript.",
        "keyWords": ["ngSwitch", "directive structurelle", "Angular", "expression", "switch-case", "affichage conditionnel"]
      }, {
        "question": "Qu'est-ce que l'injection de dépendances dans Angular ?",
        "textResponse": "L’injection de dépendances (Dependency Injection) dans Angular est un mécanisme qui permet de fournir automatiquement des instances de services ou d’objets aux composants, directives et pipes, facilitant la modularité et le test unitaire.",
        "keyWords": ["injection de dépendances", "Angular", "Dependency Injection", "services", "composants", "modularité", "test unitaire"]
      }, {
        "question": "Qu'est-ce qu'un `HttpInterceptor` ?",
        "textResponse": "Un HttpInterceptor est un service Angular qui intercepte toutes les requêtes et réponses HTTP, permettant de modifier les en-têtes, gérer les erreurs globalement ou ajouter des tokens d’authentification.",
        "keyWords": ["HttpInterceptor", "Angular", "requêtes HTTP", "réponses HTTP", "interception", "en-têtes", "authentification", "gestion des erreurs"]
      }, {
        "question": "Quelle est la différence entre `ngOnInit` et `ngAfterViewInit` ?",
        "textResponse": "`ngOnInit` est appelé après l’initialisation des propriétés liées aux entrées du composant, tandis que `ngAfterViewInit` est appelé après que les vues et les composants enfants ont été initialisés, utile pour accéder au DOM ou aux enfants.",
        "keyWords": ["ngOnInit", "ngAfterViewInit", "Angular", "initialisation", "composants enfants", "DOM"]
      }, {
        "question": "Qu'est-ce que `ngOnDestroy` ?",
        "textResponse": "`ngOnDestroy` est un hook du cycle de vie Angular appelé juste avant la destruction d’un composant ou d’une directive, utilisé pour nettoyer les subscriptions, timers ou ressources afin d’éviter les fuites mémoire.",
        "keyWords": ["ngOnDestroy", "Angular", "cycle de vie", "composant", "directive", "subscriptions", "fuites mémoire"]
      }, {
        "question": "Qu'est-ce que la gestion d'état (state management) dans Angular ?",
        "textResponse": "La gestion d’état dans Angular consiste à centraliser et contrôler l’état de l’application pour garantir la cohérence des données, souvent avec des bibliothèques comme NgRx ou Akita.",
        "keyWords": ["gestion d'état", "Angular", "centralisation", "cohérence", "NgRx", "Akita", "application"]
      }, {
        "question": "Qu'est-ce que `ChangeDetectionStrategy.OnPush` ?",
        "textResponse": "`ChangeDetectionStrategy.OnPush` est une stratégie de détection des changements Angular qui ne vérifie un composant que lorsque ses inputs changent, améliorant les performances des applications complexes.",
        "keyWords": ["ChangeDetectionStrategy.OnPush", "Angular", "détection des changements", "inputs", "performances"]
      }, {
        "question": "Qu'est-ce qu'un `ng-content` et comment fonctionne-t-il ?",
        "textResponse": "`ng-content` est une directive Angular utilisée pour insérer du contenu provenant d’un composant parent dans le template d’un composant enfant, facilitant la création de composants réutilisables et flexibles.",
        "keyWords": ["ng-content", "Angular", "directive", "contenu", "composant parent", "composant enfant", "réutilisable"]
      }, {
        "question": "Comment fonctionne le `zone.js` dans Angular ?",
        "textResponse": "Zone.js est une bibliothèque utilisée par Angular pour détecter automatiquement les changements asynchrones (Promesses, événements, timers) et déclencher la détection de changements sans intervention manuelle.",
        "keyWords": ["zone.js", "Angular", "asynchrone", "Promesse", "événements", "timers", "détection de changements"]
      }, {
        "question": "Qu'est-ce qu'un `ng-template` ?",
        "textResponse": "`ng-template` est une balise Angular utilisée pour définir des templates réutilisables ou conditionnels dans le DOM, qui ne sont pas rendus tant qu’ils ne sont pas référencés par une directive comme `ngIf` ou `ngFor`.",
        "keyWords": ["ng-template", "Angular", "template", "réutilisable", "conditionnel", "DOM", "ngIf", "ngFor"]
      }, {
        "question": "Qu'est-ce que le `dependency injection` dans Angular ?",
        "textResponse": "Le dependency injection dans Angular permet de fournir automatiquement des instances de services aux composants, directives et pipes, améliorant la modularité, la testabilité et la gestion centralisée des dépendances.",
        "keyWords": ["dependency injection", "Angular", "services", "composants", "modularité", "testabilité", "dépendances"]
      }, {
        "question": "Qu'est-ce que le concept de `Observables` et comment l'utiliser avec `HttpClient` ?",
        "textResponse": "Les Observables permettent de gérer des flux asynchrones dans Angular. Avec HttpClient, ils sont utilisés pour effectuer des requêtes HTTP et s’abonner aux réponses, offrant des opérateurs pour transformer, filtrer ou combiner les données.",
        "keyWords": ["Observables", "Angular", "HttpClient", "flux asynchrone", "requêtes HTTP", "abonnement", "opérateurs"]
      }, {
        "question": "Qu'est-ce qu'un `Component Lifecycle Hook` ?",
        "textResponse": "Un Component Lifecycle Hook est une méthode spéciale dans un composant Angular qui permet d’exécuter du code à différentes étapes du cycle de vie d’un composant, comme ngOnInit, ngAfterViewInit ou ngOnDestroy.",
        "keyWords": ["Component Lifecycle Hook", "Angular", "composant", "cycle de vie", "ngOnInit", "ngAfterViewInit", "ngOnDestroy"]
      }, {
        "question": "Qu'est-ce qu'un `ngFor` avec index ?",
        "textResponse": "`ngFor` avec index est une directive Angular qui permet d’itérer sur une collection tout en exposant la position actuelle de chaque élément via la variable `index`.",
        "keyWords": ["ngFor", "Angular", "directive", "index", "itération", "collection"]
      }, {
        "question": "Qu'est-ce que le `trackBy` dans une boucle `ngFor` ?",
        "textResponse": "`trackBy` est une option dans `ngFor` qui permet de fournir une fonction pour identifier les éléments uniques d’une collection, optimisant ainsi la détection des changements et la performance lors du rendu.",
        "keyWords": ["trackBy", "ngFor", "Angular", "éléments uniques", "détection des changements", "performance"]
      }, {
        "question": "Qu'est-ce qu'un `ng-container` ?",
        "textResponse": "`ng-container` est une balise Angular qui ne génère pas de DOM propre mais sert de wrapper logique pour appliquer des directives structurelles ou regrouper des éléments dans le template.",
        "keyWords": ["ng-container", "Angular", "template", "wrapper", "directive structurelle", "DOM"]
      }, {
        "question": "Qu'est-ce qu'un `@ViewChild` ?",
        "textResponse": "`@ViewChild` est un décorateur Angular qui permet d’accéder à un élément DOM ou à un composant enfant depuis le composant parent, facilitant l’interaction et la manipulation programmée du template.",
        "keyWords": ["@ViewChild", "Angular", "décorateur", "DOM", "composant enfant", "interaction", "template"]
      },
      {
        "question": "Qu’est-ce que le ChangeDetectionStrategy.OnPush ?",
        "textResponse": "ChangeDetectionStrategy.OnPush optimise la détection de changements dans Angular en ne vérifiant les composants que lorsque leurs inputs changent ou lorsqu’un événement est émis depuis le composant. Cela améliore les performances, réduit le rendu inutile et est particulièrement utile pour les applications complexes.",
        "keyWords": ["ChangeDetectionStrategy.OnPush", "Angular", "performance", "inputs", "détection de changements"]
      },
      {
        "question": "Comment fonctionne la gestion d’état avec NgRx ?",
        "textResponse": "NgRx implémente Redux pour Angular, centralisant l’état de l’application dans un store immuable. Les composants déclenchent des actions, les reducers mettent à jour l’état, et les sélecteurs permettent de récupérer des morceaux de l’état. Les effets (Effects) gèrent les opérations asynchrones et les interactions externes.",
        "keyWords": ["NgRx", "Redux", "store", "actions", "reducers", "selectors", "Effects", "asynchronous"]
      },
      {
        "question": "Quelle est la différence entre Subject, BehaviorSubject, et ReplaySubject dans RxJS ?",
        "textResponse": "Subject est un observable multicast simple. BehaviorSubject émet la dernière valeur à chaque nouvel abonné et nécessite une valeur initiale. ReplaySubject émet un nombre défini de valeurs précédentes à chaque nouvel abonné. Chacun sert à gérer différents cas de partage et de replay des données.",
        "keyWords": ["Subject", "BehaviorSubject", "ReplaySubject", "RxJS", "multicast", "dernier valeur", "replay"]
      },
      {
        "question": "Comment sécuriser une application Angular avec JWT ?",
        "textResponse": "On sécurise Angular avec JWT en stockant le token de manière sécurisée (localStorage ou sessionStorage), en l’incluant dans les headers Authorization via HttpInterceptor, et en validant côté serveur. Le refresh token permet de maintenir la session sans demander les identifiants à chaque fois.",
        "keyWords": ["JWT", "Angular", "HttpInterceptor", "Authorization header", "refresh token", "security"]
      },
      {
        "question": "À quoi sert trackBy dans une boucle *ngFor ?",
        "textResponse": "trackBy permet d’optimiser le rendu des listes en identifiant chaque élément par une clé unique. Angular ne recrée que les éléments qui ont changé, améliorant ainsi les performances et réduisant les manipulations DOM inutiles.",
        "keyWords": ["trackBy", "*ngFor", "performance", "key", "DOM", "Angular"]
      },
      {
        "question": "Qu'est-ce qu’un Observable ?",
        "textResponse": "Un Observable est un objet représentant un flux de données asynchrones qui peut émettre zéro, une ou plusieurs valeurs. Les abonnés (subscribe) reçoivent ces valeurs au fur et à mesure, et les Observables supportent des opérations de transformation et de combinaison via RxJS.",
        "keyWords": ["Observable", "asynchronous", "flux de données", "subscribe", "RxJS"]
      },
      {
        "question": "Différence entre une Promise et un Observable",
        "textResponse": "Une Promise gère une seule valeur asynchrone, tandis qu’un Observable peut émettre plusieurs valeurs dans le temps. Les Observables sont lazy, cancellables et offrent des opérateurs puissants pour transformer et combiner les flux de données.",
        "keyWords": ["Promise", "Observable", "asynchronous", "lazy", "multiple values", "RxJS"]
      },
      {
        "question": "Quelle est la signature de la méthode subscribe() (paramètres et objets renvoyés) ?",
        "textResponse": "subscribe(next?: (value) => void, error?: (err) => void, complete?: () => void) permet de réagir aux émissions d’un Observable. Elle retourne un Subscription qui peut être utilisée pour se désabonner et éviter les fuites mémoire.",
        "keyWords": ["subscribe", "Observable", "next", "error", "complete", "Subscription", "RxJS"]
      },
      {
        "question": "Est-ce que la requête browser est envoyée au serveur si on ne fait pas le subscribe() ?",
        "textResponse": "Non, les Observables sont lazy par défaut. Sans subscribe(), aucun code asynchrone n’est exécuté et aucune requête HTTP via HttpClient n’est envoyée.",
        "keyWords": ["Observable", "lazy", "subscribe", "HttpClient", "Angular"]
      },
      {
        "question": "Différence entre let et var.",
        "textResponse": "var a une portée fonction et est hoisté, tandis que let a une portée bloc et n’est pas hoisté de la même façon. let permet d’éviter les collisions et comportements inattendus liés au scope.",
        "keyWords": ["var", "let", "scope", "hoisting", "block scope", "JavaScript"]
      },
      {
        "question": "Qu’est-ce que le callback ?",
        "textResponse": "Un callback est une fonction passée en paramètre à une autre fonction pour être exécutée après un événement ou une opération asynchrone. Il permet de gérer le flow asynchrone dans JavaScript et Angular.",
        "keyWords": ["callback", "function", "asynchronous", "JavaScript", "Angular"]
      },
      {
        "question": "Qu’est-ce que RxJs ?",
        "textResponse": "RxJS est une librairie pour la programmation réactive en JavaScript/TypeScript. Elle fournit Observables, opérateurs de transformation et de combinaison de flux, permettant de gérer facilement les événements asynchrones et le state management.",
        "keyWords": ["RxJS", "Observable", "reactive programming", "operators", "asynchronous"]
      },
      {
        "question": "Cycle de vie des composants ?",
        "textResponse": "Angular définit des hooks comme ngOnInit, ngOnChanges, ngDoCheck, ngAfterViewInit, ngAfterContentInit, ngOnDestroy pour gérer le cycle de vie des composants, permettant d’initialiser, vérifier et nettoyer les ressources de manière contrôlée.",
        "keyWords": ["Angular", "component lifecycle", "ngOnInit", "ngOnDestroy", "hooks"]
      },
      {
        "question": "Qu’est-ce que le Lazy loading ?",
        "textResponse": "Le Lazy loading charge les modules Angular uniquement lorsque nécessaire, réduisant le bundle initial et améliorant la performance. Il est configuré via le routing avec loadChildren et optimise les applications volumineuses.",
        "keyWords": ["Lazy loading", "Angular", "modules", "loadChildren", "performance"]
      },
      {
        "question": "Qu’est-ce que Redux ?",
        "textResponse": "Redux est un pattern de gestion d’état centralisé avec un store immuable, des actions pour déclencher des changements et des reducers pour appliquer les transformations. NgRx est l’implémentation Angular de Redux.",
        "keyWords": ["Redux", "store", "actions", "reducers", "state management", "NgRx"]
      },
      {
        "question": "Quelles sont les nouveautés importantes d’Angular 18 ?",
        "textResponse": "Angular 18 introduit des améliorations de performance, l’intégration stricte du TypeScript 5, des optimisations du rendu, des composants standalone améliorés, ainsi que des outils améliorés pour le testing et l’optimisation de build.",
        "keyWords": ["Angular 18", "performance", "TypeScript 5", "standalone components", "testing", "build optimization"]
      },
      {
        "question": "Comment gérez-vous l’architecture d’un gros projet Angular ?",
        "textResponse": "Pour un gros projet Angular, on utilise une architecture modulaire avec feature modules, shared modules, lazy loading, services injectables, state management via NgRx ou services singleton, et tests unitaires et e2e pour assurer maintenabilité et scalabilité.",
        "keyWords": ["Angular", "modular architecture", "feature modules", "shared modules", "lazy loading", "NgRx", "scalability"]
      },
      {
        "question": "Comment gérez-vous l’état complexe dans Angular ?",
        "textResponse": "L’état complexe est géré via NgRx ou des services singleton avec BehaviorSubject, combinant sélecteurs, effets et reducers pour assurer un flux unidirectionnel, la synchronisation des composants et la prévisibilité des changements.",
        "keyWords": ["state management", "NgRx", "BehaviorSubject", "selectors", "reducers", "effects", "unidirectional flow"]
      }
    ,
      {
        "question": "Comment testez-vous un composant Angular avec dépendances ?",
        "textResponse": "On utilise TestBed pour configurer le module de test, fournir les dépendances mockées via providers et utiliser async/await ou fakeAsync pour tester les composants avec observables. Les spies permettent de contrôler les appels de méthodes dépendantes.",
        "keyWords": ["TestBed", "Angular testing", "mock", "providers", "async", "fakeAsync", "spy"]
      }
    ]
  },
  {
    "topic": "Agile, Pratiques et Divers",
    "questions": [
      {
        "question": "Est-ce que tu connais Kafka, si oui dans quelles conditions tu l’as utilisé ?",
        "textResponse": "Oui, Kafka pour streaming de données, messaging asynchrone. Utilisé pour logs, événements en microservices. Exemple : producer envoie à topic, consumer traite. Haute disponibilité avec partitions.",
        "keyWords": ["Kafka", "streaming", "topic", "consumer"]
      },
      {
        "question": "Est-ce que tu as fait des développements autour des acteurs dans Kafka ?",
        "textResponse": "Acteurs : producers (envoient messages), consumers (lisent), brokers (stockent). Développé producers avec KafkaTemplate, consumers avec `@KafkaListener`. Gestion offsets pour idempotence.",
        "keyWords": ["producers", "consumers", "brokers", "@KafkaListener"]
      },
      {
        "question": "Est-ce que tu es déjà intervenu sur la gestion des événements dans kafka ?",
        "textResponse": "Oui, gestion événements : schémas Avro pour sérialisation, dead-letter queues pour erreurs. Utiliser Kafka Streams pour traitement. Monitorer lags avec Kafka Manager.",
        "keyWords": ["événements", "Avro", "dead-letter", "Kafka Streams"]
      },
      {
        "question": "Est-ce que tu as déjà fait du peer programming?",
        "textResponse": "Oui, peer programming : coder en paire pour reviews instantanées. Améliore qualité, partage connaissances. Outils : VS Code Live Share. Utile pour complexités ou onboarding.",
        "keyWords": ["peer programming", "reviews", "Live Share"]
      },
      {
        "question": "Est-ce que tu as déjà travaillé en agile et si oui vous appliquiez quel rituel",
        "textResponse": "Oui, Agile avec Scrum : daily stand-ups, sprint planning, reviews, retros. Kanban pour flux continu. Rituals aident collaboration et adaptation.",
        "keyWords": ["Agile", "Scrum", "stand-up", "retrospective"]
      },
      {
        "question": "Est-ce que tu fais de la veille ? Si oui à partir de quel support ?",
        "textResponse": "Oui, veille via Medium, Dev.to, Reddit (r/java), conférences (Devoxx). Suivre releases Angular/Spring. Podcasts comme Syntax.fm. Quotidien pour trends.",
        "keyWords": ["veille", "Medium", "Reddit", "podcasts"]
      },
      {
        "question": "Est que tu es sensibilisé à la sécurité ?",
        "textResponse": "Oui, sensibilisé : OWASP top 10, sécuriser APIs (JWT), scans vulnérabilités (SonarQube), HTTPS. Former équipe sur SQL injection, XSS.",
        "keyWords": ["sécurité", "OWASP", "JWT", "XSS"]
      },
      {
        "question": "Est-ce que le problème du log4J te dit quelque chose ?",
        "textResponse": "Oui, vulnérabilité CVE-2021-44228 : injection JNDI via logs. Mise à jour vers Log4j 2.17+. Alternatives : Logback. Scanner dépendances pour patches.",
        "keyWords": ["log4j", "CVE-2021-44228", "JNDI", "Logback"]
      },
      {
        "question": "Parler des réunions Scrum",
        "textResponse": "Réunions Scrum : Daily (15min, quoi fait/à faire/blockers), Planning (plan sprint), Review (démo), Retrospective (améliorations). Favorisent transparence et adaptation.",
        "keyWords": ["Scrum", "daily", "planning", "review", "retrospective"]
      },
      {
        "question": "Quoi faire avant d'intégrer libraire open source",
        "textResponse": "Vérifier licence (MIT/Apache), activité repo (commits, issues), vulnérabilités (Snyk), dépendances. Tester POC. Évaluer alternatives. Documenter choix.",
        "keyWords": ["open source", "licence", "vulnérabilités", "POC"]
      },
      {
        "question": "Les bons pratiques que tu as mis pour l'équipe",
        "textResponse": "Code reviews obligatoires, TDD, commits atomiques, documentation (Javadoc), CI/CD automatisé. Pair programming pour juniors. Standards coding (linting).",
        "keyWords": ["code reviews", "TDD", "CI/CD", "pair programming"]
      },
      {
        "question": "Quoi dire / faire pour un junior qui commit avec trop de bug",
        "textResponse": "Discuter calmement, expliquer impact. Proposer pair programming, reviews avant commit. Encourager TDD. Fournir ressources pour bonnes pratiques.",
        "keyWords": ["junior", "bugs", "pair programming", "TDD"]
      },
      {
        "question": "Les étapes pour résoudre la consommation énorme de mémoire dans une applications",
        "textResponse": "1) Monitorer (VisualVM). 2) Analyser heap dumps (MAT). 3) Identifier fuites (collections non vidées). 4) Optimiser code. 5) Augmenter heap si besoin. 6) Retester.",
        "keyWords": ["mémoire", "VisualVM", "heap dumps", "fuites"]
      },
      {
        "question": "Est-ce que les Dev que tu as fais du backlog ou des POC",
        "textResponse": "Oui, raffinement backlog pour user stories. POC pour valider tech (ex. nouveau lib). Implique équipe pour priorisation.",
        "keyWords": ["backlog", "POC", "user stories"]
      },
      {
        "question": "Mise en situation : ils veulent pousser une fonctionnalité dans le développement alors que tu sens qu’il y a des raccourcis et que ça sera mal développé parce que ça prend du temps, qu'est ce que tu recommandes ? Et comment tu vas vas gérer la situation ?",
        "textResponse": "Recommander POC pour valider risques. Discuter en meeting impacts (dette tech). Proposer plan incrémental. Gérer : communiquer faits, suggérer compromis, escalader si besoin.",
        "keyWords": ["situation", "POC", "dette tech", "incrémental"]
      }
    ]
  },
  {
    "topic": "Spring Batch",
    "questions": [
      {
        "question": "Est-ce que tu as déjà utilisé Spring Batch ? Si oui dans quel contexte et qu’est-ce que tu peux m’en dire ?",
        "textResponse": "Oui, pour traitement par lots (ETL, imports CSV). Contexte : migration données volumineuses. Spring Batch gère jobs, steps, readers/writers/processors. Robuste pour restarts.",
        "keyWords": ["Spring Batch", "ETL", "jobs", "steps"]
      },
      {
        "question": "Comment on crée un batch avec Spring Batch ?",
        "textResponse": "Configurer `@EnableBatchProcessing`. Définir Job avec JobBuilderFactory, Step avec StepBuilderFactory (reader, processor, writer). Exemple : `Job job = jobBuilderFactory.get('job').start(step).build()`.",
        "keyWords": ["@EnableBatchProcessing", "Job", "Step", "reader"]
      },
      {
        "question": "Est-ce que tu as déjà manipulé des batch avec de la volumétrie ?",
        "textResponse": "Oui, pour millions d’enregistrements. Utiliser chunk-oriented processing, partitioning pour parallélisme. Optimiser DB (batch inserts). Monitorer avec JobExplorer.",
        "keyWords": ["volumétrie", "chunk", "partitioning", "JobExplorer"]
      },
      {
        "question": "Quelle est l’architecture de Spring Batch ?",
        "textResponse": "Composants : Job (séquence steps), Step (reader/processor/writer), JobRepository (métadonnées), JobLauncher (exécute jobs). Scalable avec remote partitioning.",
        "keyWords": ["Job", "Step", "JobRepository", "JobLauncher"]
      },
      {
        "question": "Expliquer un cas d’usage où Spring Batch est préférable à un service REST ?",
        "textResponse": "Pour imports CSV volumineux (ex. 1M lignes) : Batch traite par lots, restarts possibles, tolérant fautes. REST pour requêtes interactives, pas pour batch long.",
        "keyWords": ["batch", "volumineux", "restarts", "tolérance"]
      },
      {
        "question": "Comment relancer un job Spring Batch en cas d’échec partiel ?",
        "textResponse": "Utiliser JobOperator pour restart : `jobOperator.restart(jobExecutionId)`. Configurer skip/retry policies dans step. JobRepository stocke état pour restarts.",
        "keyWords": ["restart", "JobOperator", "skip", "retry"]
      }
    ]
  }
];




