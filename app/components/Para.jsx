import React from 'react'
import Paragraph from './Paragraph'
const Para = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-20">
      <Paragraph name="Pistol203" price="102$" imageUrl="/pistol.jpg"  heading={"GUN"} content={"These devices use the energy of an explosive charge to propel a projectile, such as a bullet, through a barrel with the intent of hitting a target accurately."}/>
      <Paragraph name="Riffle134203" price="1102$" imageUrl={"/riffle.jpg"} heading={"RIFFLE"} content={"This rifling imparts a spin to the projectile (usually a bullet) as it travels down the barrel, enhancing stability and accuracy over long distances. Rifles are versatile weapons, commonly used for hunting, target shooting, military applications, and law enforcement."}/>
      <Paragraph name="Short1122" price="809$" imageUrl={"/shortgun.jpg"} heading={"SHORTGUN"} content={"Shotguns are known for their versatility, being effective in various roles such as hunting, sport shooting, home defense, and law enforcement. The wide dispersion pattern of shot makes shotguns particularly suited for close-range shooting and hunting small game or birds."}/>
      <Paragraph name="Snipper10101" price="2011$" imageUrl={"/sinpper.jpg"} heading={"SNIPPER"} content={"They are trained to operate covertly, blending into their surroundings to remain undetected while patiently awaiting the opportune moment to take a shot. "}/>
      <Paragraph name="JSX0220" price="54$" imageUrl={"/bulletproofvest.jpg"} heading={"BULLET PROOF VEST"} content={"These vests are commonly made from layers of strong synthetic fibers such as Kevlar, Dyneema, or Spectra, which are woven together to form a flexible yet highly resistant barrier. Some vests also incorporate ceramic or metal plates for added protection against high-velocity rounds."}/>
      
    </div>
  )
}

export default Para
