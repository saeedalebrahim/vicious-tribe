(function () {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);
  
    var scrollBarWidth = div.offsetWidth - div.clientWidth;
  
    document.body.removeChild(div);
  
    var style = document.createElement('style');
    document.querySelector('head').appendChild(style);
  
    var selector = '.panel-content';
    var rule = `padding-right: ${scrollBarWidth}px`;
  
    if (style.sheet) {
      if (style.sheet.insertRule) style.sheet.insertRule(`${selector} {${rule}}`, 0);
      else style.sheet.addRule(selector, rule);
    }
    else if (style.styleSheet) style.styleSheet.addRule(selector, rule);
  })();
  
  function panel(html) {
    var panelNode = document.createElement('div');
    var panelCutoutNode = document.createElement('div');
    var panelContentNode = document.createElement('div');
      
    panelNode.classList.add('panel-node');
    
    panelCutoutNode.classList.add('panel-cutout');
    
    panelContentNode.innerHTML = html;
    panelContentNode.classList.add('panel-content');
    
    panelCutoutNode.appendChild(panelContentNode);
    panelNode.appendChild(panelCutoutNode);
    
    return panelNode;
  }
  
  function syncPanelContent(tops, bottoms, scrollTop, containerHeight, panelHeight) {
    for (var i = 0; i < tops.length; i++) {
      var t = tops[i];
      var b = bottoms[i];
      var tTop = (i + 1) * panelHeight - scrollTop;
      var bTop = -i * panelHeight - scrollTop - containerHeight;
      t.style.transform = `translate3d(0,${tTop}px,0)`;
      b.style.transform = `translate3d(0,${bTop}px,0)`;
    }
  }
  
  function transYrotX(y,x) {
    return `translate3d(0,${y}px,0) rotateX(${x}rad)`;
  }
  
  function createScrollOverlay(el, panelHeight, num, angle) {
    var tops = [];
    var bottoms = [];
  
    var topParent = el.parentNode;
    var bottomParent = el.parentNode;
  
    var html = el.innerHTML;
    
    var totalTheta = 0;
    
    for (var i = 0; i < num; i++) {
      var topPanel = panel(html);
      var bottomPanel = panel(html);
  
      topPanel.style.height = `${panelHeight}px`;
      bottomPanel.style.height = `${panelHeight}px`;
      topPanel.style.transformOrigin = '50% 100% 0';
      bottomPanel.style.transformOrigin = '50% 0% 0';
      
      var topPanelContent = topPanel.querySelector('.panel-content');
      var bottomPanelContent = bottomPanel.querySelector('.panel-content');
  
      if (i === 0) {
        topPanel.style.transform = transYrotX(-panelHeight, 0);
        bottomPanel.style.top = '100%';
        bottomPanel.style.transform = transYrotX(0, 0);
      }
      else {
        topPanel.style.transform = transYrotX(-panelHeight + 0.25, angle);
        bottomPanel.style.transform = transYrotX(panelHeight - 0.25, angle);
  
        totalTheta += angle;
        totalTheta %= 2 * Math.PI;
        if (Math.PI * (1 / 2) < totalTheta && totalTheta < Math.PI * (3 / 2)) {
          topPanelContent.classList.add('backface');
          bottomPanelContent.classList.add('backface');
        }
      }
  
      angle += 0.025;
  
      tops.push(topPanelContent);
      bottoms.push(bottomPanelContent);
  
      topParent.appendChild(topPanel);
      bottomParent.appendChild(bottomPanel);
  
      topParent = topPanel;
      bottomParent = bottomPanel;
    }
  
    syncPanelContent(tops, bottoms, 0, container.clientHeight, panelHeight);
  let counting = 1;
    function update() {
      var scrollTop = el.scrollTop;
      var containerHeight = container.clientHeight;
      requestAnimationFrame(function() {
        syncPanelContent(tops, bottoms, scrollTop, containerHeight, panelHeight);
      });
      console.log("hey");
      jQuery.noConflict()(function ($) {
        if (counting==1) {
        $("#ch-sc").attr("src","../../assets/tomb/1.png");
        }else if (counting == 2) {
          $("#ch-sc").attr("src","../../assets/tomb/2.png");
        }else if (counting == 3) {
          $("#ch-sc").attr("src","../../assets/tomb/3.png");
        }else if (counting == 4) {
          $("#ch-sc").attr("src","../../assets/tomb/4.png");
        }else if (counting == 5) {
          $("#ch-sc").attr("src","../../assets/tomb/5.png");
        }else if (counting == 6) {
          $("#ch-sc").attr("src","../../assets/tomb/6.png");
        }else if (counting == 7) {
          $("#ch-sc").attr("src","../../assets/tomb/7.png");
        }else if (counting == 8) {
          $("#ch-sc").attr("src","../../assets/tomb/8.png");
        }
        });
        counting++
        if (counting==9) {
          counting=1
        }

    }
  
    el.onscroll = update;
    window.onresize = update;
    
    // setInterval(function() {el.scrollTop++}, 32)
  }
  
  var theta = 0.3;
  var num = 20;
  if (/iPhone|Android/.test(navigator.userAgent)) {
    theta = 0.45;
    num = 10;
  }
  
  var $ = document.querySelector.bind(document);
  createScrollOverlay($('#content'), 20, num, theta);
  

//   // cursor
//   document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
//     t.style.left = n.clientX + "px", 
// t.style.top = n.clientY + "px", 
// e.style.left = n.clientX + "px", 
// e.style.top = n.clientY + "px", 
// i.style.left = n.clientX + "px", 
// i.style.top = n.clientY + "px"
// });
// var t = document.getElementById("cursor"),
//     e = document.getElementById("cursor2"),
//     i = document.getElementById("cursor3");
// function n(t) {
//     e.classList.add("hover"), i.classList.add("hover")
// }
// function s(t) {
//     e.classList.remove("hover"), i.classList.remove("hover")
// }
// s();
// for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
//     o(r[a])
// }
// function o(t) {
//     t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
// }              
     