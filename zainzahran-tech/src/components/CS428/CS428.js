import React from "react";

// Expansion
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class CS428 extends React.Component {
    render() {
        return (
            <div className='CS428'>
                <h1>Zain Zahran</h1>
                <h1>Virtual and Augmented Reality</h1>
                {/*HW 1*/}
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h3>Homework 1</h3>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div>
                            <p>When I first heard about VR (Virtual Reality) and AR (Augmented Reality), I thought they were the same thing. It turns out there are some key differences that are important to how we can extract the advantages and disadvantages of these platforms. One could say that AR is real life painted with VR on top of it. In other words, think real life mixed with a virtual twist to accommodate our reality. VR to put it simply, is just the virtual environment without the reality aspect.</p>
                            <p>Now I will outline what I think are the biggest advantages of VR</p>
                            <p><strong>Development and Design</strong></p>
                            <p>Easy to design things you want to build. Useful for architects and engineers. This can be done with a game engine such as Unreal Engine or Unity. One example of this would be using VR to prototype a new product. Take Uber&rsquo;s new flying campaign of creating a flying car [or flying taxi]. Perhaps they could create a VR scenario of someone experiencing the journey or ride.</p>
                            <p>VR will ultimately allow you to design better since it&rsquo;s more realistic to our world. Ie. if I were to design a building or campus, a VR simulation/model would allow me to catch flaws.</p>
                            <p><strong>Interactive/Immersive</strong></p>
                            <p>With VR, people can be placed in custom scenarios or environments without them needing to be there in &lsquo;reality&rsquo;. A common example is using VR for combat training for soldiers. Soldiers could be placed in made-up scenarios to help with tactics or training. I strongly believe that VR could play a big role in the future of education.</p>
                            <p><strong>Entertainment</strong></p>
                            <p>VR is a totally new experience! Us humans love new things. Having VR is a toy will probably be an advantage to break away from real life when someone is feeling stressed out. You can travel all across the world at the comfort of your own headset.</p>
                            <p>Here are some disadvantages to VR: <strong>Psychological</strong> (i.e. motion sickness) &amp; <strong>Accidents</strong> (ex: punching someone or breaking your $10k vase)</p>
                            <p>Moving on to AR. Mainly, AR could be the everyday application in the future. I think that AR has the potential to do more, but when looking at the market, VR is much more popular.</p>
                            <p>The main advantage with AR is that it can assist people with tasks <strong>&ldquo;on-the-fly&rdquo;</strong>. For example, if you need to calculate something- the AR could immediately have the number on standby. Or, it could warn you about any potential threats when walking at night. The possibilities are really endless in how it could improve our lives as humans&mdash;for better or for worse. These are the sorts of things I think of for how AR could be the better contender over VR.</p>
                            <p>The problem with AR is that it&rsquo;s an <strong>unsolved problem</strong> thus far, that is, combining VR with our reality is complicated. The main disadvantage with AR right now is that it still has a long way to go before it can be practical and useful to incorporate in our lives right now.</p>
                            <p>I am sure there&rsquo;s going to be a switch or toggle on future headsets to switch between AR and VR.</p>
                            <p>Until then, they are both excellent platforms. The potential to how they will impact us is unfathomable, so only time will tell how the advantages and disadvantages turn out to be.</p>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    };
}

export default CS428;
