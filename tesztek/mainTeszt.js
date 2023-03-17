QUnit.module('leptetes metodus tesztelese', function() {
    QUnit.test('1. letezik e a fuggveny', function(assert) {
        assert.ok(leptetes, "Létezik a leptetes");
    });
    QUnit.test('2. letezik e a fuggveny', function(assert) {
        assert.ok(typeof leptetes == "function", "Létezik a leptetes");
    });

    QUnit.test('3. leptetes(1, 2)', function(assert) {
      assert.equal(leptetes(1, 2), 3);
    });
    QUnit.test('4. leptetes(1, 0)', function(assert) {
        assert.equal(leptetes(1, 0), 1);
    });
    QUnit.test('5. leptetes(1, hossz-1)', function(assert) {
      assert.equal(leptetes(1, lista.length-1), 0);
    });
    QUnit.test('6. leptetes(-1, 2)', function(assert) {
      assert.equal(leptetes(-1, 2), 1);
    });
    QUnit.test('7. leptetes(-1, 0)', function(assert) {
      assert.equal(leptetes(-1, 0), lista.length-1);
    });
    QUnit.test('8. leptetes(-1, hossz-1)', function(assert) {
      assert.equal(leptetes(-1, lista.length-1), lista.length-2);
    });
});

QUnit.module('feltolt metodus tesztelese', function() {
    QUnit.test('1. letezik e a fuggveny', function(assert) {
        assert.ok(feltolt, "Létezik a feltolt");
    });
    QUnit.test('2. letezik e a fuggveny', function(assert) {
        assert.ok(typeof feltolt == "function", "Létezik a feltolt");
    });
    QUnit.test('teljes lista', function(assert) {
        lista = [
            "kepek/alszik.jpg",
            "kepek/bocsok.jpg",
            "kepek/cirkusz.jpg",
            "kepek/eszik.jpg",
            "kepek/integet.jpg",
            "kepek/maci.jpg",
            "kepek/medve.jpg",
            "kepek/taj.jpg",
          ];
        assert.equal(feltolt(lista), "<div><img src=\"kepek/alszik.jpg\" alt=\"\"></div><div><img src=\"kepek/bocsok.jpg\" alt=\"\"></div><div><img src=\"kepek/cirkusz.jpg\" alt=\"\"></div><div><img src=\"kepek/eszik.jpg\" alt=\"\"></div><div><img src=\"kepek/integet.jpg\" alt=\"\"></div><div><img src=\"kepek/maci.jpg\" alt=\"\"></div><div><img src=\"kepek/medve.jpg\" alt=\"\"></div><div><img src=\"kepek/taj.jpg\" alt=\"\"></div>");
    });
    QUnit.test('egy van benne', function(assert) {
        lista = [
            "kepek/alszik.jpg",
        ];
        assert.equal(feltolt(lista), "<div><img src=\"kepek/alszik.jpg\" alt=\"\"></div>");
    });
    QUnit.test('üres lista', function(assert) {
        lista = [
            
          ];
        assert.equal(feltolt(lista), "");
    });
});

QUnit.module('feltolt metodus tesztelese', function() {
    QUnit.test('teljes lista', function(assert) {
        lista = [
            "kepek/alszik.jpg",
            "kepek/bocsok.jpg",
            "kepek/cirkusz.jpg",
            "kepek/eszik.jpg",
            "kepek/integet.jpg",
            "kepek/maci.jpg",
            "kepek/medve.jpg",
            "kepek/taj.jpg",
          ];
        assert.equal(document.querySelectorAll("article img").length, lista.length);
    });
});